import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";
import AurebeshTable from "../AurebeshTable/AurebeshTable";
import AurebeshTableCombined from "../AurebeshTable/AurebeshTableCombined";
import AurebeshTablePunctuation from "../AurebeshTable/AurebeshTablePunctuation";
import AurebeshTableNumbers from "../AurebeshTable/AurebeshTableNumbers";
import AurebeshTableLowerCase from "../AurebeshTable/AurebeshTableLowerCase";

export default function AurebeshHowToRead() {
  return (
    <CollapsibleSection title="How To Read" defaultExpanded={false}>
      <AurebeshTable />
      <AurebeshTableCombined />
      <AurebeshTablePunctuation />
      <AurebeshTableNumbers />
      <AurebeshTableLowerCase />
    </CollapsibleSection>
  );
}
