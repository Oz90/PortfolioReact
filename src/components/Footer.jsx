import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaFacebook, FaLinkedin, FaAt } from "react-icons/fa";

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
            <FaAt size={30} />
          </a>
          <a href="https://github.com/Oz90/">
            <FaGithub size={30} />
          </a>
          <a href="https://www.facebook.com/ozgur.baserdem">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.linkedin.com/in/%C3%B6zg%C3%BCr-baserdem-985b7283/">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
