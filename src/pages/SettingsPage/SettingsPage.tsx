import type { CSSProperties } from "react";
import { useId, useState } from "react";
import SettingsOption from "../../components/SettingsOption/SettingsOption";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import { useTheme } from "../../contexts/ThemeContext";
import type { AppTheme } from "../../contexts/ThemeContext";
import "./SettingsPage.css";
import "../../components/SettingsOption/SettingsOption.css";
import PageTitle from "../../components/PageTitle/PageTitle";

type ThemeSwatch = {
  bg: string;
  surface: string;
  accent: string;
  text: string;
};

type ThemeOption = {
  value: AppTheme;
  label: string;
  blurb: string;
  swatch: ThemeSwatch;
};

type ThemeGroup = {
  id: string;
  title: string;
  options: ThemeOption[];
};

const THEME_GROUPS: ThemeGroup[] = [
  {
    id: "everyday",
    title: "Everyday",
    options: [
      {
        value: "light",
        label: "Light",
        blurb: "Bright and readable",
        swatch: {
          bg: "#f4f5f7",
          surface: "#ffffff",
          accent: "#2c5aa0",
          text: "#333333",
        },
      },
      {
        value: "dark",
        label: "Dark",
        blurb: "Low-light friendly",
        swatch: {
          bg: "#1a1a1a",
          surface: "#2d2d2d",
          accent: "#64b5f6",
          text: "#ffffff",
        },
      },
      {
        value: "light-2",
        label: "Light 2.0",
        blurb: "Softer everyday light",
        swatch: {
          bg: "#f3f5f8",
          surface: "#e6ebf2",
          accent: "#2c5aa0",
          text: "#1f2933",
        },
      },
      {
        value: "dark-2",
        label: "Dark 2.0",
        blurb: "Deeper everyday dark",
        swatch: {
          bg: "#121212",
          surface: "#1e1e1e",
          accent: "#74b9f7",
          text: "#f2f4f7",
        },
      },
    ],
  },
  {
    id: "cinematic",
    title: "Cinematic",
    options: [
      {
        value: "space",
        label: "Space",
        blurb: "Crawl yellow on void",
        swatch: {
          bg: "#050608",
          surface: "#0a0c12",
          accent: "#ffe81f",
          text: "#f0ead8",
        },
      },
      {
        value: "jedi",
        label: "Jedi",
        blurb: "Blue saber glow",
        swatch: {
          bg: "#040812",
          surface: "#06101e",
          accent: "#5eb0ff",
          text: "#e8f1ff",
        },
      },
      {
        value: "sith",
        label: "Sith",
        blurb: "Crimson saber glow",
        swatch: {
          bg: "#0a0404",
          surface: "#100606",
          accent: "#ff3b3b",
          text: "#f5e8e8",
        },
      },
      {
        value: "windu",
        label: "Windu",
        blurb: "Amethyst saber glow",
        swatch: {
          bg: "#09060f",
          surface: "#120a1c",
          accent: "#b44aff",
          text: "#efe6ff",
        },
      },
    ],
  },
  {
    id: "pioneer",
    title: "Pioneer",
    options: [
      {
        value: "deseret",
        label: "Deseret",
        blurb: "Navy and soft gold",
        swatch: {
          bg: "#fafbfc",
          surface: "#0c2340",
          accent: "#c5a572",
          text: "#f4efe4",
        },
      },
      {
        value: "deseret-dark",
        label: "Deseret Dark",
        blurb: "Deep navy night",
        swatch: {
          bg: "#0a1624",
          surface: "#08131f",
          accent: "#c5a572",
          text: "#f0ebe3",
        },
      },
    ],
  },
  {
    id: "filipino",
    title: "Filipino",
    options: [
      {
        value: "doctrina",
        label: "Doctrina",
        blurb: "Manuscript parchment",
        swatch: {
          bg: "#f3ead7",
          surface: "#2a2118",
          accent: "#b87333",
          text: "#f3ead7",
        },
      },
      {
        value: "pina",
        label: "Piña",
        blurb: "Ivory cloth and indigo",
        swatch: {
          bg: "#f7f2e8",
          surface: "#1e3a5f",
          accent: "#c9a46a",
          text: "#f7f2e8",
        },
      },
      {
        value: "mayon",
        label: "Mayon",
        blurb: "Ash and lava amber",
        swatch: {
          bg: "#1a1614",
          surface: "#2c2826",
          accent: "#e8923a",
          text: "#f2e6d8",
        },
      },
    ],
  },
];

