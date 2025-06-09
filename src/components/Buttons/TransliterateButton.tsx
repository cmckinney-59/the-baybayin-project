import { AiOutlineTranslation } from "react-icons/ai";

interface TransliterateButtonProps {
  onClick: () => void;
  isActive: boolean;
  isDisabled: boolean;
}

export default function TransliterateButton({
  onClick,
  isActive,
  isDisabled,
}: TransliterateButtonProps) {
  return (
    <button
      className={isActive ? "active" : undefined}
      onClick={onClick}
      disabled={isDisabled}
    >
      <AiOutlineTranslation style={{ marginRight: "5px" }} />
      Transliterate
    </button>
  );
}
