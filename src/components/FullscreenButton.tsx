import { useEffect, useState } from "react";

export function FullscreenButton({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(Boolean(document.fullscreenElement));
  const [error, setError] = useState("");

  useEffect(() => {
    const onChange = () => {
      setActive(Boolean(document.fullscreenElement));
      setError("");
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  async function toggle() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
      setError("");
    } catch {
      setError("Tu navegador no permitió abrir la pantalla completa. Puedes volver a intentarlo.");
    }
  }

  return (
    <div className={className}>
      <button type="button" className="btn btn-ghost" onClick={() => void toggle()}>
        {active ? "Salir de pantalla completa" : "Pantalla completa"}
      </button>
      {error ? <p className="inline-note" role="status">{error}</p> : null}
    </div>
  );
}
