import { FullscreenButton } from "../FullscreenButton";
import { useBrand } from "../../store/BrandProvider";
import { useGame } from "../../store/GameProvider";

export function ConfigView() {
  const { draftCount, setDraftCount, adjustDraft, setView } = useGame();
  const { logo, note, setLogoFile, clearLogo, copyLink } = useBrand();
  const count = Number(draftCount);
  const valid = Number.isInteger(count) && count >= 1 && count <= 40;

  return (
    <section className="screen config-screen">
      <header className="topbar">
        <FullscreenButton />
      </header>
      <form
        className="panel"
        onSubmit={(event) => {
          event.preventDefault();
          if (valid) setView("start");
        }}
      >
        <h2>Preparación</h2>
        <p>Elige cuántas situaciones quieres recorrer hoy.</p>
        <div className="stepper">
          <button type="button" className="btn btn-outline" onClick={() => adjustDraft(-1)} aria-label="Menos participantes">−</button>
          <input
            inputMode="numeric"
            aria-label="Cantidad de participantes"
            value={draftCount}
            onChange={(event) => setDraftCount(event.target.value.replace(/[^\d]/g, "").slice(0, 2))}
          />
          <button type="button" className="btn btn-outline" onClick={() => adjustDraft(1)} aria-label="Más participantes">+</button>
        </div>
        {!valid ? <p className="inline-note" role="status">Ingresa un número entre 1 y 40.</p> : <p className="inline-note">Este número es la cantidad de turnos: saldrá una tarjeta por cada uno y Milo avanzará hasta la llegada. Si juega un solo niño o una sola niña, elige aquí cuántas situaciones aparecerán.</p>}
        <fieldset className="brand-box">
          <legend>Personalización</legend>
          <p>Sube el logo de tu institución. Reemplaza el logo de MIRARIM en el juego y puedes compartir el enlace.</p>
          {logo ? <img className="brand-preview" src={logo} alt="Vista previa del logo institucional" /> : null}
          <label className="btn btn-outline download-activity">
            Subir logo
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/svg+xml"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) void setLogoFile(file);
                event.target.value = "";
              }}
            />
          </label>
          <div className="button-row">
            <button type="button" className="btn btn-outline" onClick={() => void copyLink()} disabled={!logo}>Copiar enlace</button>
            <button type="button" className="btn btn-outline" onClick={clearLogo} disabled={!logo}>Quitar logo</button>
          </div>
          {note ? <p className="inline-note" role="status">{note}</p> : null}
        </fieldset>
        <div className="button-row">
          <a className="btn btn-outline download-activity" href="/assets/activity/actividad.pdf" download>Descargar actividad</a>
          <button type="button" className="btn btn-outline" onClick={() => setView("instructions")}>Instrucciones</button>
          <button type="submit" className="btn btn-primary" disabled={!valid}>Todo listo</button>
        </div>
      </form>
    </section>
  );
}
