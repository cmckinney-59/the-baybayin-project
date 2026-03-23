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
    { value: "Aurebesh", label: "Aurebesh" },
    { value: "Baybayin", label: "Baybayin" },
    { value: "Atlantean", label: "Atlantean (Experimental)" },
    { value: "Deseret", label: "Deseret (Experimental)" },
    { value: "Gallifreyan", label: "Gallifreyan (Experimental)" },
    { value: "Matoran", label: "Matoran (Experimental)" },
    { value: "Plqad", label: "Plqad (Experimental)" },
    { value: "Steel", label: "Steel (Experimental)" },
    { value: "Tengwar", label: "Tengwar (Experimental)" },
    { value: "Unown", label: "Unown (Experimental)" },
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
