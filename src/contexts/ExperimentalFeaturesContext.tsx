/**
 * Experimental Features Context File
 * Manages the showExperimentalFeatures setting with localStorage persistence
 */

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface ExperimentalFeaturesContextType {
  showExperimentalFeatures: boolean;
  setShowExperimentalFeatures: (value: boolean) => void;
  toggleExperimentalFeatures: () => void;
}

const ExperimentalFeaturesContext = createContext<
  ExperimentalFeaturesContextType | undefined
>(undefined);

interface ExperimentalFeaturesProviderProps {
  children: ReactNode;
}

export function ExperimentalFeaturesProvider({
  children,
}: ExperimentalFeaturesProviderProps) {
  const [showExperimentalFeatures, setShowExperimentalFeatures] = useState(
    () => {
      const saved = localStorage.getItem("showExperimentalFeatures");
      return saved ? JSON.parse(saved) : false;
    }
  );

  useEffect(() => {
    localStorage.setItem(
      "showExperimentalFeatures",
      JSON.stringify(showExperimentalFeatures)
    );
  }, [showExperimentalFeatures]);

  const toggleExperimentalFeatures = () => {
    setShowExperimentalFeatures((prev: boolean) => !prev);
  };

  return (
    <ExperimentalFeaturesContext.Provider
      value={{
        showExperimentalFeatures,
        setShowExperimentalFeatures,
        toggleExperimentalFeatures,
      }}
    >
      {children}
    </ExperimentalFeaturesContext.Provider>
  );
}

export function useExperimentalFeatures() {
  const context = useContext(ExperimentalFeaturesContext);
  if (context === undefined) {
    throw new Error(
      "useExperimentalFeatures must be used within an ExperimentalFeaturesProvider"
    );
  }
  return context;
}
