import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";
import DeseretTable from "../DeseretTable/DeseretTable";

export default function DeseretHowToRead() {
  return (
    <CollapsibleSection title="How To Read" defaultExpanded={false}>
      <DeseretTable />
    </CollapsibleSection>
  );
}
