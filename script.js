import { projectSettings, projects } from "./data/projects.js";

const projectList = document.querySelector("[data-project-list]");
const currentProject = document.querySelector("[data-current-project]");
const totalProjects = document.querySelector("[data-total-projects]");
const counterLine = document.querySelector(".counter-line");
const sideMeta = document.querySelector(".fixed-project-meta");
const sideNumber = document.querySelector("[data-side-number]");
const sideTitle = document.querySelector("[data-side-title]");
const yearRail = document.querySelector("[data-year-rail]");
const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;
const lastProjectStorageKey = "portfolio-last-project-slug";

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

const setActiveProject = (index) => {
  if (index === activeIndex || index < 0) return;

  const project = projects[index];
  const fill = ((index + 1) / projectSettings.totalProjectCount) * 100;

  activeIndex = index;
  animateFixedUi();
  currentProject.textContent = project.number;
  sideNumber.textContent = project.number;
  sideTitle.innerHTML = project.sideTitle.split("|").join("<br />");
  counterLine.style.setProperty("--progress", `${fill}%`);
  root.style.setProperty("--active-project-color", project.keyColor);
  root.style.setProperty("--active-project-sub-color", project.subColor || project.keyColor);
  setSessionItem(lastProjectStorageKey, project.slug);
  renderYearRail(project);
};

const updateFocusedProject = () => {
  const viewportCenter = window.innerHeight / 2;
  const nextIndex = sections
    .map((section, index) => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;

      return { index, distance: Math.abs(sectionCenter - viewportCenter) };
    })
    .sort((a, b) => a.distance - b.distance)[0]?.index;

  sections.forEach((section, index) => {
    section.classList.toggle("is-active", index === nextIndex);
    section.classList.toggle("is-past", index < nextIndex);
    section.classList.toggle("is-future", index > nextIndex);
  });

  setActiveProject(nextIndex);
};

let frame = 0;

const requestProjectUpdate = () => {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(updateFocusedProject);
};

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  localStorage.setItem("portfolio-theme", theme);
};

const preferredTheme = localStorage.getItem("portfolio-theme") || "dark";

renderProjects();
sections = [...document.querySelectorAll("[data-project]")];
applyTheme(preferredTheme);

const restoreLastProject = () => {
  const hashSlug = window.location.hash ? window.location.hash.slice(1) : "";
  const savedSlug = hashSlug || getSessionItem(lastProjectStorageKey);
  const targetSection = savedSlug ? document.getElementById(savedSlug) : null;

  if (hashSlug) {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }

  if (!targetSection) return;

  targetSection.scrollIntoView({ block: "center", behavior: "auto" });
};

restoreLastProject();

themeToggle.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

window.addEventListener("scroll", requestProjectUpdate, { passive: true });
window.addEventListener("resize", requestProjectUpdate);
updateFocusedProject();
