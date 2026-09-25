import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";
import LatinCipherTable from "../LatinCipherTable";

export default function TengwarHowToAndResources() {
  return (
    <>
      <CollapsibleSection title="How To Read" defaultExpanded={false}>
        <LatinCipherTable
          symbolHeader="Tengwar Symbol"
          fontFamily="Tengwar"
          description="Tolkien's Tengwar is a phonetic script: letters stand for sounds, and vowel marks usually sit above the consonants. This transliterator uses a font that places one Tengwar-style glyph on each Latin letter, so you can type English and read it left to right."
        />
      </CollapsibleSection>
      <CollapsibleSection title="More Resources" defaultExpanded={false}>
        <ul className="resource-links">
          <ResourceLink href="https://www.omniglot.com/conscripts/tengwar.htm">
            Omniglot
          </ResourceLink>
          <ResourceLink href="https://www.tecendil.com/">Tecendil</ResourceLink>
        </ul>
      </CollapsibleSection>
    </>
  );
}
