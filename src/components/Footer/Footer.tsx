import type { JSX } from "react";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

export default function Footer(): JSX.Element {
  return (
    <header className="App-footer">
      <div className="footer-content">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-Footer-Text">FOOTER</h1>
      </div>
      <div className="footer-links-containter">
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Email</li>
      </div>
    </header>
  );
}
