import { Outlet, useNavigate } from "react-router-dom";
import { useAlphabet } from "../../contexts/AlphabetContext";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";
import AlphabetPicker from "../../components/AlphabetPicker/AlphabetPicker";
import Transliterator from "../../components/Transliterator/Transliterator.tsx";
import { alphabetNameToRouteSegment } from "../../data/ALPHABETS_DATA";

export default function TransliteratorPage() {
  const navigate = useNavigate();
  const { currentAlphabet, setCurrentAlphabet } = useAlphabet();

  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAlphabet = event.target.value;
    setCurrentAlphabet(selectedAlphabet);

    if (!selectedAlphabet) {
      navigate("/transliterator");
      return;
    }

    navigate(
      `/transliterator/${alphabetNameToRouteSegment(selectedAlphabet)}`,
    );
  };

  return (
    <WordsDictionaryProvider>
      <h1 className="page-title">Transliterator</h1>
      <AlphabetPicker
        selectedAlphabet={currentAlphabet}
        handleClick={handleClick}
      />
      <Transliterator currentAlphabet={currentAlphabet} />
      <Outlet />
    </WordsDictionaryProvider>
  );
}
