import baybayinAlphabetImage from "../../assets/images/How to read/Baybayin/alphabet.jpg";
import amaImage from "../../assets/images/How to read/Baybayin/ama.png";
import maaariImage

export default function BaybayinHowToRead() {
  return (
    <>
      <h2>How to read Baybayin</h2>
      <p>
        Below is a chart (article linked below) of the symbols used in the
        transliteration I made. This form of Baybayin is called “Modified
        Baybayin” and is the most popular form of the script.
      </p>
      <img src={baybayinAlphabetImage} alt="baybayin-alphabet-image" />
      <p>
        The first row of symbols above are vowels. These are typically used when
        a word starts with a vowel, like “ama”, or there are two consecutive
        vowels, like “maaari”. See below examples:
      </p>
      <img src={amaImage} alt="ama-image" />
      <img src={amaImage} alt="ama-image" />
    </>
  );
}
