interface CDialog2Props {
  word: string;
  onCSelection: (choice: "k" | "s" | "tiy") => void;
}

export default function CDialog2({ word, onCSelection }: CDialog2Props) {
  return (
    <>
      <p>
        Does the first "c" in <strong>{word}</strong> sound like "k", "s" "tiy"?
      </p>
      <button onClick={() => onCSelection("k")}>k</button>
      <button onClick={() => onCSelection("s")}>s</button>
      <button onClick={() => onCSelection("tiy")}>tiy</button>
    </>
  );
}
