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
let previousNavScrollY = window.scrollY;
let navScrollDirection = 0;
let navScrollTravel = 0;
const lastProjectStorageKey = "portfolio-last-project-slug";
const canUseOverviewSnap = window.matchMedia("(hover: hover) and (pointer: fine)");
const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
const usesReactDetailRuntime = Boolean(
  document.querySelector("[data-react-detail-runtime]"),
);

const setSessionItem = (key, value) => {
  try {
    window.sessionStorage?.setItem(key, value);
  } catch {
    // Storage can be unavailable in some privacy or embedded browser contexts.
  }
};

const trackComingSoonCta = (ctaName) => {
  window.gtag?.("event", "coming_soon_cta_click", {
    project_name: currentProject?.analyticsId,
    cta_name: ctaName,
  });
};

root.classList.add("detail-root");

const renderDetailNav = () => {
  if (!detailNav || !currentProject) return;

  detailNav.innerHTML = `
    <a class="site-mark" href="../../" aria-label="Back to Suji Kweon's portfolio">SUJI KWEON</a>
    <div class="detail-gnb-center" aria-hidden="true">
      <span class="detail-gnb-title">Case Study</span>
    </div>
    <button class="theme-toggle" type="button" aria-label="Toggle dark and light mode" aria-pressed="false">
      <span class="theme-icon theme-icon-sun" aria-hidden="true">
        <img class="theme-icon-image theme-icon-image-dark" src="../../assets/common/theme-toggle-sun-dark.svg" alt="" />
        <img class="theme-icon-image theme-icon-image-light" src="../../assets/common/theme-toggle-sun-light.svg" alt="" />
      </span>
      <span class="theme-icon theme-icon-moon" aria-hidden="true">
        <img class="theme-icon-image theme-icon-image-dark" src="../../assets/common/theme-toggle-moon-dark.svg" alt="" />
        <img class="theme-icon-image theme-icon-image-light" src="../../assets/common/theme-toggle-moon-light.svg" alt="" />
      </span>
    </button>
  `;
};

if (!usesReactDetailRuntime) renderDetailNav();

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
  title.className = "display-title";
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

if (!usesReactDetailRuntime) renderDetailHeader();

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

if (!usesReactDetailRuntime) renderContributions();

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

const setDetailNavHidden = (isHidden) => {
  detailNav?.classList.toggle("is-scroll-hidden", isHidden);
  root.classList.toggle("is-detail-nav-hidden", isHidden);
};

const syncDetailNav = () => {
  if (!detailNav) return;

  const currentScrollY = Math.max(0, window.scrollY);
  const scrollDelta = currentScrollY - previousNavScrollY;
  const scrollDirection = Math.sign(scrollDelta);

  detailNav.classList.toggle("is-scrolled", currentScrollY > 50);

  if (currentScrollY <= 50) {
    setDetailNavHidden(false);
    navScrollDirection = 0;
    navScrollTravel = 0;
  } else if (scrollDirection !== 0) {
    if (scrollDirection !== navScrollDirection) {
      navScrollDirection = scrollDirection;
      navScrollTravel = 0;
    }

    navScrollTravel += Math.abs(scrollDelta);

    if (navScrollTravel >= 8) {
      setDetailNavHidden(scrollDirection > 0);
      navScrollTravel = 0;
    }
  }

  previousNavScrollY = currentScrollY;
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

const setupDelayedLoopVideos = () => {
  const loopDelay = 3000;

  document.querySelectorAll("[data-delayed-loop-video]").forEach((video) => {
    video.loop = false;
    video.addEventListener("ended", () => {
      window.setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, loopDelay);
    });
  });
};

const setupAffectedUserActiveState = () => {
  document.querySelectorAll(".affected-user-cards, .why-mattered-cards").forEach((container) => {
    const cards = [...container.querySelectorAll(".affected-user-card")];
    if (!cards.length) return;

    const keepsLastActive = container.classList.contains("why-mattered-cards");
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
      if (keepsLastActive) return;

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
    const compactCardsMedia = window.matchMedia("(max-width: 760px)");
    const isCompactCards = () => compactCardsMedia.matches;

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
      if (isCompactCards() && !sequence) return;

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
        if (isCompactCards()) return;

        pointerInside = true;
        activeIndex = index;
        clearSequenceTimer();
        playCardVideo(card);
      });
    });

    container.addEventListener("mouseleave", () => {
      pointerInside = false;
      if (!isCompactCards()) cards.forEach(stopCardVideo);

      playSequence(activeIndex + 1);
    });

    compactCardsMedia.addEventListener("change", () => {
      pointerInside = false;
      clearSequenceTimer();
      cards.forEach(stopCardVideo);
      playSequence(activeIndex);
    });

    playSequence(0);
  });
};

