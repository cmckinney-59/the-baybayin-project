import type { JSX } from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineLike,
  AiFillHome,
  AiFillInfoCircle,
  AiFillProject,
  AiFillLike,
  // AiOutlineShopping,
} from "react-icons/ai";
import { PiTranslate, PiTranslateFill } from "react-icons/pi";

type NavigationProps = {
  isOpen: boolean;
  onNavigate?: () => void;
};

export default function Navigation({
  isOpen,
  onNavigate,
}: NavigationProps): JSX.Element {
  const location = useLocation();

  // Helper function to determine if a route is active
  const isActiveRoute = (path: string): boolean => {
    if (path === "/home") {
      return location.pathname === "/" || location.pathname === "/home";
    }
    if (path === "/transliterator") {
      return location.pathname.startsWith("/transliterator");
    }
    return location.pathname === path;
  };

  return (
    <nav className={`App-Navigation ${isOpen ? "open" : "collapsed"}`}>
      <div className="Navigation-content">
        <ul>
          <li>
            <Link to="/home" onClick={onNavigate} title="Home">
              {isActiveRoute("/home") ? (
                <AiFillHome className="nav-icon" />
              ) : (
                <AiOutlineHome className="nav-icon" />
              )}
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/transliterator"
              onClick={onNavigate}
              title="Transliterator"
            >
              {isActiveRoute("/transliterator") ? (
                <PiTranslateFill className="nav-icon" />
              ) : (
                <PiTranslate className="nav-icon" />
              )}
              <span className="nav-text">Transliterator</span>
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={onNavigate} title="Projects">
              {isActiveRoute("/projects") ? (
                <AiFillProject className="nav-icon" />
              ) : (
                <AiOutlineProject className="nav-icon" />
              )}
              <span className="nav-text">Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={onNavigate} title="About">
              {isActiveRoute("/about") ? (
                <AiFillInfoCircle className="nav-icon" />
              ) : (
                <AiOutlineInfoCircle className="nav-icon" />
              )}
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
              {isActiveRoute("/social") ? (
                <AiFillLike className="nav-icon" />
              ) : (
                <AiOutlineLike className="nav-icon" />
              )}
              <span className="nav-text">Social</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
