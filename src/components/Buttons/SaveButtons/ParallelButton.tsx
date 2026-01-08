import { AiFillFileWord } from "react-icons/ai";

interface ParallelButtonProps {
  transliteratedText: string;
  onShowMessageDialog: (message: string) => void;
}

export default function ParallelButton({
  transliteratedText,
  onShowMessageDialog,
}: ParallelButtonProps) {
  const handleClick = () => {
    onShowMessageDialog("This feature is not yet functional");
  };

  return (
    <button
      className={transliteratedText ? "active" : undefined}
      onClick={handleClick}
      disabled={transliteratedText.trim().length === 0}
    >
      <AiFillFileWord />
      Parallel
    </button>
  );
}
