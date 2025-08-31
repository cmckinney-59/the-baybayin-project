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
        <span />
        <span />
        <span />
      </button>
      <div className="header-content">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-Header-Text">The Baybayin Project</h1>
      </div>
    </header>
  );
}
