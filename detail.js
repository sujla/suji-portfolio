import { projects } from "./data/projects.js";

const root = document.documentElement;
const detailNav = document.querySelector(".detail-gnb");
const currentProject = projects.find((project) => project.slug === document.body.dataset.projectSlug);

const getPlainTitle = (title) => title.split("|").join(" ");

const renderDetailNav = () => {
  if (!detailNav || !currentProject) return;

  detailNav.innerHTML = `
    <a class="detail-back-icon" href="../../index.html#${currentProject.slug}" aria-label="Back to main">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6667 5L4 12L10.6667 19M4 12L20 12" stroke="{currentColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
    <p class="detail-nav-title">${getPlainTitle(currentProject.title)}</p>
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

const themeToggle = document.querySelector(".theme-toggle");

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  themeToggle?.setAttribute("aria-pressed", String(theme === "dark"));
  localStorage.setItem("portfolio-theme", theme);
};

const syncDetailNav = () => {
  detailNav?.classList.toggle("is-scrolled", window.scrollY > 300);
};

applyTheme(localStorage.getItem("portfolio-theme") || "dark");
syncDetailNav();

themeToggle?.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

window.addEventListener("scroll", syncDetailNav, { passive: true });
