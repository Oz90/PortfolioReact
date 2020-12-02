import React from "react";

export default function PortfolioPage() {
  return (
    <section class="portfolio">
      <h2>A selection of my school projects</h2>
      <h4>Press on the cards to see my github code from the projects</h4>
      <div class="container flex grid">
        <div class="portfolio_project">
          <a
            href="https://github.com/RickardssonJ/finalYatzy"
            class="portfolio_link"
          >
            <h3 class="portfolio_title">Yatzy Project</h3>
            <p class="portfolio_text">
              This was our first group project that we did in school, it's
              basically a functioning Yatzy game
            </p>
          </a>
        </div>
        <div class="portfolio_project">
          <a href="https://github.com/Oz90/Quiz-Project" class="portfolio_link">
            <h3 class="portfolio_title">Quiz Project</h3>
            <p class="portfolio_text">
              My first solo project that I did in school, it's a quiz about
              programming and is built upon an API from which I fetched the
              questions
            </p>
          </a>
        </div>
        <div class="portfolio_project">
          <a
            href="https://github.com/Oz90/PortfolioProject"
            class="portfolio_link"
          >
            <h3 class="portfolio_title">Portfolio Project</h3>
            <p class="portfolio_text">
              Another solo project that was done in school, it's the website
              you're currently looking at and should be fully responsive
            </p>
          </a>
        </div>
        <div class="portfolio_project">
          <a
            href="https://github.com/Hano2001/ACME-Grupp-4"
            class="portfolio_link"
          >
            <h3 class="portfolio_title">ACME Events Project</h3>
            <p class="portfolio_text">
              A group project we did in school, where we created a website for
              our product owner and worked according to the SCRUM-process
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
