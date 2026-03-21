import { Outlet, useNavigate } from "react-router-dom";
import { useAlphabet } from "../../contexts/AlphabetContext";
import AlphabetPicker from "../../components/AlphabetPicker/AlphabetPicker";

export default function TransliteratorPage() {
  const navigate = useNavigate();
  const { currentAlphabet, setCurrentAlphabet } = useAlphabet();

  const alphabetRouteMap: Record<string, string> = {
    Baybayin: "baybayin",
    Aurebesh: "aurebesh",
    Deseret: "deseret",
    Tengwar: "tengwar",
    Plqad: "plqad",
    Matoran: "matoran",
    Unown: "unown",
    Gallifreyan: "gallifreyan",
    Atlantean: "atlantean",
  };

  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAlphabet = event.target.value;
    setCurrentAlphabet(selectedAlphabet);

    const route = alphabetRouteMap[selectedAlphabet];
    if (route) {
      navigate(`/transliterator/${route}`);
    } else {
      navigate("/transliterator");
    }
  };

  return (
    <>
      <h1 className="page-title">Transliterator</h1>
      <AlphabetPicker
        selectedAlphabet={currentAlphabet}
        handleClick={handleClick}
      />
      <Outlet />
    </>
  );
}
