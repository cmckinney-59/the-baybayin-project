/**
 * Theme Context
 * App theme: light | dark | space, with localStorage persistence.
 */

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type AppTheme = "light" | "dark" | "space";

interface ThemeContextType {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const THEME_CLASSES: Record<AppTheme, string | null> = {
  light: null,
  dark: "dark-mode",
  space: "space-mode",
};

function readStoredTheme(): AppTheme {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark" || saved === "space") {
    return saved;
  }

  // Migrate from previous independent toggles
  const spaceRaw =
    localStorage.getItem("spaceMode") ?? localStorage.getItem("starWarsMode");
  if (spaceRaw !== null && JSON.parse(spaceRaw)) {
    return "space";
  }

  const darkRaw = localStorage.getItem("darkMode");
  if (darkRaw !== null && JSON.parse(darkRaw)) {
    return "dark";
  }

  return "light";
}

function clearLegacyThemeKeys() {
  localStorage.removeItem("darkMode");
  localStorage.removeItem("spaceMode");
  localStorage.removeItem("starWarsMode");
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<AppTheme>(readStoredTheme);

  useEffect(() => {
    const body = document.body;
    body.classList.remove("dark-mode", "space-mode");
    const nextClass = THEME_CLASSES[theme];
    if (nextClass) body.classList.add(nextClass);

    localStorage.setItem("theme", theme);
    clearLegacyThemeKeys();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