const setupGoalsCards = () => {
  document.querySelectorAll("[data-goals-cards]").forEach((container) => {
    const cards = [...container.querySelectorAll("[data-goal-card]")];
    if (!cards.length) return;

    const defaultCard = cards[0];
    const hoverMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
    const hoverActivationDelay = 120;
    let hoverTimer;

    const setActiveCard = (activeCard) => {
      window.clearTimeout(hoverTimer);

      cards.forEach((card) => {
        card.classList.toggle("is-active", card === activeCard);
      });
    };

    const queueActiveCard = (card) => {
      window.clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => {
        setActiveCard(card);
      }, hoverActivationDelay);
    };

    setActiveCard(defaultCard);

    cards.forEach((card) => {
      card.addEventListener("pointerenter", () => {
        if (!hoverMedia.matches || card.classList.contains("is-active")) return;
        queueActiveCard(card);
      });

      card.addEventListener("pointerleave", () => {
        window.clearTimeout(hoverTimer);
      });

      card.addEventListener("click", () => {
        setActiveCard(card);
      });
    });

    container.addEventListener("pointerleave", () => {
      window.clearTimeout(hoverTimer);
    });
  });
};

const setupDesignExplorationMedia = () => {
  const mediaItems = [...document.querySelectorAll(".design-exploration-media")];
  const intervalDuration = 4000;

  mediaItems.forEach((media) => {
    const imageStage = media.querySelector(".design-exploration-image-stage") || media;
    const pagination = media.querySelector(".design-exploration-pagination") || media;
    const images = [...imageStage.querySelectorAll("img")];
    if (images.length < 2) return;

    const mobileZoomMedia = window.matchMedia("(max-width: 530px)");
    const zoomScale = 2.18;
    let activeIndex = images.findIndex((image) => image.classList.contains("is-active"));
    let progressFrameId;
    let rotationStartedAt = 0;
    let remainingDuration = intervalDuration;
    let isVisible = true;
    let activeZoomPointerId;
    let zoomFrameId;
    let pendingZoomPoint;
    const carousel = document.createElement("div");
    const tooltipLabels = ["Drafts", "Wireframes"];
    const controls = images.map((image, index) => {
      const button = document.createElement("button");
      const tooltip = document.createElement("span");
      const imageLabel = image.alt || `image ${index + 1}`;
      const tooltipLabel = tooltipLabels[index] || imageLabel;

      button.className = "design-exploration-carousel-button";
      button.type = "button";
      button.setAttribute("aria-label", `Show ${imageLabel}`);
      tooltip.className = "design-exploration-carousel-tooltip";
      tooltip.textContent = tooltipLabel;
      tooltip.setAttribute("aria-hidden", "true");
      button.append(tooltip);
      carousel.append(button);

      return button;
    });

    if (activeIndex < 0) activeIndex = 0;
    images.forEach((image, index) => {
      image.classList.add("design-exploration-image");
      image.classList.toggle("is-active", index === activeIndex);
      image.draggable = false;
    });

    carousel.className = "design-exploration-carousel";
    carousel.style.setProperty("--carousel-count", images.length);
    carousel.style.setProperty("--carousel-gap-total", `${(images.length - 1) * 14}px`);
    pagination.append(carousel);

    const setProgress = (durationRemaining) => {
      const progressPercent = ((intervalDuration - durationRemaining) / intervalDuration) * 100;

      controls.forEach((control, index) => {
        control.style.setProperty(
          "--rotation-progress",
          index === activeIndex ? `${progressPercent}%` : "0%",
        );
      });
    };

    const resetProgress = (timestamp = window.performance.now()) => {
      rotationStartedAt = timestamp;
      remainingDuration = intervalDuration;
      setProgress(remainingDuration);
    };

    const syncControls = () => {
      controls.forEach((control, index) => {
        const isActive = index === activeIndex;

        control.classList.toggle("is-active", isActive);
        control.setAttribute("aria-current", String(isActive));
      });
    };

    const resetZoom = () => {
      activeZoomPointerId = undefined;
      window.cancelAnimationFrame(zoomFrameId);
      zoomFrameId = undefined;
      pendingZoomPoint = undefined;
      imageStage.classList.remove("is-touch-zooming");
      imageStage.style.removeProperty("--exploration-zoom-scale");
      imageStage.style.removeProperty("--exploration-zoom-x");
      imageStage.style.removeProperty("--exploration-zoom-y");
    };

    const setActiveImage = (nextIndex, timestamp = window.performance.now()) => {
      resetZoom();
      activeIndex = (nextIndex + images.length) % images.length;
      images.forEach((image, index) => {
        image.classList.toggle("is-active", index === activeIndex);
      });
      syncControls();
      resetProgress(timestamp);
    };

    const stopRotation = () => {
      window.cancelAnimationFrame(progressFrameId);
      progressFrameId = undefined;
    };

    const updateProgress = (timestamp) => {
      const elapsed = timestamp - rotationStartedAt;

      remainingDuration = Math.max(0, intervalDuration - elapsed);
      setProgress(remainingDuration);

      if (remainingDuration <= 0) {
        setActiveImage(activeIndex + 1, timestamp);
      }

      progressFrameId = window.requestAnimationFrame(updateProgress);
    };

    const startRotation = () => {
      if (progressFrameId || !isVisible) return;

      rotationStartedAt = window.performance.now() - (intervalDuration - remainingDuration);
      progressFrameId = window.requestAnimationFrame(updateProgress);
    };

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const applyZoomFromPoint = (point) => {
      const rect = imageStage.getBoundingClientRect();
      const pointX = clamp(point.clientX - rect.left, 0, rect.width);
      const pointY = clamp(point.clientY - rect.top, 0, rect.height);

      imageStage.style.setProperty("--exploration-zoom-scale", zoomScale);
      imageStage.style.setProperty("--exploration-zoom-x", `${pointX * (1 - zoomScale)}px`);
      imageStage.style.setProperty("--exploration-zoom-y", `${pointY * (1 - zoomScale)}px`);
    };

    const syncZoomFromPointer = (event, { immediate = false } = {}) => {
      pendingZoomPoint = {
        clientX: event.clientX,
        clientY: event.clientY,
      };

      if (immediate) {
        window.cancelAnimationFrame(zoomFrameId);
        zoomFrameId = undefined;
        applyZoomFromPoint(pendingZoomPoint);
        return;
      }

      if (zoomFrameId) return;

      zoomFrameId = window.requestAnimationFrame(() => {
        zoomFrameId = undefined;
        if (pendingZoomPoint) applyZoomFromPoint(pendingZoomPoint);
      });
    };

    const syncTooltipFromPointer = (event) => {
      if (!mobileZoomMedia.matches || event.pointerType !== "mouse") return;

      const rect = imageStage.getBoundingClientRect();
      const pointX = clamp(event.clientX - rect.left, 0, rect.width);
      const pointY = clamp(event.clientY - rect.top, 0, rect.height);

      imageStage.style.setProperty("--exploration-tooltip-x", `${pointX}px`);
      imageStage.style.setProperty("--exploration-tooltip-y", `${pointY}px`);
      imageStage.classList.add("is-hover-tooltip-visible");
    };

    const hideTooltip = () => {
      imageStage.classList.remove("is-hover-tooltip-visible");
    };

    const preventMobileImageMenu = (event) => {
      if (!mobileZoomMedia.matches) return;

      event.preventDefault();
    };

    const startZoom = (event) => {
      if (!mobileZoomMedia.matches || activeZoomPointerId !== undefined) return;

      activeZoomPointerId = event.pointerId;
      stopRotation();
      imageStage.setPointerCapture?.(event.pointerId);
      imageStage.classList.add("is-touch-zooming");
      hideTooltip();
      syncZoomFromPointer(event, { immediate: true });
    };

    const moveZoom = (event) => {
      syncTooltipFromPointer(event);
      if (event.pointerId !== activeZoomPointerId) return;

      syncZoomFromPointer(event);
    };

    const endZoom = (event) => {
      if (event.pointerId !== activeZoomPointerId) return;

      imageStage.releasePointerCapture?.(event.pointerId);
      resetZoom();
      startRotation();
    };

    controls.forEach((control, index) => {
      control.addEventListener("click", () => {
        setActiveImage(index);
        startRotation();
      });
    });

    imageStage.addEventListener("pointerdown", startZoom);
    imageStage.addEventListener("pointerenter", syncTooltipFromPointer);
    imageStage.addEventListener("pointermove", moveZoom);
    imageStage.addEventListener("pointerleave", hideTooltip);
    imageStage.addEventListener("pointerup", endZoom);
    imageStage.addEventListener("pointercancel", endZoom);
    imageStage.addEventListener("contextmenu", preventMobileImageMenu);
    imageStage.addEventListener("dragstart", preventMobileImageMenu);
    imageStage.addEventListener("lostpointercapture", () => {
      if (activeZoomPointerId === undefined) return;

      resetZoom();
      startRotation();
    });
    mobileZoomMedia.addEventListener?.("change", () => {
      if (mobileZoomMedia.matches) return;

      resetZoom();
      startRotation();
    });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = Boolean(entry?.isIntersecting);

          if (isVisible) {
            startRotation();
            return;
          }

          if (rotationStartedAt) {
            remainingDuration = Math.max(0, intervalDuration - (window.performance.now() - rotationStartedAt));
            setProgress(remainingDuration);
          }
          stopRotation();
        },
        { threshold: 0.2 },
      );

      observer.observe(media);
    }

    syncControls();
    setProgress(remainingDuration);
    startRotation();
  });
};

