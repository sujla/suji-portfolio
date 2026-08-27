import { useEffect } from "react";
import { createPortal } from "react-dom";

import { projects } from "../../data/projects.js";
import { SiteFooter } from "../components/SiteFooter.jsx";

function DetailThemeToggle() {
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="Toggle dark and light mode"
      aria-pressed="false"
    >
      <span className="theme-icon theme-icon-sun" aria-hidden="true">
        <img
          className="theme-icon-image theme-icon-image-dark"
          src="../../assets/common/theme-toggle-sun-dark.svg"
          alt=""
        />
        <img
          className="theme-icon-image theme-icon-image-light"
          src="../../assets/common/theme-toggle-sun-light.svg"
          alt=""
        />
      </span>
      <span className="theme-icon theme-icon-moon" aria-hidden="true">
        <img
          className="theme-icon-image theme-icon-image-dark"
          src="../../assets/common/theme-toggle-moon-dark.svg"
          alt=""
        />
        <img
          className="theme-icon-image theme-icon-image-light"
          src="../../assets/common/theme-toggle-moon-light.svg"
          alt=""
        />
      </span>
    </button>
  );
}

function DetailTitle({ project }) {
  if (!project) return null;

  return (
    <section className="detail-title-section">
      <div className="detail-title-inner">
        <header className="detail-header">
          <p>{project.number}</p>
          <h1>
            {project.title.split("|").map((line, index) => (
              <span key={`${line}-${index}`}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
          <div className="detail-keywords" aria-label="Keywords">
            {project.keywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
          {project.brief?.length > 0 && (
            <div className="detail-header-brief">
              {project.brief.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          )}
        </header>
      </div>
    </section>
  );
}

export function DetailApp({ navRoot, titleRoot, contributionRoot }) {
  const project = projects.find(
    (item) => item.slug === document.body.dataset.projectSlug,
  );

  useEffect(() => {
    import("../../detail.js");
  }, []);

  return (
    <>
      <a className="detail-back-icon" href="../../" aria-label="Back to main">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6667 5L4 12L10.6667 19M4 12L20 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      {navRoot &&
        createPortal(
          <>
            <span className="detail-nav-back-slot" aria-hidden="true" />
            <span className="detail-nav-spacer" aria-hidden="true" />
            <DetailThemeToggle />
          </>,
          navRoot,
        )}

      {titleRoot && createPortal(<DetailTitle project={project} />, titleRoot)}

      {contributionRoot &&
        createPortal(
          project?.contribution?.map((item) => <li key={item}>{item}</li>) || null,
          contributionRoot,
        )}

      <SiteFooter className="site-footer--detail" />
    </>
  );
}
