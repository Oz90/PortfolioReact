import React from "react";
import { aboutSections } from "../aboutSections";

export default function AboutMeSection() {
  const sectionNackademin = aboutSections[1];

  return (
    <>
      <h2>{sectionNackademin.title}</h2>
      <p>{sectionNackademin.description}</p>
    </>
  );
}
