import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";
import BuhidTable from "../BuhidTable/BuhidTable";

export default function BuhidHowToRead() {
  return (
    <CollapsibleSection title="How To Read" defaultExpanded={false}>
      <BuhidTable />
    </CollapsibleSection>
  );
}
