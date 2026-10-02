import { useGame } from "../../store/GameProvider";

export function ConfigView() {
  const { draftCount, setDraftCount, adjustDraft, setView } = useGame();
  const count = Number(draftCount);
  const valid = Number.isInteger(count) && count >= 1 && count <= 40;

  return (
    <section className="screen config-screen">
      <header className="topbar">
        <button type="button" className="btn btn-ghost" onClick={() => setView("start")}>Volver al inicio</button>
      </header>
      <form
        className="panel"
        onSubmit={(event) => {
          event.preventDefault();
          if (valid) setView("instructions");
        }}
      >
        <h2>¿Cuántos niños y niñas participarán hoy?</h2>
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
        {!valid ? <p className="inline-note" role="status">Ingresa un número entre 1 y 40.</p> : <p className="inline-note">Entre 1 y 40.</p>}
        <button type="submit" className="btn btn-primary" disabled={!valid}>Comenzar el sendero</button>
      </form>
    </section>
  );
}
