import "./SettingsOption.css";

interface SettingsOptionProps {
  type: "checkbox" | "radio";
  label: string;
  checked: boolean;
  onChange: () => void;
  description?: string;
}

export default function SettingsOption({
  type,
  label,
  checked,
  onChange,
  description,
}: SettingsOptionProps) {
  return (
    <div className="setting-item">
      <div className="setting-copy">
        <h2>{label}</h2>
        {description ? <p className="setting-help">{description}</p> : null}
      </div>
      <label className="toggle-switch">
        <input type={type} checked={checked} onChange={onChange} />
        <span className="toggle-slider"></span>
      </label>
    </div>
  );
}
