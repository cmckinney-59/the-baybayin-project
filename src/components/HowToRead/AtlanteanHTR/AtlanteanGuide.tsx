import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";
import LatinCipherTable from "../LatinCipherTable";

export default function AtlanteanGuide() {
  return (
    <>
      <CollapsibleSection title="What Is Atlantean" defaultExpanded={false}>
        <p>
          Atlantean is the constructed language and alphabet created for the
          film Atlantis: The Lost Empire. Linguist Marc Okrand designed the
          spoken language, and John Emerson designed the letters. In the film
          the script is written in alternating directions, one line left to
          right and the next right to left.
        </p>
        <p>
          This transliterator uses an Atlantean font as a letter-for-letter
          stand-in for the Latin alphabet, so you can type English and read it
          in those glyphs.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title="How To Read" defaultExpanded={false}>
        <LatinCipherTable
          symbolHeader="Atlantean Symbol"
          fontFamily="Atlantean"
          description="Each Latin letter maps to one Atlantean glyph. Type as you normally would and the font draws the matching symbol. This page writes left to right."
        />
      </CollapsibleSection>
      <CollapsibleSection title="More Resources" defaultExpanded={false}>
        <ul className="resource-links">
          <ResourceLink href="https://omniglot.com/conscripts/atlantean.htm">
            Omniglot
          </ResourceLink>
        </ul>
      </CollapsibleSection>
    </>
  );
}
