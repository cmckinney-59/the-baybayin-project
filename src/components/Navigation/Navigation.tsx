import type { JSX } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation(): JSX.Element {
  return (
    <nav className="App-Navigation">
      <div className="Navigation-content">
        <h1 className="App-Navigation-Text">Navigation</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/baybayin">Baybayin</Link>
          </li>
          <li>
            <Link to="/deseret">Deseret</Link>
          </li>
          <li>
            <Link to="/aurbesh">Aurbesh</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
