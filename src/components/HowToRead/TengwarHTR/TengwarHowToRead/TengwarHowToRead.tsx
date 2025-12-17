import TengwarTable from "../TengwarTable/TengwarTable";
import TengwarTableBorrowed from "../TengwarTable/TengwarTableBorrowed";
import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";

export default function TengwarHowToRead() {
  return (
    <CollapsibleSection title="How To Read" defaultExpanded={false}>
      <p>
        Below is a table of the symbols used in "Modified Tengwar" alphabet.
        This is the most popular form of the script.
      </p>
      <TengwarTable />

      <h2>Examples</h2>
      <p>
        The first three symbols in the table represent vowels. Tagalog vowels
        originally only consisted of A, I and O. Then when borrowed words were
        introduced from Spanish and English, E and U were added and utilized the
        same symbol as I and O respectively. These are typically used when a
        word starts with a vowel, like “ama”, or when there are two consecutive
        vowels, like “maaari”. See examples below:
      </p>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">am</th>
            <th className="tengwar-letter-blue">a</th>
            <th className="tengwar-letter">m</th>
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
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">maari</th>
            <th className="tengwar-letter">m</th>
            <th className="tengwar-letter-blue">a</th>
            <th className="tengwar-letter-blue">a</th>
            <th className="tengwar-letter">ri</th>
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
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">bk</th>
            <th className="tengwar-letter-blue">b</th>
            <th className="tengwar-letter-blue">k</th>
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
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">filipino</th>
            <th className="tengwar-letter-blue">fi</th>
            <th className="tengwar-letter-blue">li</th>
            <th className="tengwar-letter-blue">pi</th>
            <th className="tengwar-letter-blue">no</th>
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
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">akiN+</th>
            <th className="tengwar-letter">a</th>
            <th className="tengwar-letter">ki</th>
            <th className="tengwar-letter-blue">N+</th>
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
      <h2>The First Rule of Tengwar</h2>
      <p>"Kung anong bigkas, siyang baybay."</p>
      <p>
        Tengwar is a phonetic alphabet meaning, words are written how they sound
        not necessarily as they are expressed in the Latin alphabet. The most
        common examples of this are "ng" and "mga". These two words are
        pronounced "nang" and "manga" and should be expressed as such when
        written in Tengwar.
      </p>

      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">nN+</th>
            <th className="tengwar-letter-blue">n</th>
            <th className="tengwar-letter">N+</th>
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

      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">mN</th>
            <th className="tengwar-letter-blue">m</th>
            <th className="tengwar-letter">N</th>
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

      <h2>Borrowed words</h2>
      <p>
        There are many words in Tagalog that have been borrowed from other
        languages. Most notably from Spanish and English. This is why, when
        transliterating modern Tagalog into Tengwar, many symbols represent two
        or more letters from the Latin alphabet OR are a combination of symbols
        to produce a similar sound. Many words when expressed in Tengwar will
        first be "Tagalized" or in other words, they are written phonetically
        using the Roman alphabet. (more on these later) Here is a table of the
        most notable borrowed sounds and how they are expressed in Tengwar:
      </p>

      <TengwarTableBorrowed />
      <h2>Examples</h2>
      <p>
        In the following section, each example table contains a Tengwar, a
        Tagalized, and an original version of each word.
      </p>
      <p>
        Some are a combination of symbols used to mimic certain sounds like
        "siy" or "sy" (informal) for "sh" and "f" for "ph". See examples below:
      </p>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">siym+pu</th>
            <th className="tengwar-letter-blue">siy | s+y</th>
            <th className="tengwar-letter">m+</th>
            <th className="tengwar-letter">pu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>siyampu</td>
            <td className="letter-blue">siya / sya</td>
            <td>m</td>
            <td>pu</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>shampoo</td>
            <td className="letter-blue">sha</td>
            <td>m</td>
            <td>poo</td>
          </tr>
        </tbody>
      </table>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">filipin+s+</th>
            <th className="tengwar-letter-blue">fi</th>
            <th className="tengwar-letter">li</th>
            <th className="tengwar-letter">pi</th>
            <th className="tengwar-letter">n+</th>
            <th className="tengwar-letter">s+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Filipins</td>
            <td className="letter-blue">Fi</td>
            <td>li</td>
            <td>pi</td>
            <td>n</td>
            <td>s</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Philippines</td>
            <td className="letter-blue">Phi</td>
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
        "dy" (informal) for "j" and "k" or "kuw" for "qu". See examples below:
      </p>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">kuwliti</th>
            <th className="tengwar-letter-blue">kuw</th>
            <th className="tengwar-letter">li</th>
            <th className="tengwar-letter">ti</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>kuwaliti</td>
            <td className="letter-blue">kuwa</td>
            <td>li</td>
            <td>ti</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>quality</td>
            <td className="letter-blue">qua</td>
            <td>li</td>
            <td>ty</td>
          </tr>
        </tbody>
      </table>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">kezon+</th>
            <th className="tengwar-letter-blue">ke</th>
            <th className="tengwar-letter">zo</th>
            <th className="tengwar-letter">n+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Keson</td>
            <td className="letter-blue">Ke</td>
            <td>so</td>
            <td>n</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Quezon</td>
            <td className="letter-blue">Que</td>
            <td>zo</td>
            <td>n</td>
          </tr>
        </tbody>
      </table>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">diyesus+</th>
            <th className="tengwar-letter-blue">diye | d+ye</th>
            <th className="tengwar-letter">su</th>
            <th className="tengwar-letter">s+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Diyesus</td>
            <td className="letter-blue">Diye / Dye</td>
            <td>su</td>
            <td>s</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className="tengwar-letter">hesus+</th>
            <th className="tengwar-letter-blue">he</th>
            <th className="tengwar-letter">su</th>
            <th className="tengwar-letter">s+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hesus</td>
            <td className="letter-blue">He</td>
            <td>su</td>
            <td>s</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Jesus</td>
            <td className="letter-blue">Je</td>
            <td>su</td>
            <td>s</td>
          </tr>
        </tbody>
      </table>

      <p>
        The letter "c" contributes to forming multiple different sounds in
        various borrowed words. It can be expressed having an "s", "k" or "ch"
        sound. The "ch" sound is expressed by "ts". See examples below:
      </p>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">sen+t+ro</th>
            <th className="tengwar-letter-blue">se</th>
            <th className="tengwar-letter">n+</th>
            <th className="tengwar-letter">t+</th>
            <th className="tengwar-letter">ro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sentro</td>
            <td className="letter-blue">se</td>
            <td>n</td>
            <td>t</td>
            <td>ro</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>centro</td>
            <td className="letter-blue">ce</td>
            <td>n</td>
            <td>t</td>
            <td>ro</td>
          </tr>
        </tbody>
      </table>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">sek+reto</th>
            <th className="tengwar-letter">se</th>
            <th className="tengwar-letter-blue">k+</th>
            <th className="tengwar-letter">re</th>
            <th className="tengwar-letter">to</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sekreto</td>
            <td>se</td>
            <td className="letter-blue">k</td>
            <td>re</td>
            <td>to</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>secreto</td>
            <td>se</td>
            <td className="letter-blue">c</td>
            <td>re</td>
            <td>to</td>
          </tr>
        </tbody>
      </table>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">an+tsen+t+</th>
            <th className="tengwar-letter">A</th>
            <th className="tengwar-letter">n+</th>
            <th className="tengwar-letter-blue">tse</th>
            <th className="tengwar-letter">n+</th>
            <th className="tengwar-letter">t+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>antsent</td>
            <td>a</td>
            <td>n</td>
            <td className="letter-blue">tse</td>
            <td>n</td>
            <td>t</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>ancient</td>
            <td>a</td>
            <td>n</td>
            <td className="letter-blue">cie</td>
            <td>n</td>
            <td>t</td>
          </tr>
        </tbody>
      </table>

      <p>
        When "ch" is used it commonly is expressed as "ts" or "k". See examples
        below:
      </p>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">t+sis+mis+</th>
            <th className="tengwar-letter-blue">t+si</th>
            <th className="tengwar-letter">s+</th>
            <th className="tengwar-letter">mi</th>
            <th className="tengwar-letter">s+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tsismis</td>
            <td className="letter-blue">tsi</td>
            <td>s</td>
            <td>mi</td>
            <td>s</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>chismis</td>
            <td className="letter-blue">chi</td>
            <td>s</td>
            <td>mi</td>
            <td>s</td>
          </tr>
        </tbody>
      </table>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">meknik+</th>
            <th className="tengwar-letter">me</th>
            <th className="tengwar-letter-blue">k</th>
            <th className="tengwar-letter">ni</th>
            <th className="tengwar-letter">ko</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>mekaniko</td>
            <td>me</td>
            <td className="letter-blue">ka</td>
            <td>ni</td>
            <td>ko</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>mechanico</td>
            <td>me</td>
            <td className="letter-blue">cha</td>
            <td>ni</td>
            <td>co</td>
          </tr>
        </tbody>
      </table>

      <p>
        Both "e" and "o" also originally didn't exist in Tagalog and are
        expressed in the same way as "i" and "u" respectively. See examples
        below:
      </p>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">hesus+</th>
            <th className="tengwar-letter-blue">he</th>
            <th className="tengwar-letter">su</th>
            <th className="tengwar-letter">s+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hesus</td>
            <td className="letter-blue">He</td>
            <td>su</td>
            <td>s</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Jesus</td>
            <td className="letter-blue">Je</td>
            <td>su</td>
            <td>s</td>
          </tr>
        </tbody>
      </table>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">Ehip+to</th>
            <th className="tengwar-letter-blue">E</th>
            <th className="tengwar-letter">hi</th>
            <th className="tengwar-letter">p+</th>
            <th className="tengwar-letter-blue">to</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ehipto</td>
            <td className="letter-blue">E</td>
            <td>hi</td>
            <td>p</td>
            <td className="letter-blue">to</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Egipto</td>
            <td className="letter-blue">E</td>
            <td>gi</td>
            <td>p</td>
            <td className="letter-blue">to</td>
          </tr>
        </tbody>
      </table>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">Uso</th>
            <th className="tengwar-letter-blue">U</th>
            <th className="tengwar-letter">so</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>uso</td>
            <td className="letter-blue">u</td>
            <td>so</td>
          </tr>
        </tbody>
      </table>

      <p>
        The final borrowed consonants are "v", "p" and "z". See examples below:
      </p>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">bk</th>
            <th className="tengwar-letter-blue">b</th>
            <th className="tengwar-letter">k</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>baka</td>
            <td className="letter-blue">ba</td>
            <td>ka</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>vaka</td>
            <td className="letter-blue">va</td>
            <td>ka</td>
          </tr>
        </tbody>
      </table>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">p+lno</th>
            <th className="tengwar-letter-blue">p+</th>
            <th className="tengwar-letter">l</th>
            <th className="tengwar-letter">no</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>plano</td>
            <td className="letter-blue">p</td>
            <td>la</td>
            <td>no</td>
          </tr>
        </tbody>
      </table>
      <table className="tengwar-example">
        <thead>
          <tr>
            <th className="tengwar-letter">zeb+r</th>
            <th className="tengwar-letter-blue">ze</th>
            <th className="tengwar-letter">b+</th>
            <th className="tengwar-letter">r</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sebra</td>
            <td className="letter-blue">se</td>
            <td>b</td>
            <td>ra</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>zebra</td>
            <td className="letter-blue">ze</td>
            <td>b</td>
            <td>ra</td>
          </tr>
        </tbody>
      </table>
    </CollapsibleSection>
  );
}
