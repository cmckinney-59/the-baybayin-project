import type { JSX } from "react";
import lightModeLogo from "../../assets/images/TBP_Horizontal_Black.png";
import darkModeLogo from "../../assets/images/TBP_Horizontal_White.png";
import "./Header.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useTheme } from "../../contexts/ThemeContext";

type HeaderProps = {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
};

export default function Header({
  onToggleSidebar,
  isSidebarOpen,
}: HeaderProps): JSX.Element {
  const { theme } = useTheme();
  const useLightLogo = theme !== "light";
  return (
    <header className="App-header">
      <button
        className={`hamburger ${isSidebarOpen ? "open" : ""}`}
        aria-label="Toggle navigation"
        onClick={onToggleSidebar}
      >
        {isSidebarOpen ? (
          <AiOutlineClose className="icon close-icon" />
        ) : (
          <AiOutlineMenu className="icon hamburger-icon" />
        )}
      </button>
      <div className="header-content">
        <img
          src={useLightLogo ? darkModeLogo : lightModeLogo}
          className="App-logo"
          alt="logo"
        />
      </div>
    </header>
  );
}
