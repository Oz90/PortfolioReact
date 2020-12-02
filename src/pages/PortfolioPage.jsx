import React from "react";
import { projectsList } from "../projectsList";
import PortfolioItem from "../components/PortfolioItem";

export default function PortfolioPage() {
  return (
    <section className="portfolio">
      <h2>A selection of my school projects</h2>
      <h4>Press on the cards to see my github code from the projects</h4>
      <div className="container flex grid">
        {projectsList.map((project, index) => {
          return <PortfolioItem key={index} project={project} />;
        })}
      </div>
    </section>
  );
}
