import Checkbox from "../CheckBox/Checkbox";

interface CheckboxContainerProps {
  currentAlphabet: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  title?: string;
}

export default function CheckboxContainer({
  currentAlphabet,
  checked,
  onChange,
  label,
  title,
}: CheckboxContainerProps) {
  let checkBoxes = null;

  if (currentAlphabet === "Aurebesh") {
    checkBoxes = (
      <>
        <Checkbox
          checked={useCombinedCharacters}
          onChange={(checked) => setUseCombinedCharacters(checked)}
          label="Include combined characters."
          title="Maps digraphs such as ch, sh, ae, th, ng, and oo to combined symbols."
        />
        <Checkbox
          checked={useTechNumbers}
          onChange={(checked) => setUseTechNumbers(checked)}
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
        onChange={(checked) => setUseKlinzhai(checked)}
        label="Input language is English."
      />
    );
  }

  if (currentAlphabet === "Baybayin" && showExperimentalFeatures) {
    checkBoxes = (
      <>
        <Checkbox
          checked={textContainsBorrowedWords}
          onChange={(checked) => setTextContainsBorrowedWords(checked)}
          label="Text contains borrowed words."
        />
        <Checkbox
          checked={useBagwisFont}
          onChange={(checked) => setUseBagwisFont(checked)}
          label="Bagwis font."
        />
        {useBagwisFont && (
          <Checkbox
            checked={useXVowelKiller}
            onChange={(checked) => setUseXVowelKiller(checked)}
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
