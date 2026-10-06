import { useState } from "react";
import { useGame } from "../../store/GameProvider";

const activityHref = "/assets/activity/actividad.pdf";

export function GoalView() {
  const { playAgain, setView } = useGame();
  const [closingFailed, setClosingFailed] = useState(false);
  const [miloFailed, setMiloFailed] = useState(false);
  return (
    <section className="screen goal-screen">
      {closingFailed ? null : (
        <img className="screen-bg" src="/assets/illustrations/closing/meta.webp" alt="" onError={() => setClosingFailed(true)} />
      )}
      <div className="goal-copy">
        {miloFailed ? (
          <p className="image-fallback" role="status">No pudimos cargar la imagen de Milo. Puedes continuar.</p>
        ) : (
          <img className="milo-celebra" src="/assets/illustrations/guide/milo-celebra.png" alt="Milo celebra con los brazos levantados" onError={() => setMiloFailed(true)} />
        )}
        <h1>¡Lo logramos!</h1>
        <p>Miramos, comprendimos y ahora cuidamos. Juntos construimos un sendero de amistad. 💛</p>
        <div className="button-row">
          <button type="button" className="btn btn-outline light" onClick={playAgain}>Jugar de nuevo</button>
          <button type="button" className="btn btn-ghost light" onClick={() => setView("start")}>Volver al inicio</button>
        </div>
        <a className="activity-link" href={activityHref} target="_blank" rel="noreferrer">Ver actividad</a>
      </div>
    </section>
  );
}
