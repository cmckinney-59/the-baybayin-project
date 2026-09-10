import { useState } from "react";
import { AiFillSave, AiFillCopy, AiFillSetting } from "react-icons/ai";
import copyToClipboard from "../../../utils/SaveActions/CopyToClipboard";
import SaveOptionsDialog from "../../Dialog/SaveOptionsDialog";

interface SaveButtonContainerProps {
  originalText: string;
  transliteratedText: string;
  onOpenSettings?: () => void;
  showSettings?: boolean;
}

export default function SaveButtonContainter({
  originalText,
  transliteratedText,
  onOpenSettings,
  showSettings = false,
}: SaveButtonContainerProps) {
  const [isSaveOpen, setIsSaveOpen] = useState(false);
  const hasText = transliteratedText.trim().length > 0;
  const settingsLabel = showSettings
    ? "Settings"
    : "No settings for this alphabet";

  return (
    <>
      <button
        type="button"
        className={`action-icon-button${hasText ? " active" : ""}`}
        onClick={() => setIsSaveOpen(true)}
        disabled={!hasText}
        aria-label="Save as Excel, Word, or Word Parallel"
        title="Save as Excel, Word, or Word Parallel"
      >
        <AiFillSave aria-hidden="true" />
        <span className="action-button-label">Save</span>
      </button>
      <button
        type="button"
        className={`action-icon-button${hasText ? " active" : ""}`}
        onClick={() => copyToClipboard(transliteratedText)}
        disabled={!hasText}
        aria-label="Copy transliterated text"
        title="Copy transliterated text"
      >
        <AiFillCopy aria-hidden="true" />
        <span className="action-button-label">Copy</span>
      </button>
      <button
        type="button"
        className="action-icon-button"
        onClick={onOpenSettings}
        disabled={!showSettings || !onOpenSettings}
        aria-label={settingsLabel}
        title={settingsLabel}
      >
        <AiFillSetting aria-hidden="true" />
        <span className="action-button-label">Settings</span>
      </button>
      {isSaveOpen && (
        <SaveOptionsDialog
          originalText={originalText}
          transliteratedText={transliteratedText}
          onClose={() => setIsSaveOpen(false)}
        />
      )}
    </>
  );
}
