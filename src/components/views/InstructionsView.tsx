import { useGame } from "../../store/GameProvider";

export function InstructionsView({ onClose }: { onClose?: () => void }) {
  const { setView, view, beginPath } = useGame();
  return (
    <section className={onClose ? "modal-card" : "screen config-screen"}>
      <div className="panel">
        <h2>Cómo jugar</h2>
        <ol className="help-list">
          <li>Lanza el dado y descubre qué actividad haremos.</li>
          <li>🧡 Acción: hacemos algo real. 🟠 Actuar: representamos una escena. 🔵 Responder: pensamos juntos.</li>
          <li>Cada vez que lo logramos, Milo avanza por el sendero.</li>
        </ol>
        <div className="button-row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
            if (onClose) onClose();
            else if (view === "instructions") beginPath();
            else setView("config");
          }}
          >
            Entendido, ¡vamos!
          </button>
          {!onClose ? (
            <button type="button" className="btn btn-outline" onClick={beginPath}>Omitir</button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
