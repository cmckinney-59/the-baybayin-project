import { AiOutlineTranslation } from "react-icons/ai";

interface TransliterateButtonProps {
  onClick: () => void;
  isActive: boolean;
  disabled: boolean;
}

export default function TransliterateButton({
  onClick,
  isActive,
  disabled,
}: TransliterateButtonProps) {
  return (
    <button
      className={isActive ? "active" : undefined}
      onClick={onClick}
      disabled={disabled}
    >
      <AiOutlineTranslation style={{ marginRight: "5px" }} />
      Transliterate
    </button>
  );
}
