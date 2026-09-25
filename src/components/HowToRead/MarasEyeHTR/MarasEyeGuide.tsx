import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";
import LatinCipherTable from "../LatinCipherTable";

export default function MarasEyeGuide() {
  return (
    <>
      <CollapsibleSection title="What Is Mara's Eye" defaultExpanded={false}>
        <p>
          Mara&apos;s Eye is the fictional script seen in the Indiana Jones
          Adventure attractions. The angular letters are used as a stand-in
          alphabet for English on temple carvings and ride signage.
        </p>
        <p>
          This transliterator maps each Latin letter to the matching Mara&apos;s
          Eye glyph.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title="How To Read" defaultExpanded={false}>
        <LatinCipherTable
          symbolHeader="Mara's Eye Symbol"
          fontFamily="Maras Eye"
          description="Each Latin letter maps to one glyph. Read left to right."
        />
      </CollapsibleSection>
      <CollapsibleSection title="More Resources" defaultExpanded={false}>
        <ul className="resource-links">
          <ResourceLink href="https://en.wikipedia.org/wiki/Indiana_Jones_Adventure">
            Indiana Jones Adventure
          </ResourceLink>
        </ul>
      </CollapsibleSection>
    </>
  );
}
