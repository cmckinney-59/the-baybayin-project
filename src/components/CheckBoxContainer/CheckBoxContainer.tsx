import TransliteratorSettingsDialog from "../Dialog/TransliteratorSettingsDialog";
import type { AurebeshFontId } from "../../data/AurebeshData/AUREBESH_FONTS_DATA";
import type { BaybayinFontId } from "../../data/BaybayinData/BAYBAYIN_FONTS_DATA";
import type { DeseretFontId } from "../../data/DeseretData/DESERET_FONTS_DATA";
import type { PhoneticPriority } from "../../utils/TextProcessors/phoneticizeWord";
import type { DeseretMode } from "../../utils/TextProcessors/DeseretTextProcessor";
import type { TransliteratorFontSize } from "../../data/transliteratorFontSize";

interface CheckboxContainerProps {
  currentAlphabet: string;
  useCombinedCharacters: boolean;
  useTechNumbers: boolean;
  useKlinzhai: boolean;
  selectedAurebeshFont: AurebeshFontId;
  selectedBaybayinFont: BaybayinFontId;
  selectedDeseretFont: DeseretFontId;
  useXVowelKiller: boolean;
  useUnicode: boolean;
  textContainsBorrowedWords: boolean;
  useHollowKudlits: boolean;
  phoneticMode: boolean;
  useEnglishPronunciation: boolean;
  useSpanishPronunciation: boolean;
  phoneticPriority: PhoneticPriority;
  deseretMode: DeseretMode;
  showModernDeseret?: boolean;
  fontSize: TransliteratorFontSize;
  setUseCombinedCharacters: (checked: boolean) => void;
  setUseTechNumbers: (checked: boolean) => void;
  setUseKlinzhai: (checked: boolean) => void;
  setSelectedAurebeshFont: (fontId: AurebeshFontId) => void;
  setSelectedBaybayinFont: (fontId: BaybayinFontId) => void;
  setSelectedDeseretFont: (fontId: DeseretFontId) => void;
  setUseXVowelKiller: (checked: boolean) => void;
  setTextContainsBorrowedWords: (checked: boolean) => void;
  setUseHollowKudlits: (checked: boolean) => void;
  setUseUnicode: (checked: boolean) => void;
  setPhoneticMode: (checked: boolean) => void;
  setUseEnglishPronunciation: (checked: boolean) => void;
  setUseSpanishPronunciation: (checked: boolean) => void;
  setPhoneticPriority: (priority: PhoneticPriority) => void;
  setDeseretMode: (mode: DeseretMode) => void;
  setFontSize: (size: TransliteratorFontSize) => void;
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
  selectedAurebeshFont,
  selectedBaybayinFont,
  selectedDeseretFont,
  useXVowelKiller,
  textContainsBorrowedWords,
  useHollowKudlits,
  useUnicode,
  phoneticMode,
  useEnglishPronunciation,
  useSpanishPronunciation,
  phoneticPriority,
  deseretMode,
  showModernDeseret = false,
  fontSize,
  useSingleLineInput,
  setUseCombinedCharacters,
  setUseTechNumbers,
  setUseKlinzhai,
  setSelectedAurebeshFont,
  setSelectedBaybayinFont,
  setSelectedDeseretFont,
  setUseXVowelKiller,
  setTextContainsBorrowedWords,
  setUseHollowKudlits,
  setUseUnicode,
  setPhoneticMode,
  setUseEnglishPronunciation,
  setUseSpanishPronunciation,
  setPhoneticPriority,
  setDeseretMode,
  setFontSize,
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
      selectedAurebeshFont={selectedAurebeshFont}
      selectedBaybayinFont={selectedBaybayinFont}
      selectedDeseretFont={selectedDeseretFont}
      useXVowelKiller={useXVowelKiller}
      useHollowKudlits={useHollowKudlits}
      useUnicode={useUnicode}
      phoneticMode={phoneticMode}
      useEnglishPronunciation={useEnglishPronunciation}
      useSpanishPronunciation={useSpanishPronunciation}
      phoneticPriority={phoneticPriority}
      deseretMode={deseretMode}
      showModernDeseret={showModernDeseret}
      fontSize={fontSize}
      useSingleLineInput={useSingleLineInput}
      textContainsBorrowedWords={textContainsBorrowedWords}
      showOutputOnlyOption={showOutputOnlyOption}
      outputOnlyMode={outputOnlyMode}
      setUseCombinedCharacters={setUseCombinedCharacters}
      setUseTechNumbers={setUseTechNumbers}
      setUseKlinzhai={setUseKlinzhai}
      setSelectedAurebeshFont={setSelectedAurebeshFont}
      setSelectedBaybayinFont={setSelectedBaybayinFont}
      setSelectedDeseretFont={setSelectedDeseretFont}
      setUseXVowelKiller={setUseXVowelKiller}
      setUseHollowKudlits={setUseHollowKudlits}
      setUseUnicode={setUseUnicode}
      setPhoneticMode={setPhoneticMode}
      setUseEnglishPronunciation={setUseEnglishPronunciation}
      setUseSpanishPronunciation={setUseSpanishPronunciation}
      setPhoneticPriority={setPhoneticPriority}
      setDeseretMode={setDeseretMode}
      setFontSize={setFontSize}
      setUseSingleLineInput={setUseSingleLineInput}
      setTextContainsBorrowedWords={setTextContainsBorrowedWords}
      setOutputOnlyMode={setOutputOnlyMode}
    />
  );
}
