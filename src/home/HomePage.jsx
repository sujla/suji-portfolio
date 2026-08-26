import { useEffect } from "react";

import { ExperienceSection } from "../components/ExperienceCards.jsx";
import { ThemeToggle } from "../components/ThemeToggle.jsx";

const aboutPhotos = [
  ["about-photo--1", "./assets/about.jpg"],
  ["about-photo--2", "./assets/about2.jpg"],
  ["about-photo--4", "./assets/about4.jpeg"],
  ["about-photo--5", "./assets/about5.jpeg"],
  ["about-photo--6", "./assets/about6.jpeg"],
];

export function HomePage() {
  useEffect(() => {
    import("../../script.js");
  }, []);

  return (
    <>
      <header className="index-gnb">
        <a
          className="site-mark"
          href="#top"
          data-gnb-scroll
          aria-label="Back to the top of Suji Kweon's portfolio"
        >
          SUJI KWEON
        </a>
        <nav className="index-gnb-nav" aria-label="Primary navigation">
          <a className="index-gnb-link" href="#work" data-gnb-scroll>
            Work
          </a>
          <a className="index-gnb-link" href="#experience" data-gnb-scroll>
            Experience
          </a>
          <a className="index-gnb-link" href="#about" data-gnb-scroll>
            About
          </a>
        </nav>
      </header>

      <ThemeToggle />

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-title-column">
          <h1 id="hero-title">
            Senior
            <br />
            Product Designer
          </h1>
        </div>
        <div className="hero-copy">
          <p>Driving measurable impact across enterprise and consumer products</p>
          <div data-pf-type-filter />
        </div>
      </section>

      <section className="pf-section" id="work" data-pf />

      <ExperienceSection />

      <section
        className="about-section"
        id="about"
        data-about
        aria-labelledby="about-title"
      >
        <div className="about-content">
          <div className="about-photo-stack" aria-hidden="true">
            {aboutPhotos.map(([className, src]) => (
              <div className={`about-photo ${className}`} key={src}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
          <div className="about-copy">
            <h2 id="about-title">
              Turning complex problems into clear product direction.
            </h2>
            <p className="about-body">Here&apos;s a little about me.👋</p>
            <p className="about-body">
              I was born in Korea and have lived in India, the U.S., and Singapore. My
              career has also taken me across mobility, fintech, B2B SaaS, e-commerce,
              and internal tools.
            </p>
            <p className="about-body">
              Being exposed to different cultures and industries has trained me to look
              past the surface, identify what matters most, and find patterns in
              complexity. That&apos;s how I approach both product and design.
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a
          className="site-footer-attribution"
          href="https://skiper-ui.com/v1/skiper16"
          target="_blank"
          rel="noreferrer"
        >
          Interaction by Skiper UI ↗
        </a>
      </footer>
    </>
  );
}
