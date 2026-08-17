export const renderHero = (hero, heroProjects, getPlainTitle) => {
  if (!hero) return;

  const modalTransitionDuration = 760;
  const modalInset = 24;
  let activeModal = null;

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

  const isPlainNavigationClick = (event, link) =>
    event.button === 0 &&
    !event.defaultPrevented &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey &&
    !link.target &&
    !link.hasAttribute("download");

  const getModalTargetRect = () => ({
    top: modalInset,
    left: modalInset,
    width: window.innerWidth - modalInset * 2,
    height: window.innerHeight - modalInset * 2,
  });

  const applyRect = (element, rect) => {
    Object.assign(element.style, {
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
    });
  };

  const openWorkModal = (work, project) => {
    if (activeModal) return;

    const sourceRect = work.getBoundingClientRect();
    const sourceRadius = window.getComputedStyle(work).borderRadius;
    const targetRect = getModalTargetRect();
    const layer = document.createElement("div");
    const modal = document.createElement("div");
    const titleId = `hero-modal-${project.id}-title`;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const transitionDuration = prefersReducedMotion ? 1 : modalTransitionDuration;

    layer.className = "hero-modal-layer";
    modal.className = `hero-work-modal hero-work--${project.id}`;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", titleId);
    modal.innerHTML = `
      <div class="hero-modal-card-content">${work.innerHTML}</div>
      <button class="hero-modal-close" type="button" aria-label="Close project preview"></button>
      <a class="hero-modal-cta" href="${project.href}">
        <span>View case study</span>
        <span class="hero-modal-cta-arrow" aria-hidden="true">↗</span>
      </a>
    `;
    modal.querySelector(".hero-work-meta h2")?.setAttribute("id", titleId);
    applyRect(modal, sourceRect);
    modal.style.borderRadius = sourceRadius;
    layer.append(modal);
    document.body.append(layer);

    work.classList.add("is-modal-source");
    document.documentElement.classList.add("is-hero-modal-open");

    const modalAnimation = modal.animate(
      [
        {
          top: `${sourceRect.top}px`,
          left: `${sourceRect.left}px`,
          width: `${sourceRect.width}px`,
          height: `${sourceRect.height}px`,
          borderRadius: sourceRadius,
        },
        {
          top: `${targetRect.top}px`,
          left: `${targetRect.left}px`,
          width: `${targetRect.width}px`,
          height: `${targetRect.height}px`,
          borderRadius: "36px",
        },
      ],
      {
        duration: transitionDuration,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "forwards",
      },
    );

    const backdropAnimation = layer.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: Math.min(transitionDuration, 420),
      easing: "ease-out",
      fill: "forwards",
    });

    const closeButton = modal.querySelector(".hero-modal-close");
    const cta = modal.querySelector(".hero-modal-cta");
    let isClosing = false;

    const handleModalResize = () => {
      if (!isClosing && modal.classList.contains("is-ready")) {
        applyRect(modal, getModalTargetRect());
      }
    };

    const closeModal = () => {
      if (isClosing) return;
      isClosing = true;
      modal.classList.remove("is-ready");

      const currentRect = modal.getBoundingClientRect();
      const currentRadius = window.getComputedStyle(modal).borderRadius;
      const latestSourceRect = work.getBoundingClientRect();
      modalAnimation.cancel();
      backdropAnimation.cancel();
      applyRect(modal, currentRect);
      modal.style.borderRadius = currentRadius;

      const closeDuration = prefersReducedMotion ? 1 : 560;
      const sourceRevealAnimation = work.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: prefersReducedMotion ? 1 : 180,
        easing: "ease-out",
        fill: "forwards",
      });
      const closeAnimation = modal.animate(
        [
          {
            top: `${currentRect.top}px`,
            left: `${currentRect.left}px`,
            width: `${currentRect.width}px`,
            height: `${currentRect.height}px`,
            borderRadius: currentRadius,
          },
          {
            top: `${latestSourceRect.top}px`,
            left: `${latestSourceRect.left}px`,
            width: `${latestSourceRect.width}px`,
            height: `${latestSourceRect.height}px`,
            borderRadius: sourceRadius,
          },
        ],
        {
          duration: closeDuration,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        },
      );

      layer.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: closeDuration,
        easing: "ease-in",
        fill: "forwards",
      });

      closeAnimation.finished.finally(() => {
        layer.remove();
        work.classList.remove("is-modal-source");
        sourceRevealAnimation.cancel();
        document.documentElement.classList.remove("is-hero-modal-open");
        document.removeEventListener("keydown", handleModalKeydown);
        window.removeEventListener("resize", handleModalResize);
        activeModal = null;
        work.focus({ preventScroll: true });
      });
    };

    const handleModalKeydown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = [closeButton, cta];
      const currentIndex = focusable.indexOf(document.activeElement);
      const nextIndex = event.shiftKey
        ? (currentIndex - 1 + focusable.length) % focusable.length
        : (currentIndex + 1) % focusable.length;

      event.preventDefault();
      focusable[nextIndex].focus();
    };

    activeModal = { layer, modal, closeModal };
    document.addEventListener("keydown", handleModalKeydown);
    window.addEventListener("resize", handleModalResize);
    closeButton.addEventListener("click", closeModal);
    layer.addEventListener("click", (event) => {
      if (event.target === layer) closeModal();
    });

    modalAnimation.finished
      .then(() => {
        if (isClosing) return;
        applyRect(modal, targetRect);
        modal.style.borderRadius = "36px";
        modalAnimation.cancel();
        modal.classList.add("is-ready");
        closeButton.focus({ preventScroll: true });
      })
      .catch(() => {
        // Closing can intentionally cancel the opening animation.
      });
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

      if (
        heroIsVisible &&
        !isHoveringWork &&
        !document.documentElement.classList.contains("is-hero-modal-open") &&
        time >= autoScrollPausedUntil &&
        maxScrollLeft > 0
      ) {
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

    work.addEventListener("click", (event) => {
      if (!isPlainNavigationClick(event, work)) return;

      const project = heroProjects.find((item) => work.classList.contains(`hero-work--${item.id}`));
      if (!project) return;

      event.preventDefault();
      pauseAutoScroll();
      openWorkModal(work, project);
    });
  });

  rail?.addEventListener("scroll", updateRailFade, { passive: true });
  updateRailFade();
};
