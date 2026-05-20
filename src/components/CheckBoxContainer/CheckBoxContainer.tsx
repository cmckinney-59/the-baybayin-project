import Checkbox from "../CheckBox/Checkbox";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";

interface CheckboxContainerProps {
  currentAlphabet: string;
  useCombinedCharacters: boolean;
  useTechNumbers: boolean;
  useKlinzhai: boolean;
  useBagwisFont: boolean;
  useXVowelKiller: boolean;
  textContainsBorrowedWords: boolean;
  setUseCombinedCharacters: (checked: boolean) => void;
  setUseTechNumbers: (checked: boolean) => void;
  setUseKlinzhai: (checked: boolean) => void;
  setUseBagwisFont: (checked: boolean) => void;
  setUseXVowelKiller: (checked: boolean) => void;
  setTextContainsBorrowedWords: (checked: boolean) => void;
}

export default function CheckboxContainer({
  currentAlphabet,
  useCombinedCharacters,
  useTechNumbers,
  useKlinzhai,
  useBagwisFont,
  useXVowelKiller,
  textContainsBorrowedWords,
  setUseCombinedCharacters,
  setUseTechNumbers,
  setUseKlinzhai,
  setUseBagwisFont,
  setUseXVowelKiller,
  setTextContainsBorrowedWords,
}: CheckboxContainerProps) {
  let checkBoxes = null;
  const { showExperimentalFeatures } = useExperimentalFeatures();

  if (currentAlphabet === "Aurebesh") {
    checkBoxes = (
      <>
        <Checkbox
          checked={useCombinedCharacters}
          onChange={setUseCombinedCharacters}
          label="Include combined characters."
          title="Maps digraphs such as ch, sh, ae, th, ng, and oo to combined symbols."
        />
        <Checkbox
          checked={useTechNumbers}
          onChange={setUseTechNumbers}
          label="Use tech numbers."
          title="Use tech numbers instead of Arabic."
        />
      </>
    );
  }

  if (currentAlphabet === "Plqad") {
    checkBoxes = (
      <Checkbox
        checked={useKlinzhai}
        onChange={setUseKlinzhai}
        label="Input language is English."
      />
    );
  }

  if (currentAlphabet === "Baybayin" && showExperimentalFeatures) {
    checkBoxes = (
      <>
        <Checkbox
          checked={textContainsBorrowedWords}
          onChange={setTextContainsBorrowedWords}
          label="Text contains borrowed words."
        />
        <Checkbox
          checked={useBagwisFont}
          onChange={setUseBagwisFont}
          label="Bagwis font."
        />
        {useBagwisFont && (
          <Checkbox
            checked={useXVowelKiller}
            onChange={setUseXVowelKiller}
            label='Use "x" vowel killer.'
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className="checkbox-label-row">{checkBoxes}</div>
    </>
  );
}
