import BaybayinTable from "../BaybayinTable/BaybayinTable";
import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";

export default function BaybayinHowToRead() {
  return (
    <CollapsibleSection title="How To Read" defaultExpanded={false}>
      <p>
        Below is a table of the symbols used in "Modified Baybayin" alphabet.
        This is the most popular form of the script.
      </p>
      <BaybayinTable />

      <h2>Examples</h2>
      <p>
        The first three symbols in the table represent vowels. Tagalog vowels
        originally only consisted of A, I and O. Then when borrowed words were
        introduced from Spanish and English, E and U were added and utilized the
        same symbol as I and O respectively. These are typically used when a
        word starts with a vowel, like “ama”, or when there are two consecutive
        vowels, like “maaari”. See examples below:
      </p>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">am</th>
            <th className="baybayin-letter-blue">a</th>
            <th className="baybayin-letter">m</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ama</td>
            <td className="letter-blue">a</td>
            <td>ma</td>
          </tr>
        </tbody>
      </table>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">maari</th>
            <th className="baybayin-letter">m</th>
            <th className="baybayin-letter-blue">a</th>
            <th className="baybayin-letter-blue">a</th>
            <th className="baybayin-letter">ri</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>maaari</td>
            <td>ma</td>
            <td className="letter-blue">a</td>
            <td className="letter-blue">a</td>
            <td>ri</td>
          </tr>
        </tbody>
      </table>
      <p>
        The next fourteen rows show the base symbols for consonants. By default
        all of the consonant symbols have an “a” after the associated consonant,
        making them “syllabic”. For example if you wanted to write the word “ba”
        or “ka” they would both be the symbol associated with the respective
        consonant without a mark above or below (more on that later). See
        example below:
      </p>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">bk</th>
            <th className="baybayin-letter-blue">b</th>
            <th className="baybayin-letter-blue">k</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>baka</td>
            <td className="letter-blue">ba</td>
            <td className="letter-blue">ka</td>
          </tr>
        </tbody>
      </table>
      <p>
        The next two symbols are called "kudlits". A kudlit is added either
        above or below a consonant symbol to modify which vowel follows. If a
        kudlit is added above the vowel that follows is either an "i" or an "e".
        If a kudlit is added below the vowel that follows is either an "o" or a
        "u".
      </p>
      <p>
        In the word “filipino” the first three symbols will have kudlits above
        because they are followed by “i”. The last symbol will have a kudlit
        below because it is followed by an “o”. See example below:
      </p>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">filipino</th>
            <th className="baybayin-letter-blue">fi</th>
            <th className="baybayin-letter-blue">li</th>
            <th className="baybayin-letter-blue">pi</th>
            <th className="baybayin-letter-blue">no</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Filipino</td>
            <td className="letter-blue">fi</td>
            <td className="letter-blue">li</td>
            <td className="letter-blue">pi</td>
            <td className="letter-blue">no</td>
          </tr>
        </tbody>
      </table>
      <p>
        The final symbol in the table is the "krus" kudlit. This again modifies
        a consonant symbol by making it a standalone consonant. In the word
        “aking” the symbol for “ng” has a krus kudlit below because it is not
        followed by a vowel. See example below:
      </p>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">akiN+</th>
            <th className="baybayin-letter">a</th>
            <th className="baybayin-letter">ki</th>
            <th className="baybayin-letter-blue">N+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>aking</td>
            <td>a</td>
            <td>ki</td>
            <td className="letter-blue">ng</td>
          </tr>
        </tbody>
      </table>
      <h2>The First Rule of Baybayin</h2>
      <p>"Kung anong bigkas, siyang baybay."</p>
      <p>
        Baybayin is a phonetic alphabet meaning, words are written how they
        sound not necessarily as they are expressed in the Latin alphabet. The
        most common examples of this are "ng" and "mga". These two words are
        pronounced "nang" and "manga" and should be expressed as such when
        written in Baybayin.
      </p>

      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">nN+</th>
            <th className="baybayin-letter-blue">n</th>
            <th className="baybayin-letter">N+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>nang (ng)</td>
            <td className="letter-blue">na</td>
            <td>ng</td>
          </tr>
        </tbody>
      </table>

      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">mN</th>
            <th className="baybayin-letter-blue">m</th>
            <th className="baybayin-letter">N</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>manga (mga)</td>
            <td className="letter-blue">ma</td>
            <td>nga</td>
          </tr>
        </tbody>
      </table>
    </CollapsibleSection>
  );
}
