import { categoryMeta } from "../../data/cards";
import { landmarks, stepPosition } from "../../lib/game/path";
import type { StepMark } from "../../types/game";

export function Path({ total, steps }: { total: number; steps: StepMark[] }) {
  const current = steps.length;
  return (
    <div className="path" aria-hidden="true">
      {Array.from({ length: 40 }, (_, index) => {
        const step = index + 1;
        const point = stepPosition(step);
        const mark = steps.find((item) => item.index === step);
        const inactive = step > total;
        const landmark = landmarks.find((item) => item.step === step);
        return (
          <div key={step}>
            {landmark ? (
              <span className="landmark" style={{ left: point.x, top: point.y - 36 }}>{landmark.label}</span>
            ) : null}
            <span
              className={`step ${inactive ? "is-inactive" : ""} ${step === current ? "is-current" : ""}`}
              style={{
                left: point.x,
                top: point.y,
                background: mark ? categoryMeta[mark.category].color : undefined,
              }}
              title={inactive ? "Tramo sin recorrer" : `Peldaño ${step}`}
            />
          </div>
        );
      })}
      <img
        className="milo-token"
        src={current === 0 ? "/assets/illustrations/guide/milo-espera.svg" : "/assets/illustrations/guide/milo-camina.svg"}
        alt=""
        style={current === 0 ? { left: 118, top: 900 } : { left: stepPosition(current).x, top: stepPosition(current).y - 78 }}
      />
    </div>
  );
}
