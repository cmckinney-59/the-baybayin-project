import SettingsOption from "../../components/SettingsOption/SettingsOption";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import { useDarkMode } from "../../contexts/DarkModeContext";
import {
  useKeyboardKeySize,
  type KeyboardKeySize,
} from "../../contexts/KeyboardKeySizeContext";
import "./SettingsPage.css";
import "../../components/SettingsOption/SettingsOption.css";
import PageTitle from "../../components/PageTitle/PageTitle";

const KEY_SIZE_OPTIONS: { value: KeyboardKeySize; label: string }[] = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

export default function SettingsPage() {
  const { showExperimentalFeatures, toggleExperimentalFeatures } =
    useExperimentalFeatures();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { keySize, setKeySize } = useKeyboardKeySize();

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
      <div className="setting-item">
        <h2>Keyboard Key Size</h2>
        <div
          className="key-size-options"
          role="radiogroup"
          aria-label="Keyboard key size"
        >
          {KEY_SIZE_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={keySize === option.value}
              className={`key-size-option${
                keySize === option.value ? " active" : ""
              }`}
              onClick={() => setKeySize(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
