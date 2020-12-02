import React from "react";
import AboutMeSection from "../components/AboutMeSection";
import AboutNackademinSection from "../components/AboutNackademinSection";
import AboutFSWD from "../components/AboutFSWDSection";

export default function AboutPage() {
  return (
    <>
      <section className="section section-light">
        <AboutMeSection />
      </section>

      <div className="about-bg-img-2">
        <div className="ptext">
          <p className="border">Where I am now</p>
        </div>
      </div>

      <section className="section section-dark">
        <AboutNackademinSection />
      </section>

      <div className="about-bg-img-3">
        <div className="ptext">
          <p className="border">Where I am headed</p>
        </div>
      </div>

      <section className="section section-dark">
        <AboutFSWD />
      </section>
    </>
  );
}
