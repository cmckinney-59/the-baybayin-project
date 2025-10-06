import { useState } from "react";
import CopyTextButton from "./CopyTextButton";
import ExcelSaveButton from "./ExcelSaveButton";
// import TextSaveButton from "./TextSaveButton";
import WordSaveButton from "./WordSaveButton";
import FontInstallationDialog from "../../Dialog/FontInstallationDialog";

type Dictionary = { [word: string]: string };

interface SaveButtonContainerProps {
  transliteratedText: string;
  wordsDictionary: Dictionary;
}

export default function SaveButtonContainter({
  transliteratedText,
  wordsDictionary,
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
        wordsDictionary={wordsDictionary}
        onShowDialog={handleShowDialog}
      />
      <WordSaveButton
        transliteratedText={transliteratedText}
        onShowDialog={handleShowDialog}
      />
      {/* <TextSaveButton transliteratedText={transliteratedText} /> */}
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
    </>
  );
}