const setupAvailabilityExploration = () => {
  const sequence = document.querySelector("[data-design-exploration-sequence]");
  if (!sequence) return;

  const stage = sequence.querySelector(".design-exploration-sequence-stage");
  const panels = [...sequence.querySelectorAll("[data-design-exploration-panel]")];
  if (!stage || panels.length < 2) return;

  const totalDuration = 10000;
  const selectedOptionTime = 7000;
  const feedbackCompleteProgress = 0.92;
  const postFeedbackHoldProgress = 0.15;
  const pinDistanceMultiplier = feedbackCompleteProgress / (1 - postFeedbackHoldProgress);
  const transitionDistanceRatio = 1.16;
  const panelDistanceMultipliers = [1, 1.5];
  const imageSwapStartProgress = 0.4;
  const imageSwapDurationProgress = 0.06;
  let animationDistance = 1;
  let panelDistance = 1;
  let transitionDistance = 1;
  let sequenceDistance = 1;
  let pinStartLine = window.innerHeight * -0.11;
  let scrollFrameId;

  const clampProgress = (value) => Math.min(1, Math.max(0, value));
  const smoothProgress = (value) => {
    const progress = clampProgress(value);
    return progress * progress * (3 - 2 * progress);
  };

  const syncPinDistance = () => {
    animationDistance = Math.max(1, stage.offsetHeight);
    panelDistance = animationDistance * pinDistanceMultiplier;
    transitionDistance = animationDistance * transitionDistanceRatio;
    sequenceDistance = panelDistanceMultipliers.reduce(
      (distance, multiplier) => distance + panelDistance * multiplier,
      transitionDistance,
    );
    pinStartLine = Number.parseFloat(getComputedStyle(stage).top);
    sequence.style.setProperty("--design-exploration-sequence-distance", `${sequenceDistance}px`);
  };

  const syncPanelAnimation = (panel, panelScrollDistance, distanceMultiplier, swapsImages = false) => {
    const progress = clampProgress(panelScrollDistance / (panelDistance * distanceMultiplier));
    const animationProgress = clampProgress(panelScrollDistance / (animationDistance * distanceMultiplier));
    const imageSwapProgress = swapsImages
      ? clampProgress((animationProgress - imageSwapStartProgress) / imageSwapDurationProgress)
      : 0;
    const isOptionSelected = animationProgress * totalDuration >= selectedOptionTime;
    const optionLabelState = isOptionSelected ? "final" : imageSwapProgress >= 0.5 ? "list" : "map";

    panel.classList.toggle("is-availability-option-selected", isOptionSelected);
    panel.querySelectorAll("[data-exploration-option-label]").forEach((label) => {
      const nextLabel = label.dataset[`${optionLabelState}Label`];
      if (nextLabel && label.textContent !== nextLabel) label.textContent = nextLabel;
    });
    panel.style.setProperty("--availability-scroll-progress", progress.toFixed(4));
    panel.style.setProperty("--availability-scrub-time", `${animationProgress * -totalDuration}ms`);
    panel.style.setProperty("--design-exploration-image-swap-progress", imageSwapProgress.toFixed(4));
  };

  const syncScrollProgress = () => {
    scrollFrameId = undefined;

    const rect = sequence.getBoundingClientRect();
    const scrollDistance = pinStartLine - rect.top;
    const transitionProgress = clampProgress((scrollDistance - panelDistance) / transitionDistance);
    const firstPanelMotion = smoothProgress(transitionProgress / 0.72);
    const firstPanelFade = smoothProgress((transitionProgress - 0.18) / 0.54);
    const secondPanelMotion = smoothProgress((transitionProgress - 0.25) / 0.75);
    const secondPanelFade = smoothProgress((transitionProgress - 0.28) / 0.5);
    const secondPanelStart = panelDistance + transitionDistance;

    syncPanelAnimation(panels[0], scrollDistance, panelDistanceMultipliers[0]);
    syncPanelAnimation(panels[1], scrollDistance - secondPanelStart, panelDistanceMultipliers[1], true);

    panels[0].style.setProperty("--design-exploration-panel-opacity", (1 - firstPanelFade).toFixed(4));
    panels[0].style.setProperty("--design-exploration-panel-shift", `${firstPanelMotion * -88}px`);
    panels[0].style.setProperty("--design-exploration-panel-scale", (1 - firstPanelMotion * 0.18).toFixed(4));
    panels[1].style.setProperty("--design-exploration-panel-opacity", secondPanelFade.toFixed(4));
    panels[1].style.setProperty("--design-exploration-panel-shift", `${(1 - secondPanelMotion) * 96}px`);
    panels[1].style.setProperty("--design-exploration-panel-scale", (0.82 + secondPanelMotion * 0.18).toFixed(4));
    panels[0].classList.toggle("is-design-exploration-panel-current", transitionProgress < 0.5);
    panels[1].classList.toggle("is-design-exploration-panel-current", transitionProgress >= 0.5);
  };

  const requestScrollProgressSync = () => {
    if (scrollFrameId !== undefined) return;

    scrollFrameId = window.requestAnimationFrame(syncScrollProgress);
  };

  panels.forEach((panel) => panel.classList.add("is-availability-scroll-scrubbing"));
  sequence.classList.add("is-design-exploration-sequence-ready");
  syncPinDistance();
  window.addEventListener("scroll", requestScrollProgressSync, { passive: true });
  window.addEventListener("resize", () => {
    syncPinDistance();
    requestScrollProgressSync();
  });

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(() => {
      syncPinDistance();
      requestScrollProgressSync();
    });
    resizeObserver.observe(stage);
  }

  syncScrollProgress();
};

