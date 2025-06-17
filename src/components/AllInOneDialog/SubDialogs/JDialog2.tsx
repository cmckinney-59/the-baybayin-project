interface JDialog2Props {
  word: string;
  onJSelection: (choice: "h" | "diy") => void;
}

export default function JDialog2({ word, onJSelection }: JDialog2Props) {
  return (
    <>
      <p>
        Does the first "j" in <strong>{word}</strong> sound like "h" or "diy"?
      </p>
      <button onClick={() => onJSelection("h")}>h</button>
      <button onClick={() => onJSelection("diy")}>diy</button>
    </>
  );
}
