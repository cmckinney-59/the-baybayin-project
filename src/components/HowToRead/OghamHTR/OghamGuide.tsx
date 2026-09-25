import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";
import { OGHAM_LETTER } from "../../../data/OghamData/oghamKeyboardLayout";

const ALIASES = [
  ["J", "D"],
  ["K", "C"],
  ["V", "F"],
  ["W", "U"],
  ["Y", "I"],
] as const;

export default function OghamGuide() {
  const letters = Object.entries(OGHAM_LETTER);

  return (
    <>
      <CollapsibleSection title="What Is Ogham" defaultExpanded={false}>
        <p>
          Ogham is an alphabet used in early medieval Ireland and parts of
          Britain, mostly carved on the edges of standing stones. Letters are
          groups of strokes set against a central stemline. Most surviving
          inscriptions record names in Primitive Irish.
        </p>
        <p>
          This transliterator converts Latin letters into Unicode Ogham. A few
          modern letters share an older glyph, because classical Ogham did not
          have a separate sign for every letter in today&apos;s alphabet.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title="How To Read" defaultExpanded={false}>
        <p>
          Traditional Ogham is read vertically, starting at the bottom of the
          stem. This page writes the same letters in a horizontal line.{" "}
          <span className="ogham-letter">{OGHAM_LETTER.ng}</span> is the sign
          for ng.
        </p>
        <table className="alphabet-table">
          <thead>
            <tr>
              <th>Ogham</th>
              <th>Latin</th>
            </tr>
          </thead>
          <tbody>
            {letters.map(([latin, glyph]) => (
              <tr key={latin}>
                <td className="ogham-letter">{glyph}</td>
                <td>{latin}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Shared letters</h3>
        <table className="alphabet-table">
          <thead>
            <tr>
              <th>Typed letter</th>
              <th>Uses the glyph for</th>
            </tr>
          </thead>
          <tbody>
            {ALIASES.map(([typed, shared]) => (
              <tr key={typed}>
                <td>{typed}</td>
                <td>{shared}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CollapsibleSection>
      <CollapsibleSection title="More Resources" defaultExpanded={false}>
        <ul className="resource-links">
          <ResourceLink href="https://omniglot.com/writing/ogham.htm">
            Omniglot
          </ResourceLink>
          <ResourceLink href="https://en.wikipedia.org/wiki/Ogham">
            Wikipedia
          </ResourceLink>
        </ul>
      </CollapsibleSection>
    </>
  );
}
