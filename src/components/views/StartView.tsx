import { BrandLogo } from "../BrandLogo";
import { FullscreenButton } from "../FullscreenButton";
import { useGame } from "../../store/GameProvider";

export function StartView() {
  const { setView, beginPath } = useGame();
  return (
    <section className="screen cover-screen">
      <img className="cover-bg" src="/assets/illustrations/cover/inicio.jpg" alt="Milo espera al inicio del sendero, en un claro del bosque" />
      <header className="topbar cover-bar">
        <BrandLogo />
        <FullscreenButton />
      </header>
      <div className="cover-copy">
        <h1>
          <span>Sendero</span>
          <small>de la</small>
          <span>Amistad</span>
        </h1>
        <span className="cover-line" aria-hidden="true" />
        <p>Cada paso nos acerca.</p>
        <button type="button" className="btn cover-play" onClick={beginPath}>▶ Jugar</button>
        <button type="button" className="btn btn-ghost cover-back" onClick={() => setView("config")}>Volver a la preparación</button>
      </div>
    </section>
  );
}
