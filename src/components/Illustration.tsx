import { useState } from "react";

export function Illustration({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <p className="image-fallback" role="status">No pudimos cargar esta imagen. Puedes continuar.</p>;
  }
  return <img className={className} src={src} alt={alt} onError={() => setFailed(true)} />;
}
