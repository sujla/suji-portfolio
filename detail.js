import { projects } from "./data/projects.js";

const root = document.documentElement;
const detailNav = document.querySelector(".detail-gnb");
const detailShell = document.querySelector(".detail-shell");
const currentProject = projects.find((project) => project.slug === document.body.dataset.projectSlug);
const contributionList = document.querySelector("[data-contribution-list]");
const tocLinks = [...document.querySelectorAll(".detail-toc a[href^='#']")];
let themeLineTimer;
let overviewSnapTriggered = false;
let overviewSnapAnimating = false;
let touchStartY = 0;
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

  document.querySelector(".detail-back-icon")?.remove();
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <a class="detail-back-icon" href="../../" aria-label="Back to main">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6667 5L4 12L10.6667 19M4 12L20 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  `
  );

  detailNav.innerHTML = `
    <span class="detail-nav-back-slot" aria-hidden="true"></span>
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

const renderDetailHeader = () => {
  if (!detailShell || !currentProject || detailShell.querySelector(".detail-title-section")) return;

  const titleSection = document.createElement("section");
  titleSection.className = "detail-title-section";

  const titleInner = document.createElement("div");
  titleInner.className = "detail-title-inner";

  const header = document.createElement("header");
  header.className = "detail-header";

  const number = document.createElement("p");
  number.textContent = currentProject.number;

  const title = document.createElement("h1");
  currentProject.title.split("|").forEach((line, index) => {
    if (index > 0) title.append(document.createElement("br"));
    title.append(document.createTextNode(line));
  });

  const keywords = document.createElement("div");
  keywords.className = "detail-keywords";
  keywords.setAttribute("aria-label", "Keywords");
  keywords.replaceChildren(
    ...currentProject.keywords.map((keyword) => {
      const keywordBadge = document.createElement("span");
      keywordBadge.textContent = keyword;

      return keywordBadge;
    }),
  );

  header.append(number, title, keywords);

  if (currentProject.brief?.length) {
    const brief = document.createElement("div");
    brief.className = "detail-header-brief";
    brief.replaceChildren(
      ...currentProject.brief.map((briefItem) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = briefItem;

        return paragraph;
      }),
    );

    header.append(brief);
  }

  titleInner.append(header);
  titleSection.append(titleInner);
  detailShell.prepend(titleSection);
};

renderDetailHeader();

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