const ALL_THEME_OPTIONS = THEME_GROUPS.flatMap((group) => group.options);

function swatchStyle(swatch: ThemeSwatch): CSSProperties {
  return {
    "--swatch-bg": swatch.bg,
    "--swatch-surface": swatch.surface,
    "--swatch-accent": swatch.accent,
    "--swatch-text": swatch.text,
  } as CSSProperties;
}

function ThemeSwatchPreview({ swatch }: { swatch: ThemeSwatch }) {
  return (
    <span className="theme-swatch" style={swatchStyle(swatch)} aria-hidden="true">
      <span className="theme-swatch-bar" />
      <span className="theme-swatch-chip" />
      <span className="theme-swatch-dot" />
    </span>
  );
}

export default function SettingsPage() {
  const { showExperimentalFeatures, toggleExperimentalFeatures } =
    useExperimentalFeatures();
  const { theme, setTheme } = useTheme();
  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerId = useId();

  const activeTheme =
    ALL_THEME_OPTIONS.find((option) => option.value === theme) ??
    ALL_THEME_OPTIONS[0];

  const handleThemeChange = (nextTheme: AppTheme) => {
    setTheme(nextTheme);
    setPickerOpen(false);
  };

  return (
    <div className="settingsPage">
      <PageTitle title="Settings" />
      <p className="settings-intro">
        Preferences stay on this device and apply across the app.
      </p>
      <div className="setting-item setting-item--theme">
        <div className="setting-copy">
          <h2>Theme</h2>
          <p className="setting-help">
            Pick a look for the whole app. Your choice is saved on this device.
          </p>
        </div>

        <div className="theme-current">
          <ThemeSwatchPreview swatch={activeTheme.swatch} />
          <div className="theme-card-copy">
            <span className="theme-card-label">{activeTheme.label}</span>
            <span className="theme-card-blurb">{activeTheme.blurb}</span>
          </div>
          <button
            type="button"
            className="theme-toggle"
            aria-expanded={pickerOpen}
            aria-controls={pickerId}
            onClick={() => setPickerOpen((open) => !open)}
          >
            {pickerOpen ? "Hide themes" : "Change theme"}
            <span
              className={`theme-toggle-icon${pickerOpen ? " is-open" : ""}`}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
        </div>

        <div
          id={pickerId}
          className={`theme-picker${pickerOpen ? " is-open" : ""}`}
          hidden={!pickerOpen}
        >
          <div className="theme-picker-inner" role="radiogroup" aria-label="Theme">
            {THEME_GROUPS.map((group) => (
              <section
                key={group.id}
                className="theme-group"
                aria-labelledby={`theme-group-${group.id}`}
              >
                <h3 id={`theme-group-${group.id}`} className="theme-group-title">
                  {group.title}
                </h3>
                <div className="theme-grid">
                  {group.options.map((option) => {
                    const selected = theme === option.value;
                    return (
                      <label
                        key={option.value}
                        className={`theme-card${selected ? " is-selected" : ""}`}
                      >
                        <input
                          type="radio"
                          name="app-theme"
                          value={option.value}
                          checked={selected}
                          onChange={() => handleThemeChange(option.value)}
                        />
                        <ThemeSwatchPreview swatch={option.swatch} />
                        <span className="theme-card-copy">
                          <span className="theme-card-label">{option.label}</span>
                          <span className="theme-card-blurb">{option.blurb}</span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <SettingsOption
        type="checkbox"
        label="Experimental features"
        description="Unlocks unfinished alphabets and tools that may change or break."
        checked={showExperimentalFeatures}
        onChange={toggleExperimentalFeatures}
      />
    </div>
  );
}
