import Checkbox from "../CheckBox/Checkbox";
import BaybayinFontSelector from "../BaybayinFontSelector/BaybayinFontSelector";
import CloseDialogButton from "../Buttons/DialogButtons/CloseDialogButton";
import {
  baybayinSupportsUnicodeOption,
  getBaybayinFontById,
  type BaybayinFontId,
} from "../../data/BaybayinData/BAYBAYIN_FONTS_DATA";

export type TransliteratorSettingsDialogProps = {
  currentAlphabet: string;
  onClose: () => void;
  useCombinedCharacters: boolean;
  useTechNumbers: boolean;
  useKlinzhai: boolean;
  selectedBaybayinFont: BaybayinFontId;
  useXVowelKiller: boolean;
  useUnicode: boolean;
  textContainsBorrowedWords: boolean;
  useHollowKudlits: boolean;
  directMode: boolean;
  useSingleLineInput: boolean;
  showOutputOnlyOption?: boolean;
  outputOnlyMode: boolean;
  setUseCombinedCharacters: (checked: boolean) => void;
  setUseTechNumbers: (checked: boolean) => void;
  setUseKlinzhai: (checked: boolean) => void;
  setSelectedBaybayinFont: (fontId: BaybayinFontId) => void;
  setUseXVowelKiller: (checked: boolean) => void;
  setTextContainsBorrowedWords: (checked: boolean) => void;
  setUseHollowKudlits: (checked: boolean) => void;
  setUseUnicode: (checked: boolean) => void;
  setDirectMode: (checked: boolean) => void;
  setUseSingleLineInput: (checked: boolean) => void;
  setOutputOnlyMode: (checked: boolean) => void;
};

export function alphabetHasTransliteratorSettings(alphabet: string): boolean {
  return (
    alphabet === "Aurebesh" || alphabet === "Plqad" || alphabet === "Baybayin"
  );
}

export default function TransliteratorSettingsDialog({
  currentAlphabet,
  onClose,
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
  showOutputOnlyOption = false,
  outputOnlyMode,
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
  setOutputOnlyMode,
}: TransliteratorSettingsDialogProps) {
  const selectedBaybayinFontEntry = getBaybayinFontById(selectedBaybayinFont);

  return (
    <dialog
      className="dialog-overlay"
      open
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="dialog-box transliterator-panel-dialog transliterator-settings-dialog"
        role="document"
      >
        <CloseDialogButton onClose={onClose} />
        <div className="dialog-header">
          <div className="dialog-header-top-row">
            <h3>{currentAlphabet} Settings</h3>
          </div>
          <p className="transliterator-panel-subtitle">
            Options for this transliterator.
          </p>
        </div>
        <div className="dialog-content">
          {currentAlphabet === "Baybayin" && (
            <div className="transliterator-settings-font-row">
              <BaybayinFontSelector
                selectedFontId={selectedBaybayinFont}
                onChange={setSelectedBaybayinFont}
              />
            </div>
          )}

          <div className="transliterator-settings-options">
            {currentAlphabet === "Aurebesh" && (
              <>
                <Checkbox
                  checked={useCombinedCharacters}
                  onChange={setUseCombinedCharacters}
                  label="Include combined characters."
                  title="Maps digraphs such as ch, sh, ae, th, ng, and oo to combined symbols."
                />
                <Checkbox
                  checked={useTechNumbers}
                  onChange={setUseTechNumbers}
                  label="Use tech numbers."
                  title="Use tech numbers instead of Arabic."
                />
              </>
            )}

            {currentAlphabet === "Plqad" && (
              <Checkbox
                checked={useKlinzhai}
                onChange={setUseKlinzhai}
                label="Input language is English."
              />
            )}

            {currentAlphabet === "Baybayin" && (
              <>
                <Checkbox
                  checked={directMode}
                  onChange={setDirectMode}
                  label="Direct mode"
                  title="Skip English pronunciation lookup and Tagalization; transliterate Latin spelling as written."
                />
                {selectedBaybayinFont === "noto-sans" && (
                  <Checkbox
                    checked={useHollowKudlits}
                    onChange={setUseHollowKudlits}
                    label="Use hollow kudlits"
                    title="Use hollow kudlit marks for e/o (vs filled marks for i/u)."
                  />
                )}
                {baybayinSupportsUnicodeOption(selectedBaybayinFont) && (
                  <Checkbox
                    checked={useUnicode}
                    onChange={setUseUnicode}
                    label="Use Unicode"
                    title="Output real Baybayin Unicode characters while keeping the selected font."
                  />
                )}
                <Checkbox
                  checked={textContainsBorrowedWords}
                  onChange={setTextContainsBorrowedWords}
                  label="Text contains borrowed words"
                />
                {selectedBaybayinFontEntry.supportsXVowelKiller && (
                  <Checkbox
                    checked={useXVowelKiller}
                    onChange={setUseXVowelKiller}
                    label='Use "x" vowel killer.'
                  />
                )}
              </>
            )}

            <span className="mobile-only-control">
              <Checkbox
                checked={useSingleLineInput}
                onChange={setUseSingleLineInput}
                label="Single-line input"
                title="Use single-line input and output boxes on mobile."
              />
            </span>

            {showOutputOnlyOption && (
              <Checkbox
                checked={outputOnlyMode}
                onChange={setOutputOnlyMode}
                label="Output only"
                title="Hide the Latin input and type with the on-screen keyboard. The phone keyboard stays closed."
              />
            )}
          </div>

          <div className="dialog-buttons">
            <button type="button" className="confirm-button" onClick={onClose}>
              Done
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
