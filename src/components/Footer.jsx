import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="container grid grid-3">
        <div>
          <h1>Özgür Baserdem</h1>
          <p>Copyright &copy; 2020</p>
        </div>
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
        <div className="social">
          <h3>Get in touch!</h3>
          <a href="mailto:ozgur.baserdem@hotmail.com?subject=Title&body=Message">
            <i className="fas fa-at fa-2x"></i>
          </a>
          <a href="https://github.com/Oz90/">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/ozgur.baserdem">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/%C3%B6zg%C3%BCr-baserdem-985b7283/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
