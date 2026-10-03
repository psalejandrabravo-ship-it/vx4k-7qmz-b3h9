import { useState } from "react";
import { categoryMeta } from "../../data/cards";
import { startPosition, stepPosition } from "../../lib/game/path";
import type { StepMark } from "../../types/game";

export function Path({ total, steps }: { total: number; steps: StepMark[] }) {
  const [miloFailed, setMiloFailed] = useState(false);
  const count = Math.min(40, Math.max(1, total));
  const current = steps.length;
  const milo = current === 0 ? startPosition : stepPosition(current, count);
  const goal = stepPosition(count, count);
  return (
    <div className="path" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => {
        const step = index + 1;
        const point = stepPosition(step, count);
        const mark = steps.find((item) => item.index === step);
        return (
          <span
            key={step}
            className={`step ${mark ? "" : "is-pending"} ${step === current ? "is-current" : ""}`}
            style={{ left: `${point.x}%`, top: `${point.y}%`, background: mark ? categoryMeta[mark.category].color : undefined }}
          />
        );
      })}
      <span className="goal-mark" style={{ left: `${goal.x}%`, top: `${goal.y}%` }}>Meta</span>
      {miloFailed ? null : (
        <img
          className="milo-token"
          src="/assets/illustrations/guide/milo-camina.png"
          alt=""
          style={{ left: `${milo.x}%`, top: `${milo.y}%` }}
          onError={() => setMiloFailed(true)}
        />
      )}
    </div>
  );
}
