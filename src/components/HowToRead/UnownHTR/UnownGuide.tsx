import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";
import LatinCipherTable from "../LatinCipherTable";

export default function UnownGuide() {
  return (
    <>
      <CollapsibleSection title="What Is Unown" defaultExpanded={false}>
        <p>
          Unown is the alphabet-shaped Pokémon. Each of the 26 forms looks like
          a Latin letter, and the games and anime treat those shapes as a
          cipher for English. Messages written in Unown are read by matching
          each creature to its letter.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title="How To Read" defaultExpanded={false}>
        <LatinCipherTable
          symbolHeader="Unown"
          fontFamily="Unown"
          description="Each Latin letter maps to one Unown form. Read left to right."
        />
      </CollapsibleSection>
      <CollapsibleSection title="More Resources" defaultExpanded={false}>
        <ul className="resource-links">
          <ResourceLink href="https://bulbapedia.bulbagarden.net/wiki/Unown_(Pok%C3%A9mon)">
            Bulbapedia
          </ResourceLink>
        </ul>
      </CollapsibleSection>
    </>
  );
}
