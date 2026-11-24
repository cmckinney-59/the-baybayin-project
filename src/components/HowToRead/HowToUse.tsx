import CollapsibleSection from "../CollapsibleSection/CollapsibleSection";
import { useAlphabet } from "../../contexts/AlphabetContext";

export default function HowToUse() {
  const { currentAlphabet } = useAlphabet();

  return (
    <CollapsibleSection title="How To Use" defaultExpanded={false}>
      <p>Type in text to transliterate in real-time.</p>
      <p>
        Copy or Save your transliterated text as Excel, Word, or a Word Parallel document.
      </p>
      {currentAlphabet === "Atlantean" ||
      currentAlphabet === "Ancients" ||
      currentAlphabet === "Unown" ? (
        <p>The letters show in the transliterator on this page.</p>
      ) : (
        <p>Download and install the font to see it in Word or Excel.</p>
      )}
    </CollapsibleSection>
  );
}
