import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AlphabetProvider } from "./contexts/AlphabetContext.tsx";
import { ExperimentalFeaturesProvider } from "./contexts/ExperimentalFeaturesContext.tsx";
import { DarkModeProvider } from "./contexts/DarkModeContext.tsx";
import { SpaceModeProvider } from "./contexts/SpaceModeContext.tsx";
import { KeyboardKeySizeProvider } from "./contexts/KeyboardKeySizeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      <SpaceModeProvider>
        <AlphabetProvider>
          <ExperimentalFeaturesProvider>
            <KeyboardKeySizeProvider>
              <App />
            </KeyboardKeySizeProvider>
          </ExperimentalFeaturesProvider>
        </AlphabetProvider>
      </SpaceModeProvider>
    </DarkModeProvider>
  </StrictMode>
);
