import { useEffect, useRef, useState } from "react";

export function ClosingVideo({ onDone }: { onDone: () => void }) {
  const stageRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsTap, setNeedsTap] = useState(false);
  const [failed, setFailed] = useState(false);

  async function play() {
    const video = videoRef.current;
    const stage = stageRef.current;
    if (!video) return;
    try {
      await video.play();
      if (stage?.requestFullscreen && !document.fullscreenElement) {
        await stage.requestFullscreen();
      }
      setNeedsTap(false);
    } catch {
      setNeedsTap(true);
    }
  }

  useEffect(() => {
    void play();
  }, []);

  async function finish() {
    if (document.fullscreenElement) await document.exitFullscreen();
    onDone();
  }

  return (
    <section className="screen closing-video" ref={stageRef}>
      {failed ? (
        <p className="inline-note">No pudimos reproducir el video. Puedes continuar.</p>
      ) : (
        <video
          ref={videoRef}
          src="/assets/video/cierre.mp4"
          playsInline
          controls
          onEnded={() => void finish()}
          onError={() => setFailed(true)}
        />
      )}
      <div className="closing-actions">
        {needsTap ? <button type="button" className="btn btn-primary" onClick={() => void play()}>Reproducir</button> : null}
        <button type="button" className="btn fullscreen-quiet" onClick={() => void finish()}>Saltar</button>
      </div>
    </section>
  );
}
