import { useState } from "react";
import CopyTextButton from "./CopyTextButton";
import ExcelSaveButton from "./ExcelSaveButton";
import WordSaveButton from "./WordSaveButton";
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
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const [message, setMessage] = useState("");

  const handleShowDialog = (action: () => void) => {
    action();
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
      {showMessageDialog && (
        <MessageDialog message={message} onClose={handleMessageDialogClose} />
      )}
    </>
  );
}
