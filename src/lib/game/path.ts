export interface Point {
  x: number;
  y: number;
}

/** Centro del camino de bosque.jpg, en porcentaje de la imagen (1168×784). */
const samples: Point[] = [
  { x: 29, y: 91 },
  { x: 22, y: 74 },
  { x: 16.5, y: 55 },
  { x: 17.5, y: 38 },
  { x: 24, y: 24 },
  { x: 38, y: 17.5 },
  { x: 50, y: 15.5 },
  { x: 62, y: 17.5 },
  { x: 76, y: 24 },
  { x: 82.5, y: 38 },
  { x: 83.5, y: 55 },
  { x: 78, y: 74 },
  { x: 71, y: 91 },
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

export const startPosition: Point = samples[0];
export const BOARD_RATIO = "1168 / 784";

export const landmarks: { step: number; label: string }[] = [
  { step: 8, label: "Arco de raíces" },
  { step: 16, label: "Estanque" },
  { step: 24, label: "Claro de luz" },
  { step: 32, label: "Piedra musgosa" },
];
