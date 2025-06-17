interface ChDialog2Props {
  word: string;
  onChSelection: (choice: "k" | "tiy") => void;
}

export default function ChDialog2({ word, onChSelection }: ChDialog2Props) {
  return (
    <>
      <p>
        Does the first "ch" in <strong>{word}</strong> sound like "k" or "tiy"?
      </p>
      <button onClick={() => onChSelection("k")}>k</button>
      <button onClick={() => onChSelection("tiy")}>tiy</button>
    </>
  );
}
