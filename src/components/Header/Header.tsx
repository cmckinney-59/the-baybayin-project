import type { JSX } from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";

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
      {/* <button
        className="dark-mode-toggle"
        aria-label="Toggle dark mode"
        onClick={onToggleDarkMode}
      >
        {isDarkMode ? (
          <svg
            className="icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="m12 1v2m0 18v2m11-11h2m-18 0H1m15.36-8.5-1.5-1.5m-10.72 10.72-1.5-1.5m12.72 0-1.5 1.5M5.64 5.64l-1.5 1.5" />
          </svg>
        ) : (
          <svg
            className="icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button> */}
    </header>
  );
}
