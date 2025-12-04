import { useState } from "react";
import CloseDialogButton from "../Buttons/DialogButtons/CloseDialogButton";
import { useWordsDictionary } from "../../contexts/WordsDictionaryContext";
import processBaybayinText from "../../utils/TextProcessors/BaybayinTextProcessor";

interface WordReviewDialogProps {
  onClose?: () => void;
  wordsWithC?: string[];
  wordContainsBorrowedSound?: boolean;
}

export default function WordReviewDialog({
  onClose = () => {},
  wordsWithC = [],
  wordContainsBorrowedSound = false,
}: WordReviewDialogProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const { wordsDictionary, setWordsDictionary } = useWordsDictionary();

  const currentWord = wordsWithC[currentWordIndex];
  const remainingWords = wordsWithC.length - currentWordIndex;

  const handleSubmit = () => {
    if (!inputValue.trim() || !currentWord) {
      return;
    }

    // Process the input through baybayintextprocessor
    const processedValue = processBaybayinText(inputValue.trim());

    // Update the dictionary with the processed value
    const updatedDictionary = {
      ...wordsDictionary,
      [currentWord]: processedValue,
    };
    setWordsDictionary(updatedDictionary);

    // Move to next word or close dialog
    if (currentWordIndex < wordsWithC.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setInputValue("");
    } else {
      onClose();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  let paragraphContent: React.ReactNode | null = null;

  if (wordsWithC.length === 0) {
    paragraphContent = <p>All words have been reviewed.</p>;
  } else {
    paragraphContent = (
      <>
        <p>
          This word contains a borrowed sound. Please spell it out as it sounds.
        </p>
        {wordContainsBorrowedSound && currentWord && (
          <p>
            Word to review: <strong>{currentWord}</strong>
            {remainingWords > 1 && ` (${remainingWords} remaining)`}
          </p>
        )}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter corrected spelling..."
          autoFocus
        />
        <button onClick={handleSubmit}>Submit</button>
      </>
    );
  }

  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <div className="dialog-header">
          <div className="dialog-header-top-row">
            <h3>Word Review Dialog</h3>
          </div>
        </div>
        <div className="dialog-content">
          {paragraphContent}
          <CloseDialogButton onClose={onClose} />
        </div>
      </div>
    </dialog>
  );
}
