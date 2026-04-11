/**
 * Alphabet Context File
 * Tracks the current selected alphabet
 */

import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { exportFontNameForAlphabet } from "../data/ALPHABETS_DATA";
export { exportFontNameForAlphabet as fontNameForAlphabet };

interface AlphabetContextType {
  currentAlphabet: string;
  setCurrentAlphabet: (alphabet: string) => void;
  currentFontName: string;
}

const AlphabetContext = createContext<AlphabetContextType | undefined>(
  undefined,
);

interface AlphabetProviderProps {
  children: ReactNode;
}

export function AlphabetProvider({ children }: AlphabetProviderProps) {
  const [currentAlphabet, setCurrentAlphabet] = useState<string>("");

  const currentFontName = useMemo(
    () => exportFontNameForAlphabet(currentAlphabet),
    [currentAlphabet],
  );

  return (
    <AlphabetContext.Provider
      value={{ currentAlphabet, setCurrentAlphabet, currentFontName }}
    >
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
