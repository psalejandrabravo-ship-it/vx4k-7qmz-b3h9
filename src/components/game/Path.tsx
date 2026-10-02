import { categoryMeta } from "../../data/cards";
import { landmarks, startPosition, stepPosition } from "../../lib/game/path";
import type { StepMark } from "../../types/game";

export function Path({ total, steps }: { total: number; steps: StepMark[] }) {
  const current = steps.length;
  const milo = current === 0 ? startPosition : stepPosition(current);
  const goal = stepPosition(total);
  return (
    <div className="path" aria-hidden="true">
      {Array.from({ length: 40 }, (_, index) => {
        const step = index + 1;
        const point = stepPosition(step);
        const mark = steps.find((item) => item.index === step);
        const inactive = step > total;
        const pending = step <= total && !mark;
        const landmark = landmarks.find((item) => item.step === step);
        return (
          <div key={step}>
            {landmark && step <= total ? (
              <span className="landmark" style={{ left: `${point.x}%`, top: `${point.y}%` }}>{landmark.label}</span>
            ) : null}
            <span
              className={`step ${inactive ? "is-offpath" : ""} ${pending ? "is-pending" : ""} ${step === current ? "is-current" : ""}`}
              style={{ left: `${point.x}%`, top: `${point.y}%`, background: mark ? categoryMeta[mark.category].color : undefined }}
            />
          </div>
        );
      })}
      <span className="goal-mark" style={{ left: `${goal.x}%`, top: `${goal.y}%` }}>Meta</span>
      <img
        className="milo-token"
        src="/assets/illustrations/guide/milo-camina.webp"
        onError={(event) => { event.currentTarget.src = "/assets/illustrations/guide/milo-camina.png"; }}
        alt=""
        style={{ left: `${milo.x}%`, top: `${milo.y}%` }}
      />
    </div>
  );
}
