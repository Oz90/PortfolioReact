import React from "react";

export default function PortfolioItem({ project }) {
  return (
    <div className="portfolio_project">
      <a href={project.url} className="portfolio_link">
        <h3 className="portfolio_title">{project.title}</h3>
        <p className="portfolio_text">{project.description}</p>
      </a>
    </div>
  );
}
