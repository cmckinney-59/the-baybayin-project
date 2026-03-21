import React from "react";

interface AlphabetPickerProps {
  selectedAlphabet: string;
  handleClick: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function AlphabetPicker({
  selectedAlphabet,
  handleClick,
}: AlphabetPickerProps) {
  const alphabets: Array<{ value: string; label: string }> = [
    { value: "Baybayin", label: "Baybayin" },
    { value: "Aurebesh", label: "Aurebesh" },
    { value: "Deseret", label: "Deseret (Experimental)" },
    { value: "Tengwar", label: "Tengwar (Experimental)" },
    { value: "Plqad", label: "Plqad (Experimental)" },
    { value: "Matoran", label: "Matoran (Experimental)" },
    { value: "Unown", label: "Unown (Experimental)" },
    { value: "Gallifreyan", label: "Gallifreyan (Experimental)" },
    { value: "Atlantean", label: "Atlantean (Experimental)" },
  ];

  return (
    <section>
      <select id="options" value={selectedAlphabet} onChange={handleClick}>
        <option value="">Select an alphabet</option>
        {alphabets.map((alphabet) => (
          <option key={alphabet.value} value={alphabet.value}>
            {alphabet.label}
          </option>
        ))}
      </select>
    </section>
  );
}
