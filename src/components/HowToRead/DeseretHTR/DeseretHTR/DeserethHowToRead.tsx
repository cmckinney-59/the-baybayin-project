import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";
import DeseretTable from "../DeseretTable/DeseretTable";
import DeseretTableCombined from "../DeseretTable/DeseretTableCombined";
import DeseretTablePunctuation from "../DeseretTable/DeseretTablePunctuation";
import DeseretTableNumbers from "../DeseretTable/DeseretTableNumbers";
import DeseretTableLowerCase from "../DeseretTable/DeseretTableLowerCase";

export default function DeseretHowToRead() {
  return (
    <CollapsibleSection title="How To Read" defaultExpanded={false}>
      <DeseretTable />
      <DeseretTableCombined />
      <DeseretTablePunctuation />
      <DeseretTableNumbers />
      <DeseretTableLowerCase />
    </CollapsibleSection>
  );
}
