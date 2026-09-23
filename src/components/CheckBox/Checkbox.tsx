interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  title?: string;
  disabled?: boolean;
}

export default function Checkbox({
  checked,
  onChange,
  label,
  title,
  disabled = false,
}: CheckboxProps) {
  return (
    <label
      className={`checkbox-label${disabled ? " checkbox-label--disabled" : ""}`}
      title={title}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}
