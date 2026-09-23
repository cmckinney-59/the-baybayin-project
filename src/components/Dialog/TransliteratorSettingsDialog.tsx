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
  phoneticMode: boolean;
  useEnglishPronunciation: boolean;
  useSpanishPronunciation: boolean;
  phoneticPriority: "english" | "spanish";
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
  setPhoneticMode: (checked: boolean) => void;
  setUseEnglishPronunciation: (checked: boolean) => void;
  setUseSpanishPronunciation: (checked: boolean) => void;
  setPhoneticPriority: (priority: "english" | "spanish") => void;
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
  phoneticMode,
  useEnglishPronunciation,
  useSpanishPronunciation,
  phoneticPriority,
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
  setPhoneticMode,
  setUseEnglishPronunciation,
  setUseSpanishPronunciation,
  setPhoneticPriority,
  setUseSingleLineInput,
  setOutputOnlyMode,
}: TransliteratorSettingsDialogProps) {
  const selectedBaybayinFontEntry = getBaybayinFontById(selectedBaybayinFont);
  const prioritizeEnabled =
    phoneticMode && useEnglishPronunciation && useSpanishPronunciation;

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
                <div className="phonetic-mode-settings">
                  <Checkbox
                    checked={phoneticMode}
                    onChange={setPhoneticMode}
                    label="Phonetic mode"
                    title="Look up English/Spanish pronunciation and Tagalize before converting to Baybayin. Off = transliterate Latin spelling as written."
                  />
                  <div
                    className={`phonetic-mode-settings-collapse${phoneticMode ? " is-open" : ""}`}
                    aria-hidden={!phoneticMode}
                  >
                    <div
                      className="phonetic-mode-settings-collapse-inner"
                      {...(!phoneticMode ? { inert: true as const } : {})}
                    >
                      <div className="phonetic-mode-settings-group">
                        <Checkbox
                          checked={useEnglishPronunciation}
                          onChange={setUseEnglishPronunciation}
                          label="Use English"
                          title="Tagalize words found in the English pronunciation dictionary."
                        />
                        <Checkbox
                          checked={useSpanishPronunciation}
                          onChange={setUseSpanishPronunciation}
                          label="Use Spanish"
                          title="Tagalize words found in the Spanish pronunciation dictionary."
                        />
                        <div
                          className={`phonetic-priority-row${prioritizeEnabled ? "" : " phonetic-priority-row--disabled"}`}
                          title={
                            prioritizeEnabled
                              ? "Which language to try first when both dictionaries are enabled."
                              : "Enable both Use English and Use Spanish to change priority."
                          }
                        >
                          <span className="phonetic-priority-label">
                            Prioritize
                          </span>
                          <div
                            className="phonetic-priority-toggle"
                            role="group"
                            aria-label="Pronunciation priority"
                          >
                            <button
                              type="button"
                              className={
                                phoneticPriority === "spanish"
                                  ? "phonetic-priority-option active"
                                  : "phonetic-priority-option"
                              }
                              disabled={!prioritizeEnabled}
                              aria-pressed={phoneticPriority === "spanish"}
                              onClick={() => setPhoneticPriority("spanish")}
                            >
                              Spanish
                            </button>
                            <button
                              type="button"
                              className={
                                phoneticPriority === "english"
                                  ? "phonetic-priority-option active"
                                  : "phonetic-priority-option"
                              }
                              disabled={!prioritizeEnabled}
                              aria-pressed={phoneticPriority === "english"}
                              onClick={() => setPhoneticPriority("english")}
                            >
                              English
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
