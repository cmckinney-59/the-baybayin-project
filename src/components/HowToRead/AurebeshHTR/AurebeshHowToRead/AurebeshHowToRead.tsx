import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";
import AurebeshTable from "../AurebeshTable/AurebeshTable";
import AurebeshTableCombined from "../AurebeshTable/AurebeshTableCombined";
import AurebeshTablePunctuation from "../AurebeshTable/AurebeshTablePunctuation";
import AurebeshTableNumbers from "../AurebeshTable/AurebeshTableNumbers";

export default function AurebeshHowToRead() {
  return (
    <CollapsibleSection title="How To Read" defaultExpanded={false}>
      <AurebeshTable />
      <AurebeshTableCombined />
      <AurebeshTablePunctuation />
      <AurebeshTableNumbers />
    </CollapsibleSection>
  );
}
