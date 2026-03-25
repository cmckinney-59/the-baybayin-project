import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";
import AurebeshTable from "../AurebeshTable/AurebeshTable";
import AurebeshTableCombined from "../AurebeshTable/AurebeshTableCombined";
import AurebeshTablePunctuation from "../AurebeshTable/AurebeshTablePunctuation";
import AurebeshTableNumbers from "../AurebeshTable/AurebeshTableNumbers";
import AurebeshTableUpperCase from "../AurebeshTable/AurebeshTableUpperCase";

export default function AurebeshHowToRead() {
  return (
    <CollapsibleSection title="How To Read" defaultExpanded={false}>
      <AurebeshTable />
      <AurebeshTablePunctuation />
      <AurebeshTableNumbers />
      <AurebeshTableCombined />
      <AurebeshTableUpperCase />
    </CollapsibleSection>
  );
}
