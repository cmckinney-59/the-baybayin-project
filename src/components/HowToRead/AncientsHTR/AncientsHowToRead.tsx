import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import AncientsTable from "./AncientsTable";

export default function AncientsHowToRead() {
  return (
    <CollapsibleSection title="How To Read" defaultExpanded={false}>
      <AncientsTable />
    </CollapsibleSection>
  );
}
