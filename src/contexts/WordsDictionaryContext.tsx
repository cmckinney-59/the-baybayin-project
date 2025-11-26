/**
 * Words Dictionary Context File
 * Tracks the dictionary mapping of original words to transliterated words
 */

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Dictionary = { [word: string]: string };

interface WordsDictionaryContextType {
  wordsDictionary: Dictionary;
  setWordsDictionary: (dictionary: Dictionary) => void;
  clearWordsDictionary: () => void;
}

const WordsDictionaryContext = createContext<
  WordsDictionaryContextType | undefined
>(undefined);

interface WordsDictionaryProviderProps {
  children: ReactNode;
}

export function WordsDictionaryProvider({
  children,
}: WordsDictionaryProviderProps) {
  const [wordsDictionary, setWordsDictionary] = useState<Dictionary>({});

  const clearWordsDictionary = () => {
    setWordsDictionary({});
  };

  return (
    <WordsDictionaryContext.Provider
      value={{ wordsDictionary, setWordsDictionary, clearWordsDictionary }}
    >
      {children}
    </WordsDictionaryContext.Provider>
  );
}

export function useWordsDictionary() {
  const context = useContext(WordsDictionaryContext);
  if (context === undefined) {
    throw new Error(
      "useWordsDictionary must be used within a WordsDictionaryProvider"
    );
  }
  return context;
}
