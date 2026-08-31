import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";
import TagbanwaTable from "../TagbanwaTable/TagbanwaTable";

export default function TagbanwaHowToRead() {
  return (
    <CollapsibleSection title="How To Read" defaultExpanded={false}>
      <TagbanwaTable />
    </CollapsibleSection>
  );
}
