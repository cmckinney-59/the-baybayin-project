/**
 * Alphabet Context File
 * Tracks the current selected alphabet
 */

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AlphabetContextType {
  currentAlphabet: string;
  setCurrentAlphabet: (alphabet: string) => void;
}

const AlphabetContext = createContext<AlphabetContextType | undefined>(
  undefined
);

interface AlphabetProviderProps {
  children: ReactNode;
}

export function AlphabetProvider({ children }: AlphabetProviderProps) {
  const [currentAlphabet, setCurrentAlphabet] = useState<string>("");

  return (
    <AlphabetContext.Provider value={{ currentAlphabet, setCurrentAlphabet }}>
      {children}
    </AlphabetContext.Provider>
  );
}

export function useAlphabet() {
  const context = useContext(AlphabetContext);
  if (context === undefined) {
    throw new Error("useAlphabet must be used within an AlphabetProvider");
  }
  return context;
}
