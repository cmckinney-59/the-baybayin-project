import type { JSX } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineTranslation,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineLike,
  // AiOutlineShopping,
} from "react-icons/ai";

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
            <Link to="/home" onClick={onNavigate} title="Home">
              <AiOutlineHome className="nav-icon" />
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/transliterator"
              onClick={onNavigate}
              title="Transliterator"
            >
              <AiOutlineTranslation className="nav-icon" />
              <span className="nav-text">Transliterator</span>
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={onNavigate} title="Projects">
              <AiOutlineProject className="nav-icon" />
              <span className="nav-text">Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={onNavigate} title="About">
              <AiOutlineInfoCircle className="nav-icon" />
              <span className="nav-text">About</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/shop" onClick={onNavigate} title="Shop">
              <AiOutlineShopping className="nav-icon" />
              <span className="nav-text">Shop</span>
            </Link>
          </li> */}
          <li>
            <Link to="/social" onClick={onNavigate} title="Social">
              <AiOutlineLike className="nav-icon" />
              <span className="nav-text">Social</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
