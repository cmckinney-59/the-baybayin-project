import TransliteratorLite from "../../components/TransliteratorLite/TransliteratorLite";
import CollapsibleSection from "../../components/CollapsibleSection/CollapsibleSection";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";

export default function DeseretPage() {
  return (
    <WordsDictionaryProvider>
      <TransliteratorLite title="Deseret" />
      <CollapsibleSection title="About Deseret" defaultExpanded={false}>
        <p>Deseret is a writing system created by Brigham Young.</p>
      </CollapsibleSection>
    </WordsDictionaryProvider>
  );
}
