import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AlphabetProvider } from "./contexts/AlphabetContext.tsx";
import { ExperimentalFeaturesProvider } from "./contexts/ExperimentalFeaturesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AlphabetProvider>
      <ExperimentalFeaturesProvider>
        <App />
      </ExperimentalFeaturesProvider>
    </AlphabetProvider>
  </StrictMode>
);
