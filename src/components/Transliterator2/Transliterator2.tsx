import { useState, useMemo, useCallback, useEffect } from "react";
// import React from "react";

import "./Transliterator2.css";
import TransliterateButton from "../Buttons/TransliterateButton.tsx";
import AllInOneDialog from "../AllInOneDialog/AllInOneDialog.tsx";
import SaveButtonContainter from "../Buttons/SaveButtons/SaveButtonsContainer.tsx";
import processBaybayinText from "../../utils/BaybayinTextProcessor.ts";

interface TransliteratorProps {
  title: string;
}

type Dictionary = { [word: string]: string };
type DialogType = "start" | "capital" | "ch" | "c" | "j" | "qu" | null;

export default function Transliterator2({ title }: TransliteratorProps) {
  // Text states
  const [text, setText] = useState<string>("");
  const [transliteratedText, setTransliteratedText] = useState<string>("");
  const [wordKeys, setWordKeys] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [tempWordCount, setTempWordCount] = useState<number>(0);

  // Dialog states
  const [wordForDialog, setWordForDialog] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [wordsDictionary, setWordsDictionary] = useState<Dictionary>({});
  const [activeDialog, setActiveDialog] = useState<DialogType>(null);

  // Character index states
  const [capitalIndex, setCapitalIndex] = useState<number | null>(null);
  const [chIndex, setChIndex] = useState<number | null>(null);
  const [cIndex, setCIndex] = useState<number | null>(null);
  const [jIndex, setJIndex] = useState<number | null>(null);
  const [quIndex, setQuIndex] = useState<number | null>(null);

  // Memoized consts
  const textareaHasText = useMemo(() => text.length > 0, [text]);
  const isBaybayin = useMemo(() => title === "Baybayin", [title]);
  const isAurebesh = useMemo(() => title === "Aurebesh", [title]);
  const isDeseret = useMemo(() => title === "Deseret", [title]);

  // Debug logging for title and text
  console.log(`Transliterator2 initialized with title: "${title}"`);
  console.log(`Current text: "${text}"`);
  console.log(
    `Is Baybayin: ${isBaybayin}, Is Aurebesh: ${isAurebesh}, Is Deseret: ${isDeseret}`
  );

  // Monitor dialog state changes
  useEffect(() => {
    console.log(
      `Dialog state changed: isDialogOpen=${isDialogOpen}, activeDialog=${activeDialog}`
    );
  }, [isDialogOpen, activeDialog]);

  useEffect(() => {
    console.log(
      `Current word changed: "${currentWord}" at index ${currentWordIndex}`
    );
  }, [currentWord, currentWordIndex]);

  useEffect(() => {
    console.log(`Words dictionary updated:`, wordsDictionary);
  }, [wordsDictionary]);

  // const patternCheckers = useMemo(
  //   () => [
  //     {
  //       type: "capital" as const,
  //       regex: /[A-Z]/,
  //       findIndex: (word: string) => word.search(/[A-Z]/),
  //     },
  //     {
  //       type: "ch" as const,
  //       regex: /ch/,
  //       findIndex: (word: string) => word.indexOf("ch"),
  //     },
  //     {
  //       type: "c" as const,
  //       regex: /c/,
  //       findIndex: (word: string) => word.indexOf("c"),
  //     },
  //     {
  //       type: "j" as const,
  //       regex: /j/,
  //       findIndex: (word: string) => word.indexOf("j"),
  //     },
  //     {
  //       type: "qu" as const,
  //       regex: /qu/,
  //       findIndex: (word: string) => word.indexOf("qu"),
  //     },
  //   ],
  //   []
  // );

  function containsCapital(word: string): boolean {
    return /[A-Z]/.test(word);
  }

  function containsCh(word: string): boolean {
    return /ch/.test(word);
  }

  function containsC(word: string): boolean {
    return /c/.test(word);
  }

  function containsJ(word: string): boolean {
    return /j/.test(word);
  }

  function containsQu(word: string): boolean {
    return /qu/.test(word);
  }

  // Handle Clicks

  //This should initialize the dictionary AND open the dialog
  const handleTransliterateButtonClick = useCallback((): void => {
    console.log(`Transliterate button clicked with text: "${text}"`);

    if (!text.trim()) {
      console.log("Text is empty, not proceeding");
      return; // Don't proceed if text is empty
    }

    const initialDict = initializeDictionary(text);
    const keys = Object.keys(initialDict);

    if (keys.length === 0) {
      console.log("No words found in text, not proceeding");
      return; // Don't proceed if no words found
    }

    console.log(`Setting up transliteration for ${keys.length} words:`, keys);

    setWordsDictionary(initialDict);
    setWordKeys(keys);
    setCurrentWordIndex(0);
    setCurrentWord(keys[0]);

    setTempWordCount(keys.length);

    // Check if the first word needs user input
    if (needsUserInput(keys[0])) {
      setIsDialogOpen(true);
      setActiveDialog("start");
      console.log("Dialog should now be open with start state");
    } else {
      // Automatically process words that don't need input
      console.log("First word doesn't need input, processing automatically");
      processWordsAutomatically(keys, initialDict);
    }
  }, [text]);

  const handleStartButtonClick = (): void => {
    console.log(`Start button clicked. Current word: "${currentWord}"`);
    setWordForDialog(currentWord);
    processWord(currentWord);
  };

  const processWord = (word: string): void => {
    console.log(`Processing word: "${word}" at index ${currentWordIndex}`);

    if (containsCapital(word)) {
      const matchIndex = word.search(/[A-Z]/);
      console.log(`Found capital letter at index ${matchIndex}`);
      setCapitalIndex(matchIndex);
      setWordForDialog(word);
      setActiveDialog("capital");
      return;
    } else if (containsCh(word)) {
      const matchIndex = word.indexOf("ch");
      console.log(`Found 'ch' at index ${matchIndex}`);
      setChIndex(matchIndex);
      setWordForDialog(word);
      setActiveDialog("ch");
      return;
    } else if (containsC(word)) {
      const matchIndex = word.indexOf("c");
      console.log(`Found 'c' at index ${matchIndex}`);
      setCIndex(matchIndex);
      setWordForDialog(word);
      setActiveDialog("c");
      return;
    } else if (containsJ(word)) {
      const matchIndex = word.indexOf("j");
      console.log(`Found 'j' at index ${matchIndex}`);
      setJIndex(matchIndex);
      setWordForDialog(word);
      setActiveDialog("j");
      return;
    } else if (containsQu(word)) {
      const matchIndex = word.indexOf("qu");
      console.log(`Found 'qu' at index ${matchIndex}`);
      setQuIndex(matchIndex);
      setWordForDialog(word);
      setActiveDialog("qu");
      return;
    }

    // No special characters found, process normally
    console.log(`Processing word normally: "${word}"`);
    const processed = processBaybayinText(word);
    const original = wordKeys[currentWordIndex];

    console.log(`Original: "${original}", Processed: "${processed}"`);

    setWordsDictionary((prev) => ({
      ...prev,
      [original]: processed,
    }));

    goToNextWord();
  };

  const goToNextWord = () => {
    const nextIndex = currentWordIndex + 1;
    console.log(
      `Moving to next word. Current index: ${currentWordIndex}, Next index: ${nextIndex}, Total words: ${wordKeys.length}`
    );

    if (nextIndex < wordKeys.length) {
      const nextWord = wordKeys[nextIndex];
      console.log(`Moving to next word: "${nextWord}"`);
      setCurrentWordIndex(nextIndex);
      setCurrentWord(nextWord);

      // Check if the next word needs user input
      if (needsUserInput(nextWord)) {
        setWordForDialog(nextWord);
        // The dialog will remain open for user input
      } else {
        // Process the word automatically and continue
        console.log(
          `Next word "${nextWord}" doesn't need input, processing automatically`
        );
        const processed = processBaybayinText(nextWord);
        const original = wordKeys[nextIndex];

        setWordsDictionary((prev) => ({
          ...prev,
          [original]: processed,
        }));

        // Continue to the next word
        goToNextWord();
      }
    } else {
      console.log(
        `Finished processing all words. Finalizing transliteration...`
      );
      // Finalize the transliteration with all processed words
      const finalText = text.replace(/\b\w+\b/g, (word) => {
        const processed = wordsDictionary[word];
        console.log(`Word: "${word}" -> "${processed || word}"`);
        return processed || word;
      });
      setTransliteratedText(finalText);
      setIsDialogOpen(false);
    }
  };

  // Handle Selections

  const handleCapitalInput = (input: string) => {
    if (capitalIndex === null) return;

    const replacement = input;
    const updatedWord = replacement.toLowerCase();
    const originalWord = wordKeys[currentWordIndex];

    setWordsDictionary((prev) => ({
      ...prev,
      [originalWord]: updatedWord,
    }));

    setCapitalIndex(null);
    setActiveDialog(null);

    // Move to next word instead of processing the current word again
    const nextIndex = currentWordIndex + 1;
    if (nextIndex < wordKeys.length) {
      const nextWord = wordKeys[nextIndex];
      setCurrentWordIndex(nextIndex);
      setCurrentWord(nextWord);

      // Check if the next word needs user input
      if (needsUserInput(nextWord)) {
        setWordForDialog(nextWord);
        processWord(nextWord);
      } else {
        // Process the word automatically and continue
        console.log(
          `Next word "${nextWord}" doesn't need input, processing automatically`
        );
        const processed = processBaybayinText(nextWord);

        setWordsDictionary((prev) => ({
          ...prev,
          [nextWord]: processed,
        }));

        // Continue to the next word
        goToNextWord();
      }
    } else {
      setIsDialogOpen(false);
      // Finalize the transliteration with all processed words
      const finalText = text.replace(/\b\w+\b/g, (word) => {
        return wordsDictionary[word] || word;
      });
      setTransliteratedText(finalText);
    }
  };

  const handleClose = (): void => {
    setActiveDialog(null);
    setIsDialogOpen(false);
    resetAllDialogs();
  };

  const handleSkip = (): void => {
    const originalWord = wordKeys[currentWordIndex];
    const lowercased = originalWord.toLowerCase();
    const processed = processBaybayinText(lowercased);

    setWordsDictionary((prev) => ({
      ...prev,
      [originalWord]: processed,
    }));

    // Move to next word
    const nextIndex = currentWordIndex + 1;
    if (nextIndex < wordKeys.length) {
      const nextWord = wordKeys[nextIndex];
      setCurrentWordIndex(nextIndex);
      setCurrentWord(nextWord);

      // Check if the next word needs user input
      if (needsUserInput(nextWord)) {
        setWordForDialog(nextWord);
        processWord(nextWord);
      } else {
        // Process the word automatically and continue
        console.log(
          `Next word "${nextWord}" doesn't need input, processing automatically`
        );
        const processed = processBaybayinText(nextWord);

        setWordsDictionary((prev) => ({
          ...prev,
          [nextWord]: processed,
        }));

        // Continue to the next word
        goToNextWord();
      }
    } else {
      setIsDialogOpen(false);
      // Finalize the transliteration with all processed words
      const finalText = text.replace(/\b\w+\b/g, (word) => {
        return wordsDictionary[word] || word;
      });
      setTransliteratedText(finalText);
    }
  };

  const handleChSelection = (choice: string) => {
    if (chIndex === null) return;

    const replacement = choice === "k" ? "k" : "tiy";

    const before = currentWord.slice(0, chIndex);
    const after = currentWord.slice(chIndex + 2);
    const updatedWord = before + replacement + after;

    const originalWord = wordKeys[currentWordIndex];

    setWordsDictionary((prev) => ({
      ...prev,
      [originalWord]: updatedWord,
    }));

    setChIndex(null);
    setActiveDialog(null);

    // Move to next word instead of processing the current word again
    const nextIndex = currentWordIndex + 1;
    if (nextIndex < wordKeys.length) {
      const nextWord = wordKeys[nextIndex];
      setCurrentWordIndex(nextIndex);
      setCurrentWord(nextWord);

      // Check if the next word needs user input
      if (needsUserInput(nextWord)) {
        setWordForDialog(nextWord);
        processWord(nextWord);
      } else {
        // Process the word automatically and continue
        console.log(
          `Next word "${nextWord}" doesn't need input, processing automatically`
        );
        const processed = processBaybayinText(nextWord);

        setWordsDictionary((prev) => ({
          ...prev,
          [nextWord]: processed,
        }));

        // Continue to the next word
        goToNextWord();
      }
    } else {
      setIsDialogOpen(false);
      // Finalize the transliteration with all processed words
      const finalText = text.replace(/\b\w+\b/g, (word) => {
        return wordsDictionary[word] || word;
      });
      setTransliteratedText(finalText);
    }
  };

  const handleCSelection = (choice: string) => {
    if (cIndex === null) return;

    let replacement = "";

    if (choice === "k") {
      replacement = "k";
    } else if (choice === "tiy") {
      replacement = "tiy";
    } else if (choice === "s") {
      replacement = "s";
    }

    const before = currentWord.slice(0, cIndex);
    const after = currentWord.slice(cIndex + 1);
    const updatedWord = before + replacement + after;

    const originalWord = wordKeys[currentWordIndex];

    setWordsDictionary((prev) => ({
      ...prev,
      [originalWord]: updatedWord,
    }));

    setCIndex(null);
    setActiveDialog(null);

    // Move to next word instead of processing the current word again
    const nextIndex = currentWordIndex + 1;
    if (nextIndex < wordKeys.length) {
      const nextWord = wordKeys[nextIndex];
      setCurrentWordIndex(nextIndex);
      setCurrentWord(nextWord);

      // Check if the next word needs user input
      if (needsUserInput(nextWord)) {
        setWordForDialog(nextWord);
        processWord(nextWord);
      } else {
        // Process the word automatically and continue
        console.log(
          `Next word "${nextWord}" doesn't need input, processing automatically`
        );
        const processed = processBaybayinText(nextWord);

        setWordsDictionary((prev) => ({
          ...prev,
          [nextWord]: processed,
        }));

        // Continue to the next word
        goToNextWord();
      }
    } else {
      setIsDialogOpen(false);
      // Finalize the transliteration with all processed words
      const finalText = text.replace(/\b\w+\b/g, (word) => {
        return wordsDictionary[word] || word;
      });
      setTransliteratedText(finalText);
    }
  };

  const handleJSelection = (choice: string) => {
    if (jIndex === null) return;

    const replacement = choice === "h" ? "h" : "diy";

    const before = currentWord.slice(0, jIndex);
    const after = currentWord.slice(jIndex + 1);
    const updatedWord = before + replacement + after;

    const originalWord = wordKeys[currentWordIndex];

    setWordsDictionary((prev) => ({
      ...prev,
      [originalWord]: updatedWord,
    }));

    setJIndex(null);
    setActiveDialog(null);

    // Move to next word instead of processing the current word again
    const nextIndex = currentWordIndex + 1;
    if (nextIndex < wordKeys.length) {
      const nextWord = wordKeys[nextIndex];
      setCurrentWordIndex(nextIndex);
      setCurrentWord(nextWord);

      // Check if the next word needs user input
      if (needsUserInput(nextWord)) {
        setWordForDialog(nextWord);
        processWord(nextWord);
      } else {
        // Process the word automatically and continue
        console.log(
          `Next word "${nextWord}" doesn't need input, processing automatically`
        );
        const processed = processBaybayinText(nextWord);

        setWordsDictionary((prev) => ({
          ...prev,
          [nextWord]: processed,
        }));

        // Continue to the next word
        goToNextWord();
      }
    } else {
      setIsDialogOpen(false);
      // Finalize the transliteration with all processed words
      const finalText = text.replace(/\b\w+\b/g, (word) => {
        return wordsDictionary[word] || word;
      });
      setTransliteratedText(finalText);
    }
  };

  const handleQuSelection = (choice: string) => {
    if (quIndex === null) return;

    const replacement = choice === "k" ? "k" : "kuw";

    const before = currentWord.slice(0, quIndex);
    const after = currentWord.slice(quIndex + 2);
    const updatedWord = before + replacement + after;

    const originalWord = wordKeys[currentWordIndex];

    setWordsDictionary((prev) => ({
      ...prev,
      [originalWord]: updatedWord,
    }));

    setQuIndex(null);
    setActiveDialog(null);

    // Move to next word instead of processing the current word again
    const nextIndex = currentWordIndex + 1;
    if (nextIndex < wordKeys.length) {
      const nextWord = wordKeys[nextIndex];
      setCurrentWordIndex(nextIndex);
      setCurrentWord(nextWord);

      // Check if the next word needs user input
      if (needsUserInput(nextWord)) {
        setWordForDialog(nextWord);
        processWord(nextWord);
      } else {
        // Process the word automatically and continue
        console.log(
          `Next word "${nextWord}" doesn't need input, processing automatically`
        );
        const processed = processBaybayinText(nextWord);

        setWordsDictionary((prev) => ({
          ...prev,
          [nextWord]: processed,
        }));

        // Continue to the next word
        goToNextWord();
      }
    } else {
      setIsDialogOpen(false);
      // Finalize the transliteration with all processed words
      const finalText = text.replace(/\b\w+\b/g, (word) => {
        return wordsDictionary[word] || word;
      });
      setTransliteratedText(finalText);
    }
  };

  // Helper methods

  const initializeDictionary = (inputText: string): Dictionary => {
    const words = inputText.trim().split(/\s+/);
    console.log(`Initializing dictionary with words:`, words);

    const dict = words.reduce((dict: Dictionary, word: string) => {
      dict[word] = "";
      return dict;
    }, {});

    console.log(`Initialized dictionary:`, dict);
    return dict;
  };

  const resetAllDialogs = (): void => {
    setActiveDialog(null);
    setCapitalIndex(null);
    setChIndex(null);
    setCIndex(null);
    setJIndex(null);
    setQuIndex(null);
  };

  // Helper function to check if a word needs user input
  const needsUserInput = (word: string): boolean => {
    return (
      containsCapital(word) ||
      containsCh(word) ||
      containsC(word) ||
      containsJ(word) ||
      containsQu(word)
    );
  };

  // Helper function to automatically process words that don't need input
  const processWordsAutomatically = (
    keys: string[],
    initialDict: Dictionary
  ): void => {
    let updatedDict = { ...initialDict };
    let processedCount = 0;

    // Process all words that don't need input
    for (let i = 0; i < keys.length; i++) {
      const word = keys[i];
      if (!needsUserInput(word)) {
        const processed = processBaybayinText(word);
        updatedDict[word] = processed;
        processedCount++;
        console.log(`Automatically processed "${word}" -> "${processed}"`);
      }
    }

    // Update the dictionary with processed words
    setWordsDictionary(updatedDict);

    // Check if any words still need user input
    const remainingWords = keys.filter((word) => needsUserInput(word));

    if (remainingWords.length === 0) {
      // All words processed automatically, finalize
      console.log(
        "All words processed automatically, finalizing transliteration"
      );
      const finalText = text.replace(/\b\w+\b/g, (word) => {
        return updatedDict[word] || word;
      });
      setTransliteratedText(finalText);
    } else {
      // Some words still need user input, open dialog for first one
      console.log(
        `${remainingWords.length} words still need user input, opening dialog`
      );
      setWordKeys(remainingWords);
      setCurrentWordIndex(0);
      setCurrentWord(remainingWords[0]);
      setTempWordCount(remainingWords.length);
      setIsDialogOpen(true);
      setActiveDialog("start");
    }
  };

  // const activateDialog = (
  //   match: number,
  //   word: string,
  //   dialogType: React.SetStateAction<DialogType>
  // ): void => {
  //   if (match !== -1) {
  //     if (dialogType == "capital") {
  //       setCapitalIndex(match);
  //     } else if (dialogType == "ch") {
  //       setChIndex(match);
  //     } else if (dialogType == "c") {
  //       setCIndex(match);
  //     } else if (dialogType == "j") {
  //       setJIndex(match);
  //     } else if (dialogType == "qu") {
  //       setQuIndex(match);
  //     }
  //     setWordForDialog(word);
  //     setActiveDialog(dialogType);
  //   }
  // };

  // Main HTML Body

  // Debug logging for render
  console.log(`Rendering Transliterator2 with:`, {
    text,
    transliteratedText,
    wordKeys,
    currentWordIndex,
    currentWord,
    isDialogOpen,
    activeDialog,
    wordForDialog,
    wordsDictionary,
  });

  return (
    <div>
      <div className="transliteration-container">
        <div className="textarea-wrapper">
          <textarea
            className="transliteration-textarea"
            placeholder="Enter text to be transliterated here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          {text.length > 0 && (
            <button
              className="clear-input-button"
              onClick={() => setText("")}
              aria-label="Clear input"
            >
              ×
            </button>
          )}
        </div>
        <div className="textarea-wrapper">
          <div
            className={`transliteration-output ${
              textareaHasText
                ? isBaybayin
                  ? "baybayin-font"
                  : isAurebesh
                  ? "aurebesh-font"
                  : isDeseret
                  ? "deseret-font"
                  : ""
                : ""
            }`}
          >
            {transliteratedText}
          </div>
          {transliteratedText.length > 0 && (
            <button
              className="clear-output-button"
              onClick={() => setTransliteratedText("")}
            >
              ×
            </button>
          )}
        </div>
      </div>
      <div className="action-buttons">
        <div>
          <TransliterateButton
            isActive={textareaHasText}
            onClick={handleTransliterateButtonClick}
            isDisabled={!textareaHasText}
          />
        </div>
        <SaveButtonContainter
          transliteratedText={transliteratedText}
          wordsDictionary={wordsDictionary}
        />
      </div>
      {isDialogOpen && (
        <AllInOneDialog
          onClickStart={handleStartButtonClick}
          onClose={handleClose}
          onEnter={handleCapitalInput}
          onSkip={handleSkip}
          onCSelection={handleCSelection}
          onChSelection={handleChSelection}
          onJSelection={handleJSelection}
          onQuSelection={handleQuSelection}
          numberOfWordsToReview={tempWordCount}
          currentWordIndex={currentWordIndex}
          activeDialog={activeDialog}
          wordForDialog={wordForDialog}
        />
      )}
      <div className="dictionary-output">
        <h3>Processed Words:</h3>
        <ul>
          {Object.entries(wordsDictionary).map(([original, processed]) => (
            <li key={original}>
              <strong>{original}</strong>: {processed || "(not processed)"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
