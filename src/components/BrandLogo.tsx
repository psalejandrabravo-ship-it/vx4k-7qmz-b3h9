export function BrandLogo({ variant = "color" }: { variant?: "color" | "white" }) {
  const src = variant === "white"
    ? "/assets/brand/MIRARIM-horizontal-blanco.svg"
    : "/assets/brand/MIRARIM-horizontal-color.svg";
  return <img className="brand-logo" src={src} alt="MIRARIM" />;
}
