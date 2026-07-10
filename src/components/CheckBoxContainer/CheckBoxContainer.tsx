import Checkbox from "../CheckBox/Checkbox";
import BaybayinFontSelector from "../BaybayinFontSelector/BaybayinFontSelector";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import {
  getBaybayinFontById,
  type BaybayinFontId,
} from "../../data/BaybayinData/BAYBAYIN_FONTS_DATA";

interface CheckboxContainerProps {
  currentAlphabet: string;
  useCombinedCharacters: boolean;
  useTechNumbers: boolean;
  useKlinzhai: boolean;
  selectedBaybayinFont: BaybayinFontId;
  useXVowelKiller: boolean;
  textContainsBorrowedWords: boolean;
  useHollowKudlits: boolean;
  setUseCombinedCharacters: (checked: boolean) => void;
  setUseTechNumbers: (checked: boolean) => void;
  setUseKlinzhai: (checked: boolean) => void;
  setSelectedBaybayinFont: (fontId: BaybayinFontId) => void;
  setUseXVowelKiller: (checked: boolean) => void;
  setTextContainsBorrowedWords: (checked: boolean) => void;
  setUseHollowKudlits: (checked: boolean) => void;
}

export default function CheckboxContainer({
  currentAlphabet,
  useCombinedCharacters,
  useTechNumbers,
  useKlinzhai,
  selectedBaybayinFont,
  useXVowelKiller,
  textContainsBorrowedWords,
  useHollowKudlits,
  setUseCombinedCharacters,
  setUseTechNumbers,
  setUseKlinzhai,
  setSelectedBaybayinFont,
  setUseXVowelKiller,
  setTextContainsBorrowedWords,
  setUseHollowKudlits,
}: CheckboxContainerProps) {
  let checkBoxes = null;
  const { showExperimentalFeatures } = useExperimentalFeatures();
  const selectedBaybayinFontEntry = getBaybayinFontById(selectedBaybayinFont);

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

  if (currentAlphabet === "Baybayin") {
    checkBoxes = (
      <>
        <BaybayinFontSelector
          selectedFontId={selectedBaybayinFont}
          onChange={setSelectedBaybayinFont}
        />
        {selectedBaybayinFont === "noto-sans" && (
          <Checkbox
            checked={useHollowKudlits}
            onChange={setUseHollowKudlits}
            label="Use hollow kudlits."
            title="Use hollow kudlit marks for e/o (vs filled marks for i/u)."
          />
        )}
        {showExperimentalFeatures && (
          <>
            <Checkbox
              checked={textContainsBorrowedWords}
              onChange={setTextContainsBorrowedWords}
              label="Text contains borrowed words."
            />
            {selectedBaybayinFontEntry.supportsXVowelKiller && (
              <Checkbox
                checked={useXVowelKiller}
                onChange={setUseXVowelKiller}
                label='Use "x" vowel killer.'
              />
            )}
          </>
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
