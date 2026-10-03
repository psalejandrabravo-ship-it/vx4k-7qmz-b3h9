import { categoryMeta } from "../../data/cards";
import type { Category } from "../../types/game";

const pips: Record<Category, number[]> = {
  accion: [4],
  actuar: [0, 8],
  responder: [0, 4, 8],
};

export function Die({ category, rolling, onRoll }: { category: Category | null; rolling: boolean; onRoll: () => void }) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const face = category ?? "accion";
  const color = category ? categoryMeta[face].color : "#F7F1E6";
  return (
    <div className="die-dock">
      <div className={`die ${rolling && !reduced ? "is-rolling" : ""}`} style={{ background: color }} aria-hidden="true">
        {pips[face].map((pip) => <i key={pip} className={`pip pip-${pip}`} />)}
      </div>
      <p className="die-label">{category ? categoryMeta[category].label : "Listo"}</p>
      <button type="button" className="btn btn-primary die-roll" onClick={onRoll} disabled={rolling}>Lanzar dado</button>
    </div>
  );
}
