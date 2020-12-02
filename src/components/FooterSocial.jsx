import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function FooterSocial() {
  return (
    <div className="social">
      <h3>Get in touch!</h3>
      <a href="mailto:ozgur.baserdem@hotmail.com?subject=Title&body=Message">
        <FaEnvelope size={30} />
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
  );
}
