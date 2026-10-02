import { useEffect, useState } from "react";
import { DRIVE_FILE_ID } from "../../data/config";

export function VideoModal({ onClose }: { onClose: () => void }) {
  const [failed, setFailed] = useState(!DRIVE_FILE_ID);
  useEffect(() => {
    if (!DRIVE_FILE_ID) setFailed(true);
  }, []);
  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label="Video de cierre">
      <div className="video-card">
        {failed ? (
          <p>No pudimos cargar el video. Puedes continuar sin él.</p>
        ) : (
          <iframe
            title="Video de cierre"
            src={`https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`}
            allow="fullscreen"
            onError={() => setFailed(true)}
          />
        )}
        <button type="button" className="btn btn-primary" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
