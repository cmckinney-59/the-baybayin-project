import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";
import LatinCipherTable from "../LatinCipherTable";

export default function MatoranGuide() {
  return (
    <>
      <CollapsibleSection title="What Is Matoran" defaultExpanded={false}>
        <p>
          The Matoran alphabet is the writing system of the Bionicle universe.
          It is used both for the fictional Matoran language and as a
          letter-for-letter cipher of English. Rounded and hexagonal versions of
          the letters appear on sets, comics, and packaging.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title="How To Read" defaultExpanded={false}>
        <LatinCipherTable
          symbolHeader="Matoran Symbol"
          fontFamily="Matoran"
          description="Each Latin letter maps to one Matoran glyph. Read left to right."
        />
      </CollapsibleSection>
      <CollapsibleSection title="More Resources" defaultExpanded={false}>
        <ul className="resource-links">
          <ResourceLink href="https://www.omniglot.com/conscripts/matoran.php">
            Omniglot
          </ResourceLink>
        </ul>
      </CollapsibleSection>
    </>
  );
}
