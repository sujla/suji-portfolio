export function SiteFooter({ className = "" }) {
  const footerClassName = ["site-footer", className].filter(Boolean).join(" ");

  return (
    <footer className={footerClassName}>
      <div className="site-footer-meta">
        <span>Designed &amp; Coded with AI</span>
        <span className="site-footer-separator" aria-hidden="true">·</span>
        <a href="https://skiper-ui.com/v1/skiper16" target="_blank" rel="noreferrer">
          Skiper UI
        </a>
        <span className="site-footer-separator" aria-hidden="true">·</span>
        <span>
          <a
            href="https://v3.magicui.design/docs/components/globe"
            target="_blank"
            rel="noreferrer"
          >
            Magic UI
          </a>{" "}
          (powered by{" "}
          <a href="https://github.com/shuding/cobe" target="_blank" rel="noreferrer">
            Cobe
          </a>
          )
        </span>
      </div>
      <nav className="site-footer-social" aria-label="Social links">
        <a href="https://www.linkedin.com/in/suji-kweon/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/sujla" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.instagram.com/aintnobutter" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </nav>
    </footer>
  );
}
