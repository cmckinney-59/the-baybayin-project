import { useState } from "react";
import CopyTextButton from "./CopyTextButton";
import ExcelSaveButton from "./ExcelSaveButton";
import WordSaveButton from "./WordSaveButton";
import FontInstallationDialog from "../../Dialog/FontInstallationDialog";
import MessageDialog from "../../Dialog/MessageDialog";
import WordSaveButtonParallel from "./WordSaveButtonParallel";

interface SaveButtonContainerProps {
  originalText: string;
  transliteratedText: string;
}

export default function SaveButtonContainter({
  originalText,
  transliteratedText,
}: SaveButtonContainerProps) {
  const [showFontDialog, setShowFontDialog] = useState(false);
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const [message, setMessage] = useState("");
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

  const handleMessageDialogClose = () => {
    setShowMessageDialog(false);
    setMessage("");
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
      <WordSaveButtonParallel
        originalText={originalText}
        transliteratedText={transliteratedText}
        onShowDialog={handleShowDialog}
      />
      <CopyTextButton
        transliteratedText={transliteratedText}
        onShowDialog={handleShowDialog}
      />
      {showFontDialog && (
        <FontInstallationDialog
          onClose={handleClose}
          onConfirm={handleConfirm}
        />
      )}
      {showMessageDialog && (
        <MessageDialog message={message} onClose={handleMessageDialogClose} />
      )}
    </>
  );
}
