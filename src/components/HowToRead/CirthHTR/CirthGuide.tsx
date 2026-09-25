import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";
import LatinCipherTable from "../LatinCipherTable";

export default function CirthGuide() {
  return (
    <>
      <CollapsibleSection title="What Is Cirth" defaultExpanded={false}>
        <p>
          Cirth is the runic alphabet invented by J.R.R. Tolkien. In his
          stories it was used for inscriptions in Elvish, Dwarvish, and other
          tongues of Middle-earth. Different peoples rearranged the runes to
          fit their own sounds, so one Cirth letter does not always stand for
          the same sound.
        </p>
        <p>
          This transliterator uses a Cirth font as a letter-for-letter stand-in
          for the Latin alphabet, which is the usual way fans write English in
          Cirth.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title="How To Read" defaultExpanded={false}>
        <LatinCipherTable
          symbolHeader="Cirth Symbol"
          fontFamily="Cirth"
          description="Each Latin letter maps to one rune. Read left to right. Tolkien’s original Cirth were phonetic and varied by language; this chart matches the font used here."
        />
      </CollapsibleSection>
      <CollapsibleSection title="More Resources" defaultExpanded={false}>
        <ul className="resource-links">
          <ResourceLink href="https://www.omniglot.com/conscripts/cirth.htm">
            Omniglot
          </ResourceLink>
        </ul>
      </CollapsibleSection>
    </>
  );
}
