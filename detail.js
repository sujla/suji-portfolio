import { projects } from "./data/projects.js";

const root = document.documentElement;
const detailNav = document.querySelector(".detail-gnb");
const currentProject = projects.find((project) => project.slug === document.body.dataset.projectSlug);
const contributionList = document.querySelector("[data-contribution-list]");
const tocLinks = [...document.querySelectorAll(".detail-toc a[href^='#']")];
let themeLineTimer;
const lastProjectStorageKey = "portfolio-last-project-slug";

const setSessionItem = (key, value) => {
  try {
    window.sessionStorage?.setItem(key, value);
  } catch {
    // Storage can be unavailable in some privacy or embedded browser contexts.
  }
};

root.classList.add("detail-root");

const renderDetailNav = () => {
  if (!detailNav || !currentProject) return;

  detailNav.innerHTML = `
    <a class="detail-back-icon" href="../../index.html" aria-label="Back to main">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6667 5L4 12L10.6667 19M4 12L20 12" stroke="{currentColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
    <span class="detail-nav-spacer" aria-hidden="true"></span>
    <button class="theme-toggle" type="button" aria-label="Toggle dark and light mode" aria-pressed="false">
      <span class="theme-icon theme-icon-sun" aria-hidden="true">
        <img class="theme-icon-image theme-icon-image-dark" src="../../assets/theme-toggle-sun-dark.svg" alt="" />
        <img class="theme-icon-image theme-icon-image-light" src="../../assets/theme-toggle-sun-light.svg" alt="" />
      </span>
      <span class="theme-icon theme-icon-moon" aria-hidden="true">
        <img class="theme-icon-image theme-icon-image-dark" src="../../assets/theme-toggle-moon-dark.svg" alt="" />
        <img class="theme-icon-image theme-icon-image-light" src="../../assets/theme-toggle-moon-light.svg" alt="" />
      </span>
    </button>
  `;
};

renderDetailNav();

const renderContributions = () => {
  if (!contributionList || !currentProject?.contribution?.length) return;

  contributionList.replaceChildren(
    ...currentProject.contribution.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;

      return listItem;
    }),
  );
};

renderContributions();

const themeToggle = document.querySelector(".theme-toggle");

if (currentProject) {
  root.style.setProperty("--active-project-color", currentProject.keyColor);
  root.style.setProperty("--active-project-sub-color", currentProject.subColor || currentProject.keyColor);
  setSessionItem(lastProjectStorageKey, currentProject.slug);
}

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  themeToggle?.setAttribute("aria-pressed", String(theme === "dark"));
  localStorage.setItem("portfolio-theme", theme);
};

const triggerThemeLineSwap = () => {
  window.clearTimeout(themeLineTimer);
  root.classList.remove("is-theme-switching-lines");
  void root.offsetWidth;
  root.classList.add("is-theme-switching-lines");
  themeLineTimer = window.setTimeout(() => {
    root.classList.remove("is-theme-switching-lines");
  }, 360);
};

const syncDetailNav = () => {
  detailNav?.classList.toggle("is-scrolled", window.scrollY > 50);
};

const tocTargets = tocLinks
  .map((link) => {
    const id = link.getAttribute("href")?.slice(1);
    const target = id ? document.getElementById(id) : null;

    return target ? { id, link, target } : null;
  })
  .filter(Boolean);

const setActiveToc = (activeId) => {
  tocLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;

    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const syncActiveToc = () => {
  if (!tocTargets.length) return;

  const readingLine = window.scrollY + window.innerHeight * 0.36;
  const getDocumentTop = (target) => target.getBoundingClientRect().top + window.scrollY;
  let activeTarget = tocTargets[0];

  tocTargets.forEach((tocTarget) => {
    if (getDocumentTop(tocTarget.target) <= readingLine) {
      activeTarget = tocTarget;
    }
  });

  setActiveToc(activeTarget.id);
};

applyTheme(localStorage.getItem("portfolio-theme") || "dark");
syncDetailNav();
syncActiveToc();

themeToggle?.addEventListener("click", () => {
  triggerThemeLineSwap();
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

tocLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const id = link.getAttribute("href")?.slice(1);
    const target = id ? document.getElementById(id) : null;

    if (!id || !target) return;

    setActiveToc(id);
    target.scrollIntoView({ block: "start", behavior: "smooth" });
  });
});

window.addEventListener(
  "scroll",
  () => {
    syncDetailNav();
    syncActiveToc();
  },
  { passive: true },
);

window.addEventListener("resize", syncActiveToc);
