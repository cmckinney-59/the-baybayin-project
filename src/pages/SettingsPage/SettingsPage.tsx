import SettingsOption from "../../components/SettingsOption/SettingsOption";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import { useDarkMode } from "../../contexts/DarkModeContext";
import "./SettingsPage.css";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function SettingsPage() {
  const { showExperimentalFeatures, toggleExperimentalFeatures } =
    useExperimentalFeatures();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="settingsPage">
      <PageTitle title="Settings" />
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
