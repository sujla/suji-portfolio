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

function DetailNav() {
  return (
    <>
      <a
        className="site-mark"
        href="../../"
        aria-label="Back to Suji Kweon's portfolio"
      >
        SUJI KWEON
      </a>
      <div className="detail-gnb-center" aria-hidden="true">
        <span className="detail-gnb-title">Case Study</span>
      </div>
      <DetailThemeToggle />
    </>
  );
}

function DetailTitle({ project }) {
  if (!project) return null;

  return (
    <section className="detail-title-section">
      <div className="detail-title-inner">
        <header className="detail-header">
          <p>{project.number}</p>
          <h1 className="display-title">
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
      {navRoot &&
        createPortal(<DetailNav />, navRoot)}

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
