import SettingsOption from "../../components/SettingsOption/SettingsOption";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import { useDarkMode } from "../../contexts/DarkModeContext";
import "./SettingsPage.css";

export default function SettingsPage() {
  const { showExperimentalFeatures, toggleExperimentalFeatures } =
    useExperimentalFeatures();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="settingsPage">
      <h1 className="page-title">Settings</h1>
      <SettingsOption
        type="checkbox"
        label="Show Experimental Features"
        checked={showExperimentalFeatures}
        onChange={toggleExperimentalFeatures}
      />
      <SettingsOption
        type="checkbox"
        label="Dark Mode"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
    </div>
  );
}
