import { Outlet } from "react-router-dom";
import NavigationDropdown from "../../components/NavigationDropdown/NavigationDropdown";

export default function TransliteratorPage() {
  return (
    <>
      <NavigationDropdown />
      <Outlet />
    </>
  );
}
