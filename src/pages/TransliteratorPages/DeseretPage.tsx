import TransliteratorLite from "../../components/TransliteratorLite/TransliteratorLite";
import CollapsibleSection from "../../components/CollapsibleSection/CollapsibleSection";

export default function DeseretPage() {
  return (
    <>
      <TransliteratorLite title="Deseret" />
      <CollapsibleSection title="About Deseret" defaultExpanded={false}>
        <p>Deseret is a writing system created by Brigham Young.</p>
      </CollapsibleSection>
    </>
  );
}
