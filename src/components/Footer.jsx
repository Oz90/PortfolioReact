import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import FooterNav from "./FooterNav";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="container grid grid-3">
        <div>
          <h1>Özgür Baserdem</h1>
          <p>Copyright &copy; 2020</p>
        </div>
        <FooterNav />
        <FooterSocial />
      </div>
    </footer>
  );
}
