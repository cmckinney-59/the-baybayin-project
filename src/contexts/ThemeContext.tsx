/**
 * Theme Context
 * App theme with localStorage persistence.
 */

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type AppTheme =
  | "light"
  | "dark"
  | "space"
  | "jedi"
  | "sith"
  | "deseret"
  | "deseret-dark";

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
  jedi: "jedi-mode",
  sith: "sith-mode",
  deseret: "deseret-mode",
  "deseret-dark": "deseret-dark-mode",
};

const VALID_THEMES: AppTheme[] = [
  "light",
  "dark",
  "space",
  "jedi",
  "sith",
  "deseret",
  "deseret-dark",
];

const ALL_THEME_CLASSES = [
  "dark-mode",
  "space-mode",
  "jedi-mode",
  "sith-mode",
  "deseret-mode",
  "deseret-dark-mode",
];

function readStoredTheme(): AppTheme {
  const saved = localStorage.getItem("theme");
  if (saved && VALID_THEMES.includes(saved as AppTheme)) {
    return saved as AppTheme;
  }

  // Migrate from previous independent toggles
  const spaceRaw =
    localStorage.getItem("spaceMode") ?? localStorage.getItem("starWarsMode");
  if (spaceRaw !== null && JSON.parse(spaceRaw)) {
    return "space";
  }

  const darkRaw = localStorage.getItem("darkMode");
  if (darkRaw !== null) {
    return JSON.parse(darkRaw) ? "dark" : "light";
  }

  return "dark";
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
    body.classList.remove(...ALL_THEME_CLASSES);
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
