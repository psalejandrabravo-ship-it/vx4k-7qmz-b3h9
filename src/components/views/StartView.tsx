import { BrandLogo } from "../BrandLogo";
import { FullscreenButton } from "../FullscreenButton";
import { useGame } from "../../store/GameProvider";

export function StartView() {
  const { setView } = useGame();
  return (
    <section className="screen start-screen">
      <img className="screen-bg" src="/assets/illustrations/cover/inicio.webp" alt="Bosque encantado con Milo al inicio del sendero" onError={(event) => { event.currentTarget.src = "/assets/illustrations/cover/inicio.png"; }} />
      <header className="topbar">
        <div className="logo-plate"><BrandLogo /></div>
        <FullscreenButton />
      </header>
      <div className="start-copy">
        <h1>Sendero de la Amistad</h1>
        <p>Nos detenemos, miramos a quien lo necesita, y actuamos con cuidado.</p>
        <div className="button-row">
          <button type="button" className="btn btn-primary" onClick={() => setView("config")}>Jugar</button>
          <button type="button" className="btn btn-outline light" onClick={() => setView("instructions")}>Cómo jugar</button>
        </div>
      </div>
    </section>
  );
}
