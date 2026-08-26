import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

const globeLocations = [
  {
    id: "born",
    label: "Born",
    country: "Korea",
    coordinates: [36.5, 127.8],
  },
  {
    id: "lived",
    label: "Lived",
    country: "India",
    coordinates: [20.6, 78.9],
  },
  {
    id: "studied",
    label: "Studied",
    country: "United States",
    coordinates: [39.8, -98.6],
  },
  {
    id: "working",
    label: "Currently Working",
    country: "Singapore",
    coordinates: [1.3521, 103.8198],
  },
];

function getRotation([latitude, longitude]) {
  return {
    phi: ((-90 - longitude) * Math.PI) / 180,
    theta: (latitude * Math.PI) / 180,
  };
}

function getGlobePalette(isLight) {
  return isLight
    ? {
        dark: 0,
        baseColor: [0.878, 0.882, 0.886],
        glowColor: [0.976, 0.98, 0.984],
        marker: [0.02, 0.72, 0.2],
        mapBrightness: 5,
        mapBaseBrightness: 0.06,
      }
    : {
        dark: 1,
        baseColor: [0.72, 0.74, 0.7],
        glowColor: [0.094, 0.094, 0.094],
        marker: [0.09, 1, 0.17],
        mapBrightness: 4.5,
        mapBaseBrightness: 0.04,
      };
}

function getLocationAnchors(palette) {
  return globeLocations.map((place) => ({
    id: place.id,
    location: place.coordinates,
    size: 0,
    color: palette.marker,
  }));
}

