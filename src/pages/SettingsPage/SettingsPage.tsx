import SettingsOption from "../../components/SettingsOption/SettingsOption";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useSpaceMode } from "../../contexts/SpaceModeContext";
import "./SettingsPage.css";
import "../../components/SettingsOption/SettingsOption.css";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function SettingsPage() {
  const { showExperimentalFeatures, toggleExperimentalFeatures } =
    useExperimentalFeatures();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { isSpaceMode, toggleSpaceMode } = useSpaceMode();

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
      <SettingsOption
        type="checkbox"
        label="Space Mode"
        checked={isSpaceMode}
        onChange={toggleSpaceMode}
      />
    </div>
  );
}
