import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";
import LatinCipherTable from "../LatinCipherTable";

export default function SteelGuide() {
  return (
    <>
      <CollapsibleSection title="What Is the Steel Alphabet" defaultExpanded={false}>
        <p>
          The Steel alphabet is a fan script for the Metallic Arts in Brandon
          Sanderson&apos;s Mistborn novels. Allomancers burn metals, and the
          letters are often drawn like the metal symbols used in the books.
        </p>
        <p>
          This transliterator uses a Steel font as a letter-for-letter stand-in
          for the Latin alphabet.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title="How To Read" defaultExpanded={false}>
        <LatinCipherTable
          symbolHeader="Steel Symbol"
          fontFamily="Steel"
          description="Each Latin letter maps to one Steel glyph. Read left to right."
        />
      </CollapsibleSection>
      <CollapsibleSection title="More Resources" defaultExpanded={false}>
        <ul className="resource-links">
          <ResourceLink href="https://coppermind.net/wiki/Steel_alphabet">
            Coppermind: Steel alphabet
          </ResourceLink>
        </ul>
      </CollapsibleSection>
    </>
  );
}
