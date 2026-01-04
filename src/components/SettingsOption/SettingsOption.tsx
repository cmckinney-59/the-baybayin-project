import { useState, useEffect } from "react";
import "./SettingsPage.css";

interface SettingsOptionProps {
  type: "checkbox" | "radio";
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function SettingsOption({
  type,
  label,
  checked,
  onChange,
}: SettingsOptionProps) {
  return (
    <div className="setting-item">
      <h2>{label}</h2>
      <label className="toggle-switch">
        <input type={type} checked={checked} onChange={onChange} />
        <span className="toggle-slider"></span>
      </label>
    </div>
  );
}
