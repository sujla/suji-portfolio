import { projectSettings, projects } from "./data/projects.js";
import { pfProjects } from "./data/pf-projects.js";
import { renderPf } from "./pf.js";

const pf = document.querySelector("[data-pf]");
const about = document.querySelector("[data-about]");
const aboutPhotoStack = document.querySelector(".about-photo-stack");
const projectList = document.querySelector("[data-project-list]");
const currentProject = document.querySelector("[data-current-project]");
const totalProjects = document.querySelector("[data-total-projects]");
const counterLine = document.querySelector(".counter-line");
const sideMeta = document.querySelector(".fixed-project-meta");
const sideNumber = document.querySelector("[data-side-number]");
const sideWip = document.querySelector("[data-side-wip]");
const sideTitle = document.querySelector("[data-side-title]");
const counterWip = document.querySelector("[data-counter-wip]");
const yearRail = document.querySelector("[data-year-rail]");
const gnbScrollLinks = [...document.querySelectorAll("[data-gnb-scroll]")];
const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;
const lastProjectStorageKey = "portfolio-last-project-slug";
const projectTransitionDuration = 760;
const desktopProjectTransitionMargin = 12;
const mobileProjectTransitionMargin = 8;
const mobileProjectMedia = window.matchMedia("(max-width: 600px)");
const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
const aboutPhotoInterval = 3000;
const aboutPhotoTransitionDuration = 200;
const gnbSectionScrollOffsets = {
  work: 40,
  experience: -50,
};
let projectTransitionInProgress = false;
let mobileProjectViewportHeight = 0;
let lastViewportWidth = 0;
let aboutPhotoLoopTimer = 0;
let aboutPhotoTransitionTimer = 0;

const shuffleAboutPhotos = () => {
  const frontPhoto = aboutPhotoStack?.lastElementChild;

  if (!frontPhoto || aboutPhotoStack.children.length < 2 || frontPhoto.classList.contains("is-moving-to-back")) return;

  frontPhoto.classList.add("is-moving-to-back");
  aboutPhotoTransitionTimer = window.setTimeout(() => {
    aboutPhotoStack.prepend(frontPhoto);
    window.requestAnimationFrame(() => frontPhoto.classList.remove("is-moving-to-back"));
  }, aboutPhotoTransitionDuration);
};

const syncAboutPhotoLoop = () => {
  window.clearInterval(aboutPhotoLoopTimer);
  window.clearTimeout(aboutPhotoTransitionTimer);
  aboutPhotoStack?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back");

  if (!aboutPhotoStack || aboutPhotoStack.children.length < 2 || reducedMotionMedia.matches) return;

  aboutPhotoLoopTimer = window.setInterval(shuffleAboutPhotos, aboutPhotoInterval);
};

const getSessionItem = (key) => {
  try {
    return window.sessionStorage?.getItem(key) || "";
  } catch {
    return "";
  }
};

const setSessionItem = (key, value) => {
  try {
    window.sessionStorage?.setItem(key, value);
  } catch {
    // Storage can be unavailable in some privacy or embedded browser contexts.
  }
};

const trackProjectClick = (projectName) => {
  window.gtag?.("event", "project_click", {
    project_name: projectName,
  });
};

const padProjectNumber = (value) => String(value).padStart(2, "0");

const yearLabel = (year) => `'${String(year).slice(-2)}`;

const getYearWindow = (activeYear) => {
  const { start, end } = projectSettings.yearRange;
  const windowSize = Math.min(5, end - start + 1);
  const windowStart = Math.min(Math.max(activeYear - 2, start), end - windowSize + 1);

  return Array.from({ length: windowSize }, (_, index) => windowStart + index);
};

const getPlainTitle = (title) => title.split("|").join(" ");

const getMediaShadow = (project, theme) =>
  project.mediaShadow?.[theme] || "0 8px 48px rgba(0, 0, 0, 0.08)";

const getProjectTitleSlug = (title) =>
  getPlainTitle(title)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getProjectDetailSlug = (project) => {
  if (project.detailSlug) return project.detailSlug;

  const titleSlug = getProjectTitleSlug(project.title);
  const titleSlugCount = projects.filter((item) => getProjectTitleSlug(item.title) === titleSlug).length;

  return titleSlugCount > 1 ? `${titleSlug}-${project.number}` : titleSlug;
};

