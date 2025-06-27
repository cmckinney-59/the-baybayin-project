import CopyTextButton from "./CopyTextButton";
import ExcelSaveButton from "./ExcelSaveButton";
import TextSaveButton from "./TextSaveButton";
import WordSaveButton from "./WordSaveButton";

type Dictionary = { [word: string]: string };

interface SaveButtonContainerProps {
  transliteratedText: string;
  wordsDictionary: Dictionary;
}

export default function SaveButtonContainter({
  transliteratedText,
  wordsDictionary,
}: SaveButtonContainerProps) {
  return (
    <>
      <p> Save as... </p>
      <ExcelSaveButton
        transliteratedText={transliteratedText}
        wordsDictionary={wordsDictionary}
      />
      <WordSaveButton transliteratedText={transliteratedText} />
      <TextSaveButton transliteratedText={transliteratedText} />
      <CopyTextButton transliteratedText={transliteratedText} />
    </>
  );
}
