import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";
import {
  TENGWAR_CONSONANTS,
  TENGWAR_VOWELS,
  TENGWAR_WORD,
} from "../../../data/TengwarData/tengwarEncoding";
import processTengwarText from "../../../utils/TextProcessors/TengwarTextProcessor";

const SAMPLES = ["hello", "the ring", "Bilbo", "time", "see"];

export default function TengwarHowToAndResources() {
  return (
    <>
      <CollapsibleSection title="How To Read" defaultExpanded={false}>
        <p>
          This page writes English in the tengwar mode used on the title page
          of <em>The Lord of the Rings</em>. A vowel mark sits on the consonant
          that follows it, and you read the mark first. A vowel with no
          consonant after it sits on a short carrier. A doubled ee or oo uses
          the long carrier. A final e after a consonant is a dot written under
          that consonant. The words “the”, “of”, and “and” are each a single
          letter, as in that inscription.
        </p>
        <table className="alphabet-table">
          <thead>
            <tr>
              <th>Tengwar</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLES.map((word) => (
              <tr key={word}>
                <td className="tengwar-letter">{processTengwarText(word)}</td>
                <td>{word}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Consonants</h3>
        <table className="alphabet-table">
          <thead>
            <tr>
              <th>Tengwar</th>
              <th>Latin</th>
            </tr>
          </thead>
          <tbody>
            {TENGWAR_CONSONANTS.map((row) => (
              <tr key={row.latin}>
                <td className="tengwar-letter">{row.base}</td>
                <td>{row.latin}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Vowels</h3>
        <p>
          These are the vowel marks on a carrier. On a word they move onto the
          following consonant.
        </p>
        <table className="alphabet-table">
          <thead>
            <tr>
              <th>Tehta</th>
              <th>Latin</th>
            </tr>
          </thead>
          <tbody>
            {TENGWAR_VOWELS.map((row) => (
              <tr key={row.latin}>
                <td className="tengwar-letter">{row.sample}</td>
                <td>{row.latin}</td>
              </tr>
            ))}
            {Object.entries(TENGWAR_WORD).map(([word, glyph]) => (
              <tr key={word}>
                <td className="tengwar-letter">{glyph}</td>
                <td>{word}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CollapsibleSection>
      <CollapsibleSection title="More Resources" defaultExpanded={false}>
        <ul className="resource-links">
          <ResourceLink href="https://www.acondia.com/fonts/">
            Dan Smith&apos;s Fantasy Fonts
          </ResourceLink>
          <ResourceLink href="https://www.omniglot.com/conscripts/tengwar.htm">
            Omniglot
          </ResourceLink>
          <ResourceLink href="https://www.tecendil.com/">Tecendil</ResourceLink>
        </ul>
      </CollapsibleSection>
    </>
  );
}
