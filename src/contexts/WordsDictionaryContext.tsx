/**
 * Words Dictionary Context File
 * Tracks the dictionary mapping of original words to transliterated words
 */

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type Dictionary = { [word: string]: string };

interface WordsDictionaryContextType {
  wordsDictionary: Dictionary;
  setWordsDictionary: (dictionary: Dictionary) => void;
  clearWordsDictionary: () => void;
  wordContainsBorrowedSound: boolean;
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
  const [wordContainsBorrowedSound, setWordContainsBorrowedSound] =
    useState<boolean>(false);

  const clearWordsDictionary = () => {
    setWordsDictionary({});
  };

  useEffect(() => {
    const hasBorrowedSound = Object.keys(wordsDictionary).some((word) => {
      const lowerWord = word.toLowerCase();
      return (
        lowerWord.includes("c") ||
        lowerWord.includes("ch") ||
        lowerWord.includes("j") ||
        lowerWord.includes("qu")
      );
    });
    setWordContainsBorrowedSound(hasBorrowedSound);
  }, [wordsDictionary]);

  return (
    <WordsDictionaryContext.Provider
      value={{
        wordsDictionary,
        setWordsDictionary,
        clearWordsDictionary,
        wordContainsBorrowedSound,
      }}
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
