import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import AurebeshTable from "./AurebeshTable";
import { AUREBESH_DATA } from "../../../data/AUREBESH_DATA";

export default function AurebeshHowToRead() {
  return (
    <CollapsibleSection title="How To Read" defaultExpanded={false}>
      <AurebeshTable
        type="basic"
        data={AUREBESH_DATA}
        title="Basic Letters"
        headers={["Aurebesh Symbol", "Latin Letter", "Aurebesh Name"]}
      />
      <AurebeshTable
        type="punctuation"
        data={AUREBESH_DATA}
        title="Punctuation"
        headers={["Aurebesh Symbol", "Punctuation"]}
      />
      <AurebeshTable
        type="number"
        data={AUREBESH_DATA}
        title="Numbers"
        description="
        There are two types of numbers in used in Aurebesh. The first is styled
        similar to arabic numbers, the second are numerals that somewhat
        resemble braille."
        headers={["Arabic Styled", "Tech Numeral"]}
      />
      <AurebeshTable
        type="combined"
        data={AUREBESH_DATA}
        title="Combination Symbols (Ligatures)"
        description="
        There are some canon Aurebesh tables that contain the following symbols.
        These are almost never used in official canon material. They are less
        rare in legends material and some users prefer to use them often for
        artistic purposes."
        headers={["Aurebesh Symbol", "Latin Letter", "Aurebesh Name"]}
      />
    </CollapsibleSection>
  );
}
