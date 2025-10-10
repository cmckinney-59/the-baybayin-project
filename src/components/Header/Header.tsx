import type { JSX } from "react";
// import logo from "../../assets/images/logo.png";
import "./Header.css";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMoon,
  AiOutlineSun,
} from "react-icons/ai";

type HeaderProps = {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
};

export default function Header({
  onToggleSidebar,
  isSidebarOpen,
  onToggleDarkMode,
  isDarkMode,
}: HeaderProps): JSX.Element {
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
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-Header-Text">The Baybayin Project</h1>
      </div>
      <button
        className="dark-mode-toggle"
        aria-label="Toggle dark mode"
        onClick={onToggleDarkMode}
      >
        {isDarkMode ? (
          <AiOutlineSun className="nav-card-icon" />
        ) : (
          <AiOutlineMoon className="nav-card-icon" />
        )}
      </button>
    </header>
  );
}
