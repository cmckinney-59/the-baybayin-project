import { Outlet } from "react-router-dom";
import { useAlphabet } from "../../contexts/AlphabetContext";

export default function TransliteratorPage() {
  const { currentAlphabet } = useAlphabet();
  let alphabet = currentAlphabet;

  if (currentAlphabet !== "Baybayin") {
    alphabet = `${currentAlphabet} `;
  }

  return (
    <>
      <h2>{alphabet}Transliterator</h2>
      <Outlet />
    </>
  );
}
