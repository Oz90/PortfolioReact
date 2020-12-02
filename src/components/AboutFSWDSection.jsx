import React from "react";
import { aboutSections } from "../aboutSections";

export default function AboutNackademinSection() {
  const sectionFSWD = aboutSections[2];

  return (
    <>
      <h2>{sectionFSWD.title}</h2>
      <p>{sectionFSWD.description}</p>
    </>
  );
}
