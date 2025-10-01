import type { JSX } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineTranslation,
  AiOutlineInfoCircle,
  AiOutlineProject,
  // AiOutlineShopping,
} from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
            <Link to="/about" onClick={onNavigate} title="About">
              <AiOutlineInfoCircle className="nav-icon" />
              <span className="nav-text">About</span>
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={onNavigate} title="Projects">
              <AiOutlineProject className="nav-icon" />
              <span className="nav-text">Projects</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/shop" onClick={onNavigate} title="Shop">
              <AiOutlineShopping className="nav-icon" />
              <span className="nav-text">Shop</span>
            </Link>
          </li> */}
        </ul>
        <ul className="footer-links-container">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61558642794586"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} className="nav-icon" />
              <span className="nav-text">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/the_baybayin_project/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="nav-icon" />
              <span className="nav-text">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
