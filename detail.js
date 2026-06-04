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

  detailNav.innerHTML = `
    <a class="detail-back-icon" href="../../index.html" aria-label="Back to main">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6667 5L4 12L10.6667 19M4 12L20 12" stroke="{currentColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
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
  document.querySelectorAll(".affected-user-card-video").forEach((video) => {
    const card = video.closest(".affected-user-card");
    if (!card) return;

    video.loop = true;
    let videoLeaveTimer;

    const markVideoReady = () => {
      card.classList.add("has-hover-video");
    };

    const playVideo = () => {
      video.play().catch(() => {});
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
      card.classList.add("is-video-hovering");
      if (video.ended) video.currentTime = 0;
      playVideo();
    });

    card.addEventListener("pointerleave", () => {
      window.clearTimeout(videoLeaveTimer);
      videoLeaveTimer = window.setTimeout(() => {
        card.classList.remove("is-video-hovering");
        video.pause();
        video.currentTime = 0;
      }, 160);
    });
  });
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

applyTheme(localStorage.getItem("portfolio-theme") || "dark");
setupAffectedUserActiveState();
setupAffectedUserVideos();
setupOpportunityCards();
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
