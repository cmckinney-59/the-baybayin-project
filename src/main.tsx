import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AlphabetProvider } from "./contexts/AlphabetContext.tsx";
import { ExperimentalFeaturesProvider } from "./contexts/ExperimentalFeaturesContext.tsx";
import { LivingBackgroundProvider } from "./contexts/LivingBackgroundContext.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { KeyboardKeySizeProvider } from "./contexts/KeyboardKeySizeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LivingBackgroundProvider>
        <AlphabetProvider>
          <ExperimentalFeaturesProvider>
            <KeyboardKeySizeProvider>
              <App />
            </KeyboardKeySizeProvider>
          </ExperimentalFeaturesProvider>
        </AlphabetProvider>
      </LivingBackgroundProvider>
    </ThemeProvider>
  </StrictMode>
);
