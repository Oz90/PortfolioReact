import React from "react";
import { aboutSections } from "../aboutSections";

export default function AboutNackademinSection() {
  const sectionMe = aboutSections[0];

  return (
    <>
      <h2>{sectionMe.title}</h2>
      <p>{sectionMe.description}</p>
    </>
  );
}
