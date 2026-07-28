import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAlphabet } from "../../contexts/AlphabetContext";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";
import AlphabetPicker from "../../components/AlphabetPicker/AlphabetPicker";
import Transliterator from "../../components/Transliterator/Transliterator.tsx";
import { alphabetNameToRouteSegment } from "../../data/ALPHABETS_DATA";
import PageTitle from "../../components/PageTitle/PageTitle.tsx";

export default function TransliteratorPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentAlphabet, setCurrentAlphabet } = useAlphabet();

  // Keep How-to outlet mounted: nav to /transliterator drops the alphabet
  // segment, but context still has the selection.
  useEffect(() => {
    if (!currentAlphabet) return;
    if (location.pathname !== "/transliterator") return;
    navigate(
      `/transliterator/${alphabetNameToRouteSegment(currentAlphabet)}`,
      { replace: true },
    );
  }, [currentAlphabet, location.pathname, navigate]);

  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAlphabet = event.target.value;
    setCurrentAlphabet(selectedAlphabet);

    if (!selectedAlphabet) {
      navigate("/transliterator");
      return;
    }

    navigate(`/transliterator/${alphabetNameToRouteSegment(selectedAlphabet)}`);
  };

  return (
    <WordsDictionaryProvider>
      <PageTitle title="Transliterator" />
      <AlphabetPicker
        selectedAlphabet={currentAlphabet}
        handleClick={handleClick}
      />
      <Transliterator currentAlphabet={currentAlphabet} />
      <Outlet />
    </WordsDictionaryProvider>
  );
}
