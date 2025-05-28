import type { JSX } from "react";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

export default function Footer(): JSX.Element {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-Footer-Text">The Baybayin Project</h1>
      </div>
      <ul className="footer-links-container">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61558642794586"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/the_baybayin_project/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <a>Contact us: the.baybayin.project@gmail.com</a>
      </ul>
    </footer>
  );
}
