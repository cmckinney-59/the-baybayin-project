/**
 * Keyboard Key Size Context
 * Manages on-screen keyboard key size with localStorage persistence
 */

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type KeyboardKeySize = "small" | "medium" | "large";

const STORAGE_KEY = "keyboardKeySize";
const DEFAULT_SIZE: KeyboardKeySize = "medium";

function isKeyboardKeySize(value: unknown): value is KeyboardKeySize {
  return value === "small" || value === "medium" || value === "large";
}

interface KeyboardKeySizeContextType {
  keySize: KeyboardKeySize;
  setKeySize: (size: KeyboardKeySize) => void;
}

const KeyboardKeySizeContext = createContext<
  KeyboardKeySizeContextType | undefined
>(undefined);

interface KeyboardKeySizeProviderProps {
  children: ReactNode;
}

export function KeyboardKeySizeProvider({
  children,
}: KeyboardKeySizeProviderProps) {
  const [keySize, setKeySize] = useState<KeyboardKeySize>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_SIZE;
    try {
      const parsed: unknown = JSON.parse(saved);
      return isKeyboardKeySize(parsed) ? parsed : DEFAULT_SIZE;
    } catch {
      return isKeyboardKeySize(saved) ? saved : DEFAULT_SIZE;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(keySize));
  }, [keySize]);

  return (
    <KeyboardKeySizeContext.Provider value={{ keySize, setKeySize }}>
      {children}
    </KeyboardKeySizeContext.Provider>
  );
}

export function useKeyboardKeySize() {
  const context = useContext(KeyboardKeySizeContext);
  if (context === undefined) {
    throw new Error(
      "useKeyboardKeySize must be used within a KeyboardKeySizeProvider",
    );
  }
  return context;
}
