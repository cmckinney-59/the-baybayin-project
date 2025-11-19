import "./AlphabetPicker.css";
import React from "react";

interface AlphabetPickerProps {
  selectedAlphabet: string;
  handleClick: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function AlphabetPicker({
  selectedAlphabet,
  handleClick,
}: AlphabetPickerProps) {
  const alphabets = ["Baybayin", "Baybayin Lite", "Aurebesh", "Deseret", "Tengwar"];

  return (
    <section>
      <label htmlFor="options">Choose an alphabet: </label>
      <select id="options" value={selectedAlphabet} onChange={handleClick}>
        <option value=""></option>
        {alphabets.map((alphabet) => (
          <option key={alphabet} value={alphabet}>
            {alphabet}
          </option>
        ))}
      </select>
    </section>
  );
}
