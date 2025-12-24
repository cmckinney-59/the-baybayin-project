import { useState } from "react";
import CopyTextButton from "./CopyTextButton";
import ExcelSaveButton from "./ExcelSaveButton";
import WordSaveButton from "./WordSaveButton";
import FontInstallationDialog from "../../Dialog/FontInstallationDialog";

interface SaveButtonContainerProps {
  transliteratedText: string;
}

export default function SaveButtonContainter({
  transliteratedText,
}: SaveButtonContainerProps) {
  const [showFontDialog, setShowFontDialog] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  const handleShowDialog = (action: () => void) => {
    setPendingAction(() => action);
    setShowFontDialog(true);
  };

  const handleConfirm = () => {
    if (pendingAction) {
      pendingAction();
    }
    setShowFontDialog(false);
    setPendingAction(null);
  };

  const handleClose = () => {
    setShowFontDialog(false);
    setPendingAction(null);
  };

  return (
    <>
      <p> Save as: </p>
      <ExcelSaveButton
        transliteratedText={transliteratedText}
        onShowDialog={handleShowDialog}
      />
      <WordSaveButton
        transliteratedText={transliteratedText}
        onShowDialog={handleShowDialog}
      />
      <CopyTextButton
        transliteratedText={transliteratedText}
        onShowDialog={handleShowDialog}
      />
      <button>Parallel Transliteration</button>
      {showFontDialog && (
        <FontInstallationDialog
          onClose={handleClose}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}
