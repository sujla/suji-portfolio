export const renderHero = (hero, heroProjects, getPlainTitle) => {
  if (!hero) return;

  const getWorkMedia = (project) => {
    if (project.media !== "store-guide") {
      return '<div class="hero-work-empty" aria-hidden="true"></div>';
    }

    return `
      <div class="hero-store-guide-mockups" aria-hidden="true">
        <div class="hero-phone-mockup hero-phone-mockup--center">
          <video class="hero-phone-screen" autoplay muted loop playsinline preload="metadata" poster="./assets/store-guide/solution-tobe1.png">
            <source src="./assets/store-guide/solution-final-scroll.mp4" type="video/mp4" />
          </video>
          <img class="hero-phone-frame" src="./assets/store-guide/solution-showcase-phone-frame.png" alt="" />
        </div>
      </div>
    `;
  };

  const renderWorkCard = (project) => {
    const content = `
      ${getWorkMedia(project)}
      <div class="hero-work-meta">
        <h2>${project.title}</h2>
        ${project.companyLabel ? `<span>@ ${project.companyLabel}</span>` : ""}
      </div>
    `;

    return `<a class="hero-work hero-work--${project.id}" href="${project.href}" aria-label="${getPlainTitle(project.title)} project detail">${content}</a>`;
  };

  hero.innerHTML = `
    <div class="hero-work-rail" data-hero-work-rail>
      <div class="hero-work-track">
        ${heroProjects.map((project) => renderWorkCard(project)).join("")}
      </div>
    </div>
  `;

  const rail = hero.querySelector("[data-hero-work-rail]");
  let autoScrollPreviousTime;
  let autoScrollPausedUntil = 0;
  let autoScrollPosition = rail?.scrollLeft ?? 0;
  let isHoveringWork = false;

  const updateRailFade = () => {
    if (!rail) return;

    const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
    rail.style.setProperty("--hero-fade-left", rail.scrollLeft > 1 ? "16px" : "0px");
    rail.style.setProperty("--hero-fade-right", rail.scrollLeft < maxScrollLeft - 1 ? "24px" : "0px");
  };

  const pauseAutoScroll = () => {
    autoScrollPosition = rail?.scrollLeft ?? autoScrollPosition;
    autoScrollPausedUntil = performance.now() + 2200;
  };

  const animateRail = (time) => {
    const elapsed = Math.min((time - (autoScrollPreviousTime ?? time)) / 1000, 0.1);
    autoScrollPreviousTime = time;

    if (rail) {
      const heroBounds = hero.getBoundingClientRect();
      const heroIsVisible = heroBounds.bottom > 0 && heroBounds.top < window.innerHeight;
      const maxScrollLeft = rail.scrollWidth - rail.clientWidth;

      if (heroIsVisible && !isHoveringWork && time >= autoScrollPausedUntil && maxScrollLeft > 0) {
        autoScrollPosition = Math.min(autoScrollPosition + elapsed * 12, maxScrollLeft);
        rail.scrollLeft = autoScrollPosition;
        updateRailFade();
      }
    }

    requestAnimationFrame(animateRail);
  };

  requestAnimationFrame(animateRail);

  hero.addEventListener(
    "wheel",
    (event) => {
      if (!rail || event.ctrlKey) return;

      pauseAutoScroll();

      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
      const canScrollForward = delta > 0 && rail.scrollLeft < maxScrollLeft - 1;
      const canScrollBackward = delta < 0 && rail.scrollLeft > 1;

      if (!canScrollForward && !canScrollBackward) return;

      event.preventDefault();
      rail.scrollLeft = Math.min(Math.max(rail.scrollLeft + delta, 0), maxScrollLeft);
      autoScrollPosition = rail.scrollLeft;
      updateRailFade();
    },
    { passive: false },
  );

  hero.querySelectorAll(".hero-work").forEach((work) => {
    work.addEventListener("pointerenter", () => {
      isHoveringWork = true;
    });

    work.addEventListener("pointerleave", () => {
      isHoveringWork = false;
    });
  });

  rail?.addEventListener("scroll", updateRailFade, { passive: true });
  updateRailFade();
};
