import React from "react";
import { Link } from "react-router-dom";

export default function FooterNav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <Link to="/HomePage">Home</Link>
          </a>
        </li>
        <li>
          <a href="/">
            <Link to="/PortfolioPage">Portfolio</Link>
          </a>
        </li>
        <li>
          <a href="/">
            <Link to="/AboutPage">About</Link>
          </a>
        </li>
      </ul>
    </nav>
  );
}
