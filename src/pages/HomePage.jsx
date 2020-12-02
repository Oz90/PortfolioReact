import React from "react";
import OzgurPic from "../images/pic.png";

export default function HomePage() {
  return (
    <section className="home-head">
      <div className="container grid">
        <img src={OzgurPic} alt="A picture of Ozgur" />
        <div className="home-text">
          <h1>Hello, I'm Özgür.</h1>
          <p>I'm an aspiring Full stack Web Developer</p>
        </div>
      </div>
    </section>
  );
}
