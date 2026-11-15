import { Fragment, useEffect, useRef } from "react";

// Each sentence is revealed on its own while the intro stays pinned. The role
// anchor is where the hero's "Lead Product Designer" label lands.
const introSentences = [
  [
    { anchor: "role", text: "Lead Product Designer" },
    " with 10 years of experience across e-commerce, fintech, B2B SaaS and mobility.",
  ],
  [
    "Based in Singapore 🇸🇬, I currently lead product design at Taurus Labs, a design and software agency, where I own product design process and decisions for client products.",
  ],
  [
    "At Olive Young, Korea's largest health and beauty retailer with ",
    { mark: "1,350+ stores" },
    " and ",
    { mark: "15M+ members" },
    ", I led redesigns that increased ",
    { mark: "pickup conversion by 326.2%" },
    " and cut editorial ",
    { mark: "production time from 2 weeks to 20 minutes" },
    ".",
  ],
  [
    "I also led three early-career designers and initiated a design system task force with four engineers and a designer.",
  ],
];

const heroLabelSelectors = {
  role: ".flyer-side-copy--role",
  location: ".flyer-side-copy--location",
};

// Label timeline, in viewport heights relative to the moment the intro pins
// (negative = before). Until then the labels hold their place on screen while
// the flyer scrolls away.
// 1. Both labels slide sideways toward the centre on their own line; the
//    location label drifts left and fades out (it isn't in the first sentence).
const SLIDE = [-0.6, -0.25];
// 2. The role label settles onto the spot its word will occupy once pinned
//    (the first sentence is centred, so this is mostly a sideways move).
const SETTLE = [-0.45, 0];
// 3. Once pinned, the label and its word sit on the same pixels and crossfade,
//    so the label reads as absorbed into the sentence.
const ABSORB = [0, 0.12];
// The rest of the first sentence fades in around the absorbed word.
const FIRST_FADE = [-0.04, 0.3];
// Each later sentence fades in over this share of its pinned segment, while
// the paragraph glides up to centre it.
const SENTENCE_FADE = 0.55;
// How quickly the paragraph follows its scroll target (per frame), for a soft glide.
const GLIDE_FOLLOW = 0.14;

