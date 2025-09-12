import baybayinAlphabetImage from "../../../assets/images/How to read/Baybayin/alphabet.png";
import amaImage from "../../../assets/images/How to read/Baybayin/ama.png";
import maaariImage from "../../../assets/images/How to read/Baybayin/maaari.png";
import baImage from "../../../assets/images/How to read/Baybayin/ba.png";
import kaImage from "../../../assets/images/How to read/Baybayin/ka.png";
import filipinoImage from "../../../assets/images/How to read/Baybayin/filipino.png";
import akingImage from "../../../assets/images/How to read/Baybayin/aking.png";
import "./BaybayinHowToRead.css";
import BaybayinTable from "./BaybayinTable";

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

      <BaybayinTable />
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
