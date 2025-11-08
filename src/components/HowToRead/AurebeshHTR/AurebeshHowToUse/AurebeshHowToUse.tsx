import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";
import DownloadFontButton from "../../../Buttons/DownloadFontButton";

export default function AurebeshHowToUse() {
  return (
    <CollapsibleSection title="How To Use" defaultExpanded={false}>
      <p>Type in text to transliterate in real-time.</p>
      <p>
        Click a button below transliterator to save to Excel, Word, or copy to
        clipboard.
      </p>
      <p>
        Download and install the Aurebesh font to see the script in Word or
        Excel.
      </p>
      <DownloadFontButton />
    </CollapsibleSection>
  );
}
