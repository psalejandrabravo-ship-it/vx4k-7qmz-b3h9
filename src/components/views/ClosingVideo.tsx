import { useEffect, useRef, useState } from "react";

export function ClosingVideo({ onDone }: { onDone: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsTap, setNeedsTap] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => setNeedsTap(true));
  }, []);

  return (
    <section className="screen closing-video">
      {failed ? (
        <p className="inline-note">No pudimos reproducir el video. Puedes continuar.</p>
      ) : (
        <video
          ref={videoRef}
          src="/assets/video/cierre.mp4"
          playsInline
          controls
          onEnded={onDone}
          onError={() => setFailed(true)}
        />
      )}
      <div className="closing-actions">
        {needsTap ? <button type="button" className="btn btn-primary" onClick={() => void videoRef.current?.play().then(() => setNeedsTap(false))}>Reproducir</button> : null}
        <button type="button" className="btn fullscreen-quiet" onClick={onDone}>Saltar</button>
      </div>
    </section>
  );
}
