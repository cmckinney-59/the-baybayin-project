import { AiOutlineTranslation } from "react-icons/ai";

interface TransliterateButtonProps {
  onClick: () => void;
  isActive: boolean;
  text: string | null;
}

export default function TransliterateButton({
  onClick,
  isActive,
  text,
}: TransliterateButtonProps) {
  return (
    <button
      className={isActive ? "active" : undefined}
      onClick={onClick}
      disabled={text === null}
    >
      <AiOutlineTranslation style={{ marginRight: "5px" }} />
      Transliterate
    </button>
  );
}
