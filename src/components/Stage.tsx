import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export function Stage({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / 1920, window.innerHeight / 1080));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div className="viewport">
      {scale < 0.55 ? (
        <p className="size-hint" role="status">Una pantalla más grande o apaisada se verá mejor. Puedes seguir igual.</p>
      ) : null}
      <div className="stage" style={{ transform: `scale(${scale})` }}>{children}</div>
    </div>
  );
}
