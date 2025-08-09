import type { JSX } from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";

type HeaderProps = {
  onToggleSidebar: () => void;
};

export default function Header({ onToggleSidebar }: HeaderProps): JSX.Element {
  return (
    <header className="App-header">
      <button
        className="hamburger"
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
