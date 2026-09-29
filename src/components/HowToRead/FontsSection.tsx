import CollapsibleSection from "../CollapsibleSection/CollapsibleSection";
import { useAlphabet } from "../../contexts/AlphabetContext";
import { getFontTableRows } from "../../data/FONTS_TABLE_DATA";
import FontsTable from "./FontsTable";

export default function FontsSection() {
  const { currentAlphabet } = useAlphabet();
  const rows = getFontTableRows(currentAlphabet);

  if (!currentAlphabet || rows.length === 0) {
    return null;
  }

  return (
    <CollapsibleSection title="Fonts" defaultExpanded={false}>
      <p>Download and install a font to see this alphabet in Word or Excel.</p>
      <FontsTable />
    </CollapsibleSection>
  );
}
