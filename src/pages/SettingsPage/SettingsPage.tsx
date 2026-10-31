import SettingsOption from "../../components/SettingsOption/SettingsOption";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import { useTheme } from "../../contexts/ThemeContext";
import type { AppTheme } from "../../contexts/ThemeContext";
import "./SettingsPage.css";
import "../../components/SettingsOption/SettingsOption.css";
import PageTitle from "../../components/PageTitle/PageTitle";

const THEME_OPTIONS: { value: AppTheme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "space", label: "Space" },
];

export default function SettingsPage() {
  const { showExperimentalFeatures, toggleExperimentalFeatures } =
    useExperimentalFeatures();
  const { theme, setTheme } = useTheme();

  return (
    <div className="settingsPage">
      <PageTitle title="Settings" />
      <SettingsOption
        type="checkbox"
        label="Show Experimental Features"
        checked={showExperimentalFeatures}
        onChange={toggleExperimentalFeatures}
      />
      <div className="setting-item setting-item--theme">
        <h2>Theme</h2>
        <div
          className="theme-selector"
          role="radiogroup"
          aria-label="Theme"
        >
          {THEME_OPTIONS.map(({ value, label }) => (
            <label
              key={value}
              className={`theme-option${theme === value ? " is-selected" : ""}`}
            >
              <input
                type="radio"
                name="app-theme"
                value={value}
                checked={theme === value}
                onChange={() => setTheme(value)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
