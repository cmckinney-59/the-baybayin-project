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
        to produce a similar sound. Many words when expressed in Baybayin will
        first be "Tagalized" or in other words, they are written phonetically
        using the Roman alphabet. (more on these later) Here is a table of the
        most notable borrowed sounds and how they are expressed in Baybayin:
      </p>

      <BaybayinTableBorrowed />
      <h2>Examples</h2>
      <p>
        In the following section, each example table will contain a Baybayin, a
        Tagalized, and an original version of the word.
      </p>
      <p>
        Some are a combination of symbols used to mimic certain sounds like
        "siy" or "sy" (informal) for "sh" and "f" for "ph". See examples below:
      </p>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">siym+pu</th>
            <th className="baybayin-letter">siy | s+y</th>
            <th className="baybayin-letter">m+</th>
            <th className="baybayin-letter">pu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>siyampu</td>
            <td>siya | sya</td>
            <td>m</td>
            <td>pu</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>shampoo</td>
            <td>sha</td>
            <td>m</td>
            <td>poo</td>
          </tr>
        </tbody>
      </table>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">filipin+s+</th>
            <th className="baybayin-letter">fi</th>
            <th className="baybayin-letter">li</th>
            <th className="baybayin-letter">pi</th>
            <th className="baybayin-letter">n+</th>
            <th className="baybayin-letter">s+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Filipins</td>
            <td>Fi</td>
            <td>li</td>
            <td>pi</td>
            <td>n</td>
            <td>s</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Philippines</td>
            <td>Phi</td>
            <td>li</td>
            <td>ppi</td>
            <td>ne</td>
            <td>s</td>
          </tr>
        </tbody>
      </table>
      <p>
        Some letters are borrowed from both Spanish and English but make
        different sounds according to the context. These are mainly "diy" or
        "dy" (informal) for "j" and "kuw" for "qu". See examples below:
      </p>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">kuwes+tiOn+</th>
            <th className="baybayin-letter">kuwe</th>
            <th className="baybayin-letter">s+</th>
            <th className="baybayin-letter">tyo</th>
            <th className="baybayin-letter">n+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>kuwestion</td>
            <td>kuwe</td>
            <td>s</td>
            <td>tyo</td>
            <td>n</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>question</td>
            <td>que</td>
            <td>s</td>
            <td>tio</td>
            <td>n</td>
          </tr>
        </tbody>
      </table>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">kezon+</th>
            <th className="baybayin-letter">ke</th>
            <th className="baybayin-letter">zo</th>
            <th className="baybayin-letter">n+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Keson</td>
            <td>Ke</td>
            <td>so</td>
            <td>n</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Quezon</td>
            <td>Que</td>
            <td>zo</td>
            <td>n</td>
          </tr>
        </tbody>
      </table>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">diyesus+</th>
            <th className="baybayin-letter">diye | d+ye</th>
            <th className="baybayin-letter">su</th>
            <th className="baybayin-letter">s+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Diyesus</td>
            <td>Diye (Dye)</td>
            <td>su</td>
            <td>s</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className="baybayin-letter">hesus+</th>
            <th className="baybayin-letter">he</th>
            <th className="baybayin-letter">su</th>
            <th className="baybayin-letter">s+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hesus</td>
            <td>He</td>
            <td>su</td>
            <td>s</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Jesus</td>
            <td>Je</td>
            <td>su</td>
            <td>s</td>
          </tr>
        </tbody>
      </table>

      <p>
        The letter C contributes to forming multiple different sounds in various
        borrowed words. It can be expressed having an "s", "k" or "ch" sound.
        The "ch" sound is expressed by "ts". See examples below:
      </p>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">sen+t+ro</th>
            <th className="baybayin-letter">se</th>
            <th className="baybayin-letter">n+</th>
            <th className="baybayin-letter">t+</th>
            <th className="baybayin-letter">ro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sentro</td>
            <td>se</td>
            <td>n</td>
            <td>t</td>
            <td>ro</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>centro</td>
            <td>ce</td>
            <td>n</td>
            <td>t</td>
            <td>ro</td>
          </tr>
        </tbody>
      </table>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">sek+reto</th>
            <th className="baybayin-letter">se</th>
            <th className="baybayin-letter">k+</th>
            <th className="baybayin-letter">re</th>
            <th className="baybayin-letter">to</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sekreto</td>
            <td>se</td>
            <td>k</td>
            <td>re</td>
            <td>to</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>secreto</td>
            <td>se</td>
            <td>c</td>
            <td>re</td>
            <td>to</td>
          </tr>
        </tbody>
      </table>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">an+tsen+t+</th>
            <th className="baybayin-letter">A</th>
            <th className="baybayin-letter">n+</th>
            <th className="baybayin-letter">tse</th>
            <th className="baybayin-letter">n+</th>
            <th className="baybayin-letter">t+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>antsent</td>
            <td>a</td>
            <td>n</td>
            <td>tse</td>
            <td>n</td>
            <td>t</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>ancient</td>
            <td>a</td>
            <td>n</td>
            <td>cie</td>
            <td>n</td>
            <td>t</td>
          </tr>
        </tbody>
      </table>

      <p>
        When Ch is used it commonly is expressed as "ch" (ts) or "k". See
        examples below:
      </p>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">tsis+mis+</th>
            <th className="baybayin-letter">tsi</th>
            <th className="baybayin-letter">s+</th>
            <th className="baybayin-letter">mi</th>
            <th className="baybayin-letter">s+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tsisims</td>
            <td>tsi</td>
            <td>s</td>
            <td>mi</td>
            <td>s</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>chismis</td>
            <td>chi</td>
            <td>s</td>
            <td>mi</td>
            <td>s</td>
          </tr>
        </tbody>
      </table>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">meknik+</th>
            <th className="baybayin-letter">me</th>
            <th className="baybayin-letter">k</th>
            <th className="baybayin-letter">ni</th>
            <th className="baybayin-letter">ko</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>mekaniko</td>
            <td>me</td>
            <td>ka</td>
            <td>ni</td>
            <td>ko</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>mechanico</td>
            <td>me</td>
            <td>cha</td>
            <td>ni</td>
            <td>co</td>
          </tr>
        </tbody>
      </table>

      <p>
        "e" and "o" also originally didn't exist in Tagalog and are expressed in
        the same way as "i" and "u" respectively. See examples below:
      </p>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">hesus+</th>
            <th className="baybayin-letter">he</th>
            <th className="baybayin-letter">su</th>
            <th className="baybayin-letter">s+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hesus</td>
            <td>He</td>
            <td>su</td>
            <td>s</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Jesus</td>
            <td>Je</td>
            <td>su</td>
            <td>s</td>
          </tr>
        </tbody>
      </table>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">Ehip+to</th>
            <th className="baybayin-letter">E</th>
            <th className="baybayin-letter">hi</th>
            <th className="baybayin-letter">p+</th>
            <th className="baybayin-letter">to</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ehipto</td>
            <td>E</td>
            <td>hi</td>
            <td>p</td>
            <td>to</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Egipto</td>
            <td>E</td>
            <td>gi</td>
            <td>p</td>
            <td>to</td>
          </tr>
        </tbody>
      </table>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">Uso</th>
            <th className="baybayin-letter">U</th>
            <th className="baybayin-letter">so</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>uso</td>
            <td>u</td>
            <td>so</td>
          </tr>
        </tbody>
      </table>

      <p>
        The final borrowed consonants are "v", "p" and "z". See examples below:
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
        <tbody>
          <tr>
            <td>vaka</td>
            <td>va</td>
            <td>ka</td>
          </tr>
        </tbody>
      </table>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">p+lno</th>
            <th className="baybayin-letter">p+</th>
            <th className="baybayin-letter">l</th>
            <th className="baybayin-letter">no</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>plano</td>
            <td>p</td>
            <td>la</td>
            <td>no</td>
          </tr>
        </tbody>
      </table>
      <table className="baybayin-example">
        <thead>
          <tr>
            <th className="baybayin-letter">zeb+r</th>
            <th className="baybayin-letter">ze</th>
            <th className="baybayin-letter">b+</th>
            <th className="baybayin-letter">r</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sebra</td>
            <td>se</td>
            <td>b</td>
            <td>ra</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>zebra</td>
            <td>ze</td>
            <td>b</td>
            <td>ra</td>
          </tr>
        </tbody>
      </table>
    </CollapsibleSection>
  );
}
