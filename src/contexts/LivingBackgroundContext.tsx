/**
 * Living background preference, saved on this device.
 */

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

const STORAGE_KEY = "livingBackground";

interface LivingBackgroundContextType {
  livingBackground: boolean;
  toggleLivingBackground: () => void;
}

const LivingBackgroundContext = createContext<
  LivingBackgroundContextType | undefined
>(undefined);

export function LivingBackgroundProvider({ children }: { children: ReactNode }) {
  const [livingBackground, setLivingBackground] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === null ? true : saved === "true";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(livingBackground));
  }, [livingBackground]);

  const toggleLivingBackground = () => {
    setLivingBackground((current) => !current);
  };

  return (
    <LivingBackgroundContext.Provider
      value={{ livingBackground, toggleLivingBackground }}
    >
      {children}
    </LivingBackgroundContext.Provider>
  );
}

export function useLivingBackground() {
  const context = useContext(LivingBackgroundContext);
  if (context === undefined) {
    throw new Error(
      "useLivingBackground must be used within a LivingBackgroundProvider",
    );
  }
  return context;
}
