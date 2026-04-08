import React from "react";
import { ALPHABETS_DATA } from "../../data/ALPHABETS_DATA";

interface AlphabetPickerProps {
  selectedAlphabet: string;
  handleClick: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function AlphabetPicker({
  selectedAlphabet,
  handleClick,
}: AlphabetPickerProps) {
  const stableAlphabets = ALPHABETS_DATA.filter((a) => !a.experimental);
  const experimentalAlphabets = ALPHABETS_DATA.filter((a) => a.experimental);
  const alphabets = [...stableAlphabets, ...experimentalAlphabets];

  return (
    <section>
      <select id="options" value={selectedAlphabet} onChange={handleClick}>
        <option value="">Select an alphabet</option>
        {alphabets.map((alphabet) => (
          <option key={alphabet.name} value={alphabet.name}>
            {alphabet.name}
            {alphabet.experimental ? " (Experimental)" : ""}
          </option>
        ))}
      </select>
    </section>
  );
}
