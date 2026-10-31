/**
 * Space Mode Context
 * Cinematic yellow-on-space theme with localStorage persistence.
 */

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface SpaceModeContextType {
  isSpaceMode: boolean;
  setIsSpaceMode: (value: boolean) => void;
  toggleSpaceMode: () => void;
}

const SpaceModeContext = createContext<SpaceModeContextType | undefined>(
  undefined,
);

interface SpaceModeProviderProps {
  children: ReactNode;
}

function readStoredSpaceMode(): boolean {
  const saved = localStorage.getItem("spaceMode");
  if (saved !== null) return JSON.parse(saved);
  // Migrate previous key name
  const legacy = localStorage.getItem("starWarsMode");
  if (legacy !== null) {
    const value = JSON.parse(legacy);
    localStorage.setItem("spaceMode", JSON.stringify(value));
    localStorage.removeItem("starWarsMode");
    return value;
  }
  return false;
}

export function SpaceModeProvider({ children }: SpaceModeProviderProps) {
  const [isSpaceMode, setIsSpaceMode] = useState(readStoredSpaceMode);

  useEffect(() => {
    document.body.classList.toggle("space-mode", isSpaceMode);
    localStorage.setItem("spaceMode", JSON.stringify(isSpaceMode));
  }, [isSpaceMode]);

  const toggleSpaceMode = () => {
    setIsSpaceMode((prev: boolean) => !prev);
  };

  return (
    <SpaceModeContext.Provider
      value={{
        isSpaceMode,
        setIsSpaceMode,
        toggleSpaceMode,
      }}
    >
      {children}
    </SpaceModeContext.Provider>
  );
}

export function useSpaceMode() {
  const context = useContext(SpaceModeContext);
  if (context === undefined) {
    throw new Error("useSpaceMode must be used within a SpaceModeProvider");
  }
  return context;
}
