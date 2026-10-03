import { useGame } from "../../store/GameProvider";

export function InstructionsView({ onClose }: { onClose?: () => void }) {
  const { setView } = useGame();
  return (
    <section className={onClose ? "modal-card" : "screen config-screen"}>
      <div className="panel">
        <h2>Cómo jugar</h2>
        <ol className="help-list">
          <li>Toca a Milo en el claro y descubre qué actividad haremos.</li>
          <li>🧡 Acción: hacemos algo real. 🟠 Actuar: representamos una escena. 🔵 Responder: pensamos juntos.</li>
          <li>Cada vez que lo logramos, Milo avanza por el sendero.</li>
        </ol>
        <div className="button-row">
          <button type="button" className="btn btn-primary" onClick={() => { if (onClose) onClose(); else setView("config"); }}>Volver a la preparación</button>
        </div>
      </div>
    </section>
  );
}
