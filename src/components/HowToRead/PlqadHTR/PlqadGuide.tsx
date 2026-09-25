import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";
import LatinCipherTable from "../LatinCipherTable";

export default function PlqadGuide() {
  return (
    <>
      <CollapsibleSection title="What Is pIqaD" defaultExpanded={false}>
        <p>
          pIqaD is the writing system associated with Klingon in Star Trek. The
          glyphs on screen began as decorative lettering. Fans and the Klingon
          Language Institute later paired those shapes with the sounds of the
          spoken language, which Marc Okrand invented for the films.
        </p>
        <p>
          This page offers two fonts. The default pIqaD font remaps a few
          Klingon letter pairs before drawing. Klinzhai mode treats the input
          as English and substitutes a glyph for each Latin letter.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title="How To Read" defaultExpanded={false}>
        <h3>Klinzhai (English input)</h3>
        <LatinCipherTable
          symbolHeader="Klinzhai Symbol"
          fontFamily="Plqad Klinzhai"
          description="Turn on “Input language is English” in Settings to use this font. Each Latin letter maps to one glyph, read left to right."
        />
        <h3>pIqaD</h3>
        <p>
          With that setting off, the page uses the pIqaD font. The on-screen
          keyboard adds keys for the Klingon groups ch, gh, ng, tlh, and Q
          alongside the Latin letters.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title="More Resources" defaultExpanded={false}>
        <ul className="resource-links">
          <ResourceLink href="https://www.kli.org/">
            Klingon Language Institute
          </ResourceLink>
          <ResourceLink href="https://en.wikipedia.org/wiki/Klingon_language">
            Wikipedia: Klingon language
          </ResourceLink>
        </ul>
      </CollapsibleSection>
    </>
  );
}
