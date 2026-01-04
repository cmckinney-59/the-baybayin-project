import { useState, useEffect } from "react";
import "./SettingsPage.css";
import SettingsOption from "../../components/SettingsOption/SettingsOption";

export default function SettingsPage() {
  const [showExperimentalFeatures, setShowExperimentalFeatures] = useState(
    () => {
      const saved = localStorage.getItem("showExperimentalFeatures");
      return saved ? JSON.parse(saved) : false;
    }
  );

  useEffect(() => {
    localStorage.setItem(
      "showExperimentalFeatures",
      JSON.stringify(showExperimentalFeatures)
    );
  }, [showExperimentalFeatures]);

  const toggleExperimentalFeatures = () => {
    setShowExperimentalFeatures((prev: boolean) => !prev);
  };

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev: boolean) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className="settingsPage">
      <h1>Settings</h1>
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
