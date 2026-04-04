import { Outlet, useNavigate } from "react-router-dom";
import { useAlphabet } from "../../contexts/AlphabetContext";
import AlphabetPicker from "../../components/AlphabetPicker/AlphabetPicker";

export default function TransliteratorPage() {
  const navigate = useNavigate();
  const { currentAlphabet, setCurrentAlphabet } = useAlphabet();

  const alphabetRouteMap: Record<string, string> = {
    Ancients: "ancients",
    Atlantean: "atlantean",
    Aurebesh: "aurebesh",
    Baybayin: "baybayin",
    Deseret: "deseret",
    Gallifreyan: "gallifreyan",
    MarasEye: "maras-eye",
    Matoran: "matoran",
    Plqad: "plqad",
    Unown: "unown",
    Steel: "steel",
    Tengwar: "tengwar",
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
