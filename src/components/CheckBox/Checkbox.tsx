interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  title?: string;
}

export default function Checkbox({
  checked,
  onChange,
  label,
  title,
}: CheckboxProps) {
  return (
    <label className="checkbox-label" title={title}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}
