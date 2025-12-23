import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";
import BorrowedWordsContainer from "./BorrowedWordsContainer";

export default function BaybayinBorrowedWordsCollapsible() {
  return (
    <CollapsibleSection title="Borrowed Words" defaultExpanded={false}>
      <BorrowedWordsContainer />
    </CollapsibleSection>
  );
}
