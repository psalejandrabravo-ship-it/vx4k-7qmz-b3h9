import { categoryMeta } from "../../data/cards";
import type { Category } from "../../types/game";

const faceOrder: Category[] = ["accion", "actuar", "responder", "accion", "actuar", "responder"];

export function Die({ category, rolling, onRoll }: { category: Category | null; rolling: boolean; onRoll: () => void }) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const color = category ? categoryMeta[category].color : "#F7F1E6";
  const label = category ? categoryMeta[category].label : "Listo";
  return (
    <button
      type="button"
      className={`die ${rolling && !reduced ? "is-rolling" : ""}`}
      style={{ background: color, color: category === "responder" ? "#F7F1E6" : "#1E1830" }}
      onClick={onRoll}
      aria-label="Lanzar dado"
    >
      <span className="die-faces" aria-hidden="true">
        {faceOrder.map((face, index) => (
          <i key={`${face}-${index}`} style={{ background: categoryMeta[face].color }} />
        ))}
      </span>
      <span className="die-label">{rolling ? "..." : label}</span>
      <span className="die-caption">Lanzar dado</span>
    </button>
  );
}
