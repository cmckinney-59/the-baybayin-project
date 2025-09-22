import TransliteratorLite from "../../components/TransliteratorLite/TransliteratorLite";
import CollapsibleSection from "../../components/CollapsibleSection/CollapsibleSection";

export default function AurebeshPage() {
  return (
    <>
      <TransliteratorLite title="Aurebesh" />
      <CollapsibleSection title="About Aurebesh" defaultExpanded={false}>
        <p>Aurebesh is a writing system used by the Aurebesh Alphabet.</p>
      </CollapsibleSection>
    </>
  );
}
