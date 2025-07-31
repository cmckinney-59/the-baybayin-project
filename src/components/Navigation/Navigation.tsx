import type { JSX } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation(): JSX.Element {
  return (
    <nav className="App-Navigation">
      <div className="Navigation-content">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
