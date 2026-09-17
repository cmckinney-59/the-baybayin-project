import TransliteratorSettingsDialog from "../Dialog/TransliteratorSettingsDialog";
import type { BaybayinFontId } from "../../data/BaybayinData/BAYBAYIN_FONTS_DATA";

interface CheckboxContainerProps {
  currentAlphabet: string;
  useCombinedCharacters: boolean;
  useTechNumbers: boolean;
  useKlinzhai: boolean;
  selectedBaybayinFont: BaybayinFontId;
  useXVowelKiller: boolean;
  useUnicode: boolean;
  textContainsBorrowedWords: boolean;
  useHollowKudlits: boolean;
  directMode: boolean;
  setUseCombinedCharacters: (checked: boolean) => void;
  setUseTechNumbers: (checked: boolean) => void;
  setUseKlinzhai: (checked: boolean) => void;
  setSelectedBaybayinFont: (fontId: BaybayinFontId) => void;
  setUseXVowelKiller: (checked: boolean) => void;
  setTextContainsBorrowedWords: (checked: boolean) => void;
  setUseHollowKudlits: (checked: boolean) => void;
  setUseUnicode: (checked: boolean) => void;
  setDirectMode: (checked: boolean) => void;
  useSingleLineInput: boolean;
  setUseSingleLineInput: (checked: boolean) => void;
  showOutputOnlyOption?: boolean;
  outputOnlyMode: boolean;
  setOutputOnlyMode: (checked: boolean) => void;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
}

/** Settings are always available (at least single-line input on mobile). */
export function hasTransliteratorSettings(
  _alphabet?: string,
  _showOutputOnlyOption?: boolean,
): boolean {
  return true;
}

export default function CheckboxContainer({
  currentAlphabet,
  useCombinedCharacters,
  useTechNumbers,
  useKlinzhai,
  selectedBaybayinFont,
  useXVowelKiller,
  textContainsBorrowedWords,
  useHollowKudlits,
  useUnicode,
  directMode,
  useSingleLineInput,
  setUseCombinedCharacters,
  setUseTechNumbers,
  setUseKlinzhai,
  setSelectedBaybayinFont,
  setUseXVowelKiller,
  setTextContainsBorrowedWords,
  setUseHollowKudlits,
  setUseUnicode,
  setDirectMode,
  setUseSingleLineInput,
  showOutputOnlyOption = false,
  outputOnlyMode,
  setOutputOnlyMode,
  isSettingsOpen,
  setIsSettingsOpen,
}: CheckboxContainerProps) {
  if (!isSettingsOpen) {
    return null;
  }

  return (
    <TransliteratorSettingsDialog
      currentAlphabet={currentAlphabet}
      onClose={() => setIsSettingsOpen(false)}
      useCombinedCharacters={useCombinedCharacters}
      useTechNumbers={useTechNumbers}
      useKlinzhai={useKlinzhai}
      selectedBaybayinFont={selectedBaybayinFont}
      useXVowelKiller={useXVowelKiller}
      useHollowKudlits={useHollowKudlits}
      useUnicode={useUnicode}
      directMode={directMode}
      useSingleLineInput={useSingleLineInput}
      textContainsBorrowedWords={textContainsBorrowedWords}
      showOutputOnlyOption={showOutputOnlyOption}
      outputOnlyMode={outputOnlyMode}
      setUseCombinedCharacters={setUseCombinedCharacters}
      setUseTechNumbers={setUseTechNumbers}
      setUseKlinzhai={setUseKlinzhai}
      setSelectedBaybayinFont={setSelectedBaybayinFont}
      setUseXVowelKiller={setUseXVowelKiller}
      setUseHollowKudlits={setUseHollowKudlits}
      setUseUnicode={setUseUnicode}
      setDirectMode={setDirectMode}
      setUseSingleLineInput={setUseSingleLineInput}
      setTextContainsBorrowedWords={setTextContainsBorrowedWords}
      setOutputOnlyMode={setOutputOnlyMode}
    />
  );
}
