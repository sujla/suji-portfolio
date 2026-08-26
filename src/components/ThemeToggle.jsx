export function ThemeToggle() {
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
          src="./assets/common/theme-toggle-sun-dark.svg"
          alt=""
        />
        <img
          className="theme-icon-image theme-icon-image-light"
          src="./assets/common/theme-toggle-sun-light.svg"
          alt=""
        />
      </span>
      <span className="theme-icon theme-icon-moon" aria-hidden="true">
        <img
          className="theme-icon-image theme-icon-image-dark"
          src="./assets/common/theme-toggle-moon-dark.svg"
          alt=""
        />
        <img
          className="theme-icon-image theme-icon-image-light"
          src="./assets/common/theme-toggle-moon-light.svg"
          alt=""
        />
      </span>
    </button>
  );
}
