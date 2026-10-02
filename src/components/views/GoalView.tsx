import { useState } from "react";
import { DRIVE_FILE_ID } from "../../data/config";
import { VideoModal } from "../modals/VideoModal";
import { useGame } from "../../store/GameProvider";

export function GoalView() {
  const { playAgain, setView } = useGame();
  const [video, setVideo] = useState(false);
  return (
    <section className="screen goal-screen">
      <img className="screen-bg" src="/assets/illustrations/closing/meta.webp" alt="Claro del bosque con Milo celebrando el sendero recorrido" onError={(event) => { event.currentTarget.src = "/assets/illustrations/closing/meta.png"; }} />
      <div className="goal-copy">
        <h1>¡Lo logramos!</h1>
        <p>Miramos, comprendimos y ahora cuidamos. Juntos construimos un sendero de amistad. 💛</p>
        <div className="button-row">
          {DRIVE_FILE_ID ? (
            <button type="button" className="btn btn-primary" onClick={() => setVideo(true)}>Ver video de cierre</button>
          ) : null}
          <button type="button" className="btn btn-outline light" onClick={playAgain}>Jugar de nuevo</button>
          <button type="button" className="btn btn-ghost light" onClick={() => setView("start")}>Volver al inicio</button>
        </div>
      </div>
      {video ? <VideoModal onClose={() => setVideo(false)} /> : null}
    </section>
  );
}
