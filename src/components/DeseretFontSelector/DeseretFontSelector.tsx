import {
  DESERET_FONTS,
  type DeseretFontId,
} from "../../data/DeseretData/DESERET_FONTS_DATA";

type DeseretFontSelectorProps = {
  selectedFontId: DeseretFontId;
  onChange: (fontId: DeseretFontId) => void;
};

export default function DeseretFontSelector({
  selectedFontId,
  onChange,
}: DeseretFontSelectorProps) {
  return (
    <label className="baybayin-font-selector">
      <span className="baybayin-font-selector-label">Font:</span>
      <select
        value={selectedFontId}
        onChange={(e) => onChange(e.target.value as DeseretFontId)}
        aria-label="Font"
      >
        {DESERET_FONTS.map((font) => (
          <option key={font.id} value={font.id}>
            {font.label}
          </option>
        ))}
      </select>
    </label>
  );
}