const getProjectDetailHref = (project) => `./projects/${getProjectDetailSlug(project)}/`;

const isPlainNavigationClick = (event, link) =>
  event.button === 0 &&
  !event.defaultPrevented &&
  !event.metaKey &&
  !event.ctrlKey &&
  !event.shiftKey &&
  !event.altKey &&
  !link.target &&
  !link.hasAttribute("download");

const getProjectTransitionMargin = () =>
  window.matchMedia("(max-width: 600px)").matches ? mobileProjectTransitionMargin : desktopProjectTransitionMargin;

const getTransitionTargetRect = () => {
  const projectTransitionMargin = getProjectTransitionMargin();

  return {
    top: projectTransitionMargin,
    left: projectTransitionMargin,
    width: window.innerWidth - projectTransitionMargin * 2,
    height: window.innerHeight - projectTransitionMargin * 2,
  };
};

const createProjectTransitionClone = (card) => {
  const rect = card.getBoundingClientRect();
  const targetRect = getTransitionTargetRect();
  const computedStyle = window.getComputedStyle(card);
  const projectStyle = window.getComputedStyle(card.closest(".project-section"));
  const mediaStyle = window.getComputedStyle(card.querySelector(".project-media"));
  const summary = card.querySelector(".project-summary");
  const gap = Number.parseFloat(computedStyle.rowGap || computedStyle.gap) || 0;
  const summaryHeight = summary?.getBoundingClientRect().height || 0;
  const targetMediaHeight = Math.max(0, targetRect.height - summaryHeight - gap);
  const layer = document.createElement("div");
  const cardClone = card.cloneNode(true);

  cardClone.classList.add("project-transition-card");
  cardClone.removeAttribute("href");
  cardClone.removeAttribute("aria-label");
  cardClone.setAttribute("aria-hidden", "true");
  Object.assign(cardClone.style, {
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    gap: computedStyle.gap,
    gridTemplateRows: computedStyle.gridTemplateRows,
    maxHeight: "none",
  });
  cardClone.style.setProperty("--project-color", projectStyle.getPropertyValue("--project-color"));
  cardClone.style.setProperty("--project-sub-color", projectStyle.getPropertyValue("--project-sub-color"));
  cardClone.style.setProperty("--project-media-shadow", mediaStyle.boxShadow);

  layer.className = "project-transition-layer";
  layer.append(cardClone);
  document.body.append(layer);

  return {
    cardClone,
    targetRect,
    targetGridTemplateRows: `${targetMediaHeight}px ${summaryHeight}px`,
  };
};

const runProjectTransition = (link) => {
  if (projectTransitionInProgress) return;

  const section = link.closest(".project-section");

  if (!section) {
    window.location.href = link.href;
    return;
  }

  projectTransitionInProgress = true;
  section.classList.add("is-transition-source");
  document.body.classList.add("is-project-transitioning");
  document.documentElement.classList.add("is-project-transitioning");

  const { cardClone, targetRect, targetGridTemplateRows } = createProjectTransitionClone(link);

  cardClone.animate(
    [
      {
        top: cardClone.style.top,
        left: cardClone.style.left,
        width: cardClone.style.width,
        height: cardClone.style.height,
        gridTemplateRows: cardClone.style.gridTemplateRows,
        opacity: 1,
        offset: 0,
      },
      {
        opacity: 1,
        offset: 0.9,
      },
      {
        top: `${targetRect.top}px`,
        left: `${targetRect.left}px`,
        width: `${targetRect.width}px`,
        height: `${targetRect.height}px`,
        gridTemplateRows: targetGridTemplateRows,
        opacity: 0,
        offset: 1,
      },
    ],
    {
      duration: projectTransitionDuration,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fill: "forwards",
    },
  );

  window.setTimeout(() => {
    window.location.href = link.href;
  }, projectTransitionDuration - 120);
};

