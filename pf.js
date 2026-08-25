export const renderPf = (pf, pfProjects, getPlainTitle) => {
  if (!pf) return;

  const modalTransitionDuration = 760;
  const modalHistoryStateKey = "portfolioPfModalProject";
  const projectTypeMap = {
    AI: "ai",
    "Enterprise/SaaS": "enterprise",
    Fintech: "fintech",
    "E-commerce": "e-commerce",
    Mobility: "mobility",
  };
  const projectTypeFilters = Object.entries(projectTypeMap).map(
    ([label, value]) => ({ label, value }),
  );
  let activeModal = null;

  const renderWorkMetaLine = (project) => {
    const metaItems = [project.companyLabel, project.year].filter(Boolean);
    return metaItems.length ? `<span>${metaItems.join(" · ")}</span>` : "";
  };

  const trackPfWorkCardClick = (project) => {
    window.gtag?.("event", "pf_work_card_click", {
      project_id: project.id,
      project_title: project.title,
    });
  };

  const getModalHistoryProjectId = () =>
    window.history.state?.[modalHistoryStateKey] || "";

  const pushModalHistoryEntry = (projectId) => {
    const currentState =
      window.history.state && typeof window.history.state === "object"
        ? window.history.state
        : {};

    window.history.pushState(
      { ...currentState, [modalHistoryStateKey]: projectId },
      "",
    );
  };

  const getWorkMedia = (project) => {
    if (project.deviceType === "web") {
      return `
        <div class="pf-project-mockups pf-project-mockups--web" aria-hidden="true">
          <div class="pf-web-mockup">
            <img class="pf-web-screen" src="./assets/article-studio/main.png" alt="" />
            <img class="pf-web-frame" src="./assets/common/laptop.png" alt="" />
          </div>
        </div>
      `;
    }

    if (project.deviceType === "mobile") {
      const screenMedia =
        project.media === "store-guide"
          ? `
            <video class="pf-phone-screen" autoplay muted loop playsinline preload="metadata" poster="./assets/store-guide/solution-tobe1.png">
              <source src="./assets/store-guide/solution-final-scroll.mp4" type="video/mp4" />
            </video>
          `
          : project.id === "cta-enhancement"
            ? `
              <video class="pf-phone-screen" autoplay muted loop playsinline preload="metadata" poster="./assets/cta-enhancement/cta-enhancement-solution-poster.jpg">
                <source src="./assets/cta-enhancement/cta-enhancement-solution.mp4" type="video/mp4" />
              </video>
            `
            : project.id === "public-transport"
              ? `
                <video class="pf-phone-screen pf-phone-screen--public-transport" autoplay muted loop playsinline preload="metadata" poster="./assets/public-transport/mrt-bottomsheet-poster.jpg">
                  <source src="./assets/public-transport/mrt-bottomsheet.mp4" type="video/mp4" />
                </video>
              `
              : project.id === "perp-dex"
                ? `
                  <video class="pf-phone-screen" autoplay muted loop playsinline preload="metadata" poster="./assets/perp-dex/onboarding-poster.jpg">
                    <source src="./assets/perp-dex/onboarding.mp4" type="video/mp4" />
                  </video>
                `
                : "";

      return `
        <div class="pf-project-mockups pf-project-mockups--mobile" aria-hidden="true">
          <div class="pf-phone-mockup pf-phone-mockup--center">
            ${screenMedia}
            <img class="pf-phone-frame" src="./assets/common/pf-mobile-frame.png" alt="" />
          </div>
        </div>
      `;
    }

    return '<div class="pf-work-empty" aria-hidden="true"></div>';
  };

  const publicTransportModalVideos = [
    {
      source: "./assets/public-transport/bus-route.mp4",
      poster: "./assets/public-transport/bus-route-poster.jpg",
      label: "Bus timings & route",
    },
    {
      source: "./assets/public-transport/mrt-route.mp4",
      poster: "./assets/public-transport/mrt-route-poster.jpg",
      label: "Simple & shortest MRT route options",
    },
    {
      source: "./assets/public-transport/google-map-share.mp4",
      poster: "./assets/public-transport/google-map-share-poster.jpg",
      label: "Locations shared via Google Maps",
    },
  ];

  const getPublicTransportModalVideo = (order) => {
    const item = publicTransportModalVideos[order - 1];

    return `
      <div class="pf-modal-public-transport-video-frame">
        <div class="pf-modal-public-transport-video-shadow">
          <video
            class="pf-modal-public-transport-video"
            muted
            playsinline
            preload="auto"
            poster="${item.poster}"
            data-public-transport-video
            data-public-transport-video-order="${order}"
          >
            <source src="${item.source}" type="video/mp4" />
          </video>
        </div>
        <p class="pf-modal-public-transport-caption">${item.label}</p>
      </div>
    `;
  };

  const getProjectMedia = (project) => {
    if (project.projectMedia) {
      return `<img class="pf-modal-project-media" src="${project.projectMedia}" alt="" />`;
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
              <video class="pf-modal-perp-media" muted playsinline preload="auto" poster="./assets/perp-dex/logo-intro-poster.jpg" data-perp-video data-perp-thumbnail-time="3.44">
                <source src="./assets/perp-dex/logo-intro.mp4" type="video/mp4" />
              </video>
            `,
            `
              <video class="pf-modal-perp-media" muted playsinline preload="auto" poster="./assets/perp-dex/sltp-poster.jpg" data-perp-video>
                <source src="./assets/perp-dex/sltp.mp4" type="video/mp4" />
              </video>
            `,
            `
              <div class="pf-modal-perp-media pf-modal-perp-gif" data-perp-gif data-perp-gif-src="./assets/perp-dex/multiwallet.gif" data-perp-gif-duration="6600">
                <canvas class="pf-modal-perp-gif-frame" data-perp-gif-frame></canvas>
                <img class="pf-modal-perp-gif-frame pf-modal-perp-gif-player" alt="" data-perp-gif-player />
              </div>
            `,
            `
              <video class="pf-modal-perp-media pf-modal-perp-media--trading" muted playsinline preload="auto" poster="./assets/perp-dex/trading-poster.jpg" data-perp-video>
                <source src="./assets/perp-dex/trading.mov" />
              </video>
            `,
          ][index]
        : "";
    const segmentVideo =
      project.media === "store-guide" && videoSegment
        ? `
          <video
            class="pf-modal-bento-video pf-modal-segment-video"
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
          <div class="pf-modal-bento-video-frame">
            <video
              class="pf-modal-bento-video"
              autoplay
              muted
              loop
              playsinline
              preload="auto"
              poster="./assets/cta-enhancement/cta-enhancement-solution-poster.jpg"
            >
              <source src="./assets/cta-enhancement/cta-enhancement-solution.mp4" type="video/mp4" />
            </video>
          </div>
        `
        : "";
    const ctaEnhancementResult =
      project.id === "cta-enhancement" && index === 2
        ? `
          <div class="pf-modal-result">
            <div class="pf-modal-result-metrics">
              <div class="pf-modal-result-metric">
                <p>Pickup Conversion</p>
                <strong>321.3%</strong>
              </div>
              <div class="pf-modal-result-metric">
                <p class="pf-modal-result-metric-title--nowrap">Total Amount of Pickup Orders</p>
                <strong>128.2%</strong>
              </div>
            </div>
          </div>
        `
        : "";
    const articleStudioMedia =
      project.id === "article-studio" && index === 0
        ? `
          <div class="pf-modal-article-studio-roller">
            <div class="pf-modal-article-studio-track">
              <img src="./assets/article-studio/structure.png" alt="" />
              <img src="./assets/article-studio/props.png" alt="" />
            </div>
            <div class="pf-modal-article-studio-carousel">
              <span class="pf-modal-article-studio-carousel-segment pf-modal-article-studio-carousel-segment--1"></span>
              <span class="pf-modal-article-studio-carousel-segment pf-modal-article-studio-carousel-segment--2"></span>
            </div>
          </div>
        `
        : project.id === "article-studio" && index === 1
          ? `<img class="pf-modal-article-studio-interface" src="./assets/article-studio/interface.png" alt="" />`
          : "";
    const impactCards =
      project.media === "store-guide" && index === 2
        ? `
          <div class="pf-modal-impact-list">
            ${storeGuideImpactItems
              .map(
                (item) => `
                  <article class="pf-modal-impact-card">
                    <div class="pf-modal-impact-media">
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
      <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${index + 1}">
        ${publicTransportMedia || perpDexMedia || segmentVideo || ctaEnhancementVideo || ctaEnhancementResult || articleStudioMedia || impactCards}
      </div>
    `;
  };

  const initializeMediaMatchedBentoBackgrounds = (modal) => {
    const hasDedicatedBackground = (container) =>
      container.matches(`
        .pf-work--article-studio :is(
          .pf-modal-bento-placeholder--1,
          .pf-modal-bento-placeholder--2
        ),
        .pf-work--public-transport :is(
          .pf-modal-bento-feature,
          .pf-modal-bento-placeholder--1,
          .pf-modal-bento-placeholder--2
        ),
        .pf-work--perp-dex .pf-modal-bento-placeholder,
        .pf-work--cta-enhancement .pf-modal-bento-placeholder--3
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
      .querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder")
      .forEach((container) => {
        if (hasDedicatedBackground(container)) return;

        const media = container.querySelector("img, video, canvas");

        if (!media) return;

        const applyBackground = () => {
          if (!container.isConnected) return;

          const color = getEdgeColor(media);

          if (!color) return;

          container.style.setProperty("--pf-modal-media-background", color);
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
    modal.querySelectorAll(".pf-modal-segment-video").forEach((video) => {
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
    const playSimultaneously = window.matchMedia("(max-width: 920px)").matches;
    const playbackOrder = playSimultaneously ? [1, 2, 3, 4] : [4, 1, 2, 3];
    const sequence = playbackOrder
      .map((index) => modal.querySelector(`.pf-modal-bento-placeholder--${index}`))
      .filter(Boolean)
      .map((container) => ({
        container,
        video: container.querySelector("[data-perp-video]"),
        gif: container.querySelector("[data-perp-gif]"),
      }));

    if (!sequence.length) return;

    if (playSimultaneously) {
      sequence.forEach((entry) => {
        entry.container.classList.add("is-playing");

        if (entry.video) {
          const startVideo = () => {
            if (!modal.isConnected) return;
            entry.video.loop = true;
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

          if (player && source) player.src = source;
        }
      });
      return;
    }

    let activeEntry = null;
    let autoIndex = 0;
    let gifTimer = 0;
    let playbackToken = 0;
    let hoveredEntry = null;

    const showStaticFrame = (entry) => {
      entry.container.classList.remove("is-playing");

      if (entry.video) {
        const thumbnailTime = Number(entry.video.dataset.perpThumbnailTime || 0);
        entry.video.loop = false;
        entry.video.pause();

        if (entry.video.readyState >= 2) {
          entry.video.currentTime = Math.min(
            thumbnailTime,
            Number.isFinite(entry.video.duration) ? entry.video.duration : thumbnailTime,
          );
        }
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
    const playSimultaneously = window.matchMedia("(max-width: 920px)").matches;
    const sequence = [...modal.querySelectorAll("[data-public-transport-video]")]
      .map((video) => ({
        video,
        order: Number(video.dataset.publicTransportVideoOrder),
        container: video.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder"),
      }))
      .filter((entry) => entry.container)
      .sort((a, b) => a.order - b.order);

    if (!sequence.length) return;

    if (playSimultaneously) {
      sequence.forEach((entry) => {
        entry.container.classList.add("is-playing");
        entry.video.loop = true;

        const startVideo = () => {
          if (!modal.isConnected) return;
          entry.video.currentTime = 0;
          entry.video.play().catch(() => {
            // Muted playback can still be blocked until the next user interaction.
          });
        };

        if (entry.video.readyState >= 1) startVideo();
        else entry.video.addEventListener("loadedmetadata", startVideo, { once: true });
      });
      return;
    }

    let activeEntry = null;
    let autoIndex = 0;
    let hoveredEntry = null;
    let playbackToken = 0;

    const showStaticFrame = (entry) => {
      entry.container.classList.remove("is-playing");
      entry.video.loop = false;
      entry.video.pause();

      if (entry.video.readyState >= 2) entry.video.currentTime = 0;
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
    const projectTypes = project.types?.length
      ? project.types
      : [project.type || "others"];
    const content = `
      <div class="pf-work-card">
        ${getWorkMedia(project)}
      </div>
      <div class="pf-work-meta">
        <h2>${project.title}</h2>
        ${renderWorkMetaLine(project)}
      </div>
    `;

    if (isClone) {
      return `<div class="pf-work pf-work--${project.id} pf-work--clone" aria-hidden="true">${content}</div>`;
    }

    return `<a class="pf-work pf-work--${project.id}" href="${project.href}" data-project-types="${projectTypes.join(" ")}" draggable="false" aria-label="${getPlainTitle(project.title)} project detail">${content}</a>`;
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

  const getModalTargetRect = () => {
    const modalInset = window.innerWidth <= 600 ? 12 : 16;

    return {
      top: modalInset,
      left: modalInset,
      width: window.innerWidth - modalInset * 2,
      height: window.innerHeight - modalInset * 2,
    };
  };

  const getModalTargetRadius = () => "24px";

  const applyRect = (element, rect) => {
    Object.assign(element.style, {
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
    });
  };

  const getFlipTransform = (fromRect, baseRect) => {
    const scaleX = baseRect.width ? fromRect.width / baseRect.width : 1;
    const scaleY = baseRect.height ? fromRect.height / baseRect.height : 1;
    const translateX = fromRect.left - baseRect.left;
    const translateY = fromRect.top - baseRect.top;

    return `translate3d(${translateX}px, ${translateY}px, 0) scale(${scaleX}, ${scaleY})`;
  };

  const pausePfWorkVideos = () => {
    const videos = [...pf.querySelectorAll(".pf-work video")];
    const playingVideos = videos.filter(
      (video) => !video.paused && !video.ended,
    );

    videos.forEach((video) => video.pause());
    return playingVideos;
  };

  const resumePfWorkVideos = (videos) => {
    videos.forEach((video) => {
      if (!video.isConnected) return;

      video.play().catch(() => {
        // Autoplay can be blocked by the browser until the next user interaction.
      });
    });
  };

  const openWorkModal = (work, project, { pushHistory = true } = {}) => {
    if (activeModal) return;

    if (pushHistory) pushModalHistoryEntry(project.id);

    const pausedPfWorkVideos = pausePfWorkVideos();
    const sourceCard = work.querySelector(".pf-work-card") || work;
    const sourceRect = sourceCard.getBoundingClientRect();
    const sourceRadius = window.getComputedStyle(sourceCard).borderRadius;
    const targetRect = getModalTargetRect();
    const targetRadius = getModalTargetRadius();
    const layer = document.createElement("div");
    const backdrop = document.createElement("div");
    const modal = document.createElement("div");
    const titleId = `pf-modal-${project.id}-title`;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const transitionDuration = prefersReducedMotion ? 1 : modalTransitionDuration;
    const ctaMarkup = project.cta
      ? `
        <a
          class="pf-modal-cta"
          href="${project.cta.href}"
          ${project.cta.newTab ? 'target="_blank" rel="noopener noreferrer"' : ""}
        >
          <span>${project.cta.label}</span>
          <span
            class="pf-modal-cta-arrow pf-modal-cta-arrow--${project.cta.newTab ? "external" : "internal"}"
            aria-hidden="true"
          ></span>
        </a>
      `
      : "";
    const descriptionMarkup = project.modalDescription
      ? `<p class="pf-modal-description">${project.modalDescription}</p>`
      : "";
    const isPerpDexProject = project.id === "perp-dex";
    const isPublicTransportProject = project.id === "public-transport";
    const placeholderCount = isPerpDexProject ? 4 : isPublicTransportProject ? 2 : 3;
    const bentoPlaceholders = Array.from({ length: placeholderCount }, (_, index) =>
      getBentoPlaceholder(project, index),
    );
    const skeletonPlaceholders = Array.from(
      { length: placeholderCount },
      (_, index) => `
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${index + 1} pf-modal-bento-skeleton"></div>
      `,
    );
    const usesThreePartBento = isPublicTransportProject;
    const usesFourPartBento = !project.cta && !isPerpDexProject && !usesThreePartBento;
    const isWebProject = project.deviceType === "web" && !usesThreePartBento && !usesFourPartBento;
    const usesSingleTopBento = project.id === "cta-enhancement";
    const getBentoSideMarkup = (placeholders) => {
      const stackTopMarkup = usesSingleTopBento
        ? placeholders[0]
        : placeholders.slice(0, 2).join("");

      return isPerpDexProject
        ? `
          <div class="pf-modal-perp-left">
            ${placeholders[0]}
            <div class="pf-modal-perp-center-bottom">
              ${placeholders[1]}
              ${placeholders[2]}
            </div>
          </div>
          ${placeholders[3]}
        `
        : usesThreePartBento
          ? placeholders.join("")
          : usesFourPartBento
            ? placeholders.join("")
            : isWebProject
              ? `<div class="pf-modal-bento-side">${placeholders.slice(0, 2).join("")}</div>`
              : `
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${usesSingleTopBento ? " pf-modal-bento-stack-top--single" : ""}">
              ${stackTopMarkup}
            </div>
            ${placeholders[2]}
          </div>
        `;
    };
    const bentoSideMarkup = getBentoSideMarkup(bentoPlaceholders);
    const skeletonSideMarkup = getBentoSideMarkup(skeletonPlaceholders);
    const bentoFeatureMarkup = isPerpDexProject
      ? ""
      : `
        <div class="pf-modal-bento-feature">
          ${getProjectMedia(project)}
        </div>
      `;
    const bentoMarkup = `
      <section class="pf-modal-bento-section${isWebProject ? " pf-modal-bento-section--web" : ""}${usesThreePartBento ? " pf-modal-bento-section--three-up" : ""}${usesFourPartBento ? " pf-modal-bento-section--four-up" : ""}${isPerpDexProject ? " pf-modal-bento-section--perp-dex" : ""}" aria-hidden="true">
        ${bentoFeatureMarkup}
        ${bentoSideMarkup}
      </section>
    `;
    const skeletonFeatureMarkup = isPerpDexProject
      ? ""
      : '<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>';
    const skeletonMarkup = `
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${isWebProject ? " pf-modal-bento-section--web" : ""}${usesThreePartBento ? " pf-modal-bento-section--three-up" : ""}${usesFourPartBento ? " pf-modal-bento-section--four-up" : ""}${isPerpDexProject ? " pf-modal-bento-section--perp-dex" : ""}" aria-hidden="true">
        ${skeletonFeatureMarkup}
        ${skeletonSideMarkup}
      </section>
    `;

    layer.className = "pf-modal-layer";
    backdrop.className = "pf-modal-backdrop";
    backdrop.style.opacity = "0";
    modal.className = `pf-work-modal pf-work--${project.id}${descriptionMarkup ? " pf-work-modal--has-description" : ""}${ctaMarkup ? "" : " pf-work-modal--no-cta"}`;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", titleId);
    modal.innerHTML = `
      <div class="pf-modal-card-content is-skeleton">${skeletonMarkup}</div>
      <span class="pf-modal-scroll-indicator" aria-hidden="true"></span>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${ctaMarkup ? "" : " pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <h2 id="${titleId}">${project.title}</h2>
          ${renderWorkMetaLine(project)}
        </div>
        ${ctaMarkup || descriptionMarkup}
      </div>
    `;

    applyRect(modal, targetRect);
    modal.style.borderRadius = targetRadius;
    modal.style.transformOrigin = "top left";
    layer.append(backdrop, modal);
    document.body.append(layer);

    modal.classList.add("is-revealing");
    work.classList.add("is-modal-source");
    document.documentElement.classList.add("is-pf-modal-open");

    const modalAnimation = modal.animate(
      [
        {
          transform: getFlipTransform(sourceRect, targetRect),
          borderRadius: sourceRadius,
        },
        {
          transform: "translate3d(0, 0, 0) scale(1, 1)",
          borderRadius: targetRadius,
        },
      ],
      {
        duration: transitionDuration,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "forwards",
      },
    );

    const backdropAnimation = backdrop.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      {
        duration: Math.min(transitionDuration, 420),
        easing: "ease-out",
        fill: "forwards",
      },
    );

    const closeButton = modal.querySelector(".pf-modal-close");
    const cta = modal.querySelector(".pf-modal-cta");
    const footer = modal.querySelector(".pf-modal-footer");
    const cardContent = modal.querySelector(".pf-modal-card-content");
    const scrollIndicator = modal.querySelector(".pf-modal-scroll-indicator");
    let hasMountedBento = false;
    let isClosing = false;
    let isHistoryClosePending = false;
    let scrollIndicatorFrame = 0;

    const updateScrollIndicator = () => {
      scrollIndicatorFrame = 0;
      if (!cardContent || !scrollIndicator || isClosing) return;

      const scrollableDistance = cardContent.scrollHeight - cardContent.clientHeight;
      const indicatorInset = 8;
      const footerHeight = footer?.offsetHeight ?? 0;
      const trackHeight = Math.max(
        0,
        modal.clientHeight - footerHeight - indicatorInset * 2,
      );

      if (scrollableDistance <= 1 || trackHeight <= 0) {
        scrollIndicator.classList.remove("is-visible");
        return;
      }

      const thumbHeight = Math.min(
        trackHeight,
        Math.max(36, trackHeight * (cardContent.clientHeight / cardContent.scrollHeight)),
      );
      const scrollProgress = Math.min(
        1,
        Math.max(0, cardContent.scrollTop / scrollableDistance),
      );
      const thumbOffset = scrollProgress * (trackHeight - thumbHeight);

      scrollIndicator.style.height = `${thumbHeight}px`;
      scrollIndicator.style.transform = `translate3d(0, ${thumbOffset}px, 0)`;
      scrollIndicator.classList.add("is-visible");
    };

    const scheduleScrollIndicatorUpdate = () => {
      if (scrollIndicatorFrame) return;
      scrollIndicatorFrame = window.requestAnimationFrame(updateScrollIndicator);
    };

    const contentResizeObserver =
      typeof ResizeObserver === "function"
        ? new ResizeObserver(scheduleScrollIndicatorUpdate)
        : null;

    contentResizeObserver?.observe(cardContent);
    cardContent?.addEventListener("scroll", scheduleScrollIndicatorUpdate, { passive: true });

    const mountBentoContent = () => {
      if (hasMountedBento || !cardContent || isClosing) return;

      hasMountedBento = true;
      cardContent.classList.remove("is-skeleton");
      cardContent.innerHTML = bentoMarkup;
      initializeMediaMatchedBentoBackgrounds(modal);
      initializeSegmentVideos(modal);
      initializePerpDexMediaPlayback(modal);
      initializePublicTransportMediaPlayback(modal);
      cardContent
        .querySelectorAll(".pf-modal-bento-section")
        .forEach((section) => contentResizeObserver?.observe(section));

      window.requestAnimationFrame(() => {
        if (!isClosing && modal.isConnected) {
          modal.classList.add("is-content-ready");
          scheduleScrollIndicatorUpdate();
        }
      });
    };

    const syncFooterSpace = () => {
      const footerHeight = footer?.offsetHeight ?? 0;
      modal.style.setProperty("--pf-modal-footer-space", `${footerHeight}px`);
      scheduleScrollIndicatorUpdate();
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

    let hasDisposed = false;

    const disposeModal = ({ restoreFocus = false } = {}) => {
      if (hasDisposed) return;
      hasDisposed = true;

      layer.getAnimations?.({ subtree: true })?.forEach((animation) => animation.cancel());
      layer.remove();
      work.classList.remove("is-modal-source");
      document.documentElement.classList.remove("is-pf-modal-open");
      document.removeEventListener("keydown", handleModalKeydown);
      window.removeEventListener("resize", handleModalResize);
      footerResizeObserver?.disconnect();
      contentResizeObserver?.disconnect();
      cardContent?.removeEventListener("scroll", scheduleScrollIndicatorUpdate);
      if (scrollIndicatorFrame) window.cancelAnimationFrame(scrollIndicatorFrame);

      if (activeModal?.modal === modal) activeModal = null;

      resumePfWorkVideos(pausedPfWorkVideos);
      if (!restoreFocus) return;

      const focusTarget = work.matches("a")
        ? work
        : pf.querySelector(`.pf-work--${project.id}`);
      focusTarget?.focus({ preventScroll: true });
    };

    const closeModal = () => {
      if (isClosing) return;
      isClosing = true;
      isHistoryClosePending = false;
      modal.classList.add("is-closing");
      modal.classList.remove("is-revealing", "is-ready", "is-content-ready");

      const currentRect = modal.getBoundingClientRect();
      const currentRadius = window.getComputedStyle(modal).borderRadius;
      const latestSourceRect = sourceCard.getBoundingClientRect();
      work.classList.remove("is-modal-source");
      modalAnimation.cancel();
      backdropAnimation.cancel();
      applyRect(modal, currentRect);
      modal.style.borderRadius = currentRadius;
      modal.style.transform = "none";

      const closeDuration = prefersReducedMotion ? 1 : 320;
      const closeAnimation = modal.animate(
        [
          {
            transform: "translate3d(0, 0, 0) scale(1, 1)",
            borderRadius: currentRadius,
          },
          {
            transform: getFlipTransform(latestSourceRect, currentRect),
            borderRadius: sourceRadius,
          },
        ],
        {
          duration: closeDuration,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        },
      );

      backdrop.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        {
          duration: prefersReducedMotion ? 1 : 200,
          easing: "ease-out",
          fill: "forwards",
        },
      );

      closeAnimation.finished.finally(() => disposeModal({ restoreFocus: true }));
    };

    const requestModalClose = () => {
      if (isClosing || isHistoryClosePending) return;

      if (getModalHistoryProjectId() === project.id) {
        isHistoryClosePending = true;
        window.history.back();
        return;
      }

      closeModal();
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
      if (isClosing || isHistoryClosePending) return;

      isClosing = true;
      modal.classList.add("is-navigating");
      document.removeEventListener("keydown", handleModalKeydown);

      if (getModalHistoryProjectId() === project.id) {
        window.location.replace(cta.href);
      } else {
        window.location.href = cta.href;
      }
    };

    const handleModalKeydown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        requestModalClose();
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

    activeModal = { layer, modal, projectId: project.id, closeModal, disposeModal };
    document.addEventListener("keydown", handleModalKeydown);
    window.addEventListener("resize", handleModalResize);
    closeButton.addEventListener("click", requestModalClose);
    cta?.addEventListener("click", runModalNavigation);
    layer.addEventListener("click", (event) => {
      if (event.target === layer || event.target === backdrop) requestModalClose();
    });

    backdropAnimation.finished
      .then(() => {
        backdrop.style.opacity = "1";
        backdropAnimation.cancel();
      })
      .catch(() => {
        // Closing or navigation can intentionally cancel the backdrop fade.
      });

    modalAnimation.finished
      .then(() => {
        if (isClosing) return;
        applyRect(modal, targetRect);
        modal.style.borderRadius = targetRadius;
        modal.style.transform = "none";
        modalAnimation.cancel();
        syncFooterSpace();
        modal.classList.add("is-ready");
        mountBentoContent();
        closeButton.focus({ preventScroll: true });
      })
      .catch(() => {
        // Closing can intentionally cancel the opening animation.
      });
  };

  const mobilePfMedia = window.matchMedia("(max-width: 600px)");
  const typeFilter = document.querySelector("[data-pf-type-filter]");
  const floatingFilterThreshold = 270;
  const floatingFilterExitRatio = 0.36;

  if (typeFilter) {
    typeFilter.innerHTML = `
      <div class="pf-type-filter" role="group" aria-label="Filter projects by type">
      ${projectTypeFilters
        .map(
          ({ value, label }, index) => `
            ${index > 0 ? '<span class="pf-type-filter-dot" aria-hidden="true">•</span>' : ""}
            <button
              class="pf-type-filter-button"
              type="button"
              data-project-type-filter="${value}"
              aria-controls="pf-work-grid"
              aria-pressed="false"
            >${label}</button>
          `,
        )
        .join("")}
      </div>
    `;
  }

  document.querySelector("[data-pf-floating-filter]")?.remove();
  const floatingTypeFilter = document.createElement("div");
  floatingTypeFilter.className = "pf-floating-filter";
  floatingTypeFilter.dataset.pfFloatingFilter = "";
  floatingTypeFilter.setAttribute("role", "group");
  floatingTypeFilter.setAttribute("aria-label", "Filter projects by type");
  floatingTypeFilter.innerHTML = [
    { value: "", label: "All" },
    ...projectTypeFilters,
  ]
    .map(
      ({ value, label }) => `
        <button
          class="pf-floating-filter-button"
          type="button"
          data-project-type-filter="${value}"
          aria-controls="pf-work-grid"
          aria-pressed="false"
        >${label}</button>
      `,
    )
    .join("");
  document.body.append(floatingTypeFilter);

  pf.innerHTML = `
    <div class="pf-work-grid" id="pf-work-grid">
      ${pfProjects.map((project) => renderWorkCard(project)).join("")}
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `;

  const filterButtons = [
    ...(typeFilter
      ? [...typeFilter.querySelectorAll("[data-project-type-filter]")]
      : []),
    ...floatingTypeFilter.querySelectorAll("[data-project-type-filter]"),
  ];
  const typeFilterGroup = typeFilter?.querySelector(".pf-type-filter");
  const filterableWorks = [...pf.querySelectorAll(".pf-work[data-project-types]")];
  const filterEmptyState = pf.querySelector(".pf-filter-empty");
  let activeProjectType = "";
  let filterScrollAnchorRestoreTimer = 0;

  const updateFloatingFilterVisibility = () => {
    const pfBottom = pf.getBoundingClientRect().bottom;
    const exitLine = window.innerHeight * floatingFilterExitRatio;

    floatingTypeFilter.classList.toggle(
      "is-visible",
      window.scrollY > floatingFilterThreshold && pfBottom > exitLine,
    );
  };

  const scrollToFilteredWork = () => {
    const workScrollY = Math.max(
      0,
      pf.getBoundingClientRect().top + window.scrollY - 10,
    );

    window.scrollTo({ top: workScrollY, behavior: "smooth" });
  };

  const applyProjectTypeFilter = (projectType) => {
    activeProjectType = activeProjectType === projectType ? "" : projectType;
    let visibleProjectCount = 0;

    filterButtons.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.projectTypeFilter === activeProjectType),
      );
    });

    typeFilterGroup?.classList.toggle("is-filtering", Boolean(activeProjectType));

    filterableWorks.forEach((work) => {
      const projectTypes = work.dataset.projectTypes.split(" ");
      const isVisible = !activeProjectType || projectTypes.includes(activeProjectType);
      work.hidden = !isVisible;
      if (isVisible) visibleProjectCount += 1;
    });

    if (filterEmptyState) filterEmptyState.hidden = visibleProjectCount > 0;
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const root = document.documentElement;
      window.clearTimeout(filterScrollAnchorRestoreTimer);
      root.style.overflowAnchor = "none";
      applyProjectTypeFilter(button.dataset.projectTypeFilter);
      scrollToFilteredWork();
      filterScrollAnchorRestoreTimer = window.setTimeout(() => {
        root.style.removeProperty("overflow-anchor");
      }, 700);
    });
  });

  window.addEventListener("scroll", updateFloatingFilterVisibility, { passive: true });
  window.addEventListener("resize", updateFloatingFilterVisibility, { passive: true });
  updateFloatingFilterVisibility();
  applyProjectTypeFilter("");

  const rail = pf.querySelector("[data-pf-work-rail]");
  const workSets = rail ? [...rail.querySelectorAll(".pf-work-set")] : [];
  const primaryFirstWork = pf.querySelector(".pf-work-set--primary .pf-work");
  const secondaryRail = pf.querySelector("[data-pf-work-rail-secondary]");
  const secondaryWorkSets = secondaryRail
    ? [...secondaryRail.querySelectorAll(".pf-work-set")]
    : [];
  const secondaryInitialWork = secondaryWorkSets[1]?.querySelector(
    ".pf-work:nth-child(4)",
  );
  const mobileRail = pf.querySelector("[data-mobile-pf-work-rail]");
  const mobileSecondaryRail = pf.querySelector("[data-mobile-pf-work-rail-secondary]");
  const primaryMobileStartOffset = 80;
  const secondaryMobileStartOffset = -80;
  const defaultAutoScrollSpeed = 32;
  const hoverAutoScrollSpeed = 12;
  const touchScrollSettleDelay = 180;
  const touchAutoScrollResumeDelay = 600;
  let autoScrollPreviousTime;
  let autoScrollFrameId = 0;
  let autoScrollPausedUntil = 0;
  let autoScrollPosition = 0;
  let autoScrollSpeed = defaultAutoScrollSpeed;
  let isHoveringRail = false;
  let isDraggingRail = false;
  let dragStartX = 0;
  let dragStartScrollLeft = 0;
  let dragMoved = false;
  let suppressNextClick = false;
  let isTouchScrollingRail = false;
  let railTouchScrollTimer = 0;
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
  let isTouchScrollingSecondaryRail = false;
  let secondaryRailTouchScrollTimer = 0;

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
      (mobilePfMedia.matches ? primaryMobileStartOffset : 0);
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

  const beginRailTouchScroll = () => {
    window.clearTimeout(railTouchScrollTimer);
    isTouchScrollingRail = true;
    autoScrollPosition = rail?.scrollLeft ?? autoScrollPosition;
  };

  const scheduleRailTouchScrollEnd = () => {
    window.clearTimeout(railTouchScrollTimer);
    railTouchScrollTimer = window.setTimeout(() => {
      if (!rail) return;

      autoScrollPosition = rail.scrollLeft;
      autoScrollPosition += normalizeInfiniteScroll();
      isTouchScrollingRail = false;
      autoScrollPausedUntil = performance.now() + touchAutoScrollResumeDelay;
    }, touchScrollSettleDelay);
  };

  const beginSecondaryRailTouchScroll = () => {
    window.clearTimeout(secondaryRailTouchScrollTimer);
    isTouchScrollingSecondaryRail = true;
    secondaryAutoScrollPosition = secondaryRail?.scrollLeft ?? secondaryAutoScrollPosition;
  };

  const scheduleSecondaryRailTouchScrollEnd = () => {
    window.clearTimeout(secondaryRailTouchScrollTimer);
    secondaryRailTouchScrollTimer = window.setTimeout(() => {
      if (!secondaryRail) return;

      secondaryAutoScrollPosition = secondaryRail.scrollLeft;
      secondaryAutoScrollPosition += normalizeSecondaryInfiniteScroll();
      isTouchScrollingSecondaryRail = false;
      secondaryAutoScrollPausedUntil = performance.now() + touchAutoScrollResumeDelay;
    }, touchScrollSettleDelay);
  };

  const animateRail = (time) => {
    const elapsed = Math.min((time - (autoScrollPreviousTime ?? time)) / 1000, 0.1);
    const targetAutoScrollSpeed = isHoveringRail ? hoverAutoScrollSpeed : defaultAutoScrollSpeed;
    autoScrollPreviousTime = time;
    autoScrollSpeed +=
      (targetAutoScrollSpeed - autoScrollSpeed) * Math.min(elapsed * 6, 1);

    if (rail) {
      const pfBounds = pf.getBoundingClientRect();
      const pfIsVisible = pfBounds.bottom > 0 && pfBounds.top < window.innerHeight;

      if (
        pfIsVisible &&
        !isDraggingRail &&
        !isTouchScrollingRail &&
        !isTouchScrollingSecondaryRail &&
        !document.documentElement.classList.contains("is-pf-modal-open") &&
        time >= autoScrollPausedUntil
      ) {
        autoScrollPosition += elapsed * autoScrollSpeed;
        rail.scrollLeft = autoScrollPosition;
        autoScrollPosition += normalizeInfiniteScroll();
      }

      if (
        pfIsVisible &&
        secondaryRail?.clientWidth &&
        secondarySegmentWidth &&
        !isDraggingSecondaryRail &&
        !isTouchScrollingSecondaryRail &&
        !isTouchScrollingRail &&
        !document.documentElement.classList.contains("is-pf-modal-open") &&
        time >= secondaryAutoScrollPausedUntil
      ) {
        secondaryAutoScrollPosition -= elapsed * defaultAutoScrollSpeed;
        secondaryRail.scrollLeft = secondaryAutoScrollPosition;
        secondaryAutoScrollPosition += normalizeSecondaryInfiniteScroll();
      }
    }

    autoScrollFrameId = requestAnimationFrame(animateRail);
  };

  const startAutoScrollLoop = () => {
    if (!rail || autoScrollFrameId) return;

    autoScrollPreviousTime = undefined;
    autoScrollFrameId = requestAnimationFrame(animateRail);
  };

  const stopAutoScrollLoop = () => {
    if (!autoScrollFrameId) return;

    cancelAnimationFrame(autoScrollFrameId);
    autoScrollFrameId = 0;
    autoScrollPreviousTime = undefined;
  };

  startAutoScrollLoop();

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

  pf.addEventListener(
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

    if (event.pointerType === "touch" && mobilePfMedia.matches) {
      beginRailTouchScroll();
      return;
    }

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

  rail?.addEventListener("scroll", () => {
    if (!isTouchScrollingRail) return;

    autoScrollPosition = rail.scrollLeft;
    scheduleRailTouchScrollEnd();
  }, { passive: true });

  const finishRailPointerInteraction = (event) => {
    if (event.pointerType === "touch" && mobilePfMedia.matches) {
      scheduleRailTouchScrollEnd();
      return;
    }

    finishRailDrag(event);
  };

  rail?.addEventListener("pointerup", finishRailPointerInteraction);
  rail?.addEventListener("pointercancel", finishRailPointerInteraction);
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

    if (event.pointerType === "touch" && mobilePfMedia.matches) {
      beginSecondaryRailTouchScroll();
      return;
    }

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

  secondaryRail?.addEventListener("scroll", () => {
    if (!isTouchScrollingSecondaryRail) return;

    secondaryAutoScrollPosition = secondaryRail.scrollLeft;
    scheduleSecondaryRailTouchScrollEnd();
  }, { passive: true });

  const finishSecondaryRailPointerInteraction = (event) => {
    if (event.pointerType === "touch" && mobilePfMedia.matches) {
      scheduleSecondaryRailTouchScrollEnd();
      return;
    }

    finishSecondaryRailDrag(event);
  };

  secondaryRail?.addEventListener("pointerup", finishSecondaryRailPointerInteraction);
  secondaryRail?.addEventListener("pointercancel", finishSecondaryRailPointerInteraction);
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

  pf.querySelectorAll(".pf-work").forEach((work) => {
    work.addEventListener("click", (event) => {
      if (!isPlainNavigationClick(event, work)) return;

      const project = pfProjects.find((item) => work.classList.contains(`pf-work--${item.id}`));
      if (!project) return;

      trackPfWorkCardClick(project);
      event.preventDefault();
      openWorkModal(work, project);
    });
  });

  window.addEventListener("resize", () => {
    requestAnimationFrame(() => {
      syncInfiniteMetrics({ preservePosition: true });
      syncSecondaryInfiniteMetrics({ preservePosition: true });
    });
  });

  const syncModalWithHistory = () => {
    const projectId = getModalHistoryProjectId();

    if (activeModal) {
      if (activeModal.projectId !== projectId) activeModal.closeModal();
      return;
    }

    if (!projectId) return;

    const project = pfProjects.find((item) => item.id === projectId);
    const work = pf.querySelector(`.pf-work--${projectId}:not(.pf-work--clone)`);

    if (project && work) openWorkModal(work, project, { pushHistory: false });
  };

  window.addEventListener("popstate", syncModalWithHistory);

  return {
    resetModal: () => activeModal?.disposeModal(),
    syncModalWithHistory,
  };
};
