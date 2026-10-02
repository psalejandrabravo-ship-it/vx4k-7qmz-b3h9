export interface Point {
  x: number;
  y: number;
}

const polyline: Point[] = [
  { x: 118, y: 980 },
  { x: 118, y: 640 },
  { x: 150, y: 250 },
  { x: 420, y: 128 },
  { x: 960, y: 108 },
  { x: 1460, y: 128 },
  { x: 1688, y: 250 },
  { x: 1688, y: 560 },
];

function lengthOf(points: Point[]): number {
  let total = 0;
  for (let i = 1; i < points.length; i += 1) {
    total += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
  }
  return total;
}

const totalLength = lengthOf(polyline);

export function pointAlong(distance: number): Point {
  let remaining = distance;
  for (let i = 1; i < polyline.length; i += 1) {
    const start = polyline[i - 1];
    const end = polyline[i];
    const segment = Math.hypot(end.x - start.x, end.y - start.y);
    if (remaining <= segment) {
      const t = segment === 0 ? 0 : remaining / segment;
      return { x: start.x + (end.x - start.x) * t, y: start.y + (end.y - start.y) * t };
    }
    remaining -= segment;
  }
  return polyline[polyline.length - 1];
}

export function stepPosition(index: number, total = 40): Point {
  const t = total === 1 ? 1 : (index - 1) / (total - 1);
  return pointAlong(t * totalLength);
}

export const landmarks: { step: number; label: string }[] = [
  { step: 6, label: "Arco de raíces" },
  { step: 12, label: "Estanque" },
  { step: 18, label: "Círculo de hongos" },
  { step: 24, label: "Claro de luz" },
  { step: 30, label: "Piedra musgosa" },
  { step: 36, label: "Arco natural" },
];
