import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";
import HanunooTable from "../HanunooTable/HanunooTable";

export default function HanunooHowToRead() {
  return (
    <CollapsibleSection title="How To Read" defaultExpanded={false}>
      <HanunooTable />
    </CollapsibleSection>
  );
}
