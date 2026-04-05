import { useState, useEffect, useRef } from "react";

import SaveButtonContainter from "../Buttons/SaveButtons/SaveButtonsContainer.tsx";
import TransliteratorContainer from "../TransliteratorContainer/TransliteratorContainer.tsx";
import WordReviewDialog from "../Dialog/WordReviewDialog.tsx";
import { useWordsDictionary } from "../../contexts/WordsDictionaryContext.tsx";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import processAncientsText from "../../utils/TextProcessors/AncientsTextProcessor.ts";
import processAtlanteanText from "../../utils/TextProcessors/AtlanteanTextProcessor.ts";
import processAurebeshText from "../../utils/TextProcessors/AurebeshTextProcessor.ts";
import processBaybayinText from "../../utils/TextProcessors/BaybayinTextProcessor.ts";
import processCirthText from "../../utils/TextProcessors/CirthTextProcessor.ts";
import processDeseretText from "../../utils/TextProcessors/DeseretTextProcessor.ts";
import processGallifreyanText from "../../utils/TextProcessors/GallifreyanTextProcessor.ts";
import processMarasEyeText from "../../utils/TextProcessors/MarasEyeTextProcessor.ts";
import processMatoranText from "../../utils/TextProcessors/MatoranTextProcessor.ts";
import processPlqadText from "../../utils/TextProcessors/PlqadTextProcessor.ts";
import processSteelText from "../../utils/TextProcessors/SteelTextProcessor.ts";
import processTengwarText from "../../utils/TextProcessors/TengwarTextProcessor.ts";
import processUnownText from "../../utils/TextProcessors/UnownTextProcessor.ts";

const processors: Record<string, (word: string) => string | Promise<string>> = {
  Ancients: processAncientsText,
  Atlantean: processAtlanteanText,
  Aurebesh: processAurebeshText,
  Baybayin: processBaybayinText,
  Cirth: processCirthText,
  Deseret: processDeseretText,
  Gallifreyan: processGallifreyanText,
  MarasEye: processMarasEyeText,
  Matoran: processMatoranText,
  Plqad: processPlqadText,
  Steel: processSteelText,
  Tengwar: processTengwarText,
  Unown: processUnownText,
};

interface TransliteratorProps {
  currentAlphabet: string;
}

export default function Transliterator({
  currentAlphabet,
}: TransliteratorProps) {
  const [text, setText] = useState<string>("");
  const [transliteratedText, setTransliteratedText] = useState<string>("");
  const {
    wordsDictionary,
    setWordsDictionary,
    clearWordsDictionary,
    wordContainsBorrowedSound,
  } = useWordsDictionary();
  const { showExperimentalFeatures } = useExperimentalFeatures();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [textContainsBorrowedWords, setTextContainsBorrowedWords] =
    useState<boolean>(false);
  const [useCombinedCharacters, setUseCombinedCharacters] =
    useState<boolean>(false);
  const [useTechNumbers, setUseTechNumbers] = useState<boolean>(false);
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

  useEffect(() => {
    if (
      currentAlphabet === "Baybayin" &&
      text.trim() &&
      Object.keys(wordsDictionary).length > 0
    ) {
      const words = text.trim().split(/\s+/);
      const processedWords = words.map((word) => {
        return wordsDictionary[word] || processBaybayinText(word);
      });
      setTransliteratedText(processedWords.join(" "));
    }
  }, [currentAlphabet, wordsDictionary, text]);

  const handleChange = async (currentText: string): Promise<void> => {
    const words = currentText.trim().split(/\s+/);
    const newDict: { [word: string]: string } = {};
    let processWord: ((word: string) => string | Promise<string>) | undefined;

    processWord = processors[currentAlphabet];
    if (processWord) {
      const processedWords = await Promise.all(
        words.map((word) => Promise.resolve(processWord!(word))),
      );
      words.forEach((word, i) => {
        newDict[word] = processedWords[i];
      });
      setWordsDictionary(newDict);
      setTransliteratedText(processedWords.join(" "));
    } else {
      setWordsDictionary({});
      setTransliteratedText("");
    }
  };

  // Re-process when alphabet changes while keeping the same input text.
  useEffect(() => {
    void handleChange(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only when alphabet changes
  }, [currentAlphabet]);

  const handleClearInput = () => {
    setText("");
    setTransliteratedText("");
    clearWordsDictionary();
  };

  const isBaybayin = currentAlphabet === "Baybayin";
  const isAurebesh = currentAlphabet === "Aurebesh";

  return (
    <div>
      <TransliteratorContainer
        text={text}
        transliteratedText={transliteratedText}
        currentAlphabet={currentAlphabet}
        textareaRef={textareaRef}
        outputRef={outputRef}
        onTextChange={(currentValue) => {
          setText(currentValue);
          void handleChange(currentValue);
        }}
        onClear={handleClearInput}
        aurebeshTechNumbers={useTechNumbers}
        useCombinedCharacters={useCombinedCharacters}
      />
      {isBaybayin && text.toLowerCase().includes("c") && (
        <p className="note-paragraph">
          * The letter &apos;c&apos; does not show in baybayin font. Replace any
          c&apos;s with k&apos;s or s&apos;s accordingly. See the How To Read
          section for more information.
        </p>
      )}
      {isBaybayin && showExperimentalFeatures && (
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={textContainsBorrowedWords}
            onChange={(e) => setTextContainsBorrowedWords(e.target.checked)}
          />
          Text contains borrowed words.
        </label>
      )}
      {isAurebesh && (
        <div className="checkbox-label-row">
          <label
            className="checkbox-label"
            title="Maps digraphs such as ch, sh, ae, th, ng, and oo to combined symbols."
          >
            <input
              type="checkbox"
              checked={useCombinedCharacters}
              onChange={(e) => setUseCombinedCharacters(e.target.checked)}
            />
            Include combined characters.
          </label>
          <label
            className="checkbox-label"
            title="Use tech numbers instead of Arabic."
          >
            <input
              type="checkbox"
              checked={useTechNumbers}
              onChange={(e) => setUseTechNumbers(e.target.checked)}
            />
            Use tech numbers.
          </label>
        </div>
      )}
      <div className="action-buttons">
        {isBaybayin &&
          showExperimentalFeatures &&
          textContainsBorrowedWords && (
            <button
              onClick={() => setIsDialogOpen(true)}
              disabled={transliteratedText.trim().length === 0}
              className={transliteratedText.trim().length > 0 ? "active" : ""}
            >
              Validate
            </button>
          )}
        <SaveButtonContainter
          originalText={text}
          transliteratedText={transliteratedText}
        />
      </div>
      {isBaybayin && isDialogOpen && (
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
