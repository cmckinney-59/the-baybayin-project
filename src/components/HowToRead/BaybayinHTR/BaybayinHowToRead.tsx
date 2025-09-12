import baybayinAlphabetImage from "../../../assets/images/How to read/Baybayin/alphabet.png";
import amaImage from "../../../assets/images/How to read/Baybayin/ama.png";
import maaariImage from "../../../assets/images/How to read/Baybayin/maaari.png";
import baImage from "../../../assets/images/How to read/Baybayin/ba.png";
import kaImage from "../../../assets/images/How to read/Baybayin/ka.png";
import filipinoImage from "../../../assets/images/How to read/Baybayin/filipino.png";
import akingImage from "../../../assets/images/How to read/Baybayin/aking.png";
import "./BaybayinHowToRead.css";

export default function BaybayinHowToRead() {
  return (
    <>
      <h2>How To Read</h2>
      <p>
        Below is a chart of the symbols used in "Modified Baybayin" alphabet.
        This is the most popular form of the script.
      </p>
      <img
        src={baybayinAlphabetImage}
        alt="baybayin-alphabet-image"
        className="baybayin-image alphabet"
      />

      <h3>Baybayin Alphabet Reference</h3>
      <table className="baybayin-table">
        <thead>
          <tr>
            <th>Baybayin Symbol</th>
            <th>Latin Letter</th>
            <th>Sound</th>
            <th>Example Word</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ᜀ</td>
            <td>A</td>
            <td>/a/</td>
            <td>ama (father)</td>
          </tr>
          <tr>
            <td>ᜁ</td>
            <td>I</td>
            <td>/i/</td>
            <td>isa (one)</td>
          </tr>
          <tr>
            <td>ᜂ</td>
            <td>U</td>
            <td>/u/</td>
            <td>ulo (head)</td>
          </tr>
          <tr>
            <td>ᜃ</td>
            <td>Ka</td>
            <td>/ka/</td>
            <td>kabayo (horse)</td>
          </tr>
          <tr>
            <td>ᜄ</td>
            <td>Ga</td>
            <td>/ga/</td>
            <td>gabi (night)</td>
          </tr>
          <tr>
            <td>ᜅ</td>
            <td>Nga</td>
            <td>/ŋa/</td>
            <td>ngiti (smile)</td>
          </tr>
          <tr>
            <td>ᜆ</td>
            <td>Ta</td>
            <td>/ta/</td>
            <td>tahanan (home)</td>
          </tr>
          <tr>
            <td>ᜇ</td>
            <td>Da</td>
            <td>/da/</td>
            <td>dahon (leaf)</td>
          </tr>
          <tr>
            <td>ᜈ</td>
            <td>Na</td>
            <td>/na/</td>
            <td>nanay (mother)</td>
          </tr>
          <tr>
            <td>ᜉ</td>
            <td>Pa</td>
            <td>/pa/</td>
            <td>pamilya (family)</td>
          </tr>
          <tr>
            <td>ᜊ</td>
            <td>Ba</td>
            <td>/ba/</td>
            <td>bahay (house)</td>
          </tr>
          <tr>
            <td>ᜋ</td>
            <td>Ma</td>
            <td>/ma/</td>
            <td>mabuti (good)</td>
          </tr>
          <tr>
            <td>ᜌ</td>
            <td>Ya</td>
            <td>/ja/</td>
            <td>yaman (wealth)</td>
          </tr>
          <tr>
            <td>ᜎ</td>
            <td>La</td>
            <td>/la/</td>
            <td>lalaki (man)</td>
          </tr>
          <tr>
            <td>ᜏ</td>
            <td>Wa</td>
            <td>/wa/</td>
            <td>walis (broom)</td>
          </tr>
          <tr>
            <td>ᜐ</td>
            <td>Sa</td>
            <td>/sa/</td>
            <td>salamat (thank you)</td>
          </tr>
          <tr>
            <td>ᜑ</td>
            <td>Ha</td>
            <td>/ha/</td>
            <td>halik (kiss)</td>
          </tr>
        </tbody>
      </table>
      <p>
        The first row of symbols are vowels. These are typically used when a
        word starts with a vowel, like “ama”, or when there are two consecutive
        vowels, like “maaari”.
      </p>
      <img src={amaImage} alt="ama-image" className="baybayin-image example" />
      <img
        src={maaariImage}
        alt="maaari-image"
        className="baybayin-image example"
      />
      <p>
        The second and third row of symbols show all of the consonants. By
        default all of the consonant symbols have an “a” after the associated
        consonant, making them “syllabic”. For example if you wanted to write
        the word “ba” or “ka” they would both be the ones symbol associated with
        the respective consonant without a kudlit. See below examples.
      </p>
      <img src={baImage} alt="ba-image" className="baybayin-image example" />
      <img src={kaImage} alt="ka-image" className="baybayin-image example" />
      <p>
        The final row of symbols gives examples on how the kudlits are used. If
        there is no kudlit (see above example) there is just an “a” after the
        consonant. If there is a kudlit above the symbol then the following
        vowel is either an “i” or “e”. If there is a kudlit below the following
        vowel is either an “o” or “u”. If there is a “krus” or “cross” kudlit
        below there is no following vowel, the symbol is treated as a
        stand-alone consonant.
      </p>
      <p>
        In the word “filipino” the first symbols will have kudlits above because
        they are followed by “i”. The last symbol will have a kudlit below
        because it is followed by an “o”. See example below:
      </p>
      <img
        src={filipinoImage}
        alt="filipino-image"
        className="baybayin-image example"
      />
      <p>
        In the word “aking” the symbol for “ng” will have a krus kudlit below
        because it is not followed by a vowel. See example below:
      </p>
      <img
        src={akingImage}
        alt="aking-image"
        className="baybayin-image example"
      />
    </>
  );
}
