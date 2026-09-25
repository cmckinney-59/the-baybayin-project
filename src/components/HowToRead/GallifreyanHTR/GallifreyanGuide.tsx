import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";
import LatinCipherTable from "../LatinCipherTable";

export default function GallifreyanGuide() {
  return (
    <>
      <CollapsibleSection title="What Is Gallifreyan" defaultExpanded={false}>
        <p>
          Gallifreyan is a fan-made writing system for the Time Lords of Doctor
          Who. The best-known forms, such as Sherman&apos;s Gallifreyan, are
          circular diagrams where letter shapes stack into words.
        </p>
        <p>
          This transliterator uses a simplified Gallifreyan font. Each Latin
          letter becomes one glyph in a straight line, so it is easier to type
          than the circular charts.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title="How To Read" defaultExpanded={false}>
        <LatinCipherTable
          symbolHeader="Gallifreyan Symbol"
          fontFamily="Gallifreyan"
          description="Each Latin letter maps to one simplified Gallifreyan glyph. Read left to right. Circular Gallifreyan charts use a different system."
        />
      </CollapsibleSection>
      <CollapsibleSection title="More Resources" defaultExpanded={false}>
        <ul className="resource-links">
          <ResourceLink href="https://www.shermansplanet.com/gallifreyan/">
            Sherman&apos;s Gallifreyan
          </ResourceLink>
        </ul>
      </CollapsibleSection>
    </>
  );
}
