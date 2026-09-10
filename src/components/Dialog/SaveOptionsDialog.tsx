import { AiFillFileExcel, AiFillFileWord } from "react-icons/ai";
import CloseDialogButton from "../Buttons/DialogButtons/CloseDialogButton";
import downloadAsExcel from "../../utils/SaveActions/SaveToExcel";
import downloadAsWord from "../../utils/SaveActions/SaveToWord";
import downloadAsWordParallel from "../../utils/SaveActions/SaveToWordParallel";
import { useAlphabet } from "../../contexts/AlphabetContext";
import { useWordsDictionary } from "../../contexts/WordsDictionaryContext";

type SaveOptionsDialogProps = {
  originalText: string;
  transliteratedText: string;
  onClose: () => void;
};

export default function SaveOptionsDialog({
  originalText,
  transliteratedText,
  onClose,
}: SaveOptionsDialogProps) {
  const { currentFontName } = useAlphabet();
  const { wordsDictionary } = useWordsDictionary();
  const hasText = transliteratedText.trim().length > 0;

  const runAndClose = (action: () => void) => {
    action();
    onClose();
  };

  return (
    <dialog
      className="dialog-overlay"
      open
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="dialog-box transliterator-panel-dialog save-options-dialog"
        role="document"
      >
        <CloseDialogButton onClose={onClose} />
        <div className="dialog-header">
          <div className="dialog-header-top-row">
            <h3>Save As</h3>
          </div>
          <p className="transliterator-panel-subtitle">
            Choose a file format for your transliteration.
          </p>
        </div>
        <div className="dialog-content">
          <div className="save-options-buttons" role="list">
            <button
              type="button"
              className="save-option-button"
              role="listitem"
              disabled={!hasText}
              onClick={() =>
                runAndClose(() =>
                  downloadAsExcel(wordsDictionary, currentFontName),
                )
              }
            >
              <AiFillFileExcel aria-hidden="true" className="save-option-icon" />
              <span className="save-option-text">
                <span className="save-option-title">Excel</span>
                <span className="save-option-desc">Spreadsheet export</span>
              </span>
            </button>
            <button
              type="button"
              className="save-option-button"
              role="listitem"
              disabled={!hasText}
              onClick={() =>
                runAndClose(() =>
                  downloadAsWord(transliteratedText, currentFontName),
                )
              }
            >
              <AiFillFileWord aria-hidden="true" className="save-option-icon" />
              <span className="save-option-text">
                <span className="save-option-title">Word</span>
                <span className="save-option-desc">Document export</span>
              </span>
            </button>
            <button
              type="button"
              className="save-option-button"
              role="listitem"
              disabled={!hasText}
              onClick={() =>
                runAndClose(() =>
                  downloadAsWordParallel(
                    originalText,
                    transliteratedText,
                    currentFontName,
                  ),
                )
              }
            >
              <AiFillFileWord aria-hidden="true" className="save-option-icon" />
              <span className="save-option-text">
                <span className="save-option-title">Word Parallel</span>
                <span className="save-option-desc">
                  Side-by-side original and transliteration
                </span>
              </span>
            </button>
          </div>
          <div className="dialog-buttons">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