const clamp01 = (value) => Math.min(1, Math.max(0, value));
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function IntroSection() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const summaryRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const summary = summaryRef.current;
    if (!section || !sticky || !summary) return undefined;

    const roleAnchor = section.querySelector('[data-intro-anchor="role"]');
    const sentences = [...section.querySelectorAll("[data-intro-sentence]")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let role = null;
    let location = null;
    let trackTop = 1;
    let pinRange = 1;
    let frame = 0;
    let enabled = false;
    // Paragraph offsets that centre the block of sentences revealed at each step.
    let focusOffsets = [];
    let glide = null;
    // The moving copies live in a position: fixed layer. Holding a label still
    // then needs no scroll compensation, which would lag a frame behind native
    // scrolling and make the text shake. The hero labels stay in place (just
    // transparent) so layout and the h1 are untouched.
    let layer = null;
    const clones = new Map();

    const getLabels = () =>
      [heroLabelSelectors.role, heroLabelSelectors.location]
        .map((selector) => document.querySelector(selector))
        .filter(Boolean);

    const lerp = (from, to, t) => from + (to - from) * t;
    // Progress through a window given in viewport heights around the pin.
    const pinWindow = (scrollY, [start, end], ease = easeInOutCubic) => {
      const viewport = window.innerHeight;
      const from = trackTop + start * viewport;
      const to = trackTop + end * viewport;
      return ease(clamp01((scrollY - from) / Math.max(1, to - from)));
    };

    // --reveal fades a sentence in from transparent; --dim moves it from the
    // active text colour to muted once the next sentence arrives. Returns the
    // paragraph offset that keeps the revealed text centred.
    const setSentenceProgress = (scrollY) => {
      const count = sentences.length;
      const pinned = (scrollY - trackTop) / pinRange;
      const segment = 1 / count;
      const fade = segment * SENTENCE_FADE;
      const reveals = sentences.map((_, index) =>
        index === 0
          ? pinWindow(scrollY, FIRST_FADE, (t) => t)
          : clamp01((pinned - (index * segment - fade / 2)) / fade),
      );
      sentences.forEach((sentence, index) => {
        sentence.style.setProperty("--reveal", reveals[index].toFixed(3));
        sentence.style.setProperty("--dim", (reveals[index + 1] ?? 0).toFixed(3));
      });

      let offset = focusOffsets[0] ?? 0;
      for (let index = 1; index < focusOffsets.length; index += 1) {
        offset += (focusOffsets[index] - focusOffsets[index - 1]) * easeInOutCubic(reveals[index]);
      }
      return offset;
    };

    const update = () => {
      frame = 0;
      if (!enabled) return;
      const scrollY = window.scrollY;
      const slide = pinWindow(scrollY, SLIDE);
      const settle = pinWindow(scrollY, SETTLE);
      const absorb = pinWindow(scrollY, ABSORB, (t) => t);

      // Viewport coordinates: the held position is where the label sits when
      // the page is at the top, so it stays put until the slide begins.
      if (role) {
        const scale = lerp(1, role.scale, settle);
        const centerY = lerp(role.heldCenterY, role.targetCenterY, settle);
        const top = centerY - (role.height * scale) / 2;
        const left = role.left + role.dx * slide;
        role.clone.style.transform = `translate3d(${left}px, ${top}px, 0) scale(${scale})`;
        role.clone.style.opacity = String(1 - absorb);
      }
      section.style.setProperty("--absorb", absorb.toFixed(3));

      if (location) {
        const left = location.left + location.dx * slide;
        location.clone.style.transform = `translate3d(${left}px, ${location.top}px, 0)`;
        location.clone.style.opacity = String(1 - slide);
      }

      const target = setSentenceProgress(scrollY);
      glide = glide === null ? target : lerp(glide, target, GLIDE_FOLLOW);
      if (Math.abs(target - glide) < 0.25) glide = target;
      summary.style.transform = `translate3d(0, ${glide.toFixed(2)}px, 0)`;
      if (glide !== target) requestUpdate();
    };

    function requestUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    // Positions are cached so the scroll handler only writes transforms.
    const measure = () => {
      if (!enabled) return;
      const roleLabel = document.querySelector(heroLabelSelectors.role);
      const locationLabel = document.querySelector(heroLabelSelectors.location);
      const scrollY = window.scrollY;
      trackTop = Math.max(1, section.getBoundingClientRect().top + scrollY);
      pinRange = Math.max(1, section.offsetHeight - window.innerHeight);

      summary.style.transform = "none";
      const frameRect = sticky.getBoundingClientRect();
      const summaryRect = summary.getBoundingClientRect();
      const summaryTop = summaryRect.top - frameRect.top;
      const frameCenter = sticky.clientHeight / 2;
      // Centre the text revealed so far (first sentence's top to the newest
      // sentence's bottom). Each new sentence adds text below, so the paragraph
      // only ever glides up, and the last step centres the whole paragraph.
      const blockTop = sentences[0]?.getClientRects()[0]?.top ?? summaryRect.top;
      focusOffsets = sentences.map((sentence) => {
        const rects = sentence.getClientRects();
        if (!rects.length) return 0;
        const center = (blockTop + rects[rects.length - 1].bottom) / 2 - summaryRect.top;
        return frameCenter - (summaryTop + center);
      });

      role = null;
      if (roleLabel && roleAnchor) {
        const target = roleAnchor.getBoundingClientRect();
        const source = roleLabel.getBoundingClientRect();
        // Where the word sits once the frame is pinned (frame top = viewport top)
        // with the first sentence centred.
        const pinnedTop = summaryTop + (focusOffsets[0] ?? 0) + (target.top - summaryRect.top);
        role = {
          clone: clones.get(roleLabel),
          left: source.left,
          height: source.height,
          heldCenterY: source.top + scrollY + source.height / 2,
          targetCenterY: pinnedTop + target.height / 2,
          scale: source.width ? target.width / source.width : 1,
          dx: target.left - source.left,
        };
      }

      location = null;
      if (locationLabel) {
        const source = locationLabel.getBoundingClientRect();
        const offCentre = source.left + source.width / 2 - window.innerWidth / 2;
        location = {
          clone: clones.get(locationLabel),
          left: source.left,
          top: source.top + scrollY,
          dx: -Math.max(48, offCentre * 0.45),
        };
      }
      glide = null;
      update();
    };

    const enable = () => {
      enabled = true;
      section.classList.add("is-story");
      layer = document.createElement("div");
      layer.className = "intro-travel-layer";
      layer.setAttribute("aria-hidden", "true");
      getLabels().forEach((label) => {
        const clone = document.createElement("div");
        clone.className = "flyer-side-copy intro-travel-label";
        clone.textContent = label.textContent;
        layer.append(clone);
        clones.set(label, clone);
        label.classList.add("is-traveling");
      });
      document.body.append(layer);
      measure();
    };

    const disable = () => {
      enabled = false;
      section.classList.remove("is-story");
      section.style.removeProperty("--absorb");
      summary.style.transform = "";
      getLabels().forEach((label) => label.classList.remove("is-traveling"));
      layer?.remove();
      layer = null;
      clones.clear();
      sentences.forEach((sentence) => {
        sentence.style.removeProperty("--reveal");
        sentence.style.removeProperty("--dim");
      });
      role = null;
      location = null;
      focusOffsets = [];
      glide = null;
    };

    const syncMotionPreference = () => (reducedMotion.matches ? disable() : enable());

    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(section);
    resizeObserver.observe(summary);
    const heroSection = document.querySelector(heroLabelSelectors.role)?.closest("section");
    if (heroSection) resizeObserver.observe(heroSection);

    let disposed = false;
    document.fonts?.ready.then(() => {
      if (!disposed) measure();
    });

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", measure);
    reducedMotion.addEventListener?.("change", syncMotionPreference);
    syncMotionPreference();

    return () => {
      disposed = true;
      if (frame) window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", measure);
      reducedMotion.removeEventListener?.("change", syncMotionPreference);
      disable();
    };
  }, []);

  return (
    <section
      className="intro-section"
      ref={sectionRef}
      aria-label="Summary"
      style={{ "--intro-steps": introSentences.length }}
    >
      <div className="intro-sticky" ref={stickyRef}>
        <p className="intro-summary" ref={summaryRef}>
          {introSentences.map((parts, index) => (
            <Fragment key={index}>
              {index > 0 && " "}
              <span className="intro-sentence" data-intro-sentence>
                {parts.map((part, partIndex) =>
                  typeof part === "string" ? (
                    part
                  ) : part.mark ? (
                    <mark className="intro-mark" key={partIndex}>
                      {part.mark}
                    </mark>
                  ) : (
                    <span className="intro-anchor" data-intro-anchor={part.anchor} key={partIndex}>
                      {part.text}
                    </span>
                  ),
                )}
              </span>
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}
