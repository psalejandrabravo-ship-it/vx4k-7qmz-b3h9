import { useEffect, useState } from "react";
import { BrandLogo } from "../BrandLogo";
import { FullscreenButton } from "../FullscreenButton";
import { Illustration } from "../Illustration";
import { Die } from "../game/Die";
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

  const category = game.activeCard ? categoryMeta[game.activeCard.category] : null;

  return (
    <section className="screen board-screen">
      <header className="topbar">
        <div className="logo-plate"><BrandLogo /></div>
        <div className="top-actions">
          <FullscreenButton />
          <button type="button" className="btn btn-ghost light" onClick={() => setMenu(true)} aria-label="Menú">Menú</button>
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
            <div className="circle-frame">
              {game.activeCard ? (
                <Illustration src={game.activeCard.image} fallback={game.activeCard.fallback} alt={game.activeCard.alt} />
              ) : (
                <Illustration src="/assets/illustrations/guide/milo-espera.png" alt="Milo espera en el bosque, con un gesto de bienvenida" />
              )}
            </div>
            <div className="text-card">
              {category ? <p className="category-label">{category.label}. {category.hint}</p> : null}
              <p>{game.activeCard ? game.activeCard.text : "Lanza el dado y descubre qué actividad haremos."}</p>
            </div>
            <div className="control-row">
              <button type="button" className="btn btn-primary logrado" disabled={!game.activeCard} onClick={game.confirm}>Logrado</button>
              <Die category={game.dieCategory} rolling={game.rolling} onRoll={game.roll} />
            </div>
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
