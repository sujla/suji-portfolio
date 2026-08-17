export const renderHero = (hero, heroProjects, getPlainTitle) => {
  if (!hero) return;

  const modalTransitionDuration = 760;
  const modalInset = 24;
  let activeModal = null;

  const getWorkMedia = (project) => {
    if (project.deviceType === "web") {
      return `
        <div class="hero-project-mockups hero-project-mockups--web" aria-hidden="true">
          <img class="hero-web-mockup" src="./assets/common/hero-web-mockup.png" alt="" />
        </div>
      `;
    }

    if (project.deviceType === "mobile") {
      const screenMedia =
        project.media === "store-guide"
          ? `
            <video class="hero-phone-screen" autoplay muted loop playsinline preload="metadata" poster="./assets/store-guide/solution-tobe1.png">
              <source src="./assets/store-guide/solution-final-scroll.mp4" type="video/mp4" />
            </video>
          `
          : "";

      return `
        <div class="hero-project-mockups hero-project-mockups--mobile" aria-hidden="true">
          <div class="hero-phone-mockup hero-phone-mockup--center">
            ${screenMedia}
            <img class="hero-phone-frame" src="./assets/common/hero-mobile-frame.png" alt="" />
          </div>
        </div>
      `;
    }

    return '<div class="hero-work-empty" aria-hidden="true"></div>';
  };

  const getProjectMedia = (project) =>
    project.projectMedia
      ? `<img class="hero-modal-project-media" src="${project.projectMedia}" alt="" />`
      : getWorkMedia(project);

  const storeGuideImpactItems = [
    {
      image: "./assets/store-guide/impact-1.png",
      title: "Flow-level Tracking Foundation",
    },
    {
      image: "./assets/store-guide/impact-2.png",
      title: "Available-store List Views",
    },
    {
      image: "./assets/store-guide/impact-3.png",
      title: "Pickup Conversion",
    },
  ];

  const getBentoPlaceholder = (project, index) => {
    const segmentStart = index * 8;
    const segmentEnd = segmentStart + 8;
    const segmentVideo =
      project.media === "store-guide" && index < 2
        ? `
          <video
            class="hero-modal-segment-video"
            autoplay
            muted
            playsinline
            preload="auto"
            poster="./assets/store-guide/solution-tobe1.png"
            data-segment-start="${segmentStart}"
            data-segment-end="${segmentEnd}"
          >
            <source src="./assets/store-guide/solution-final-scroll.mp4" type="video/mp4" />
          </video>
        `
        : "";
    const impactCards =
      project.media === "store-guide" && index === 2
        ? `
          <div class="hero-modal-impact-list">
            ${storeGuideImpactItems
              .map(
                (item) => `
                  <article class="hero-modal-impact-card">
                    <div class="hero-modal-impact-media">
                      <img src="${item.image}" alt="" />
                    </div>
                    <h3>${item.title}</h3>
                  </article>
                `,
              )
              .join("")}
          </div>
        `
        : "";

    return `
      <div class="hero-modal-bento-placeholder hero-modal-bento-placeholder--${index + 1}">
        ${segmentVideo || impactCards}
      </div>
    `;
  };

  const initializeSegmentVideos = (modal) => {
    modal.querySelectorAll(".hero-modal-segment-video").forEach((video) => {
      const segmentStart = Number(video.dataset.segmentStart);
      const segmentEnd = Number(video.dataset.segmentEnd);

      const restartSegment = () => {
        video.currentTime = segmentStart;
        video.play().catch(() => {
          // Autoplay can be blocked by the browser until the next user interaction.
        });
      };

      const prepareSegment = () => {
        video.currentTime = segmentStart;
        video.classList.add("is-ready");
        video.play().catch(() => {
          // Autoplay can be blocked by the browser until the next user interaction.
        });
      };

      video.addEventListener("loadedmetadata", prepareSegment, { once: true });
      video.addEventListener("timeupdate", () => {
        if (video.currentTime >= segmentEnd) restartSegment();
      });
      video.addEventListener("ended", restartSegment);

      if (video.readyState >= 1) prepareSegment();
    });
  };

  const renderWorkCard = (project, isClone = false) => {
    const content = `
      ${getWorkMedia(project)}
      <div class="hero-work-meta">
        <h2>${project.title}</h2>
        ${project.companyLabel ? `<span>@ ${project.companyLabel}</span>` : ""}
      </div>
    `;

    if (isClone) {
      return `<div class="hero-work hero-work--${project.id} hero-work--clone" aria-hidden="true">${content}</div>`;
    }

    return `<a class="hero-work hero-work--${project.id}" href="${project.href}" draggable="false" aria-label="${getPlainTitle(project.title)} project detail">${content}</a>`;
  };

  const renderWorkSet = (isClone = false) => `
    <div class="hero-work-set${isClone ? " hero-work-set--clone" : " hero-work-set--primary"}">
      ${heroProjects.map((project) => renderWorkCard(project, isClone)).join("")}
    </div>
  `;

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

  const getModalNavigationTargetRect = () => {
    const targetInset = window.matchMedia("(max-width: 600px)").matches ? 8 : 12;

    return {
      top: targetInset,
      left: targetInset,
      width: window.innerWidth - targetInset * 2,
      height: window.innerHeight - targetInset * 2,
    };
  };

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
    const ctaMarkup = project.cta
      ? `
        <a
          class="hero-modal-cta"
          href="${project.cta.href}"
          ${project.cta.newTab ? 'target="_blank" rel="noopener noreferrer"' : ""}
        >
          <span>${project.cta.label}</span>
          <span
            class="hero-modal-cta-arrow hero-modal-cta-arrow--${project.cta.newTab ? "external" : "internal"}"
            aria-hidden="true"
          ></span>
        </a>
      `
      : "";
    const placeholderCount = 3;
    const bentoPlaceholders = Array.from({ length: placeholderCount }, (_, index) =>
      getBentoPlaceholder(project, index),
    );
    const usesFourPartBento = !project.cta;
    const isWebProject = project.deviceType === "web" && !usesFourPartBento;
    const bentoSideMarkup = usesFourPartBento
      ? bentoPlaceholders.join("")
      : isWebProject
        ? `<div class="hero-modal-bento-side">${bentoPlaceholders[0]}</div>`
        : `
        <div class="hero-modal-bento-stack">
          <div class="hero-modal-bento-stack-top">
            ${bentoPlaceholders.slice(0, 2).join("")}
          </div>
          ${bentoPlaceholders[2]}
        </div>
      `;

    layer.className = "hero-modal-layer";
    modal.className = `hero-work-modal hero-work--${project.id}`;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", titleId);
    modal.innerHTML = `
      <div class="hero-modal-card-content">
        <section class="hero-modal-bento-section${isWebProject ? " hero-modal-bento-section--web" : ""}${usesFourPartBento ? " hero-modal-bento-section--four-up" : ""}" aria-hidden="true">
          <div class="hero-modal-bento-feature">
            ${getProjectMedia(project)}
          </div>
          ${bentoSideMarkup}
        </section>
      </div>
      <button class="hero-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="hero-modal-footer${ctaMarkup ? "" : " hero-modal-footer--no-cta"}">
        <div class="hero-work-meta">
          <h2 id="${titleId}">${project.title}</h2>
          ${project.companyLabel ? `<span>@ ${project.companyLabel}</span>` : ""}
        </div>
        ${ctaMarkup}
      </div>
    `;
    applyRect(modal, sourceRect);
    modal.style.borderRadius = sourceRadius;
    layer.append(modal);
    document.body.append(layer);
    initializeSegmentVideos(modal);

    modal.classList.add("is-revealing");
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

    const backdropAnimation = layer.animate(
      [
        {
          backgroundColor: "rgba(0, 0, 0, 0)",
          backdropFilter: "blur(0px)",
        },
        {
          backgroundColor: "rgba(0, 0, 0, 0.54)",
          backdropFilter: "blur(10px)",
        },
      ],
      {
        duration: Math.min(transitionDuration, 420),
        easing: "ease-out",
        fill: "forwards",
      },
    );

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
      modal.classList.add("is-closing");
      modal.classList.remove("is-revealing", "is-ready");

      const currentRect = modal.getBoundingClientRect();
      const currentRadius = window.getComputedStyle(modal).borderRadius;
      const latestSourceRect = work.getBoundingClientRect();
      work.classList.remove("is-modal-source");
      modalAnimation.cancel();
      backdropAnimation.cancel();
      applyRect(modal, currentRect);
      modal.style.borderRadius = currentRadius;

      const closeDuration = prefersReducedMotion ? 1 : 320;
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

      layer.animate(
        [
          {
            backgroundColor: "rgba(0, 0, 0, 0.54)",
            backdropFilter: "blur(10px)",
          },
          {
            backgroundColor: "rgba(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
          },
        ],
        {
          duration: prefersReducedMotion ? 1 : 200,
          easing: "ease-out",
          fill: "forwards",
        },
      );

      closeAnimation.finished.finally(() => {
        layer.remove();
        document.documentElement.classList.remove("is-hero-modal-open");
        document.removeEventListener("keydown", handleModalKeydown);
        window.removeEventListener("resize", handleModalResize);
        activeModal = null;
        const focusTarget = work.matches("a")
          ? work
          : hero.querySelector(`.hero-work-set--primary .hero-work--${project.id}`);
        focusTarget?.focus({ preventScroll: true });
      });
    };

    const runModalNavigation = (event) => {
      if (
        !cta ||
        project.cta?.newTab !== false ||
        !isPlainNavigationClick(event, cta)
      ) {
        return;
      }

      event.preventDefault();
      if (isClosing) return;

      isClosing = true;
      modal.classList.add("is-navigating");
      document.removeEventListener("keydown", handleModalKeydown);

      const currentRect = modal.getBoundingClientRect();
      const currentRadius = window.getComputedStyle(modal).borderRadius;
      const navigationTargetRect = getModalNavigationTargetRect();
      modalAnimation.cancel();
      backdropAnimation.cancel();
      applyRect(modal, currentRect);
      modal.style.borderRadius = currentRadius;

      modal.animate(
        [
          {
            top: `${currentRect.top}px`,
            left: `${currentRect.left}px`,
            width: `${currentRect.width}px`,
            height: `${currentRect.height}px`,
            borderRadius: currentRadius,
            opacity: 1,
            offset: 0,
          },
          {
            opacity: 1,
            offset: 0.9,
          },
          {
            top: `${navigationTargetRect.top}px`,
            left: `${navigationTargetRect.left}px`,
            width: `${navigationTargetRect.width}px`,
            height: `${navigationTargetRect.height}px`,
            borderRadius: "24px",
            opacity: 0,
            offset: 1,
          },
        ],
        {
          duration: modalTransitionDuration,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        },
      );

      layer.animate(
        [
          {
            backgroundColor: "rgba(0, 0, 0, 0.54)",
            backdropFilter: "blur(10px)",
          },
          {
            backgroundColor: "rgba(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
          },
        ],
        {
          duration: 420,
          easing: "ease-out",
          fill: "forwards",
        },
      );

      window.setTimeout(() => {
        window.location.href = cta.href;
      }, modalTransitionDuration - 120);
    };

    const handleModalKeydown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = [closeButton, cta].filter(Boolean);
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
    cta?.addEventListener("click", runModalNavigation);
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
    <div class="hero-work-rail hero-work-rail--infinite" data-hero-work-rail>
      <div class="hero-work-track">
        ${renderWorkSet(true)}
        ${renderWorkSet()}
        ${renderWorkSet(true)}
      </div>
    </div>
  `;

  const rail = hero.querySelector("[data-hero-work-rail]");
  const workSets = [...hero.querySelectorAll(".hero-work-set")];
  const primaryFirstWork = hero.querySelector(".hero-work-set--primary .hero-work");
  const defaultAutoScrollSpeed = 32;
  const hoverAutoScrollSpeed = 12;
  let autoScrollPreviousTime;
  let autoScrollPausedUntil = 0;
  let autoScrollPosition = 0;
  let autoScrollSpeed = defaultAutoScrollSpeed;
  let isHoveringRail = false;
  let isDraggingRail = false;
  let dragStartX = 0;
  let dragStartScrollLeft = 0;
  let dragMoved = false;
  let suppressNextClick = false;
  let segmentWidth = 0;
  let centerScrollLeft = 0;

  const syncInfiniteMetrics = ({ preservePosition = false } = {}) => {
    if (!rail || !primaryFirstWork || workSets.length < 3) return;

    const previousSegmentWidth = segmentWidth;
    const previousCenterScrollLeft = centerScrollLeft;
    const relativePosition = previousSegmentWidth
      ? (rail.scrollLeft - previousCenterScrollLeft) / previousSegmentWidth
      : 0;

    const railRect = rail.getBoundingClientRect();
    const primaryFirstWorkRect = primaryFirstWork.getBoundingClientRect();
    const primaryFirstWorkScrollLeft = rail.scrollLeft + primaryFirstWorkRect.left - railRect.left;

    segmentWidth = workSets[2].getBoundingClientRect().left - workSets[1].getBoundingClientRect().left;
    centerScrollLeft =
      primaryFirstWorkScrollLeft - (rail.clientWidth - primaryFirstWorkRect.width) / 2;
    rail.scrollLeft = preservePosition
      ? centerScrollLeft + relativePosition * segmentWidth
      : centerScrollLeft;
    autoScrollPosition = rail.scrollLeft;
  };

  const normalizeInfiniteScroll = () => {
    if (!rail || !segmentWidth) return 0;

    const lowerBoundary = centerScrollLeft - segmentWidth * 0.5;
    const upperBoundary = centerScrollLeft + segmentWidth * 0.5;
    let normalizedScrollLeft = rail.scrollLeft;

    while (normalizedScrollLeft < lowerBoundary) normalizedScrollLeft += segmentWidth;
    while (normalizedScrollLeft >= upperBoundary) normalizedScrollLeft -= segmentWidth;

    const scrollShift = normalizedScrollLeft - rail.scrollLeft;
    if (Math.abs(scrollShift) > 0.5) rail.scrollLeft = normalizedScrollLeft;

    return scrollShift;
  };

  const pauseAutoScroll = () => {
    autoScrollPosition = rail?.scrollLeft ?? autoScrollPosition;
    autoScrollPausedUntil = performance.now() + 200;
  };

  const animateRail = (time) => {
    const elapsed = Math.min((time - (autoScrollPreviousTime ?? time)) / 1000, 0.1);
    const targetAutoScrollSpeed = isHoveringRail ? hoverAutoScrollSpeed : defaultAutoScrollSpeed;
    autoScrollPreviousTime = time;
    autoScrollSpeed +=
      (targetAutoScrollSpeed - autoScrollSpeed) * Math.min(elapsed * 6, 1);

    if (rail) {
      const heroBounds = hero.getBoundingClientRect();
      const heroIsVisible = heroBounds.bottom > 0 && heroBounds.top < window.innerHeight;

      if (
        heroIsVisible &&
        !isDraggingRail &&
        !document.documentElement.classList.contains("is-hero-modal-open") &&
        time >= autoScrollPausedUntil
      ) {
        autoScrollPosition += elapsed * autoScrollSpeed;
        rail.scrollLeft = autoScrollPosition;
        autoScrollPosition += normalizeInfiniteScroll();
      }
    }

    requestAnimationFrame(animateRail);
  };

  requestAnimationFrame(animateRail);

  requestAnimationFrame(() => syncInfiniteMetrics());

  rail?.addEventListener("mouseenter", () => {
    isHoveringRail = true;
  });

  rail?.addEventListener("mouseleave", () => {
    isHoveringRail = false;
  });

  hero.addEventListener(
    "wheel",
    (event) => {
      if (!rail || event.ctrlKey) return;

      pauseAutoScroll();

      if (event.shiftKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        event.preventDefault();
      }
    },
    { passive: false },
  );

  rail?.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || activeModal) return;

    isDraggingRail = true;
    dragMoved = false;
    dragStartX = event.clientX;
    dragStartScrollLeft = rail.scrollLeft;
    pauseAutoScroll();
  });

  rail?.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  rail?.addEventListener("pointermove", (event) => {
    if (!isDraggingRail) return;

    const dragDistance = event.clientX - dragStartX;
    if (!dragMoved && Math.abs(dragDistance) <= 5) return;

    if (!dragMoved) {
      dragMoved = true;
      rail.classList.add("is-dragging");
      rail.setPointerCapture(event.pointerId);
    }

    rail.scrollLeft = dragStartScrollLeft - dragDistance;
    dragStartScrollLeft += normalizeInfiniteScroll();
    autoScrollPosition = rail.scrollLeft;
    pauseAutoScroll();
  });

  const finishRailDrag = (event) => {
    if (!rail || !isDraggingRail) return;

    isDraggingRail = false;
    rail.classList.remove("is-dragging");
    if (rail.hasPointerCapture(event.pointerId)) rail.releasePointerCapture(event.pointerId);
    autoScrollPosition = rail.scrollLeft;

    if (dragMoved) {
      suppressNextClick = true;
      window.setTimeout(() => {
        suppressNextClick = false;
      }, 0);
    }
  };

  rail?.addEventListener("pointerup", finishRailDrag);
  rail?.addEventListener("pointercancel", finishRailDrag);
  rail?.addEventListener(
    "click",
    (event) => {
      if (!suppressNextClick) return;

      suppressNextClick = false;
      event.preventDefault();
      event.stopPropagation();
    },
    true,
  );

  hero.querySelectorAll(".hero-work").forEach((work) => {
    work.addEventListener("click", (event) => {
      if (!isPlainNavigationClick(event, work)) return;

      const project = heroProjects.find((item) => work.classList.contains(`hero-work--${item.id}`));
      if (!project) return;

      event.preventDefault();
      pauseAutoScroll();
      openWorkModal(work, project);
    });
  });

  window.addEventListener("resize", () => {
    requestAnimationFrame(() => syncInfiniteMetrics({ preservePosition: true }));
  });
};
