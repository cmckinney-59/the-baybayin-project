interface QuDialog2Props {
  word: string;
  onQuSelection: (choice: "k" | "kuw") => void;
}

export default function QuDialog2({ word, onQuSelection }: QuDialog2Props) {
  return (
    <>
      <p>
        Does the first "qu" in <strong>{word}</strong> sound like "k" or "kuw"?
      </p>
      <button onClick={() => onQuSelection("k")}>k</button>
      <button onClick={() => onQuSelection("kuw")}>kuw</button>
    </>
  );
}
