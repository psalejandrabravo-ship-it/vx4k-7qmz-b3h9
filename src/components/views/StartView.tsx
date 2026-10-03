import { useState } from "react";
import { BrandLogo } from "../BrandLogo";
import { FullscreenButton } from "../FullscreenButton";
import { useGame } from "../../store/GameProvider";

export function StartView() {
  const { setView, beginPath } = useGame();
  const [coverFailed, setCoverFailed] = useState(false);
  const [miloFailed, setMiloFailed] = useState(false);
  return (
    <section className="screen start-screen">
      <header className="topbar">
        <div className="logo-plate"><BrandLogo /></div>
        <FullscreenButton />
      </header>
      <div className="start-copy">
        {coverFailed ? (
          <p className="image-fallback" role="status">Falta la portada aprobada. El archivo inicio.webp todavía no está en el proyecto.</p>
        ) : (
          <img className="cover-art" src="/assets/illustrations/cover/inicio.webp" alt="" onError={() => setCoverFailed(true)} />
        )}
        {miloFailed ? null : (
          <img className="milo-espera" src="/assets/illustrations/guide/milo-espera.png" alt="Milo de pie en el bosque, con un gesto tranquilo de bienvenida" onError={() => setMiloFailed(true)} />
        )}
        <h1>Sendero de la Amistad</h1>
        <p>Nos detenemos, miramos a quien lo necesita, y actuamos con cuidado.</p>
        <div className="button-row">
          <button type="button" className="btn btn-primary" onClick={beginPath}>Jugar</button>
          <button type="button" className="btn btn-outline light" onClick={() => setView("config")}>Volver a la preparación</button>
        </div>
      </div>
    </section>
  );
}
