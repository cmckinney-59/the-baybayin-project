import { Outlet } from "react-router-dom";
import AlphabetDropdown from "../../components/AlphabetDropdown/AlphabetDropdown";

export default function TransliteratorPage() {
  return (
    <>
      <AlphabetDropdown />
      <Outlet />
    </>
  );
}
