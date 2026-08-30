import { useEffect } from "react";

import { ExperienceSection } from "../components/ExperienceCards.jsx";
import { SiteFooter } from "../components/SiteFooter.jsx";
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

      {/* Squircle filter adapted from https://skiper-ui.com/v1/skiper63 */}
      <svg
        className="pf-squircle-filter-defs"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter
            id="pf-work-squircle"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 20 -7"
              result="squircleMask"
            />
            <feFlood className="pf-squircle-filter-fill" result="surfaceColor" />
            <feComposite
              in="surfaceColor"
              in2="squircleMask"
              operator="in"
              result="squircleFill"
            />
            <feComposite in="SourceGraphic" in2="squircleFill" operator="over" />
          </filter>
        </defs>
      </svg>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-title-column">
          <h1 className="display-title" id="hero-title">
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
          <div className="about-copy">
            <h2 className="display-title" id="about-title">
              Complex problems into clear product direction.
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
            <a
              className="about-contact-link"
              href="mailto:kweonsuji@gmail.com"
              data-cursor-label="Email Suji"
            >
              Let&apos;s talk!
            </a>
          </div>
          <div className="about-photo-stack" aria-hidden="true">
            {aboutPhotos.map(([className, src]) => (
              <div className={`about-photo ${className}`} key={src}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
