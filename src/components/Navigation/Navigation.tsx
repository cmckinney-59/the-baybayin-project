import type { JSX } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

type NavigationProps = {
  isOpen: boolean;
  onNavigate?: () => void;
};

export default function Navigation({
  isOpen,
  onNavigate,
}: NavigationProps): JSX.Element {
  return (
    <nav className={`App-Navigation ${isOpen ? "open" : "collapsed"}`}>
      <div className="Navigation-content">
        <ul>
          <li>
            <Link to="/home" onClick={onNavigate}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/transliterator" onClick={onNavigate}>
              Transliterator
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={onNavigate}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={onNavigate}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={onNavigate}>
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
