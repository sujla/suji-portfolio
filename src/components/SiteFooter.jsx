import { useCallback, useLayoutEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const FOOTER_ROLL_DURATION_MS = 16000;

function FooterMetaItems({ duplicate = false }) {
  const duplicateLinkProps = duplicate
    ? { "aria-hidden": true, tabIndex: -1 }
    : {};

  return (
    <div
      className="site-footer-meta-group"
      aria-hidden={duplicate || undefined}
    >
      <span>Designed &amp; Coded with AI</span>
      <span className="site-footer-separator" aria-hidden="true">·</span>
      <a
        href="https://skiper-ui.com/v1/skiper16"
        target="_blank"
        rel="noreferrer"
        {...duplicateLinkProps}
      >
        Skiper UI
      </a>
      <span className="site-footer-separator" aria-hidden="true">·</span>
      <span>
        <a
          href="https://v3.magicui.design/docs/components/globe"
          target="_blank"
          rel="noreferrer"
          {...duplicateLinkProps}
        >
          Magic UI
        </a>{" "}
        (powered by{" "}
        <a
          href="https://github.com/shuding/cobe"
          target="_blank"
          rel="noreferrer"
          {...duplicateLinkProps}
        >
          Cobe
        </a>
        )
      </span>
    </div>
  );
}

function FooterSocial({ duplicate = false, elementRef = null }) {
  const duplicateLinkProps = duplicate
    ? { "aria-hidden": true, tabIndex: -1 }
    : {};

  return (
    <nav
      ref={elementRef}
      className="site-footer-social"
      aria-label={duplicate ? undefined : "Social links"}
      aria-hidden={duplicate || undefined}
    >
      <a
        href="https://www.linkedin.com/in/suji-kweon/"
        target="_blank"
        rel="noreferrer"
        {...duplicateLinkProps}
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/sujla"
        target="_blank"
        rel="noreferrer"
        {...duplicateLinkProps}
      >
        GitHub
      </a>
      <a
        href="https://www.instagram.com/aintnobutter"
        target="_blank"
        rel="noreferrer"
        {...duplicateLinkProps}
      >
        Instagram
      </a>
    </nav>
  );
}

export function SiteFooter({ className = "" }) {
  const footerRef = useRef(null);
  const rollViewportRef = useRef(null);
  const primaryContentRef = useRef(null);
  const metaGroupRef = useRef(null);
  const socialRef = useRef(null);
  const [isMetaRolling, setIsMetaRolling] = useState(false);

  const updateMetaRolling = useCallback(() => {
    const footer = footerRef.current;
    const metaGroup = metaGroupRef.current;
    const social = socialRef.current;

    if (!footer || !metaGroup || !social) return;

    const footerStyle = window.getComputedStyle(footer);
    const innerWidth = footer.clientWidth
      - Number.parseFloat(footerStyle.paddingLeft)
      - Number.parseFloat(footerStyle.paddingRight);
    const footerGap = Number.parseFloat(footerStyle.columnGap) || 0;
    const requiredWidth = metaGroup.scrollWidth + social.scrollWidth + footerGap;

    setIsMetaRolling(requiredWidth > innerWidth + 0.5);
  }, []);

  useLayoutEffect(() => {
    updateMetaRolling();

    const resizeObserver = new ResizeObserver(updateMetaRolling);
    resizeObserver.observe(footerRef.current);
    resizeObserver.observe(metaGroupRef.current);
    resizeObserver.observe(socialRef.current);

    document.fonts?.ready.then(updateMetaRolling);

    return () => resizeObserver.disconnect();
  }, [updateMetaRolling]);

  useLayoutEffect(() => {
    const rollViewport = rollViewportRef.current;
    const primaryContent = primaryContentRef.current;

    if (!isMetaRolling || !rollViewport || !primaryContent) return undefined;

    const contentGap = Number.parseFloat(
      window.getComputedStyle(rollViewport.firstElementChild).columnGap,
    ) || 0;
    const cycleDistance = primaryContent.scrollWidth + contentGap;
    const pixelsPerFrame = cycleDistance / (FOOTER_ROLL_DURATION_MS / 1000 * 60);
    const autoScroll = AutoScroll({
      speed: pixelsPerFrame,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    });
    const embla = EmblaCarousel(
      rollViewport,
      {
        align: "start",
        containScroll: false,
        dragFree: true,
        loop: true,
      },
      [autoScroll],
    );

    return () => embla.destroy();
  }, [isMetaRolling]);

  const footerClassName = [
    "site-footer",
    isMetaRolling ? "is-meta-rolling" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <footer ref={footerRef} className={footerClassName}>
      <div ref={rollViewportRef} className="site-footer-roll-viewport">
        <div className="site-footer-roll-track">
          <div ref={primaryContentRef} className="site-footer-content">
            <div ref={metaGroupRef} className="site-footer-meta">
              <FooterMetaItems />
            </div>
            <FooterSocial elementRef={socialRef} />
          </div>
          <div className="site-footer-content site-footer-content--duplicate" aria-hidden="true">
            <div className="site-footer-meta">
              <FooterMetaItems duplicate />
            </div>
            <FooterSocial duplicate />
          </div>
        </div>
      </div>
    </footer>
  );
}
