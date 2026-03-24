/**
 * Alphabet Context File
 * Tracks the current selected alphabet
 */

import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

const ALPHABET_OFFICE_FONT_MAP: Record<string, string> = {
  Atlantean: "Atlantean",
  Aurebesh: "Aurebesh",
  Baybayin: "Tagalog Doctrina 1593",
  Deseret: "Deseret",
  Gallifreyan: "WS Simple Gallifreyan",
  MarasEye: "Maras Eye",
  Matoran: "Matoran",
  Plqad: "klingon font",
  Steel: "steelAlphabet",
  Tengwar: "Tengwar Quenya",
  Unown: "Unown",
};

const DEFAULT_OFFICE_FONT = "Tagalog Doctrina 1593";

/** Office / export font name for a transliterator alphabet key (e.g. Word, Excel). */
export function fontNameForAlphabet(alphabet: string): string {
  return ALPHABET_OFFICE_FONT_MAP[alphabet] ?? DEFAULT_OFFICE_FONT;
}

interface AlphabetContextType {
  currentAlphabet: string;
  setCurrentAlphabet: (alphabet: string) => void;
  /** Font name for exports (Word/Excel) for the current alphabet. */
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
    () => fontNameForAlphabet(currentAlphabet),
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
