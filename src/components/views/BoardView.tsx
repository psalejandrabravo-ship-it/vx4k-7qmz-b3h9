import { useEffect, useState } from "react";
import { BrandLogo } from "../BrandLogo";
import { FullscreenButton } from "../FullscreenButton";
import { Illustration } from "../Illustration";
import { Path } from "../game/Path";
import { ConfirmDialog } from "../modals/ConfirmDialog";
import { InstructionsView } from "./InstructionsView";
import { categoryMeta } from "../../data/cards";
import { useGame } from "../../store/GameProvider";

export function BoardView() {
  const game = useGame();
  const [menu, setMenu] = useState(false);
  const [help, setHelp] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [confirmPrefs, setConfirmPrefs] = useState(false);
  const [forestFailed, setForestFailed] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === " " && !game.activeCard) {
        event.preventDefault();
        game.roll();
      }
      if (event.key === "Enter" && game.activeCard) {
        event.preventDefault();
        game.confirm();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [game]);

  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    if (!game.rolling) return;
    const timer = window.setInterval(() => setPulse((value) => value + 1), 160);
    return () => window.clearInterval(timer);
  }, [game.rolling]);
  const cycle = ["#E07A5F", "#E6B84C", "#2B2155"];
  const settledColor = game.rolling && pulse > 4 && game.dieCategory ? categoryMeta[game.dieCategory].color : undefined;
  const fill = settledColor ?? (game.rolling ? cycle[pulse % cycle.length] : undefined);
  const category = game.activeCard ? categoryMeta[game.activeCard.category] : null;

  return (
    <section className="screen board-screen">
      <header className="topbar board-chrome">
        <div className="logo-plate"><BrandLogo /></div>
        <div className="top-actions">
          <FullscreenButton />
          <button type="button" className="btn btn-ghost" onClick={() => setMenu(true)} aria-label="Menú">Menú</button>
        </div>
      </header>
      <div className="board-body">
        <div className="board-frame">
          {forestFailed ? (
            <p className="image-fallback" role="status">No pudimos cargar el bosque. El sendero sigue disponible.</p>
          ) : (
            <img className="board-bg" src="/assets/illustrations/board/bosque.jpg" alt="Claro del bosque con el sendero en herradura" onError={() => setForestFailed(true)} />
          )}
          <Path total={game.participantCount} steps={game.steps} />
          <div className="center-stage">
            <button
              type="button"
              className={`circle-frame ${game.rolling ? "is-cycling" : ""}`}
              style={{ background: fill }}
              onClick={game.roll}
              disabled={Boolean(game.activeCard) || game.rolling}
              aria-label={game.activeCard ? "Situación en curso" : "Toca a Milo para descubrir la situación"}
            >
              {game.rolling ? null : game.activeCard ? (
                <Illustration src={game.activeCard.image} fallback={game.activeCard.fallback} alt={game.activeCard.alt} />
              ) : (
                <Illustration src="/assets/illustrations/guide/milo-espera.png" alt="Milo espera en el bosque, con un gesto de bienvenida" />
              )}
            </button>
            <div className="text-card" style={category ? { background: category.color, color: category.color === "#2B2155" ? "#F7F1E6" : "#1E1830" } : undefined}>
              {category ? <p className="category-label">{category.label}</p> : null}
              <p>{game.activeCard ? game.activeCard.text : "Toca a Milo y descubre qué actividad haremos."}</p>
            </div>
            <button type="button" className="btn btn-primary logrado" disabled={!game.activeCard} onClick={game.confirm}>Logrado</button>
          </div>
        </div>
      </div>
      <p className="live" aria-live="polite">{game.notice}</p>
      {game.storageNote ? <p className="storage-note" role="status">{game.storageNote}</p> : null}

      {menu ? (
        <div className="overlay" role="dialog" aria-modal="true" aria-label="Menú">
          <div className="panel">
            <h2>Menú</h2>
            <div className="button-row column">
              <button type="button" className="btn btn-outline" onClick={() => { setMenu(false); setHelp(true); }}>Ayuda</button>
              <button type="button" className="btn btn-outline" onClick={game.toggleSound}>
                {game.soundEnabled ? "Sonido activado" : "Sonido silenciado"}
              </button>
              <FullscreenButton />
              <button type="button" className="btn btn-outline" onClick={() => { setMenu(false); setConfirmReset(true); }}>Reiniciar partida</button>
              <button type="button" className="btn btn-outline" onClick={() => { setMenu(false); setConfirmPrefs(true); }}>Restablecer preferencias</button>
              <button type="button" className="btn btn-outline" onClick={() => game.setView("config")}>Volver a la preparación</button>
              <button type="button" className="btn btn-primary" onClick={() => setMenu(false)}>Cerrar</button>
            </div>
          </div>
        </div>
      ) : null}
      {help ? (
        <div className="overlay">
          <InstructionsView onClose={() => setHelp(false)} />
        </div>
      ) : null}
      {confirmReset ? (
        <ConfirmDialog
          message="¿Quieres reiniciar la actividad? Se perderá el avance actual."
          confirmLabel="Reiniciar"
          onCancel={() => setConfirmReset(false)}
          onConfirm={() => { setConfirmReset(false); game.restart(); }}
        />
      ) : null}
      {confirmPrefs ? (
        <ConfirmDialog
          message="¿Quieres restablecer la cantidad recordada y el sonido?"
          confirmLabel="Restablecer"
          onCancel={() => setConfirmPrefs(false)}
          onConfirm={() => { setConfirmPrefs(false); game.resetPreferences(); }}
        />
      ) : null}
    </section>
  );
}
