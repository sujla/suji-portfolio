// Pure markup builders for the Work section.
// Shared by the build-time prerender (src/home/HomePage.jsx) and the runtime
// controller (pf.js), so this file must stay free of window/document access.

export const projectTypeMap = {
  AI: "ai",
  "Enterprise/SaaS": "enterprise",
  Fintech: "fintech",
  "E-commerce": "e-commerce",
  Mobility: "mobility",
};
export const projectTypeFilters = Object.entries(projectTypeMap).map(
  ([label, value]) => ({ label, value }),
);

export const renderWorkMetaLine = (project, isCaseStudy = false) => {
  const projectTypes = project.types?.length ? project.types : [project.type];
  const category = projectTypes
    .filter(Boolean)
    .map((type) => projectTypeFilters.find((filter) => filter.value === type)?.label || type)
    .join(", ");
  const metaItems = [category, isCaseStudy && project.companyLabel, project.year].filter(Boolean);
  return metaItems.length ? `<span>${metaItems.join(" · ")}</span>` : "";
};

export const getWorkMedia = (project) => {
  if (project.deviceType === "web") {
    return `
      <div class="pf-project-mockups pf-project-mockups--web" aria-hidden="true">
        <div class="pf-web-mockup">
          <img class="pf-web-screen" src="./assets/modular-editorial-system/main.png" alt="" />
          <img class="pf-web-frame" src="./assets/common/laptop.png" alt="" />
        </div>
      </div>
    `;
  }

  if (project.deviceType === "mobile") {
    const screenMedia =
      project.media === "store-finder-renewal"
        ? `
          <video class="pf-phone-screen" autoplay muted loop playsinline preload="metadata" poster="./assets/store-finder-renewal/solution-tobe1.png">
            <source src="./assets/store-finder-renewal/solution-final-scroll.mp4" type="video/mp4" />
          </video>
        `
        : project.id === "cta-enhancement"
          ? `
            <video class="pf-phone-screen" autoplay muted loop playsinline preload="metadata" poster="./assets/cta-enhancement/cta-enhancement-solution-poster.jpg">
              <source src="./assets/cta-enhancement/cta-enhancement-solution.mp4" type="video/mp4" />
            </video>
          `
          : project.id === "public-transport"
            ? `
              <video class="pf-phone-screen pf-phone-screen--public-transport" autoplay muted loop playsinline preload="metadata" poster="./assets/public-transport/mrt-bottomsheet-poster.jpg">
                <source src="./assets/public-transport/mrt-bottomsheet.mp4" type="video/mp4" />
              </video>
            `
            : project.id === "perp-dex"
              ? `
                <video class="pf-phone-screen" autoplay muted loop playsinline preload="metadata" poster="./assets/perp-dex/onboarding-poster.jpg">
                  <source src="./assets/perp-dex/onboarding.mp4" type="video/mp4" />
                </video>
              `
              : "";

    return `
      <div class="pf-project-mockups pf-project-mockups--mobile" aria-hidden="true">
        <div class="pf-phone-mockup pf-phone-mockup--center">
          ${screenMedia}
          <img class="pf-phone-frame" src="./assets/common/pf-mobile-frame.png" alt="" />
        </div>
      </div>
    `;
  }

  return '<div class="pf-work-empty" aria-hidden="true"></div>';
};

export const renderWorkCard = (project, getPlainTitle, isClone = false) => {
  const projectTypes = project.types?.length
    ? project.types
    : [project.type || "others"];
  const badge =
    project.id === "public-transport"
      ? '<span class="pf-work-badge">AI-built</span>'
      : "";
  const content = `
    <div class="pf-work-card">
      ${getWorkMedia(project)}
      ${badge}
    </div>
    <div class="pf-work-meta">
      <h2>${project.title}</h2>
      ${renderWorkMetaLine(project)}
    </div>
  `;

  if (isClone) {
    return `<div class="pf-work pf-work--${project.id} pf-work--clone" aria-hidden="true">${content}</div>`;
  }

  // Works without a case-study page open in a modal, so the link targets the
  // card itself instead of a missing URL.
  const href = project.href || `#work-${project.id}`;
  const anchorId = project.href ? "" : ` id="work-${project.id}"`;

  return `<a class="pf-work pf-work--${project.id}"${anchorId} href="${href}" data-project-types="${projectTypes.join(" ")}" draggable="false" aria-label="${getPlainTitle(project.title)} project detail">${content}</a>`;
};

export const renderCaseStudyCard = (project) => `
  <div class="pf-featured-cell">
  <a class="pf-work pf-work--${project.id} pf-work--featured"
     href="${project.href}" data-project-types="${(project.types || [project.type]).join(" ")}"
     data-cursor-label="View Case Study" draggable="false">
    <div class="pf-work-card pf-featured-image">
      <img src="${project.projectMedia}" alt="" loading="lazy" decoding="async" />
    </div>
    <div class="pf-featured-caption">
      <div class="pf-featured-copy">
        <h2>${project.title}</h2>
        ${renderWorkMetaLine(project, true)}
      </div>
    </div>
  </a>
  </div>
`;

export const renderPfMarkup = (pfProjects, getPlainTitle) => `
  <div class="pf-work-grid pf-work-collection" id="pf-work-grid">
    <div class="pf-work-group pf-featured-section" data-work-group>
      <div class="pf-featured-sticky">
        <div class="pf-featured-viewport">
          <div class="pf-featured-grid">
            <div class="pf-featured-intro"><span>Case Studies 01—03</span><h2>Selected<br>work</h2><p>Product design with <br>measurable impact.</p></div>
            ${pfProjects.filter((project) => project.cta).map(renderCaseStudyCard).join("")}
          </div>
        </div>
      </div>
    </div>
    <div class="pf-work-group pf-work-group--secondary" data-work-group>
      <div class="pf-group-heading"><h2>More work</h2></div>
      <div class="pf-secondary-grid">
        ${pfProjects.filter((project) => !project.cta).map((project) => renderWorkCard(project, getPlainTitle)).join("")}
      </div>
    </div>
  </div>
  <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
`;
