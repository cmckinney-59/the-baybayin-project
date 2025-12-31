import { useState, useEffect } from "react";
import "./SettingsPage.css";

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

  return (
    <div className="settingsPage">
      <h1>Settings</h1>
      <div className="setting-item">
        <h2>Show Experimental Features</h2>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={showExperimentalFeatures}
            onChange={toggleExperimentalFeatures}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>
    </div>
  );
}
