import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { View } from "../types/game";
import { BrandLogo } from "./BrandLogo";
import { useGame } from "../store/GameProvider";

export function Stage({ children, view }: { children: ReactNode; view: View }) {
  const [portrait, setPortrait] = useState(false);

  useEffect(() => {
    const fit = () => setPortrait(window.innerHeight > window.innerWidth && window.innerWidth < 860);
    fit();
    window.addEventListener("resize", fit);
    window.addEventListener("orientationchange", fit);
    return () => {
      window.removeEventListener("resize", fit);
      window.removeEventListener("orientationchange", fit);
    };
  }, []);

  if (portrait && (view === "board" || view === "goal")) {
    return <RotatePrompt />;
  }

  return <div className="app-shell">{children}</div>;
}

function RotatePrompt() {
  const { setView } = useGame();
  const [menu, setMenu] = useState(false);
  return (
    <section className="rotate-screen">
      <BrandLogo />
      <h1>Sendero de la Amistad</h1>
      <p>Para ver el sendero completo y jugar con más espacio, gira tu dispositivo.</p>
      <div className="button-row">
        <button type="button" className="btn btn-primary" onClick={() => setView("start")}>Volver al inicio</button>
        <button type="button" className="btn btn-outline" onClick={() => setMenu(true)}>Opciones</button>
      </div>
      {menu ? <p className="inline-note">El avance se conserva al girar el dispositivo.</p> : null}
    </section>
  );
}
