import type { JSX } from "react";

import DialogHeader from "../Dialog/DialogHeader.tsx";
import StartReviewDialog2 from "./SubDialogs/StartReviewDialog2.tsx";
import CapitalLetterDialog2 from "./SubDialogs/CapitalLetterDialog2.tsx";
import CloseDialogButton from "../Buttons/DialogButtons/CloseDialogButton.tsx";

type DialogType = "start" | "capital" | "ch" | "c" | "g" | "j" | "qu" | null;

interface AllInOneDialogProps {
  onClickStart: () => void;
  onClose: () => void;
  onSkip: () => void;
  onEnter: (replacement: string) => void;
  numberOfWordsToReview: number;
  currentWordIndex: number;
  originalText: string;
  activeDialog: DialogType;
}

export default function AllInOneDialog({
  onClickStart,
  onClose,
  onEnter,
  onSkip,
  numberOfWordsToReview,
  currentWordIndex,
  originalText,
  activeDialog,
}: AllInOneDialogProps) {
  let showDialog: JSX.Element | null = null;

  switch (activeDialog) {
    case "start":
      showDialog = <StartReviewDialog2 onClickStart={onClickStart} />;
      break;

    case "capital":
      showDialog = (
        <CapitalLetterDialog2
          originalText={originalText}
          onEnter={onEnter}
          onSkip={onSkip}
        />
      );
      break;
  }

  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <DialogHeader
          onClose={onClose}
          numberOfWordsToReview={numberOfWordsToReview}
          currentWordIndex={currentWordIndex}
          isStart={true}
        />
        {showDialog}
        <CloseDialogButton onClose={onClose} />
      </div>
    </dialog>
  );
}
