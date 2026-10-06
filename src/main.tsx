import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import { GameProvider } from "./store/GameProvider";
import { BrandProvider } from "./store/BrandProvider";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/800.css";
import "./styles/global.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrandProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </BrandProvider>
  </StrictMode>,
);
