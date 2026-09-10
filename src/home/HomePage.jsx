import { useEffect, useRef, useState } from "react";

import { ExperienceSection } from "../components/ExperienceCards.jsx";
import { SiteFooter } from "../components/SiteFooter.jsx";
import { ThemeToggle } from "../components/ThemeToggle.jsx";
import { HeroVisual } from "./hero-concepts/SculptureVisual.jsx";

const mobileNavItems = [
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["About", "#about"],
];

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 601px)");
    const closeOnDesktop = () => {
      if (desktopMedia.matches) setIsOpen(false);
    };
    const closeOnOutsidePress = (event) => {
      if (!mobileNavRef.current?.contains(event.target)) setIsOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("keydown", closeOnEscape);
    desktopMedia.addEventListener?.("change", closeOnDesktop);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("keydown", closeOnEscape);
      desktopMedia.removeEventListener?.("change", closeOnDesktop);
    };
  }, []);

  return (
    <div className="mobile-nav" ref={mobileNavRef}>
      <button
        className="mobile-nav-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
        ref={toggleRef}
      >
        <span className="mobile-nav-toggle-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav
        className="mobile-nav-panel"
        id="mobile-primary-navigation"
        aria-label="Mobile primary navigation"
        hidden={!isOpen}
      >
        {mobileNavItems.map(([label, href]) => (
          <a
            className="mobile-nav-link"
            href={href}
            data-gnb-scroll
            onClick={() => setIsOpen(false)}
            key={href}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}

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
      <MobileNavigation />

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
        <HeroVisual />
        <div className="hero-text-grid">
          <div className="hero-title-column">
            <h1 className="display-title" id="hero-title">
              Senior product designer based in Singapore 🇸🇬
            </h1>
          </div>
          <div className="hero-copy">
            <p>I drive measurable impact across enterprise and consumer products</p>
          </div>
          <div className="hero-filter-column" data-pf-type-filter />
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
              Built through diversity
            </h2>
            <p className="about-body">
              I&apos;ve lived across Korea, India, the U.S., and Singapore, and designed
              across mobility, fintech, B2B SaaS, e-commerce, and internal tools.
            </p>
            <p className="about-body">
              That range taught me to find patterns in complexity, turn ambiguity into
              clear product direction, and design with measurable impact in mind.
            </p>
            <p className="about-body">Curious to know more?</p>
            <a
              className="about-contact-link"
              href="mailto:kweonsuji@gmail.com"
              data-cursor-label="Email Suji"
            >
              Let&apos;s talk!
            </a>
          </div>

        </div>
      </section>

      <SiteFooter />
    </>
  );
}
