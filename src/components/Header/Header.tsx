import type { JSX } from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";

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
        aria-label="Toggle navigation"
        onClick={onToggleSidebar}
      >
        {isSidebarOpen ? (
          <svg
            className="icon close-icon"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden="true"
            focusable="false"
          >
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        ) : (
          <svg
            className="icon hamburger-icon"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden="true"
            focusable="false"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        )}
      </button>
      <div className="header-content">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-Header-Text">The Baybayin Project</h1>
      </div>
    </header>
  );
}
