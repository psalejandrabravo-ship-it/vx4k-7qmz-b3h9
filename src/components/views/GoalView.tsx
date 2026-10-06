import { useEffect, useRef, useState } from "react";
import { useGame } from "../../store/GameProvider";

export function GoalView() {
  const { playAgain, setView } = useGame();
  const [closingFailed, setClosingFailed] = useState(false);
  const [miloFailed, setMiloFailed] = useState(false);
  const [activity, setActivity] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activity) return;
    const node = sheetRef.current;
    if (!node?.requestFullscreen) return;
    node.requestFullscreen().catch(() => undefined);
  }, [activity]);

  async function closeActivity() {
    if (document.fullscreenElement) await document.exitFullscreen();
    setActivity(false);
  }

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
        <button type="button" className="activity-link" onClick={() => setActivity(true)}>Ver actividad</button>
      </div>
      {activity ? (
        <div className="activity-sheet" ref={sheetRef} role="dialog" aria-modal="true" aria-label="Actividad para colorear">
          <img src="/assets/activity/actividad.png" alt="Lámina para colorear: Empatía, acciones que cuidan" />
          <button type="button" className="btn fullscreen-quiet" onClick={() => void closeActivity()}>Cerrar</button>
        </div>
      ) : null}
    </section>
  );
}
