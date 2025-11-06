import AurebeshTable from "../AurebeshTable/AurebeshTable";
import AurebeshTableBorrowed from "../AurebeshTable/AurebeshTableBorrowed";
import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";

export default function AurebeshHowToRead() {
  return (
    <CollapsibleSection title="How To Read" defaultExpanded={false}>
      <p>
        Below is a table of the symbols used in "Modified Aurebesh" alphabet.
        This is the most popular form of the script.
      </p>
      <AurebeshTable />

      <h2>Examples</h2>
      <p>
        The first three symbols in the table represent vowels. Tagalog vowels
        originally only consisted of A, I and O. Then when borrowed words were
        introduced from Spanish and English, E and U were added and utilized the
        same symbol as I and O respectively. These are typically used when a
        word starts with a vowel, like “ama”, or when there are two consecutive
        vowels, like “maaari”. See examples below:
      </p>
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">am</th>
            <th className="Aurebesh-letter-blue">a</th>
            <th className="Aurebesh-letter">m</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">maari</th>
            <th className="Aurebesh-letter">m</th>
            <th className="Aurebesh-letter-blue">a</th>
            <th className="Aurebesh-letter-blue">a</th>
            <th className="Aurebesh-letter">ri</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">bk</th>
            <th className="Aurebesh-letter-blue">b</th>
            <th className="Aurebesh-letter-blue">k</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">filipino</th>
            <th className="Aurebesh-letter-blue">fi</th>
            <th className="Aurebesh-letter-blue">li</th>
            <th className="Aurebesh-letter-blue">pi</th>
            <th className="Aurebesh-letter-blue">no</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">akiN+</th>
            <th className="Aurebesh-letter">a</th>
            <th className="Aurebesh-letter">ki</th>
            <th className="Aurebesh-letter-blue">N+</th>
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
      <h2>The First Rule of Aurebesh</h2>
      <p>"Kung anong bigkas, siyang baybay."</p>
      <p>
        Aurebesh is a phonetic alphabet meaning, words are written how they
        sound not necessarily as they are expressed in the Latin alphabet. The
        most common examples of this are "ng" and "mga". These two words are
        pronounced "nang" and "manga" and should be expressed as such when
        written in Aurebesh.
      </p>

      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">nN+</th>
            <th className="Aurebesh-letter-blue">n</th>
            <th className="Aurebesh-letter">N+</th>
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

      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">mN</th>
            <th className="Aurebesh-letter-blue">m</th>
            <th className="Aurebesh-letter">N</th>
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
        transliterating modern Tagalog into Aurebesh, many symbols represent two
        or more letters from the Latin alphabet OR are a combination of symbols
        to produce a similar sound. Many words when expressed in Aurebesh will
        first be "Tagalized" or in other words, they are written phonetically
        using the Roman alphabet. (more on these later) Here is a table of the
        most notable borrowed sounds and how they are expressed in Aurebesh:
      </p>

      <AurebeshTableBorrowed />
      <h2>Examples</h2>
      <p>
        In the following section, each example table contains a Aurebesh, a
        Tagalized, and an original version of each word.
      </p>
      <p>
        Some are a combination of symbols used to mimic certain sounds like
        "siy" or "sy" (informal) for "sh" and "f" for "ph". See examples below:
      </p>
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">siym+pu</th>
            <th className="Aurebesh-letter-blue">siy | s+y</th>
            <th className="Aurebesh-letter">m+</th>
            <th className="Aurebesh-letter">pu</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">filipin+s+</th>
            <th className="Aurebesh-letter-blue">fi</th>
            <th className="Aurebesh-letter">li</th>
            <th className="Aurebesh-letter">pi</th>
            <th className="Aurebesh-letter">n+</th>
            <th className="Aurebesh-letter">s+</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">kuwliti</th>
            <th className="Aurebesh-letter-blue">kuw</th>
            <th className="Aurebesh-letter">li</th>
            <th className="Aurebesh-letter">ti</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">kezon+</th>
            <th className="Aurebesh-letter-blue">ke</th>
            <th className="Aurebesh-letter">zo</th>
            <th className="Aurebesh-letter">n+</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">diyesus+</th>
            <th className="Aurebesh-letter-blue">diye | d+ye</th>
            <th className="Aurebesh-letter">su</th>
            <th className="Aurebesh-letter">s+</th>
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
            <th className="Aurebesh-letter">hesus+</th>
            <th className="Aurebesh-letter-blue">he</th>
            <th className="Aurebesh-letter">su</th>
            <th className="Aurebesh-letter">s+</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">sen+t+ro</th>
            <th className="Aurebesh-letter-blue">se</th>
            <th className="Aurebesh-letter">n+</th>
            <th className="Aurebesh-letter">t+</th>
            <th className="Aurebesh-letter">ro</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">sek+reto</th>
            <th className="Aurebesh-letter">se</th>
            <th className="Aurebesh-letter-blue">k+</th>
            <th className="Aurebesh-letter">re</th>
            <th className="Aurebesh-letter">to</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">an+tsen+t+</th>
            <th className="Aurebesh-letter">A</th>
            <th className="Aurebesh-letter">n+</th>
            <th className="Aurebesh-letter-blue">tse</th>
            <th className="Aurebesh-letter">n+</th>
            <th className="Aurebesh-letter">t+</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">t+sis+mis+</th>
            <th className="Aurebesh-letter-blue">t+si</th>
            <th className="Aurebesh-letter">s+</th>
            <th className="Aurebesh-letter">mi</th>
            <th className="Aurebesh-letter">s+</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">meknik+</th>
            <th className="Aurebesh-letter">me</th>
            <th className="Aurebesh-letter-blue">k</th>
            <th className="Aurebesh-letter">ni</th>
            <th className="Aurebesh-letter">ko</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">hesus+</th>
            <th className="Aurebesh-letter-blue">he</th>
            <th className="Aurebesh-letter">su</th>
            <th className="Aurebesh-letter">s+</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">Ehip+to</th>
            <th className="Aurebesh-letter-blue">E</th>
            <th className="Aurebesh-letter">hi</th>
            <th className="Aurebesh-letter">p+</th>
            <th className="Aurebesh-letter-blue">to</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">Uso</th>
            <th className="Aurebesh-letter-blue">U</th>
            <th className="Aurebesh-letter">so</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">bk</th>
            <th className="Aurebesh-letter-blue">b</th>
            <th className="Aurebesh-letter">k</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">p+lno</th>
            <th className="Aurebesh-letter-blue">p+</th>
            <th className="Aurebesh-letter">l</th>
            <th className="Aurebesh-letter">no</th>
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
      <table className="Aurebesh-example">
        <thead>
          <tr>
            <th className="Aurebesh-letter">zeb+r</th>
            <th className="Aurebesh-letter-blue">ze</th>
            <th className="Aurebesh-letter">b+</th>
            <th className="Aurebesh-letter">r</th>
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
