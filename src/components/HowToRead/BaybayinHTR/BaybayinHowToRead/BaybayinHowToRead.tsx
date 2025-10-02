import "./BaybayinHowToRead.css";
import BaybayinTable from "../BaybayinTable/BaybayinTable";
import BaybayinTableBorrowed from "../BaybayinTable/BaybayinTableBorrowed";
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
            <th className="baybayin-letter">a</th>
            <th className="baybayin-letter">m</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ama</td>
            <td>a</td>
            <td>ma</td>
          </tr>
        </tbody>
      </table>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">maari</th>
            <th className="baybayin-letter">m</th>
            <th className="baybayin-letter">a</th>
            <th className="baybayin-letter">a</th>
            <th className="baybayin-letter">ri</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>maaari</td>
            <td>ma</td>
            <td>a</td>
            <td>a</td>
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
            <th className="baybayin-letter">b</th>
            <th className="baybayin-letter">k</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>baka</td>
            <td>ba</td>
            <td>ka</td>
          </tr>
        </tbody>
      </table>
      <p>
        The next two symbols are called "kudlits". A kudlit is added either
        above or below a consonant symbol to modify which vowel follows. If a
        kudlit is added above the vowel that follows is either an "i" or an "e".
        If a kudlit is added above the vowel that follows is either an "o" or a
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
            <th className="baybayin-letter">fi</th>
            <th className="baybayin-letter">li</th>
            <th className="baybayin-letter">pi</th>
            <th className="baybayin-letter">no</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Filipino</td>
            <td>fi</td>
            <td>li</td>
            <td>pi</td>
            <td>no</td>
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
            <th className="baybayin-letter">N+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>aking</td>
            <td>a</td>
            <td>ki</td>
            <td>ng</td>
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
            <th className="baybayin-letter">n</th>
            <th className="baybayin-letter">N+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>nang</td>
            <td>na</td>
            <td>ng</td>
          </tr>
        </tbody>
      </table>

      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">mN</th>
            <th className="baybayin-letter">m</th>
            <th className="baybayin-letter">N</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>manga</td>
            <td>ma</td>
            <td>nga</td>
          </tr>
        </tbody>
      </table>

      <h2>Borrowed words</h2>
      <p>
        There are many words in Tagalog that have been borrowed from other
        languages. Most notably from Spanish and English. This is why, when
        transliterating modern Tagalog into Baybayin, many symbols represent two
        or more letters from the Latin alphabet OR are a combination of symbols
        to produce a similar sound. Here is a table of the most notable borrowed
        sounds and how they are expressed in Baybayin:
      </p>
      <BaybayinTableBorrowed />
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
            <th className="baybayin-letter">a</th>
            <th className="baybayin-letter">m</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ama</td>
            <td>a</td>
            <td>ma</td>
          </tr>
        </tbody>
      </table>
    </CollapsibleSection>
  );
}