function PlacesGlobe() {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const pointerRef = useRef(null);
  const dragStartRef = useRef(0);
  const dragRotation = useMotionValue(0);
  const dragSpring = useSpring(dragRotation, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;

    if (!canvas || !container) return undefined;

    let isLight = document.documentElement.dataset.theme === "light";
    let palette = getGlobePalette(isLight);
    const initialRotation = {
      ...getRotation(globeLocations[0].coordinates),
      phi: (-245 * Math.PI) / 180,
    };
    let phi = initialRotation.phi;
    let previousTime = performance.now();
    let isSectionVisible = false;

    const globe = createGlobe(canvas, {
      width: 640,
      height: 640,
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      phi,
      theta: initialRotation.theta,
      dark: palette.dark,
      diffuse: 1.05,
      mapSamples: 16000,
      mapBrightness: palette.mapBrightness,
      mapBaseBrightness: palette.mapBaseBrightness,
      baseColor: palette.baseColor,
      markerColor: palette.marker,
      glowColor: palette.glowColor,
      markers: getLocationAnchors(palette),
      markerElevation: 0,
      opacity: 0.92,
      scale: 1.06,
      offset: [0, 0],
    });

    const resize = () => {
      const size = Math.max(1, Math.round(container.clientWidth));
      globe.update({ width: size, height: size });
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const section = container.closest(".life-experience-section");
    const sectionObserver = new IntersectionObserver(([entry]) => {
      isSectionVisible = entry.isIntersecting;
      previousTime = performance.now();
    });

    if (section) {
      sectionObserver.observe(section);
    } else {
      isSectionVisible = true;
    }

    const themeObserver = new MutationObserver(() => {
      const nextIsLight = document.documentElement.dataset.theme === "light";

      if (nextIsLight === isLight) return;

      isLight = nextIsLight;
      palette = getGlobePalette(isLight);
      globe.update({
        dark: palette.dark,
        baseColor: palette.baseColor,
        glowColor: palette.glowColor,
        mapBrightness: palette.mapBrightness,
        mapBaseBrightness: palette.mapBaseBrightness,
        markerColor: palette.marker,
        markers: getLocationAnchors(palette),
      });
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const render = (time) => {
      const elapsed = Math.min(time - previousTime, 32);
      previousTime = time;

      if (isSectionVisible && pointerRef.current === null) {
        phi += elapsed * 0.00014;
      }

      globe.update({
        phi: phi + dragSpring.get(),
        theta: initialRotation.theta + Math.sin(time * 0.00035) * 0.01,
        scale: 1.06,
      });

      frameRef.current = requestAnimationFrame(render);
    };

    frameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      sectionObserver.disconnect();
      themeObserver.disconnect();
      globe.destroy();
    };
  }, [dragSpring]);

  const startDragging = (event) => {
    pointerRef.current = event.clientX;
    dragStartRef.current = dragRotation.get();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    event.currentTarget.style.cursor = "grabbing";
  };

  const drag = (event) => {
    if (pointerRef.current === null) return;

    dragRotation.set(
      dragStartRef.current + (event.clientX - pointerRef.current) / 700,
    );
  };

  const stopDragging = (event) => {
    pointerRef.current = null;
    event.currentTarget.releasePointerCapture?.(event.pointerId);
    event.currentTarget.style.cursor = "grab";
  };

  return (
    <div className="places-globe-layer">
      <canvas
        className="places-globe-canvas"
        ref={canvasRef}
        onPointerCancel={stopDragging}
        onPointerDown={startDragging}
        onPointerMove={drag}
        onPointerUp={stopDragging}
      />

      {globeLocations.map((location) => (
        <div
          className={`globe-location-label globe-location-label--${location.id}`}
          key={location.id}
        >
          <span className="globe-location-label-title">{location.label}</span>
          <span className="globe-location-label-country">{location.country}</span>
        </div>
      ))}
    </div>
  );
}

const experiences = [
  {
    company: "Taurus Labs",
    period: "2025 – Now",
    role: "Sr. Product Designer",
    logo: "./assets/logo/logo_tauruslabs.svg",
    theme: "taurus",
  },
  {
    company: "Olive Young",
    period: "2023 – 2025",
    role: "Sr. UI/UX Designer",
    logo: "./assets/logo/logo_oliveyoung.svg",
    theme: "oliveyoung",
  },
  {
    company: "QuotaBook",
    period: "2019 – 2023",
    role: "Product Designer",
    logo: "./assets/logo/logo_quotalab.png",
    theme: "quotabook",
  },
  {
    company: "Bitberry",
    period: "2018 – 2019",
    role: "UI/UX Designer",
    logo: "./assets/logo/logo_rootone.png",
    theme: "bitberry",
  },
  {
    company: "Kakao",
    period: "2016 – 2018",
    role: "UI/UX Designer",
    logo: "./assets/logo/logo_kakao.png",
    theme: "kakao",
  },
];

export function StickyCard_001({ experience, index, progress, range, targetScale }) {
  const prefersReducedMotion = useReducedMotion();
  const rawScale = useTransform(progress, range, [1, targetScale]);
  const scale = useSpring(rawScale, {
    stiffness: 155,
    damping: 22,
    mass: 0.45,
  });
  const scrollVelocity = useVelocity(progress);
  const velocityOffset = useTransform(scrollVelocity, (value) =>
    Math.max(-10, Math.min(10, value * -6)),
  );
  const y = useSpring(velocityOffset, {
    stiffness: 180,
    damping: 18,
    mass: 0.3,
  });

  return (
    <div className="experience-card-sticky">
      <motion.article
        className={`experience-card experience-card--${experience.theme}`}
        style={{
          "--experience-offset": `${index * 18}px`,
          "--experience-offset-mobile": `${index * 12}px`,
          scale: prefersReducedMotion ? 1 : scale,
          y: prefersReducedMotion ? 0 : y,
        }}
      >
        <h3 className="experience-card-company">
          <img src={experience.logo} alt={experience.company} />
        </h3>
        <div className="experience-card-meta">
          <p>{experience.period}</p>
          <p>{experience.role}</p>
        </div>
      </motion.article>
    </div>
  );
}

function ExperienceStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="experience-stack" ref={container}>
      {experiences.map((experience, index) => {
        const targetScale = Math.max(
          0.6,
          1 - (experiences.length - index - 1) * 0.1,
        );

        return (
          <StickyCard_001
            experience={experience}
            index={index}
            key={experience.company}
            progress={scrollYProgress}
            range={[Math.min((index + 1) * 0.22, 0.88), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}

function LifeExperience() {
  return (
    <section
      className="life-experience-section"
      aria-labelledby="life-experience-title"
    >
      <div className="life-globe-column">
        <div className="life-globe-sticky">
          <div className="life-globe-frame">
            <PlacesGlobe />
          </div>
        </div>
      </div>

      <div className="life-experience-heading-column">
        <div className="life-experience-heading">
          <div className="life-experience-heading-content">
            <h2
              className="display-title"
              id="life-experience-title"
            >
              Where
              <br />
              I&apos;ve Lived
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="experience-section" id="experience" aria-label="Experience">
      <section
        className="professional-experience-section"
        aria-labelledby="professional-experience-title"
      >
        <div className="experience-heading-column">
          <div className="experience-heading">
            <div className="experience-heading-content">
              <h2
                className="display-title"
                id="professional-experience-title"
              >
                Where
                <br />
                I've Worked
              </h2>
            </div>
          </div>
        </div>
        <ExperienceStack />
      </section>

      <LifeExperience />
    </section>
  );
}
