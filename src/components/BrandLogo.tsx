import { useBrand } from "../store/BrandProvider";

export function BrandLogo({ variant = "color" }: { variant?: "color" | "white" }) {
  const { logo } = useBrand();
  const src = logo
    ? logo
    : variant === "white"
      ? "/assets/brand/MIRARIM-horizontal-blanco.svg"
      : "/assets/brand/MIRARIM-horizontal-color.svg";
  return <img className="brand-logo" src={src} alt={logo ? "Logo institucional" : "MIRARIM"} />;
}
