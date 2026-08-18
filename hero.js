export const renderHero = (hero, heroProjects, getPlainTitle) => {
  if (!hero) return;

  const modalTransitionDuration = 760;
  let activeModal = null;

  const getWorkMedia = (project) => {
    if (project.deviceType === "web") {
      return `
        <div class="hero-project-mockups hero-project-mockups--web" aria-hidden="true">
          <div class="hero-web-mockup">
            <img class="hero-web-screen" src="./assets/article-studio/main.png" alt="" />
            <img class="hero-web-frame" src="./assets/common/laptop.png" alt="" />
          </div>
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
          : project.id === "cta-enhancement"
            ? `
              <video class="hero-phone-screen" autoplay muted loop playsinline preload="metadata">
                <source src="./assets/cta-enhancement/cta-enhancement-solution.mp4" type="video/mp4" />
              </video>
            `
            : project.id === "public-transport"
              ? `
                <video class="hero-phone-screen hero-phone-screen--public-transport" autoplay muted loop playsinline preload="metadata">
                  <source src="./assets/public-transport/mrt-bottomsheet.mp4" type="video/mp4" />
                </video>
              `
              : project.id === "perp-dex"
                ? `
                  <video class="hero-phone-screen" autoplay muted loop playsinline preload="metadata">
                    <source src="./assets/perp-dex/onboarding.mp4" type="video/mp4" />
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

  const publicTransportModalVideos = [
    {
      source: "./assets/public-transport/bus-route.mp4",
      label: "Bus timings & route",
    },
    {
      source: "./assets/public-transport/mrt-route.mp4",
      label: "Simple & shortest MRT route options",
    },
    {
      source: "./assets/public-transport/google-map-share.mp4",
      label: "Locations shared via Google Maps",
    },
  ];

  const getPublicTransportModalVideo = (order) => {
    const item = publicTransportModalVideos[order - 1];

    return `
      <div class="hero-modal-public-transport-video-frame">
        <div class="hero-modal-public-transport-video-shadow">
          <video
            class="hero-modal-public-transport-video"
            muted
            playsinline
            preload="auto"
            data-public-transport-video
            data-public-transport-video-order="${order}"
          >
            <source src="${item.source}" type="video/mp4" />
          </video>
        </div>
        <p class="hero-modal-public-transport-caption">${item.label}</p>
      </div>
    `;
  };

  const getProjectMedia = (project) => {
    if (project.projectMedia) {
      return `<img class="hero-modal-project-media" src="${project.projectMedia}" alt="" />`;
    }

    if (project.id === "public-transport") {
      return getPublicTransportModalVideo(1);
    }

    return getWorkMedia(project);
  };

  const storeGuideImpactItems = [
    {
      image: "./assets/store-guide/impact-1.png",
      title: "Flow-level Data Tracking",
    },
    {
      image: "./assets/store-guide/impact-2.png",
      title: "Increased Page Views",
    },
    {
      image: "./assets/store-guide/impact-3.png",
      title: "Pickup Conversion up to 11%",
    },
  ];

  const storeGuideVideoSegments = [
    { start: 0, end: 5 },
    { start: 18, end: 26 },
  ];

  const getBentoPlaceholder = (project, index) => {
    const videoSegment = storeGuideVideoSegments[index];
    const publicTransportMedia =
      project.id === "public-transport"
        ? getPublicTransportModalVideo(index + 2)
        : "";
    const perpDexMedia =
      project.id === "perp-dex"
        ? [
            `
              <video class="hero-modal-perp-media" muted playsinline preload="auto" data-perp-video data-perp-thumbnail-time="3.44">
                <source src="./assets/perp-dex/logo-intro.mp4" type="video/mp4" />
              </video>
            `,
            `
              <video class="hero-modal-perp-media" muted playsinline preload="auto" data-perp-video>
                <source src="./assets/perp-dex/sltp.mp4" type="video/mp4" />
              </video>
            `,
            `
              <div class="hero-modal-perp-media hero-modal-perp-gif" data-perp-gif data-perp-gif-src="./assets/perp-dex/multiwallet.gif" data-perp-gif-duration="6600">
                <canvas class="hero-modal-perp-gif-frame" data-perp-gif-frame></canvas>
                <img class="hero-modal-perp-gif-frame hero-modal-perp-gif-player" alt="" data-perp-gif-player />
              </div>
            `,
            `
              <video class="hero-modal-perp-media hero-modal-perp-media--trading" muted playsinline preload="auto" data-perp-video>
                <source src="./assets/perp-dex/trading.mov" />
              </video>
            `,
          ][index]
        : "";
    const segmentVideo =
      project.media === "store-guide" && videoSegment
        ? `
          <video
            class="hero-modal-bento-video hero-modal-segment-video"
            autoplay
            muted
            playsinline
            preload="auto"
            poster="./assets/store-guide/solution-tobe1.png"
            data-segment-start="${videoSegment.start}"
            data-segment-end="${videoSegment.end}"
          >
            <source src="./assets/store-guide/solution-final-scroll.mp4" type="video/mp4" />
          </video>
        `
        : "";
    const ctaEnhancementVideo =
      project.id === "cta-enhancement" && index === 0
        ? `
          <div class="hero-modal-bento-video-frame">
            <video
              class="hero-modal-bento-video"
              autoplay
              muted
              loop
              playsinline
              preload="auto"
            >
              <source src="./assets/cta-enhancement/cta-enhancement-solution.mp4" type="video/mp4" />
            </video>
          </div>
        `
        : "";
    const ctaEnhancementResult =
      project.id === "cta-enhancement" && index === 2
        ? `
          <div class="hero-modal-result">
            <div class="hero-modal-result-metrics">
              <div class="hero-modal-result-metric">
                <p>Pickup Conversion</p>
                <strong>321.3%</strong>
              </div>
              <div class="hero-modal-result-metric">
                <p class="hero-modal-result-metric-title--nowrap">Total Amount of Pickup Orders</p>
                <strong>128.2%</strong>
              </div>
            </div>
          </div>
        `
        : "";
    const articleStudioMedia =
      project.id === "article-studio" && index === 0
        ? `
          <div class="hero-modal-article-studio-roller">
            <div class="hero-modal-article-studio-track">
              <img src="./assets/article-studio/structure.png" alt="" />
              <img src="./assets/article-studio/props.png" alt="" />
            </div>
            <div class="hero-modal-article-studio-carousel">
              <span class="hero-modal-article-studio-carousel-segment hero-modal-article-studio-carousel-segment--1"></span>
              <span class="hero-modal-article-studio-carousel-segment hero-modal-article-studio-carousel-segment--2"></span>
            </div>
          </div>
        `
        : project.id === "article-studio" && index === 1
          ? `<img class="hero-modal-article-studio-interface" src="./assets/article-studio/interface.png" alt="" />`
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
        ${publicTransportMedia || perpDexMedia || segmentVideo || ctaEnhancementVideo || ctaEnhancementResult || articleStudioMedia || impactCards}
      </div>
    `;
  };

  const initializeMediaMatchedBentoBackgrounds = (modal) => {
    const hasDedicatedBackground = (container) =>
      container.matches(`
        .hero-work--article-studio :is(
          .hero-modal-bento-placeholder--1,
          .hero-modal-bento-placeholder--2
        ),
        .hero-work--public-transport :is(
          .hero-modal-bento-feature,
          .hero-modal-bento-placeholder--1,
          .hero-modal-bento-placeholder--2
        ),
        .hero-work--perp-dex .hero-modal-bento-placeholder,
        .hero-work--cta-enhancement .hero-modal-bento-placeholder--3
      `);

    const getEdgeColor = (media) => {
      const sourceWidth = media.videoWidth || media.naturalWidth || media.width;
      const sourceHeight = media.videoHeight || media.naturalHeight || media.height;

      if (!sourceWidth || !sourceHeight) return null;

      const sampleSize = 16;
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d", { willReadFrequently: true });

      if (!context) return null;

      canvas.width = sampleSize;
      canvas.height = sampleSize;

      try {
        context.drawImage(media, 0, 0, sampleSize, sampleSize);
        const pixels = context.getImageData(0, 0, sampleSize, sampleSize).data;
        let red = 0;
        let green = 0;
        let blue = 0;
        let weight = 0;

        for (let y = 0; y < sampleSize; y += 1) {
          for (let x = 0; x < sampleSize; x += 1) {
            if (x > 1 && x < sampleSize - 2 && y > 1 && y < sampleSize - 2) continue;

            const offset = (y * sampleSize + x) * 4;
            const alpha = pixels[offset + 3] / 255;

            if (alpha < 0.2) continue;

            red += pixels[offset] * alpha;
            green += pixels[offset + 1] * alpha;
            blue += pixels[offset + 2] * alpha;
            weight += alpha;
          }
        }

        if (!weight) return null;

        return `rgb(${Math.round(red / weight)} ${Math.round(green / weight)} ${Math.round(blue / weight)})`;
      } catch {
        return null;
      }
    };

    modal
      .querySelectorAll(".hero-modal-bento-feature, .hero-modal-bento-placeholder")
      .forEach((container) => {
        if (hasDedicatedBackground(container)) return;

        const media = container.querySelector("img, video, canvas");

        if (!media) return;

        const applyBackground = () => {
          if (!container.isConnected) return;

          const color = getEdgeColor(media);

          if (!color) return;

          container.style.setProperty("--hero-modal-media-background", color);
          container.classList.add("has-media-sampled-background");
        };

        if (media instanceof HTMLImageElement) {
          if (media.complete && media.naturalWidth) applyBackground();
          else media.addEventListener("load", applyBackground, { once: true });
          return;
        }

        if (media instanceof HTMLVideoElement) {
          if (media.readyState >= 2) applyBackground();
          else media.addEventListener("loadeddata", applyBackground, { once: true });
          return;
        }

        window.requestAnimationFrame(applyBackground);
      });
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

  const initializePerpDexMediaPlayback = (modal) => {
    const playbackOrder = window.matchMedia("(max-width: 920px)").matches
      ? [1, 2, 3, 4]
      : [4, 1, 2, 3];
    const sequence = playbackOrder
      .map((index) => modal.querySelector(`.hero-modal-bento-placeholder--${index}`))
      .filter(Boolean)
      .map((container) => ({
        container,
        video: container.querySelector("[data-perp-video]"),
        gif: container.querySelector("[data-perp-gif]"),
      }));

    if (!sequence.length) return;

    let activeEntry = null;
    let autoIndex = 0;
    let gifTimer = 0;
    let playbackToken = 0;
    let hoveredEntry = null;

    const showStaticFrame = (entry) => {
      entry.container.classList.remove("is-playing");

      if (entry.video) {
        const thumbnailTime = Number(entry.video.dataset.perpThumbnailTime || 0);
        const freezeVideo = () => {
          entry.video.loop = false;
          entry.video.pause();
          entry.video.currentTime = Math.min(
            thumbnailTime,
            Number.isFinite(entry.video.duration) ? entry.video.duration : thumbnailTime,
          );
        };

        if (entry.video.readyState >= 1) freezeVideo();
        else entry.video.addEventListener("loadedmetadata", freezeVideo, { once: true });
      }

      if (entry.gif) {
        const player = entry.gif.querySelector("[data-perp-gif-player]");
        player?.removeAttribute("src");
      }
    };

    const stopAll = () => {
      window.clearTimeout(gifTimer);
      sequence.forEach(showStaticFrame);
    };

    const advanceAuto = () => {
      autoIndex = (autoIndex + 1) % sequence.length;
      playEntry(sequence[autoIndex], true);
    };

    const playEntry = (entry, isAutoPlay = false) => {
      const token = ++playbackToken;
      stopAll();
      activeEntry = entry;
      entry.container.classList.add("is-playing");

      if (entry.video) {
        const startVideo = () => {
          if (token !== playbackToken || !modal.isConnected) return;
          entry.video.loop = !isAutoPlay;
          entry.video.currentTime = 0;
          entry.video.play().catch(() => {
            // Muted playback can still be blocked until the next user interaction.
          });
        };

        if (entry.video.readyState >= 1) startVideo();
        else entry.video.addEventListener("loadedmetadata", startVideo, { once: true });
      }

      if (entry.gif) {
        const player = entry.gif.querySelector("[data-perp-gif-player]");
        const source = entry.gif.dataset.perpGifSrc;

        if (player && source) {
          player.src = `${source}?play=${token}`;
        }

        if (isAutoPlay) {
          gifTimer = window.setTimeout(() => {
            if (token === playbackToken && !hoveredEntry && modal.isConnected) advanceAuto();
          }, Number(entry.gif.dataset.perpGifDuration || 6600));
        }
      }
    };

    sequence.forEach((entry) => {
      if (entry.video) {
        entry.video.addEventListener("ended", () => {
          if (entry === activeEntry && !hoveredEntry && modal.isConnected) advanceAuto();
        });
      }

      if (entry.gif) {
        const canvas = entry.gif.querySelector("[data-perp-gif-frame]");
        const image = new Image();

        image.addEventListener(
          "load",
          () => {
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            canvas.getContext("2d")?.drawImage(image, 0, 0);
          },
          { once: true },
        );
        image.src = entry.gif.dataset.perpGifSrc;
      }

      entry.container.addEventListener("mouseenter", () => {
        hoveredEntry = entry;
        playEntry(entry);
      });

      entry.container.addEventListener("mouseleave", () => {
        if (hoveredEntry !== entry) return;
        hoveredEntry = null;
        autoIndex = (sequence.indexOf(entry) + 1) % sequence.length;
        playEntry(sequence[autoIndex], true);
      });
    });

    sequence.forEach(showStaticFrame);
    playEntry(sequence[autoIndex], true);
  };

  const initializePublicTransportMediaPlayback = (modal) => {
    const sequence = [...modal.querySelectorAll("[data-public-transport-video]")]
      .map((video) => ({
        video,
        order: Number(video.dataset.publicTransportVideoOrder),
        container: video.closest(".hero-modal-bento-feature, .hero-modal-bento-placeholder"),
      }))
      .filter((entry) => entry.container)
      .sort((a, b) => a.order - b.order);

    if (!sequence.length) return;

    let activeEntry = null;
    let autoIndex = 0;
    let hoveredEntry = null;
    let playbackToken = 0;

    const showStaticFrame = (entry) => {
      entry.container.classList.remove("is-playing");
      entry.video.loop = false;
      entry.video.pause();

      if (entry.video.readyState >= 1) entry.video.currentTime = 0;
    };

    const stopAll = () => sequence.forEach(showStaticFrame);

    const advanceAuto = () => {
      autoIndex = (autoIndex + 1) % sequence.length;
      playEntry(sequence[autoIndex], true);
    };

    const playEntry = (entry, isAutoPlay = false) => {
      const token = ++playbackToken;
      stopAll();
      activeEntry = entry;
      entry.container.classList.add("is-playing");

      const startVideo = () => {
        if (token !== playbackToken || !modal.isConnected) return;
        entry.video.loop = !isAutoPlay;
        entry.video.currentTime = 0;
        entry.video.play().catch(() => {
          // Muted playback can still be blocked until the next user interaction.
        });
      };

      if (entry.video.readyState >= 1) startVideo();
      else entry.video.addEventListener("loadedmetadata", startVideo, { once: true });
    };

    sequence.forEach((entry) => {
      entry.video.addEventListener("ended", () => {
        if (entry === activeEntry && !hoveredEntry && modal.isConnected) advanceAuto();
      });

      entry.container.addEventListener("mouseenter", () => {
        hoveredEntry = entry;
        playEntry(entry);
      });

      entry.container.addEventListener("mouseleave", () => {
        if (hoveredEntry !== entry) return;
        hoveredEntry = null;
        autoIndex = (sequence.indexOf(entry) + 1) % sequence.length;
        playEntry(sequence[autoIndex], true);
      });
    });

    sequence.forEach(showStaticFrame);
    playEntry(sequence[autoIndex], true);
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

  const getModalTargetRect = () => {
    const modalInset = window.innerWidth <= 600 ? 12 : window.innerWidth <= 920 ? 16 : 24;

    return {
      top: modalInset,
      left: modalInset,
      width: window.innerWidth - modalInset * 2,
      height: window.innerHeight - modalInset * 2,
    };
  };

  const getModalTargetRadius = () =>
    window.innerWidth <= 600 ? "28px" : window.innerWidth <= 920 ? "32px" : "36px";

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

  const pauseHeroWorkVideos = () => {
    const videos = [...hero.querySelectorAll(".hero-work video")];
    const playingVideos = videos.filter(
      (video) => !video.paused && !video.ended,
    );

    videos.forEach((video) => video.pause());
    return playingVideos;
  };

  const resumeHeroWorkVideos = (videos) => {
    videos.forEach((video) => {
      if (!video.isConnected) return;

      video.play().catch(() => {
        // Autoplay can be blocked by the browser until the next user interaction.
      });
    });
  };

  const openWorkModal = (work, project) => {
    if (activeModal) return;

    const pausedHeroWorkVideos = pauseHeroWorkVideos();
    const sourceRect = work.getBoundingClientRect();
    const sourceRadius = window.getComputedStyle(work).borderRadius;
    const targetRect = getModalTargetRect();
    const targetRadius = getModalTargetRadius();
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
    const descriptionMarkup = project.modalDescription
      ? `<p class="hero-modal-description">${project.modalDescription}</p>`
      : "";
    const isPerpDexProject = project.id === "perp-dex";
    const isPublicTransportProject = project.id === "public-transport";
    const placeholderCount = isPerpDexProject ? 4 : isPublicTransportProject ? 2 : 3;
    const bentoPlaceholders = Array.from({ length: placeholderCount }, (_, index) =>
      getBentoPlaceholder(project, index),
    );
    const usesThreePartBento = isPublicTransportProject;
    const usesFourPartBento = !project.cta && !isPerpDexProject && !usesThreePartBento;
    const isWebProject = project.deviceType === "web" && !usesThreePartBento && !usesFourPartBento;
    const usesSingleTopBento = project.id === "cta-enhancement";
    const bentoStackTopMarkup = usesSingleTopBento
      ? bentoPlaceholders[0]
      : bentoPlaceholders.slice(0, 2).join("");
    const bentoSideMarkup = isPerpDexProject
      ? `
        <div class="hero-modal-perp-left">
          ${bentoPlaceholders[0]}
          <div class="hero-modal-perp-center-bottom">
            ${bentoPlaceholders[1]}
            ${bentoPlaceholders[2]}
          </div>
        </div>
        ${bentoPlaceholders[3]}
      `
      : usesThreePartBento
        ? bentoPlaceholders.join("")
        : usesFourPartBento
          ? bentoPlaceholders.join("")
          : isWebProject
            ? `<div class="hero-modal-bento-side">${bentoPlaceholders.slice(0, 2).join("")}</div>`
            : `
        <div class="hero-modal-bento-stack">
          <div class="hero-modal-bento-stack-top${usesSingleTopBento ? " hero-modal-bento-stack-top--single" : ""}">
            ${bentoStackTopMarkup}
          </div>
          ${bentoPlaceholders[2]}
        </div>
      `;
    const bentoFeatureMarkup = isPerpDexProject
      ? ""
      : `
        <div class="hero-modal-bento-feature">
          ${getProjectMedia(project)}
        </div>
      `;

    layer.className = "hero-modal-layer";
    modal.className = `hero-work-modal hero-work--${project.id}${descriptionMarkup ? " hero-work-modal--has-description" : ""}${ctaMarkup ? "" : " hero-work-modal--no-cta"}`;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", titleId);
    modal.innerHTML = `
      <div class="hero-modal-card-content">
        <section class="hero-modal-bento-section${isWebProject ? " hero-modal-bento-section--web" : ""}${usesThreePartBento ? " hero-modal-bento-section--three-up" : ""}${usesFourPartBento ? " hero-modal-bento-section--four-up" : ""}${isPerpDexProject ? " hero-modal-bento-section--perp-dex" : ""}" aria-hidden="true">
          ${bentoFeatureMarkup}
          ${bentoSideMarkup}
        </section>
      </div>
      <button class="hero-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="hero-modal-footer${ctaMarkup ? "" : " hero-modal-footer--no-cta"}">
        <div class="hero-work-meta">
          <h2 id="${titleId}">${project.title}</h2>
          ${project.companyLabel ? `<span>@ ${project.companyLabel}</span>` : ""}
        </div>
        ${ctaMarkup || descriptionMarkup}
      </div>
    `;

    applyRect(modal, sourceRect);
    modal.style.borderRadius = sourceRadius;
    layer.append(modal);
    document.body.append(layer);
    initializeMediaMatchedBentoBackgrounds(modal);
    initializeSegmentVideos(modal);
    initializePerpDexMediaPlayback(modal);
    initializePublicTransportMediaPlayback(modal);

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
          borderRadius: targetRadius,
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
    const footer = modal.querySelector(".hero-modal-footer");
    let isClosing = false;

    const syncFooterSpace = () => {
      const footerHeight = footer ? Math.ceil(footer.getBoundingClientRect().height) : 0;
      modal.style.setProperty("--hero-modal-footer-space", `${footerHeight}px`);
    };

    const footerResizeObserver =
      footer && typeof ResizeObserver === "function"
        ? new ResizeObserver(syncFooterSpace)
        : null;

    footerResizeObserver?.observe(footer);
    syncFooterSpace();

    const handleModalResize = () => {
      if (!isClosing && modal.classList.contains("is-ready")) {
        applyRect(modal, getModalTargetRect());
        modal.style.borderRadius = getModalTargetRadius();
        syncFooterSpace();
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
        footerResizeObserver?.disconnect();
        activeModal = null;
        resumeHeroWorkVideos(pausedHeroWorkVideos);
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
        modal.style.borderRadius = targetRadius;
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
    <div class="hero-work-rail hero-work-rail--infinite hero-work-rail--secondary" data-hero-work-rail-secondary>
      <div class="hero-work-track">
        ${renderWorkSet(true)}
        ${renderWorkSet()}
        ${renderWorkSet(true)}
      </div>
    </div>
  `;

  const rail = hero.querySelector("[data-hero-work-rail]");
  const workSets = [...rail.querySelectorAll(".hero-work-set")];
  const primaryFirstWork = hero.querySelector(".hero-work-set--primary .hero-work");
  const secondaryRail = hero.querySelector("[data-hero-work-rail-secondary]");
  const secondaryWorkSets = [...secondaryRail.querySelectorAll(".hero-work-set")];
  const secondaryInitialWork = secondaryWorkSets[1]?.querySelector(
    ".hero-work:nth-child(4)",
  );
  const mobileHeroMedia = window.matchMedia("(max-width: 600px)");
  const primaryMobileStartOffset = 80;
  const secondaryMobileStartOffset = -80;
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
  let secondarySegmentWidth = 0;
  let secondaryCenterScrollLeft = 0;
  let secondaryAutoScrollPosition = 0;
  let secondaryAutoScrollPausedUntil = 0;
  let isDraggingSecondaryRail = false;
  let secondaryDragStartX = 0;
  let secondaryDragStartScrollLeft = 0;
  let secondaryDragMoved = false;
  let suppressNextSecondaryClick = false;

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
      primaryFirstWorkScrollLeft -
      (rail.clientWidth - primaryFirstWorkRect.width) / 2 -
      (mobileHeroMedia.matches ? primaryMobileStartOffset : 0);
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

  const syncSecondaryInfiniteMetrics = ({ preservePosition = false } = {}) => {
    if (!secondaryRail || !secondaryInitialWork || secondaryWorkSets.length < 3 || !secondaryRail.clientWidth) return;

    const previousSegmentWidth = secondarySegmentWidth;
    const previousCenterScrollLeft = secondaryCenterScrollLeft;
    const relativePosition = previousSegmentWidth
      ? (secondaryRail.scrollLeft - previousCenterScrollLeft) / previousSegmentWidth
      : 0;
    const railRect = secondaryRail.getBoundingClientRect();
    const initialWorkRect = secondaryInitialWork.getBoundingClientRect();
    const initialWorkScrollLeft =
      secondaryRail.scrollLeft + initialWorkRect.left - railRect.left;

    secondarySegmentWidth =
    secondaryWorkSets[2].getBoundingClientRect().left -
      secondaryWorkSets[1].getBoundingClientRect().left;
    secondaryCenterScrollLeft =
      initialWorkScrollLeft -
      (secondaryRail.clientWidth - initialWorkRect.width) / 2 -
      secondaryMobileStartOffset;
    secondaryRail.scrollLeft = preservePosition
      ? secondaryCenterScrollLeft + relativePosition * secondarySegmentWidth
      : secondaryCenterScrollLeft;
    secondaryAutoScrollPosition = secondaryRail.scrollLeft;
  };

  const normalizeSecondaryInfiniteScroll = () => {
    if (!secondaryRail || !secondarySegmentWidth) return 0;

    const lowerBoundary = secondaryCenterScrollLeft - secondarySegmentWidth * 0.5;
    const upperBoundary = secondaryCenterScrollLeft + secondarySegmentWidth * 0.5;
    let normalizedScrollLeft = secondaryRail.scrollLeft;

    while (normalizedScrollLeft < lowerBoundary) normalizedScrollLeft += secondarySegmentWidth;
    while (normalizedScrollLeft >= upperBoundary) normalizedScrollLeft -= secondarySegmentWidth;

    const scrollShift = normalizedScrollLeft - secondaryRail.scrollLeft;
    if (Math.abs(scrollShift) > 0.5) secondaryRail.scrollLeft = normalizedScrollLeft;

    return scrollShift;
  };

  const pauseAutoScroll = () => {
    autoScrollPosition = rail?.scrollLeft ?? autoScrollPosition;
    autoScrollPausedUntil = performance.now() + 200;
  };

  const pauseSecondaryAutoScroll = () => {
    secondaryAutoScrollPosition =
      secondaryRail?.scrollLeft ?? secondaryAutoScrollPosition;
    secondaryAutoScrollPausedUntil = performance.now() + 200;
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

      if (
        heroIsVisible &&
        secondaryRail?.clientWidth &&
        secondarySegmentWidth &&
        !isDraggingSecondaryRail &&
        !document.documentElement.classList.contains("is-hero-modal-open") &&
        time >= secondaryAutoScrollPausedUntil
      ) {
        secondaryAutoScrollPosition -= elapsed * defaultAutoScrollSpeed;
        secondaryRail.scrollLeft = secondaryAutoScrollPosition;
        secondaryAutoScrollPosition += normalizeSecondaryInfiniteScroll();
      }
    }

    requestAnimationFrame(animateRail);
  };

  requestAnimationFrame(animateRail);

  requestAnimationFrame(() => {
    syncInfiniteMetrics();
    syncSecondaryInfiniteMetrics();
  });

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

  secondaryRail?.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || activeModal) return;

    isDraggingSecondaryRail = true;
    secondaryDragMoved = false;
    secondaryDragStartX = event.clientX;
    secondaryDragStartScrollLeft = secondaryRail.scrollLeft;
    pauseSecondaryAutoScroll();
  });

  secondaryRail?.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  secondaryRail?.addEventListener("pointermove", (event) => {
    if (!isDraggingSecondaryRail) return;

    const dragDistance = event.clientX - secondaryDragStartX;
    if (!secondaryDragMoved && Math.abs(dragDistance) <= 5) return;

    if (!secondaryDragMoved) {
      secondaryDragMoved = true;
      secondaryRail.classList.add("is-dragging");
      secondaryRail.setPointerCapture(event.pointerId);
    }

    secondaryRail.scrollLeft = secondaryDragStartScrollLeft - dragDistance;
    secondaryDragStartScrollLeft += normalizeSecondaryInfiniteScroll();
    secondaryAutoScrollPosition = secondaryRail.scrollLeft;
    pauseSecondaryAutoScroll();
  });

  const finishSecondaryRailDrag = (event) => {
    if (!secondaryRail || !isDraggingSecondaryRail) return;

    isDraggingSecondaryRail = false;
    secondaryRail.classList.remove("is-dragging");
    if (secondaryRail.hasPointerCapture(event.pointerId)) {
      secondaryRail.releasePointerCapture(event.pointerId);
    }
    secondaryAutoScrollPosition = secondaryRail.scrollLeft;

    if (secondaryDragMoved) {
      suppressNextSecondaryClick = true;
      window.setTimeout(() => {
        suppressNextSecondaryClick = false;
      }, 0);
    }
  };

  secondaryRail?.addEventListener("pointerup", finishSecondaryRailDrag);
  secondaryRail?.addEventListener("pointercancel", finishSecondaryRailDrag);
  secondaryRail?.addEventListener(
    "click",
    (event) => {
      if (!suppressNextSecondaryClick) return;

      suppressNextSecondaryClick = false;
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
    requestAnimationFrame(() => {
      syncInfiniteMetrics({ preservePosition: true });
      syncSecondaryInfiniteMetrics({ preservePosition: true });
    });
  });
};
