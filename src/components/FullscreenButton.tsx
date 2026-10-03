import { useEffect, useState } from "react";

export function FullscreenButton({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(Boolean(document.fullscreenElement));
  const [expanded, setExpanded] = useState(document.documentElement.classList.contains("expanded-play"));
  const [note, setNote] = useState("");

  useEffect(() => {
    const onChange = () => {
      setActive(Boolean(document.fullscreenElement));
      if (document.fullscreenElement) setNote("");
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  async function toggle() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      document.documentElement.classList.remove("expanded-play");
      setExpanded(false);
      setNote("");
      return;
    }
    if (expanded) {
      document.documentElement.classList.remove("expanded-play");
      setExpanded(false);
      setNote("");
      return;
    }
    if (!document.documentElement.requestFullscreen) {
      document.documentElement.classList.add("expanded-play");
      setExpanded(true);
      setNote("Este navegador no permite ocultar su barra. La vista se amplió dentro de la página.");
      return;
    }
    try {
      await document.documentElement.requestFullscreen();
      setNote("");
    } catch {
      document.documentElement.classList.add("expanded-play");
      setExpanded(true);
      setNote("No se pudo ocultar la barra del navegador. La vista se amplió dentro de la página.");
    }
  }

  const label = active || expanded ? "Salir de pantalla completa" : "Pantalla completa";
  return (
    <div className={className}>
      <button type="button" className="btn fullscreen-quiet" onClick={() => void toggle()}>{label}</button>
      {note ? <p className="inline-note" role="status">{note}</p> : null}
    </div>
  );
}