const resetProjectTransition = () => {
  projectTransitionInProgress = false;
  document.documentElement.classList.remove("is-project-transitioning");
  document.body.classList.remove("is-project-transitioning");
  document.querySelectorAll(".project-transition-layer").forEach((layer) => layer.remove());
  document.querySelectorAll(".is-transition-source").forEach((section) => {
    section.classList.remove("is-transition-source");
  });
};

const renderProjects = () => {
  totalProjects.textContent = padProjectNumber(projectSettings.totalProjectCount);

  projectList.innerHTML = projects
    .map((project) => {
      const titleId = `${project.slug}-title`;
      const mediaContent = project.image
        ? `<img class="project-image" src="${project.image}" alt="${getPlainTitle(project.title)}" />`
        : `<div class="project-image-empty" aria-hidden="true"></div>`;

      return `
        <section
          class="project-section"
          id="${project.slug}"
          data-project="${project.number}"
          data-analytics-id="${project.analyticsId}"
          data-year="${project.year}"
          data-title="${project.sideTitle}"
          style="
            --project-color: ${project.keyColor};
            --project-sub-color: ${project.subColor || project.keyColor};
            --project-media-shadow-dark: ${getMediaShadow(project, "dark")};
            --project-media-shadow-light: ${getMediaShadow(project, "light")};
          "
          aria-labelledby="${titleId}"
        >
          <a class="project-card project-link" href="${getProjectDetailHref(project)}" aria-label="${getPlainTitle(project.title)} project detail">
            <figure class="project-media">
              <div class="keyword-badges" aria-label="Keywords">
                ${project.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}
              </div>
              ${mediaContent}
            </figure>

            <div class="project-summary">
              <h3 id="${titleId}">${project.title.split("|").join("<br />")}</h3>
              <div class="summary-copy">
                ${
                  project.contribution?.length
                    ? `<ul>${project.contribution.map((item) => `<li>${item}</li>`).join("")}</ul>`
                    : ""
                }
              </div>
            </div>
          </a>
        </section>
      `;
    })
    .join("");
};

const renderYearRail = (activeProject) => {
  yearRail.innerHTML = getYearWindow(activeProject.year)
    .map((year) => {
      const isActive = year === activeProject.year;

      return `
        <span class="year-rail-item" data-year="${year}" ${
          isActive ? 'aria-current="true"' : ""
        }>${yearLabel(year)}</span>
      `;
    })
    .join("");
};

const animateFixedUi = () => {
  sideMeta.classList.add("is-changing");
  yearRail.classList.add("is-changing");

  window.setTimeout(() => {
    sideMeta.classList.remove("is-changing");
    yearRail.classList.remove("is-changing");
  }, 180);
};

let sections = [];
let activeIndex = -1;

const syncMobileProjectViewport = ({ force = false } = {}) => {
  if (!mobileProjectMedia.matches) {
    if (mobileProjectViewportHeight) {
      root.style.removeProperty("--mobile-project-viewport");
      mobileProjectViewportHeight = 0;
      lastViewportWidth = 0;
    }
    return;
  }

  const nextViewportWidth = window.innerWidth;

  if (!force && mobileProjectViewportHeight && nextViewportWidth === lastViewportWidth) return;

  mobileProjectViewportHeight = window.innerHeight;
  lastViewportWidth = nextViewportWidth;
  root.style.setProperty("--mobile-project-viewport", `${mobileProjectViewportHeight}px`);
};

const updatePfState = () => {
  if (!pf) return;

  const rect = pf.getBoundingClientRect();
  const viewportCenter = window.innerHeight / 2;
  const isPfActive = rect.top <= viewportCenter && rect.bottom >= viewportCenter;

  root.classList.toggle("is-pf-active", isPfActive);
};

const updateAboutState = () => {
  if (!about) return;

  const rect = about.getBoundingClientRect();
  const viewportCenter = window.innerHeight / 2;
  const isAboutActive = rect.top <= viewportCenter && rect.bottom >= viewportCenter;

  root.classList.toggle("is-about-active", isAboutActive);
};

