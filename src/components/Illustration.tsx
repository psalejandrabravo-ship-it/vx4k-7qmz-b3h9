import { useEffect, useState } from "react";

export function Illustration({ src, fallback, alt, className }: { src: string; fallback?: string; alt: string; className?: string }) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    setCurrent(src);
    setFailed(false);
  }, [src]);
  if (failed) {
    return <p className="image-fallback" role="status">No pudimos cargar esta imagen. Puedes continuar.</p>;
  }
  return (
    <img
      className={className}
      src={current}
      alt={alt}
      onError={() => {
        if (fallback && current !== fallback) setCurrent(fallback);
        else setFailed(true);
      }}
    />
  );
}