const setupComingSoonTape = () => {
  if (!document.body.classList.contains("detail-coming-soon-page")) return;

  const desktopPointer = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 360px)");
  const isIpadLike = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  const isMobileDevice = /Android|iPad|iPhone|iPod/i.test(navigator.userAgent) || isIpadLike;
  const maxSegments = 40;
  const minGestureDistance = 120;
  const minAngleDelta = 0.22;
  const tapeCooldown = 320;
  const tapeDrawDuration = 600;
  const edgeBleed = 240;
  let canvas;
  let context;
  let deviceScale = 1;
  let lastPoint;
  let lastTapeAngle;
  let lastTapeTime = 0;
  let animationFrame;
  let segments = [];
  let tapePatternImage;
  let tapePatternSource = "";

  const canUseTape = () => desktopPointer.matches && !isMobileDevice;

  const removeTape = () => {
    lastPoint = null;
    lastTapeAngle = undefined;
    lastTapeTime = 0;
    segments = [];
    window.cancelAnimationFrame(animationFrame);
    canvas?.remove();
    canvas = null;
    context = null;
  };

  const getImageSource = (value) => {
    const trimmedValue = value?.trim();

    if (!trimmedValue || trimmedValue === "none") return "";

    const urlMatch = trimmedValue.match(/^url\((['"]?)(.*?)\1\)$/);

    return urlMatch ? urlMatch[2] : "";
  };

  const syncTapePatternImage = (source) => {
    if (!source) {
      tapePatternSource = "";
      tapePatternImage = undefined;
      return;
    }

    if (!source || source === tapePatternSource) return;

    tapePatternSource = source;
    tapePatternImage = new Image();
    tapePatternImage.decoding = "async";
    tapePatternImage.onload = () => redrawTape();
    tapePatternImage.src = new URL(source, import.meta.url).href;
  };

  const getTapeSettings = () => {
    const style = canvas ? window.getComputedStyle(canvas) : null;
    const thickness = Number.parseFloat(style?.getPropertyValue("--tape-thickness")) || 64;
    const patternSource = getImageSource(style?.getPropertyValue("--tape-pattern-image"));

    syncTapePatternImage(patternSource);

    return {
      thickness,
      color: style?.getPropertyValue("--tape-color").trim() || "rgb(60, 60, 60)",
      patternOpacity: Number.parseFloat(style?.getPropertyValue("--tape-pattern-opacity")) || 1,
      patternScale: Number.parseFloat(style?.getPropertyValue("--tape-pattern-scale")) || 1,
    };
  };

  const getAngleDelta = (fromAngle, toAngle) => Math.abs(Math.atan2(
    Math.sin(toAngle - fromAngle),
    Math.cos(toAngle - fromAngle),
  ));

  const easeOutCubic = (value) => 1 - ((1 - value) ** 3);

  const drawTapeSegment = (segment, now = performance.now()) => {
    if (!context) return;

    const settings = getTapeSettings();
    const halfThickness = settings.thickness / 2;
    const tornInset = Math.min(settings.thickness * 0.18, 28);
    const endNoise = segment.noise;
    const progress = Math.min((now - segment.createdAt) / tapeDrawDuration, 1);
    const visibleLength = Math.max(segment.length * easeOutCubic(progress), settings.thickness * 0.32);

    context.save();
    context.translate(segment.x, segment.y);
    context.rotate(segment.angle);

    context.beginPath();
    context.moveTo(endNoise.startTop, -halfThickness);
    context.lineTo(visibleLength - tornInset + endNoise.endTop, -halfThickness);
    context.lineTo(visibleLength + endNoise.endMid, -halfThickness * 0.18);
    context.lineTo(visibleLength - tornInset + endNoise.endBottom, halfThickness);
    context.lineTo(endNoise.startBottom, halfThickness);
    context.lineTo(endNoise.startMid, halfThickness * 0.12);
    context.closePath();
    context.fillStyle = settings.color;
    context.fill();

    if (tapePatternImage?.complete && tapePatternImage.naturalWidth) {
      const patternWidth = tapePatternImage.naturalWidth * settings.patternScale;
      const patternHeight = tapePatternImage.naturalHeight * settings.patternScale;

      if (!patternWidth || !patternHeight) {
        context.restore();
        return;
      }

      context.save();
      context.clip();
      context.globalAlpha = settings.patternOpacity;

      for (let x = 0; x < visibleLength; x += patternWidth) {
        for (let y = -halfThickness; y < halfThickness; y += patternHeight) {
          context.drawImage(tapePatternImage, x, y, patternWidth, patternHeight);
        }
      }

      context.restore();
    }

    context.restore();
  };

  const redrawTape = (now = performance.now()) => {
    if (!context || !canvas) return;

    context.clearRect(0, 0, canvas.width / deviceScale, canvas.height / deviceScale);
    segments.forEach((segment) => drawTapeSegment(segment, now));
  };

  const queueRedraw = () => {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = window.requestAnimationFrame((now) => {
      redrawTape(now);

      if (segments.some((segment) => now - segment.createdAt < tapeDrawDuration)) {
        queueRedraw();
      }
    });
  };

  const resizeCanvas = () => {
    if (!canvas) return;

    deviceScale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.ceil(window.innerWidth * deviceScale);
    canvas.height = Math.ceil(window.innerHeight * deviceScale);
    context = canvas.getContext("2d");
    context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
    redrawTape();
  };

  const ensureCanvas = () => {
    if (canvas) return canvas;

    canvas = document.createElement("canvas");
    canvas.className = "detail-tape-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.append(canvas);
    resizeCanvas();

    return canvas;
  };

  const createNoise = () => ({
    startTop: Math.random() * 10 - 4,
    startMid: Math.random() * 12 - 6,
    startBottom: Math.random() * 10 - 4,
    endTop: Math.random() * 14 - 7,
    endMid: Math.random() * 18 - 9,
    endBottom: Math.random() * 14 - 7,
  });

  const getViewportTapeLine = (point, angle) => {
    const directionX = Math.cos(angle);
    const directionY = Math.sin(angle);
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const intersections = [];

    const addIntersection = (t) => {
      const x = point.x + directionX * t;
      const y = point.y + directionY * t;

      if (x >= -1 && x <= viewportWidth + 1 && y >= -1 && y <= viewportHeight + 1) {
        intersections.push(t);
      }
    };

    if (Math.abs(directionX) > 0.001) {
      addIntersection((0 - point.x) / directionX);
      addIntersection((viewportWidth - point.x) / directionX);
    }

    if (Math.abs(directionY) > 0.001) {
      addIntersection((0 - point.y) / directionY);
      addIntersection((viewportHeight - point.y) / directionY);
    }

    if (intersections.length < 2) {
      const fallbackLength = Math.hypot(viewportWidth, viewportHeight) + edgeBleed * 2;

      return {
        x: point.x - directionX * (fallbackLength / 2),
        y: point.y - directionY * (fallbackLength / 2),
        length: fallbackLength,
        angle,
      };
    }

    const startT = Math.min(...intersections) - edgeBleed;
    const endT = Math.max(...intersections) + edgeBleed;

    return {
      x: point.x + directionX * startT,
      y: point.y + directionY * startT,
      length: endT - startT,
      angle,
    };
  };

  const addTapeSegment = (from, to) => {
    const distanceX = to.x - from.x;
    const distanceY = to.y - from.y;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < minGestureDistance) return false;

    const angle = Math.atan2(distanceY, distanceX);
    const now = performance.now();

    if (now - lastTapeTime < tapeCooldown) return false;
    if (lastTapeAngle !== undefined && getAngleDelta(lastTapeAngle, angle) < minAngleDelta) return false;

    ensureCanvas();

    const tapeLine = getViewportTapeLine(to, angle);
    const segment = {
      x: tapeLine.x,
      y: tapeLine.y,
      length: tapeLine.length,
      angle: tapeLine.angle,
      noise: createNoise(),
      createdAt: now,
    };

    segments.push(segment);
    lastTapeAngle = angle;
    lastTapeTime = now;

    if (segments.length > maxSegments) {
      segments.shift();
    }

    queueRedraw();

    return true;
  };

  const handlePointerMove = (event) => {
    if (!canUseTape() || event.pointerType !== "mouse") return;

    const currentPoint = {
      x: event.clientX,
      y: event.clientY,
    };

    if (!lastPoint) {
      lastPoint = currentPoint;
      return;
    }

    if (addTapeSegment(lastPoint, currentPoint)) {
      lastPoint = currentPoint;
    }
  };

  const syncTapeAvailability = () => {
    if (!canUseTape()) removeTape();
  };

  window.addEventListener("pointermove", handlePointerMove, { passive: true });
  window.addEventListener("pointerleave", () => {
    lastPoint = null;
  });
  window.addEventListener("blur", () => {
    lastPoint = null;
  });
  window.addEventListener("resize", resizeCanvas);
  desktopPointer.addEventListener("change", syncTapeAvailability);
};

setupComingSoonTape();

const themeToggle = document.querySelector(".theme-toggle");

if (currentProject) {
  root.style.setProperty("--active-project-color", currentProject.keyColor);
  root.style.setProperty("--active-project-sub-color", currentProject.subColor || currentProject.keyColor);
  detailShell?.style.setProperty("--project-color", currentProject.keyColor);
  detailShell?.style.setProperty("--project-sub-color", currentProject.subColor || currentProject.keyColor);
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

const setupAffectedUserVideos = () => {
  const mobileVideoMedia = window.matchMedia("(max-width: 920px)");
  const videoCards = [];
  let activeScrollVideo;
  const mobileLoopDelay = 200;

  const isAffectedVideoActive = (card) =>
    card.classList.contains("is-video-hovering") || card.classList.contains("is-scroll-video-active");

  const clearVideoLoopTimer = (item) => {
    window.clearTimeout(item.loopTimer);
    item.loopTimer = undefined;
  };

  const configureVideoLoop = (item) => {
    const { card, video } = item;

    clearVideoLoopTimer(item);

    if (!mobileVideoMedia.matches) {
      video.loop = true;
      video.onended = null;
      return;
    }

    video.loop = false;
    video.onended = () => {
      clearVideoLoopTimer(item);
      item.loopTimer = window.setTimeout(() => {
        if (!mobileVideoMedia.matches || !isAffectedVideoActive(card)) return;

        video.currentTime = 0;
        video.play().catch(() => {});
      }, mobileLoopDelay);
    };
  };

  const playAffectedVideo = (item, className) => {
    const { card, video } = item;

    configureVideoLoop(item);
    card.classList.add(className);
    if (video.ended) video.currentTime = 0;
    video.play().catch(() => {});
  };

  const stopVideo = (item, className) => {
    const { card, video } = item;

    card.classList.remove(className);
    if (isAffectedVideoActive(card)) return;

    clearVideoLoopTimer(item);
    video.onended = null;
    video.loop = true;
    video.pause();
    video.currentTime = 0;
  };

  document.querySelectorAll(".affected-user-card-video").forEach((video) => {
    const card = video.closest(".affected-user-card");
    if (!card) return;

    video.loop = true;
    let videoLeaveTimer;
    const videoItem = { card, loopTimer: undefined, video };
    videoCards.push(videoItem);

    const markVideoReady = () => {
      card.classList.add("has-hover-video");
    };

    if (video.readyState >= 2) {
      markVideoReady();
    } else {
      video.addEventListener("loadeddata", markVideoReady, { once: true });
      video.addEventListener("canplay", markVideoReady, { once: true });
      window.setTimeout(() => {
        if (video.readyState >= 2) markVideoReady();
      }, 250);
    }

    card.addEventListener("pointerenter", () => {
      if (!card.classList.contains("has-hover-video")) return;

      window.clearTimeout(videoLeaveTimer);
      playAffectedVideo(videoItem, "is-video-hovering");
    });

    card.addEventListener("pointerleave", () => {
      window.clearTimeout(videoLeaveTimer);
      videoLeaveTimer = window.setTimeout(() => {
        stopVideo(videoItem, "is-video-hovering");
      }, 160);
    });
  });

  if (!videoCards.length) return;

  const syncScrollVideo = () => {
    if (!mobileVideoMedia.matches) {
      if (activeScrollVideo) {
        stopVideo(activeScrollVideo, "is-scroll-video-active");
        activeScrollVideo = undefined;
      }
      return;
    }

    const viewportCenter = window.innerHeight * 0.5;
    let nextScrollVideo;
    let closestDistance = Infinity;

    videoCards.forEach((item) => {
      const rect = item.card.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.76 && rect.bottom > window.innerHeight * 0.24;
      if (!isVisible) return;

      const cardCenter = rect.top + rect.height * 0.5;
      const distance = Math.abs(cardCenter - viewportCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        nextScrollVideo = item;
      }
    });

    if (nextScrollVideo === activeScrollVideo) return;

    if (activeScrollVideo) {
      stopVideo(activeScrollVideo, "is-scroll-video-active");
    }

    activeScrollVideo = nextScrollVideo;

    if (activeScrollVideo?.card.classList.contains("has-hover-video")) {
      activeScrollVideo.video.currentTime = 0;
      playAffectedVideo(activeScrollVideo, "is-scroll-video-active");
    }
  };

  videoCards.forEach(({ video }) => {
    video.addEventListener("loadeddata", syncScrollVideo);
    video.addEventListener("canplay", syncScrollVideo);
  });

  window.addEventListener("scroll", syncScrollVideo, { passive: true });
  window.addEventListener("resize", syncScrollVideo);
  mobileVideoMedia.addEventListener?.("change", syncScrollVideo);
  syncScrollVideo();
};

const setupAffectedUserActiveState = () => {
  document.querySelectorAll(".affected-user-cards").forEach((container) => {
    const cards = [...container.querySelectorAll(".affected-user-card")];
    if (!cards.length) return;

    let leaveTimer;

    const setActiveCard = (card) => {
      window.clearTimeout(leaveTimer);

      const isStaffCard = card.classList.contains("affected-user-card--staff") || cards.indexOf(card) === 1;
      container.classList.toggle("is-customer-active", !isStaffCard);
      container.classList.toggle("is-staff-active", isStaffCard);
    };

    cards.forEach((card) => {
      card.addEventListener("pointerenter", () => {
        setActiveCard(card);
      });
    });

    container.addEventListener("pointerenter", () => {
      window.clearTimeout(leaveTimer);
    });

    container.addEventListener("pointerleave", () => {
      window.clearTimeout(leaveTimer);
      leaveTimer = window.setTimeout(() => {
        container.classList.remove("is-staff-active");
        container.classList.add("is-customer-active");
      }, 180);
    });
  });
};

const setupOpportunityCards = () => {
  document.querySelectorAll(".opportunity-cards").forEach((container) => {
    const cards = [...container.querySelectorAll(".opportunity-card")];
    if (!cards.length) return;

    let activeIndex = 0;
    let sequenceTimer;
    let pointerInside = false;
    const endHoldDelay = 400;
    const hoverLoopDelay = 1000;

    const clearSequenceTimer = () => {
      window.clearTimeout(sequenceTimer);
      sequenceTimer = undefined;
    };

    const markVideoReady = (card) => {
      card.classList.add("is-video-ready");
    };

    const isCardVideoReady = (card) => {
      const video = card.querySelector(".opportunity-card-video");
      return Boolean(video && video.readyState >= 2);
    };

    const areAllVideosReady = () => cards.every((card) => card.classList.contains("is-video-ready"));

    const getNextReadyIndex = (startIndex) => {
      for (let offset = 0; offset < cards.length; offset += 1) {
        const candidateIndex = (startIndex + offset) % cards.length;
        if (cards[candidateIndex].classList.contains("is-video-ready")) return candidateIndex;
      }

      return -1;
    };

    const stopCardVideo = (card) => {
      const video = card.querySelector(".opportunity-card-video");
      card.classList.remove("is-video-active", "is-sequence-active");
      if (!video) return;

      video.onended = null;
      video.pause();
    };

    const playCardVideo = (card, { sequence = false } = {}) => {
      const video = card.querySelector(".opportunity-card-video");
      if (!video) return;

      cards.forEach((item) => {
        if (item !== card) stopCardVideo(item);
      });

      video.loop = false;
      video.muted = true;
      video.playsInline = true;
      video.playbackRate = 2.4;
      video.onended = sequence
        ? () => {
            sequenceTimer = window.setTimeout(() => {
              if (!pointerInside && card.classList.contains("is-sequence-active")) {
                playSequence(activeIndex + 1);
              }
            }, endHoldDelay);
          }
        : () => {
            sequenceTimer = window.setTimeout(() => {
              if (pointerInside && card.classList.contains("is-video-active")) {
                video.currentTime = 0;
                video.play().catch(() => {});
              }
            }, hoverLoopDelay);
          };

      if (isCardVideoReady(card)) {
        markVideoReady(card);
        video.currentTime = 0;
        window.requestAnimationFrame(() => {
          card.classList.add("is-video-active");
          card.classList.toggle("is-sequence-active", sequence);
          video.play().catch(() => {});
        });
      } else {
        card.classList.add("is-video-active");
        card.classList.toggle("is-sequence-active", sequence);
        video.load();
      }
    };

    const playSequence = (startIndex = activeIndex) => {
      clearSequenceTimer();
      if (pointerInside) return;

      if (!areAllVideosReady()) return;

      const nextIndex = getNextReadyIndex(startIndex);
      if (nextIndex < 0) return;

      activeIndex = nextIndex;
      const card = cards[activeIndex];
      playCardVideo(card, { sequence: true });
    };

    cards.forEach((card) => {
      const video = card.querySelector(".opportunity-card-video");
      if (!video) return;

      const handleReady = () => {
        markVideoReady(card);
        if (card.classList.contains("is-video-active")) {
          video.currentTime = 0;
          video.play().catch(() => {});
        }
        if (!pointerInside && !sequenceTimer && areAllVideosReady()) playSequence(activeIndex);
      };

      if (video.readyState >= 2) {
        handleReady();
      } else {
        video.addEventListener("loadeddata", handleReady, { once: true });
        video.addEventListener("canplay", handleReady, { once: true });
      }
    });

    cards.forEach((card, index) => {
      card.addEventListener("mouseenter", () => {
        pointerInside = true;
        activeIndex = index;
        clearSequenceTimer();
        playCardVideo(card);
      });
    });

    container.addEventListener("mouseleave", () => {
      pointerInside = false;
      cards.forEach(stopCardVideo);
      playSequence(activeIndex + 1);
    });

    playSequence(0);
  });
};

const setupSolutionsShowcase = () => {
  const showcase = document.querySelector("[data-solutions-showcase]");
  if (!showcase) return;

  const frame = showcase.querySelector("[data-solutions-frame]");
  const scrollport = showcase.querySelector("[data-solutions-scroll]");
  const openButton = showcase.querySelector("[data-solutions-open]");
  const closeButton = showcase.querySelector("[data-solutions-close]");
  const panels = [...showcase.querySelectorAll("[data-solution-panel]")];
  const solutionsSection = document.getElementById("solutions");
  const stepsPerSolution = 3;
  const totalSteps = panels.length * stepsPerSolution;
  const boundaryExitLockDuration = 650;
  const modalStepScrollThreshold = 180;
  let activeIndex = 0;
  let armedBoundaryMessage = "";
  let boundaryArmedAt = 0;
  let modalStepScrollDistance = 0;
  let restoreScrollBehaviorFrame;
  let storedScrollBehavior = "";
  let boundaryToastTimeout;
  let touchStartYForShowcase;

  if (!frame || !scrollport || !panels.length || totalSteps <= 1) return;

  const boundaryToast = document.createElement("div");
  boundaryToast.className = "solutions-showcase-toast";
  boundaryToast.setAttribute("role", "status");
  boundaryToast.setAttribute("aria-live", "polite");
  frame.append(boundaryToast);

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const isExpanded = () => showcase.classList.contains("is-expanded");

  const getDocumentTop = (target) => target.getBoundingClientRect().top + window.scrollY;
  const getStickyTop = () => Number.parseFloat(getComputedStyle(frame).top) || 0;
  const getScrollStartOffset = () =>
    Number.parseFloat(getComputedStyle(showcase).getPropertyValue("--solutions-scroll-start-offset")) || 0;
  const getExitScrollDistance = () =>
    Number.parseFloat(getComputedStyle(showcase).getPropertyValue("--solutions-exit-scroll-distance")) || 420;
  const getScrollRange = () => {
    const showcaseTop = getDocumentTop(showcase);
    const stickyTop = getStickyTop();
    const start = showcaseTop - stickyTop - getScrollStartOffset();
    const end = showcaseTop + showcase.offsetHeight - frame.offsetHeight - stickyTop;

    return {
      end: Math.max(start + 1, end),
      start,
    };
  };

  const getCollapsedScrollRange = () => {
    const wasExpanded = isExpanded();

    if (wasExpanded) showcase.classList.remove("is-expanded");
    const scrollRange = getScrollRange();
    if (wasExpanded) showcase.classList.add("is-expanded");

    return scrollRange;
  };

  const getShowcaseProgress = () => {
    const { start, end } = getScrollRange();

    return clamp((window.scrollY - start) / (end - start), 0, 1);
  };

  const setActiveStep = (nextIndex) => {
    const activeSolutionIndex = Math.floor(nextIndex / stepsPerSolution);
    const activeStepIndex = nextIndex % stepsPerSolution;

    activeIndex = nextIndex;
    panels.forEach((panel, panelIndex) => {
      const panelIsActive = panelIndex === activeSolutionIndex;

      panel.classList.toggle("is-active", panelIsActive);
      panel.dataset.activeStep = String(panelIsActive ? activeStepIndex : 0);
      panel.querySelectorAll("[data-solution-step]").forEach((step) => {
        step.classList.toggle(
          "is-active",
          panelIsActive && Number(step.dataset.stepIndex) === activeStepIndex,
        );
      });
      panel.querySelectorAll("[data-phone-screen]").forEach((screen) => {
        screen.classList.toggle(
          "is-active",
          panelIsActive && Number(screen.dataset.stepIndex) === activeStepIndex,
        );
      });
    });
  };

  const syncActiveStep = () => {
    const { end } = getScrollRange();
    const nextIndex = clamp(Math.round(getShowcaseProgress() * (totalSteps - 1)), 0, totalSteps - 1);

    const exitProgress = clamp((window.scrollY - end) / getExitScrollDistance(), 0, 1);
    const exitDistance = frame.offsetHeight + getStickyTop() + 96;
    solutionsSection?.style.setProperty("--solutions-exit-y", `${Math.round(exitDistance * -exitProgress)}px`);

    setActiveStep(nextIndex);
  };

  const jumpToScrollTop = (top) => {
    window.cancelAnimationFrame(restoreScrollBehaviorFrame);
    if (restoreScrollBehaviorFrame === undefined) storedScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    window.scrollTo(0, top);
    restoreScrollBehaviorFrame = window.requestAnimationFrame(() => {
      root.style.scrollBehavior = storedScrollBehavior;
      restoreScrollBehaviorFrame = undefined;
      storedScrollBehavior = "";
    });
  };

  const scrollToStep = (index, behavior = "instant", scrollRange = getScrollRange()) => {
    const { start, end } = scrollRange;
    const progress = clamp(index, 0, totalSteps - 1) / (totalSteps - 1);
    const top = start + (end - start) * progress;

    if (behavior === "instant") {
      jumpToScrollTop(top);
      return;
    }

    window.scrollTo({
      top,
      behavior,
    });
  };

  const setExpandedActiveStep = (index) => {
    const nextIndex = clamp(index, 0, totalSteps - 1);

    setActiveStep(nextIndex);
    if (isExpanded()) scrollToStep(nextIndex, "instant", getCollapsedScrollRange());
  };

  const hideBoundaryToast = () => {
    window.clearTimeout(boundaryToastTimeout);
    boundaryToastTimeout = undefined;
    boundaryToast.classList.remove("is-visible");
  };

  const showBoundaryToast = (message) => {
    boundaryToast.textContent = message;
    boundaryToast.classList.toggle("is-bottom", message === "You've reached the bottom");
    boundaryToast.classList.add("is-visible");
    window.clearTimeout(boundaryToastTimeout);
    boundaryToastTimeout = window.setTimeout(hideBoundaryToast, 1200);
  };

  const closeShowcase = ({ focusTrigger = true } = {}) => {
    const closingIndex = activeIndex;

    armedBoundaryMessage = "";
    boundaryArmedAt = 0;
    modalStepScrollDistance = 0;
    hideBoundaryToast();
    setActiveStep(closingIndex);
    showcase.classList.remove("is-expanded");
    root.classList.remove("is-solutions-modal-open");
    scrollToStep(closingIndex);
    setActiveStep(closingIndex);
    frame.removeAttribute("role");
    frame.removeAttribute("aria-modal");
    openButton?.setAttribute("aria-expanded", "false");

    if (focusTrigger) openButton?.focus({ preventScroll: true });
  };

  const openShowcase = () => {
    armedBoundaryMessage = "";
    boundaryArmedAt = 0;
    modalStepScrollDistance = 0;
    hideBoundaryToast();
    syncActiveStep();
    const openingIndex = activeIndex;

    showcase.classList.add("is-expanded");
    root.classList.add("is-solutions-modal-open");
    frame.setAttribute("role", "dialog");
    frame.setAttribute("aria-modal", "true");
    openButton?.setAttribute("aria-expanded", "true");

    window.requestAnimationFrame(() => {
      setExpandedActiveStep(openingIndex);
    });
  };

  const getBoundaryExitMessage = (deltaY) => {
    if (!isExpanded()) return "";
    if (deltaY < 0 && activeIndex <= 0) return "You've reached the top";
    if (deltaY > 0 && activeIndex >= totalSteps - 1) return "You've reached the bottom";

    return "";
  };

  const handleBoundaryExit = (message) => {
    const now = window.performance.now();

    if (armedBoundaryMessage !== message) {
      armedBoundaryMessage = message;
      boundaryArmedAt = now;
      showBoundaryToast(message);
      return;
    }

    if (now - boundaryArmedAt < boundaryExitLockDuration) {
      showBoundaryToast(message);
      return;
    }

    closeShowcase({ focusTrigger: false });
  };

  const handleExpandedScroll = (deltaY) => {
    const boundaryMessage = getBoundaryExitMessage(deltaY);

    if (boundaryMessage) {
      modalStepScrollDistance = 0;
      handleBoundaryExit(boundaryMessage);
      return;
    }

    armedBoundaryMessage = "";
    boundaryArmedAt = 0;
    hideBoundaryToast();
    modalStepScrollDistance += deltaY;

    if (Math.abs(modalStepScrollDistance) < modalStepScrollThreshold) return;

    const stepDirection = modalStepScrollDistance > 0 ? 1 : -1;
    modalStepScrollDistance = 0;
    setExpandedActiveStep(activeIndex + stepDirection);
  };

  openButton?.addEventListener("click", openShowcase);
  frame.addEventListener("click", (event) => {
    if (isExpanded() || event.target.closest("[data-solutions-close]")) return;

    openShowcase();
  });
  closeButton?.addEventListener("click", () => closeShowcase());

  window.addEventListener(
    "scroll",
    () => {
      if (!isExpanded()) syncActiveStep();
    },
    { passive: true },
  );

  window.addEventListener(
    "wheel",
    (event) => {
      if (!isExpanded()) return;

      event.preventDefault();
      handleExpandedScroll(event.deltaY);
    },
    { passive: false },
  );

  window.addEventListener(
    "touchstart",
    (event) => {
      touchStartYForShowcase = event.touches?.[0]?.clientY || 0;
    },
    { passive: true },
  );

  window.addEventListener(
    "touchmove",
    (event) => {
      const touchY = event.touches?.[0]?.clientY || touchStartYForShowcase;
      const deltaY = touchStartYForShowcase - touchY;
      touchStartYForShowcase = touchY;
      if (!isExpanded()) return;

      event.preventDefault();
      handleExpandedScroll(deltaY);
    },
    { passive: false },
  );

  window.addEventListener("keydown", (event) => {
    if (!isExpanded() || event.defaultPrevented) return;

    if (event.key === "Escape" && isExpanded()) {
      event.preventDefault();
      closeShowcase();
      return;
    }

    const backwardKeys = ["ArrowUp", "PageUp"];
    const forwardKeys = ["ArrowDown", "PageDown", " ", "Spacebar"];
    if (![...backwardKeys, ...forwardKeys].includes(event.key)) return;

    event.preventDefault();

    if (backwardKeys.includes(event.key)) {
      if (activeIndex > 0) {
        setExpandedActiveStep(activeIndex - 1);
        return;
      }

      handleBoundaryExit("You've reached the top");
      return;
    }

    if (activeIndex < totalSteps - 1) {
      setExpandedActiveStep(activeIndex + 1);
      return;
    }

    handleBoundaryExit("You've reached the bottom");
  });

  window.addEventListener("resize", () => {
    window.requestAnimationFrame(() => {
      scrollToStep(activeIndex);
      syncActiveStep();
    });
  });

  syncActiveStep();
};

const getProjectOverviewTarget = () => document.getElementById("project-overview");
const overviewSnapOffset = 0;

const getOverviewScrollY = () => {
  const target = getProjectOverviewTarget();
  if (!target) return window.scrollY;

  return Math.max(0, target.getBoundingClientRect().top + window.scrollY - overviewSnapOffset);
};

const easeOverviewSnap = (progress) => 1 - Math.pow(1 - progress, 4);

const animateToProjectOverview = () => {
  const targetY = getOverviewScrollY();
  const startY = window.scrollY;
  const distance = targetY - startY;

  if (Math.abs(distance) < 4) {
    syncDetailNav();
    syncActiveToc();
    return;
  }

  const duration = Math.min(840, Math.max(560, Math.abs(distance) * 0.7));
  let startTime;

  overviewSnapAnimating = true;
  root.classList.add("is-overview-snapping");

  const tick = (timestamp) => {
    startTime ??= timestamp;

    const progress = Math.min((timestamp - startTime) / duration, 1);
    const easedProgress = easeOverviewSnap(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      window.requestAnimationFrame(tick);
      return;
    }

    window.scrollTo(0, targetY);
    overviewSnapAnimating = false;
    root.classList.remove("is-overview-snapping");
    syncDetailNav();
    syncActiveToc();
  };

  window.requestAnimationFrame(tick);
};

const shouldSnapToProjectOverview = (deltaY) => {
  const target = getProjectOverviewTarget();
  if (!target || overviewSnapTriggered || deltaY <= 0) return false;

  const targetY = getOverviewScrollY();
  const hasRoomToSnap = window.scrollY < targetY - 24;

  return hasRoomToSnap;
};

const triggerProjectOverviewSnap = (event) => {
  if (event?.cancelable) event.preventDefault();

  overviewSnapTriggered = true;
  animateToProjectOverview();
};

const handleInitialWheelSnap = (event) => {
  if (overviewSnapAnimating && event.cancelable) {
    event.preventDefault();
    return;
  }

  if (!shouldSnapToProjectOverview(event.deltaY)) return;

  triggerProjectOverviewSnap(event);
};

const handleInitialTouchStart = (event) => {
  touchStartY = event.touches?.[0]?.clientY || 0;
};

const handleInitialTouchMove = (event) => {
  const touchY = event.touches?.[0]?.clientY || touchStartY;
  const deltaY = touchStartY - touchY;

  if (overviewSnapAnimating && event.cancelable) {
    event.preventDefault();
    return;
  }

  if (!shouldSnapToProjectOverview(deltaY)) return;

  triggerProjectOverviewSnap(event);
};

const handleInitialKeyboardSnap = (event) => {
  const snapKeys = ["ArrowDown", "PageDown", " ", "Spacebar"];

  if (!snapKeys.includes(event.key) || !shouldSnapToProjectOverview(1)) return;

  triggerProjectOverviewSnap(event);
};

applyTheme(localStorage.getItem("portfolio-theme") || "light");
setupAffectedUserActiveState();
setupAffectedUserVideos();
setupOpportunityCards();
setupSolutionsShowcase();
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

window.addEventListener("wheel", handleInitialWheelSnap, { passive: false });
window.addEventListener("touchstart", handleInitialTouchStart, { passive: true });
window.addEventListener("touchmove", handleInitialTouchMove, { passive: false });
window.addEventListener("keydown", handleInitialKeyboardSnap);
window.addEventListener("resize", syncActiveToc);
