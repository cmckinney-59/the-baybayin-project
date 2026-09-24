import React from "react";
import {
  ALPHABETS_DATA,
  FILIPINO_SCRIPT_NAMES,
  type Alphabet,
} from "../../data/ALPHABETS_DATA";

interface AlphabetPickerProps {
  selectedAlphabet: string;
  handleClick: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function optionLabel(alphabet: Alphabet): string {
  return alphabet.experimental
    ? `${alphabet.name} (Experimental)`
    : alphabet.name;
}

export default function AlphabetPicker({
  selectedAlphabet,
  handleClick,
}: AlphabetPickerProps) {
  const filipinoScripts = FILIPINO_SCRIPT_NAMES.map(
    (name) => ALPHABETS_DATA.find((a) => a.name === name)!,
  ).filter(Boolean);

  const otherAlphabets = ALPHABETS_DATA.filter(
    (a) => !FILIPINO_SCRIPT_NAMES.includes(a.name),
  );
  const otherStable = otherAlphabets.filter((a) => !a.experimental);
  const otherExperimental = otherAlphabets.filter((a) => a.experimental);

  return (
    <section>
      <select id="options" value={selectedAlphabet} onChange={handleClick}>
        <option value="">Select an alphabet</option>
        <optgroup label="Filipino Scripts">
          {filipinoScripts.map((alphabet) => (
            <option key={alphabet.name} value={alphabet.name}>
              {optionLabel(alphabet)}
            </option>
          ))}
        </optgroup>
        {otherStable.length > 0 && (
          <optgroup label="Other Alphabets">
            {otherStable.map((alphabet) => (
              <option key={alphabet.name} value={alphabet.name}>
                {optionLabel(alphabet)}
              </option>
            ))}
          </optgroup>
        )}
        {otherExperimental.length > 0 && (
          <optgroup label="Experimental">
            {otherExperimental.map((alphabet) => (
              <option key={alphabet.name} value={alphabet.name}>
                {optionLabel(alphabet)}
              </option>
            ))}
          </optgroup>
        )}
      </select>
    </section>
  );
}
