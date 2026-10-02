const base = "/assets/illustrations";

export function art(path: string): string {
  return `${base}/${path}.webp`;
}

export function artFallback(path: string): string {
  return `${base}/${path}.png`;
}
