import { useState, useEffect, useRef } from "react";

import processBaybayinText from "../../utils/TextProcessors/BaybayinTextProcessor.ts";
import WordReviewDialog from "../../components/Dialog/WordReviewDialog.tsx";
import {
  WordsDictionaryProvider,
  useWordsDictionary,
} from "../../contexts/WordsDictionaryContext.tsx";
import PrintToPDFButton from "../../components/Buttons/SaveButtons/PrintToPDFButton.tsx";
import TransliteratorContainerParallel from "../../components/TransliteratorContainer/TransliteratorContainerParallel.tsx";

interface ParallelViewPageEditableProps {
  title: string;
}

function ParallelViewPageEditableContent({
  title,
}: ParallelViewPageEditableProps) {
  const [text, setText] = useState<string>("");
  const [transliteratedText, setTransliteratedText] = useState<string>("");
  const {
    wordsDictionary,
    setWordsDictionary,
    clearWordsDictionary,
    wordContainsBorrowedSound,
  } = useWordsDictionary();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textareaRef.current && outputRef.current) {
      textareaRef.current.style.height = "auto";
      outputRef.current.style.height = "auto";

      const textareaHeight = textareaRef.current.scrollHeight;
      const outputHeight = outputRef.current.scrollHeight;
      const maxHeight = Math.max(textareaHeight, outputHeight, 175);

      textareaRef.current.style.height = maxHeight + "px";
      outputRef.current.style.height = maxHeight + "px";
    }
  }, [text, transliteratedText]);

  // Update transliterated text when dictionary changes
  useEffect(() => {
    if (text.trim() && Object.keys(wordsDictionary).length > 0) {
      const words = text.trim().split(/\s+/);
      const processedWords = words.map((word) => {
        return wordsDictionary[word] || processBaybayinText(word);
      });
      setTransliteratedText(processedWords.join(" "));
    }
  }, [wordsDictionary, text]);

  const handleChange = (currentText: string): void => {
    const words = currentText.trim().split(/\s+/);
    const newDict: { [word: string]: string } = {};
    const processedWords: string[] = [];

    for (const word of words) {
      const processed = processBaybayinText(word);
      newDict[word] = processed;
      processedWords.push(processed);
    }

    setWordsDictionary(newDict);
    setTransliteratedText(processedWords.join(" "));
  };

  const handleClearInput = () => {
    setText("");
    setTransliteratedText("");
    clearWordsDictionary();
  };

  return (
    <div>
      <TransliteratorContainerParallel
        text={text}
        transliteratedText={transliteratedText}
        title={title}
        textareaRef={textareaRef}
        outputRef={outputRef}
        onTextChange={(currentValue) => {
          setText(currentValue);
          handleChange(currentValue);
        }}
        onClear={handleClearInput}
      />
      <div className="action-buttons">
        <PrintToPDFButton />
      </div>
      {isDialogOpen && (
        <WordReviewDialog
          onClose={() => setIsDialogOpen(false)}
          wordsWithC={Object.keys(wordsDictionary).filter((word) => {
            const lowerWord = word.toLowerCase();
            return (
              lowerWord.includes("c") ||
              lowerWord.includes("ch") ||
              lowerWord.includes("j") ||
              lowerWord.includes("qu")
            );
          })}
          wordContainsBorrowedSound={wordContainsBorrowedSound}
        />
      )}
    </div>
  );
}

export default function ParallelViewPageEditable(
  props: ParallelViewPageEditableProps,
) {
  return (
    <WordsDictionaryProvider>
      <ParallelViewPageEditableContent {...props} />
    </WordsDictionaryProvider>
  );
}
