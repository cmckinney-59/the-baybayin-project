import type { JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiFillHome,
  AiFillInfoCircle,
  AiFillProject,
  AiFillSetting,
  AiOutlineSetting,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { PiTranslate, PiTranslateFill } from "react-icons/pi";
import { useAlphabet } from "../../contexts/AlphabetContext";
import { alphabetNameToRouteSegment } from "../../data/ALPHABETS_DATA";

type NavigationProps = {
  isOpen: boolean;
  onNavigate?: () => void;
};

export default function Navigation({
  isOpen,
  onNavigate,
}: NavigationProps): JSX.Element {
  const location = useLocation();
  const { currentAlphabet } = useAlphabet();
  const transliteratorPath = currentAlphabet
    ? `/transliterator/${alphabetNameToRouteSegment(currentAlphabet)}`
    : "/transliterator";

  const isActiveRoute = (path: string): boolean => {
    if (path === "/home") {
      return location.pathname === "/" || location.pathname === "/home";
    }
    if (path === "/transliterator") {
      return location.pathname.startsWith("/transliterator");
    }
    return location.pathname === path;
  };

  const linkClass = (path: string) =>
    isActiveRoute(path) ? "is-active" : undefined;

  return (
    <nav
      id="app-navigation"
      className={`App-Navigation ${isOpen ? "open" : "collapsed"}`}
      aria-label="Main"
    >
      <div className="Navigation-content">
        <ul>
          <li>
            <Link
              to="/home"
              onClick={onNavigate}
              title="Home"
              className={linkClass("/home")}
              aria-current={isActiveRoute("/home") ? "page" : undefined}
            >
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
              to={transliteratorPath}
              onClick={onNavigate}
              title="Transliterator"
              className={linkClass("/transliterator")}
              aria-current={
                isActiveRoute("/transliterator") ? "page" : undefined
              }
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
            <Link
              to="/projects"
              onClick={onNavigate}
              title="Projects"
              className={linkClass("/projects")}
              aria-current={isActiveRoute("/projects") ? "page" : undefined}
            >
              {isActiveRoute("/projects") ? (
                <AiFillProject className="nav-icon" />
              ) : (
                <AiOutlineProject className="nav-icon" />
              )}
              <span className="nav-text">Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={onNavigate}
              title="About & Social"
              className={linkClass("/about")}
              aria-current={isActiveRoute("/about") ? "page" : undefined}
            >
              {isActiveRoute("/about") ? (
                <AiFillInfoCircle className="nav-icon" />
              ) : (
                <AiOutlineInfoCircle className="nav-icon" />
              )}
              <span className="nav-text">About & Social</span>
            </Link>
          </li>
          <li>
            <Link
              to="/donate"
              onClick={onNavigate}
              title="Donate"
              className={linkClass("/donate")}
              aria-current={isActiveRoute("/donate") ? "page" : undefined}
            >
              {isActiveRoute("/donate") ? (
                <AiFillHeart className="nav-icon" />
              ) : (
                <AiOutlineHeart className="nav-icon" />
              )}
              <span className="nav-text">Donate</span>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              onClick={onNavigate}
              title="Settings"
              className={linkClass("/settings")}
              aria-current={isActiveRoute("/settings") ? "page" : undefined}
            >
              {isActiveRoute("/settings") ? (
                <AiFillSetting className="nav-icon" />
              ) : (
                <AiOutlineSetting className="nav-icon" />
              )}
              <span className="nav-text">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
