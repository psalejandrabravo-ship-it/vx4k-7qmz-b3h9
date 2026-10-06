import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "sendero-logo";

function logoFromLocation() {
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  return params.get("logo");
}

function readStoredLogo() {
  const fromLink = logoFromLocation();
  if (fromLink) {
    localStorage.setItem(STORAGE_KEY, fromLink);
    return fromLink;
  }
  return localStorage.getItem(STORAGE_KEY);
}

async function shrinkLogo(file: File) {
  const bitmap = await createImageBitmap(file);
  const maxWidth = 640;
  const scale = Math.min(1, maxWidth / bitmap.width);
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const context = canvas.getContext("2d");
  if (!context) throw new Error("No se pudo preparar el logo.");
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL(file.type === "image/png" ? "image/png" : "image/jpeg", 0.85);
}

interface BrandValue {
  logo: string | null;
  note: string;
  setLogoFile: (file: File) => Promise<void>;
  clearLogo: () => void;
  copyLink: () => Promise<void>;
}

const BrandContext = createContext<BrandValue | null>(null);

export function BrandProvider({ children }: { children: ReactNode }) {
  const [logo, setLogo] = useState<string | null>(() => {
    try {
      return readStoredLogo();
    } catch {
      return null;
    }
  });
  const [note, setNote] = useState("");

  const value = useMemo<BrandValue>(() => ({
    logo,
    note,
    setLogoFile: async (file) => {
      if (!file.type.startsWith("image/")) {
        setNote("El archivo debe ser una imagen.");
        return;
      }
      const data = await shrinkLogo(file);
      setLogo(data);
      localStorage.setItem(STORAGE_KEY, data);
      const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
      params.set("logo", data);
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${params.toString()}`);
      setNote(data.length > 50000
        ? "Logo listo. El enlace es largo: si no se abre completo, vuelve a copiarlo desde este equipo."
        : "Logo listo. Puedes copiar el enlace para compartirlo.");
    },
    clearLogo: () => {
      setLogo(null);
      localStorage.removeItem(STORAGE_KEY);
      const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
      params.delete("logo");
      const hash = params.toString();
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${hash ? `#${hash}` : ""}`);
      setNote("Se restableció el logo de MIRARIM.");
    },
    copyLink: async () => {
      await navigator.clipboard.writeText(window.location.href);
      setNote("Enlace copiado.");
    },
  }), [logo, note]);

  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>;
}

export function useBrand() {
  const value = useContext(BrandContext);
  if (!value) throw new Error("BrandProvider ausente");
  return value;
}
