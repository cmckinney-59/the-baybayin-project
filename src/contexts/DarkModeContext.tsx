/**
 * Dark Mode Context File
 * Manages the dark mode setting with localStorage persistence and body class management
 */

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface DarkModeContextType {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

interface DarkModeProviderProps {
  children: ReactNode;
}

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  // Apply dark mode class to body and save to localStorage
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Sync dark mode state with body class changes (for external changes)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.body.classList.contains("dark-mode");
      if (isDark !== isDarkMode) {
        setIsDarkMode(isDark);
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Also check on mount
    const isDark = document.body.classList.contains("dark-mode");
    if (isDark !== isDarkMode) {
      setIsDarkMode(isDark);
    }

    return () => observer.disconnect();
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev: boolean) => !prev);
  };

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}
