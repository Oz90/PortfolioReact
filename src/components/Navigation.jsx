import React from "react";
import { Link } from "react-router-dom";
import OzgurLogo from "../images/ozgurlogo2.png";

export default function Navigation() {
  return (
    <div class="navbar">
      <div class="container flex">
        <img src={OzgurLogo} alt="Ozgurs Logo" class="logo" />
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
      </div>
    </div>
  );
}
