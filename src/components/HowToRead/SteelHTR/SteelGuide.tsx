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
          This transliterator uses the Steel font by Claincy (Colin M.) as a
          letter-for-letter stand-in for the Latin alphabet. Claincy credits
          the letter assignments to the 17th Shard translation of the cover of
          Treatise on Metallurgics.
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
          <ResourceLink href="https://www.17thshard.com/blogs/entry/455-steel-alphabet-font/">
            Claincy: Steel Alphabet Font
          </ResourceLink>
          <ResourceLink href="https://coppermind.net/wiki/Steel_alphabet">
            Coppermind: Steel alphabet
          </ResourceLink>
          <ResourceLink href="http://www.17thshard.com/forum/topic/1905-translation-of-the-cover-page-of-the-treatise-metallurgic/">
            17th Shard: letter assignments
          </ResourceLink>
        </ul>
      </CollapsibleSection>
    </>
  );
}
