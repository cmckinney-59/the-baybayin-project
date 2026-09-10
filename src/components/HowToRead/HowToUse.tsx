import CollapsibleSection from "../CollapsibleSection/CollapsibleSection";
import FontsTable from "./FontsTable";

export default function HowToUse() {
  return (
    <CollapsibleSection title="How To Use" defaultExpanded={false}>
      <p>Type in text to transliterate in real-time.</p>
      <p>
        Copy or Save your transliterated text as Excel, Word, or a Word Parallel document.
      </p>
      <p>Download and install the font to see it in Word or Excel.</p>
      <FontsTable />
    </CollapsibleSection>
  );
}
