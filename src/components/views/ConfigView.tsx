import { FullscreenButton } from "../FullscreenButton";
import { useGame } from "../../store/GameProvider";

export function ConfigView() {
  const { draftCount, setDraftCount, adjustDraft, setView } = useGame();
  const count = Number(draftCount);
  const valid = Number.isInteger(count) && count >= 1 && count <= 40;

  return (
    <section className="screen config-screen">
      <header className="topbar">
        <FullscreenButton />
      </header>
      <form
        className="panel"
        onSubmit={(event) => {
          event.preventDefault();
          if (valid) setView("start");
        }}
      >
        <h2>Preparación</h2>
        <p>Indica cuántos niños y niñas participarán hoy.</p>
        <div className="stepper">
          <button type="button" className="btn btn-outline" onClick={() => adjustDraft(-1)} aria-label="Menos participantes">−</button>
          <input
            inputMode="numeric"
            aria-label="Cantidad de participantes"
            value={draftCount}
            onChange={(event) => setDraftCount(event.target.value.replace(/[^\d]/g, "").slice(0, 2))}
          />
          <button type="button" className="btn btn-outline" onClick={() => adjustDraft(1)} aria-label="Más participantes">+</button>
        </div>
        {!valid ? <p className="inline-note" role="status">Ingresa un número entre 1 y 40.</p> : <p className="inline-note">Entre 1 y 40. El último paso queda en la llegada.</p>}
        <div className="button-row">
          <button type="button" className="btn btn-outline" onClick={() => setView("instructions")}>Instrucciones</button>
          <button type="submit" className="btn btn-primary" disabled={!valid}>Todo listo</button>
        </div>
      </form>
    </section>
  );
}
