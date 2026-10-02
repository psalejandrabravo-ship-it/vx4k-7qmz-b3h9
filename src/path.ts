export interface Point {
  x: number;
  y: number;
}

/** Posiciones en porcentaje del tablero (0–100), herradura izquierda-arriba-derecha. */
const samples: Point[] = [
  { x: 8, y: 88 },
  { x: 8, y: 62 },
  { x: 9, y: 38 },
  { x: 14, y: 18 },
  { x: 28, y: 10 },
  { x: 46, y: 8 },
  { x: 64, y: 8 },
  { x: 80, y: 12 },
  { x: 90, y: 24 },
  { x: 92, y: 42 },
];

function lengthOf(points: Point[]): number {
  let total = 0;
  for (let i = 1; i < points.length; i += 1) {
    total += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
  }
  return total;
}

const totalLength = lengthOf(samples);

function pointAlong(distance: number): Point {
  let remaining = distance;
  for (let i = 1; i < samples.length; i += 1) {
    const start = samples[i - 1];
    const end = samples[i];
    const segment = Math.hypot(end.x - start.x, end.y - start.y);
    if (remaining <= segment) {
      const t = segment === 0 ? 0 : remaining / segment;
      return { x: start.x + (end.x - start.x) * t, y: start.y + (end.y - start.y) * t };
    }
    remaining -= segment;
  }
  return samples[samples.length - 1];
}

export function stepPosition(index: number, total = 40): Point {
  const t = total === 1 ? 1 : (index - 1) / (total - 1);
  return pointAlong(t * totalLength);
}

export const startPosition: Point = { x: 8, y: 96 };
export const pathD = "M 8 96 C 8 70 7 40 16 18 C 28 6 48 5 70 6 C 86 8 94 16 93 36 C 92 50 91 58 90 64";

export const landmarks: { step: number; label: string }[] = [
  { step: 6, label: "Arco de raíces" },
  { step: 12, label: "Estanque" },
  { step: 18, label: "Círculo de hongos" },
  { step: 24, label: "Claro de luz" },
  { step: 30, label: "Piedra musgosa" },
  { step: 36, label: "Arco natural" },
];
