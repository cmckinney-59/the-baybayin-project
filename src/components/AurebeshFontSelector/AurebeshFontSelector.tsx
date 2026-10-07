import {
  AUREBESH_FONTS,
  type AurebeshFontId,
} from "../../data/AurebeshData/AUREBESH_FONTS_DATA";

type AurebeshFontSelectorProps = {
  selectedFontId: AurebeshFontId;
  onChange: (fontId: AurebeshFontId) => void;
};

export default function AurebeshFontSelector({
  selectedFontId,
  onChange,
}: AurebeshFontSelectorProps) {
  return (
    <label className="baybayin-font-selector">
      <span className="baybayin-font-selector-label">Font:</span>
      <select
        value={selectedFontId}
        onChange={(e) => onChange(e.target.value as AurebeshFontId)}
        aria-label="Font"
      >
        {AUREBESH_FONTS.map((font) => {
          const notes = [
            font.useScope === "personal" ? "personal use" : null,
            font.webOnly ? "web only" : null,
          ].filter(Boolean);
          return (
            <option key={font.id} value={font.id}>
              {font.label}
              {notes.length ? ` (${notes.join(", ")})` : ""}
            </option>
          );
        })}
      </select>
    </label>
  );
}
