import {
  BAYBAYIN_FONTS,
  type BaybayinFontId,
} from "../../data/BaybayinData/BAYBAYIN_FONTS_DATA";

type BaybayinFontSelectorProps = {
  selectedFontId: BaybayinFontId;
  onChange: (fontId: BaybayinFontId) => void;
};

export default function BaybayinFontSelector({
  selectedFontId,
  onChange,
}: BaybayinFontSelectorProps) {
  return (
    <label className="baybayin-font-selector">
      <span className="baybayin-font-selector-label">Baybayin font</span>
      <select
        value={selectedFontId}
        onChange={(e) => onChange(e.target.value as BaybayinFontId)}
        aria-label="Baybayin font"
      >
        {BAYBAYIN_FONTS.map((font) => (
          <option key={font.id} value={font.id}>
            {font.label}
          </option>
        ))}
      </select>
    </label>
  );
}