const setActiveProject = (index) => {
  if (index === activeIndex || index < 0) return;

  const project = projects[index];
  const fill = ((index + 1) / projectSettings.totalProjectCount) * 100;

  activeIndex = index;
  animateFixedUi();
  currentProject.textContent = project.number;
  sideNumber.textContent = project.number;
  sideWip.textContent = project.wip ? "🚧" : "";
  counterWip.textContent = project.wip ? "🚧" : "";
  sideTitle.innerHTML = project.sideTitle.split("|").join("<br />");
  counterLine.style.setProperty("--progress", `${fill}%`);
  root.style.setProperty("--active-project-color", project.keyColor);
  root.style.setProperty("--active-project-sub-color", project.subColor || project.keyColor);
  setSessionItem(lastProjectStorageKey, project.slug);
  renderYearRail(project);
};

const updateFocusedProject = () => {
  if (!sections.length) return;

  const viewportCenter = window.innerHeight / 2;
  const nextIndex = sections
    .map((section, index) => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;

      return { index, distance: Math.abs(sectionCenter - viewportCenter) };
    })
    .sort((a, b) => a.distance - b.distance)[0]?.index;

  sections.forEach((section, index) => {
    const isActive = index === nextIndex;

    section.classList.toggle("is-active", isActive);
    section.classList.toggle("is-inactive", !isActive);
  });

  setActiveProject(nextIndex);
};

const scrollToGnbSection = (target) => {
  const maxScrollY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const scrollOffset = gnbSectionScrollOffsets[target.id] ?? 0;
  const targetScrollY = target === document.body
    ? 0
    : target.getBoundingClientRect().top + window.scrollY - scrollOffset;

  const gnbMenuScrollTargetY = Math.min(
    maxScrollY,
    Math.max(0, targetScrollY),
  );

  window.scrollTo({
    top: gnbMenuScrollTargetY,
    behavior: reducedMotionMedia.matches ? "auto" : "smooth",
  });
};

let frame = 0;

const requestProjectUpdate = () => {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    updatePfState();
    updateAboutState();
    updateFocusedProject();
  });
};

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  localStorage.setItem("portfolio-theme", theme);
};

const preferredTheme = localStorage.getItem("portfolio-theme") || "light";

const getNavigationType = () =>
  window.performance.getEntriesByType("navigation")[0]?.type || "navigate";

reducedMotionMedia.addEventListener?.("change", syncAboutPhotoLoop);
syncAboutPhotoLoop();

const pfController = renderPf(pf, pfProjects, getPlainTitle);
sections = [...document.querySelectorAll("[data-project]")];
syncMobileProjectViewport({ force: true });
applyTheme(preferredTheme);

const restoreLastProject = () => {
  const hashSlug = window.location.hash ? window.location.hash.slice(1) : "";
  const shouldRestoreLastProject = getNavigationType() === "back_forward";
  const savedSlug = hashSlug || (shouldRestoreLastProject ? getSessionItem(lastProjectStorageKey) : "");
  const targetSection = savedSlug ? document.getElementById(savedSlug) : null;

  if (hashSlug) {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }

  if (!targetSection) return;

  targetSection.scrollIntoView({ block: "center", behavior: "auto" });
};

restoreLastProject();

if (getNavigationType() === "reload") {
  window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
}

themeToggle.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

gnbScrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.hash);

    if (!target) return;

    event.preventDefault();
    scrollToGnbSection(target);
  });
});

projectList?.addEventListener("click", (event) => {
  const link = event.target.closest(".project-link");

  if (!link || !projectList.contains(link) || !isPlainNavigationClick(event, link)) return;

  trackProjectClick(link.closest(".project-section")?.dataset.analyticsId);
  event.preventDefault();
  runProjectTransition(link);
});

window.addEventListener("scroll", requestProjectUpdate, { passive: true });
window.addEventListener("resize", () => {
  syncMobileProjectViewport();
  requestProjectUpdate();
});
mobileProjectMedia.addEventListener?.("change", () => {
  syncMobileProjectViewport({ force: true });
  requestProjectUpdate();
});
window.addEventListener("pagehide", () => pfController?.resetModal());
window.addEventListener("pageshow", () => {
  pfController?.resetModal();
  pfController?.syncModalWithHistory();
  resetProjectTransition();
});
requestProjectUpdate();
