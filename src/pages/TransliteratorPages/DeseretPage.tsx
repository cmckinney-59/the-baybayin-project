import TransliteratorLite from "../../components/TransliteratorLite/TransliteratorLite";
import CollapsibleSection from "../../components/CollapsibleSection/CollapsibleSection";

export default function DeseretPage() {
  return (
    <>
      <TransliteratorLite title="Deseret" />
      <CollapsibleSection title="About Deseret" defaultExpanded={false}>
        <p>
          Deseret is a writing system used by the Deseret Alphabet, a writing
          system created by Joseph Smith in 1830. It is a phonetic writing
          system that uses a combination of letters and symbols to represent
          sounds.
        </p>
      </CollapsibleSection>
    </>
  );
}
