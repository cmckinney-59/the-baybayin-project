import type { JSX } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

type HeaderProps = {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
};

export default function Header({
  onToggleSidebar,
  isSidebarOpen,
}: HeaderProps): JSX.Element {
  return (
    <header className="App-header">
      <button
        className={`hamburger ${isSidebarOpen ? "open" : ""}`}
        aria-label={isSidebarOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isSidebarOpen}
        aria-controls="app-navigation"
        onClick={onToggleSidebar}
      >
        {isSidebarOpen ? (
          <AiOutlineClose className="icon close-icon" />
        ) : (
          <AiOutlineMenu className="icon hamburger-icon" />
        )}
      </button>
      <div className="header-content">
        <Link to="/home" className="header-logo-link">
          <span className="header-brand">
            <span className="header-wordmark">SCRIPTWORKS</span>
            <span className="header-tagline">transliterations</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