const setupsolutionShowcase = () => {
  const showcase = document.querySelector("[data-solution-showcase]");
  if (!showcase) return;

  const panels = [...showcase.querySelectorAll("[data-solution-panel]")];

  if (!panels.length) return;

  const setPanelActiveView = (panel, view) => {
    const currentView = panel.dataset.activeView;
    const toggles = [...panel.querySelectorAll(".solution-view-toggle")];

    panel.dataset.activeView = view;
    panel.querySelectorAll("[data-solution-view-toggle]").forEach((button) => {
      const isActive = button.dataset.solutionViewToggle === view;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (currentView && currentView !== view) {
      toggles.forEach((toggle) => {
        toggle.classList.remove("is-switching");
        window.requestAnimationFrame(() => {
          toggle.classList.add("is-switching");
        });
      });
    }
  };

  panels.forEach((panel) => {
    const viewButtons = [...panel.querySelectorAll("[data-solution-view-toggle]")];

    if (viewButtons.length) {
      setPanelActiveView(panel, panel.dataset.activeView || "tobe");
    }

    panel.querySelectorAll("[data-solution-video]").forEach((video) => {
      const stack = video.closest(".solution-phone-screen-stack");
      const frame = video.closest(".solution-comparison-frame");
      const button = frame?.querySelector("[data-solution-video-toggle]");
      const replayButton = frame?.querySelector("[data-solution-video-replay]");
      if (!stack || !button || !replayButton) return;

      const syncVideoButton = () => {
        const isPlaying = !video.paused && !video.ended;
        const hasStarted = isPlaying || video.currentTime > 0 || video.ended;

        stack.classList.toggle("is-video-playing", isPlaying);
        stack.classList.toggle("has-video-started", hasStarted);
        button.classList.toggle("is-playing", isPlaying);
        button.setAttribute("aria-label", isPlaying ? "Pause solution video" : "Play solution video");
        button.setAttribute("aria-pressed", String(isPlaying));
      };

      button.addEventListener("click", () => {
        if (!video.paused && !video.ended) {
          video.pause();
          return;
        }

        if (video.ended || (video.duration && video.currentTime >= video.duration - 0.1)) {
          video.currentTime = 0;
        }

        video.play().catch(syncVideoButton);
        syncVideoButton();
      });

      replayButton.addEventListener("click", () => {
        video.currentTime = 0;
        video.play().catch(syncVideoButton);
        syncVideoButton();
      });

      video.addEventListener("play", syncVideoButton);
      video.addEventListener("pause", syncVideoButton);
      video.addEventListener("ended", syncVideoButton);
      video.addEventListener("loadedmetadata", syncVideoButton);
      syncVideoButton();
    });

    viewButtons.forEach((button) => {
      button.addEventListener("click", () => {
        setPanelActiveView(panel, button.dataset.solutionViewToggle);
      });
    });
  });

  const videos = [...showcase.querySelectorAll("[data-solution-video]")];
  const section = showcase.closest("#solution") || showcase;
  const setVideosPlaying = (shouldPlay) => {
    videos.forEach((video) => {
      if (!shouldPlay) {
        video.pause();
        return;
      }

      if (video.ended || (video.duration && video.currentTime >= video.duration - 0.1)) {
        video.currentTime = 0;
      }

      video.play().catch(() => {});
    });
  };

  if ("IntersectionObserver" in window) {
    const solutionObserver = new IntersectionObserver(
      ([entry]) => setVideosPlaying(entry.isIntersecting),
      { threshold: 0.2 },
    );

    solutionObserver.observe(section);
  } else {
    setVideosPlaying(true);
  }
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
  if (!canUseOverviewSnap.matches || !target || overviewSnapTriggered || deltaY <= 0) return false;

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

const jumpToTocTarget = (target) => {
  const startY = window.scrollY;
  const scrollMarginTop = Number.parseFloat(
    window.getComputedStyle(target).scrollMarginTop,
  ) || 0;
  const maxScrollY = Math.max(0, root.scrollHeight - window.innerHeight);
  const targetY = Math.min(
    maxScrollY,
    Math.max(0, target.getBoundingClientRect().top + startY - scrollMarginTop),
  );

  window.scrollTo({
    top: targetY,
    behavior: reducedMotionMedia.matches ? "auto" : "smooth",
  });
};

applyTheme(localStorage.getItem("portfolio-theme") || "light");
setupAffectedUserActiveState();
setupAffectedUserVideos();
setupDelayedLoopVideos();
setupGoalsCards();
setupOpportunityCards();
setupAvailabilityExploration();
setupsolutionShowcase();
syncDetailNav();
syncActiveToc();

themeToggle?.addEventListener("click", () => {
  triggerThemeLineSwap();
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

document.querySelectorAll("[data-coming-soon-cta]").forEach((button) => {
  button.addEventListener("click", () => {
    trackComingSoonCta(button.dataset.comingSoonCta);
  });
});

tocLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const id = link.getAttribute("href")?.slice(1);
    const target = id === "project-overview"
      ? document.body
      : id
        ? document.getElementById(id)
        : null;

    if (!id || !target) return;

    setActiveToc(id);
    jumpToTocTarget(target);
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
