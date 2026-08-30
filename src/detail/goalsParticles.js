const VIEWBOX_WIDTH = 326;
const VIEWBOX_HEIGHT = 134;
const CANVAS_PADDING = 52;
const CANVAS_WIDTH = VIEWBOX_WIDTH + CANVAS_PADDING * 2;
const CANVAS_HEIGHT = VIEWBOX_HEIGHT + CANVAS_PADDING * 2;
const PARTICLE_COUNT = 4200;
const POINTER_RADIUS = 80;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function createRandom(seed = 1873) {
  let state = seed >>> 0;

  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function createGaussian(random) {
  let spare = null;

  return () => {
    if (spare !== null) {
      const value = spare;
      spare = null;
      return value;
    }

    const u = Math.max(random(), Number.EPSILON);
    const v = Math.max(random(), Number.EPSILON);
    const magnitude = Math.sqrt(-2 * Math.log(u));
    const angle = Math.PI * 2 * v;
    spare = magnitude * Math.sin(angle);
    return magnitude * Math.cos(angle);
  };
}

function sampleParticles(pathData) {
  const mask = document.createElement("canvas");
  mask.width = VIEWBOX_WIDTH;
  mask.height = VIEWBOX_HEIGHT;

  const context = mask.getContext("2d", { willReadFrequently: true });
  if (!context || typeof Path2D === "undefined") return [];

  context.fillStyle = "#fff";
  context.fill(new Path2D(pathData));

  const pixels = context.getImageData(0, 0, mask.width, mask.height).data;
  const sourcePoints = [];

  for (let y = 0; y < VIEWBOX_HEIGHT; y += 1) {
    for (let x = 0; x < VIEWBOX_WIDTH; x += 1) {
      if (pixels[(y * VIEWBOX_WIDTH + x) * 4 + 3] > 96) {
        sourcePoints.push({ x, y });
      }
    }
  }

  if (!sourcePoints.length) return [];

  const random = createRandom();
  const gaussian = createGaussian(random);
  const particles = [];

  for (let index = 0; index < PARTICLE_COUNT; index += 1) {
    const source = sourcePoints[Math.floor(random() * sourcePoints.length)];
    const spread = gaussian() * (random() < 0.72 ? 5.2 : 10.8);
    const angle = random() * Math.PI * 2;
    const originX = clamp(source.x + Math.cos(angle) * spread, 0, VIEWBOX_WIDTH) + CANVAS_PADDING;
    const originY = clamp(source.y + Math.sin(angle) * spread, 0, VIEWBOX_HEIGHT) + CANVAS_PADDING;
    const falloff = clamp(1 - Math.abs(spread) / 29, 0.12, 1);

    particles.push({
      originX,
      originY,
      x: originX,
      y: originY,
      velocityX: 0,
      velocityY: 0,
      size: 0.22 + random() * 0.42,
      alpha: (0.16 + random() * 0.7) * falloff,
      drift: random() * Math.PI * 2,
    });
  }

  return particles;
}

function getParticleColor() {
  return getComputedStyle(document.documentElement)
    .getPropertyValue("--bg")
    .trim() || "#fff";
}

export function initGoalsParticles() {
  const container = document.querySelector(".goals-cards");
  const svg = container?.querySelector(".goals-ring-texture");
  const path = svg?.querySelector("path");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!container || !svg || !path) return () => {};

  const pathData = path.getAttribute("d");
  const fieldConfigs = [
    { className: "goals-ring-particles goals-ring-particles-right", mirrored: false },
    { className: "goals-ring-particles goals-ring-particles-left", mirrored: true },
  ];
  const fields = fieldConfigs.map(({ className, mirrored }) => {
    const canvas = document.createElement("canvas");
    canvas.className = className;
    canvas.setAttribute("aria-hidden", "true");
    container.insertBefore(canvas, svg.nextSibling);

    return {
      canvas,
      context: canvas.getContext("2d"),
      mirrored,
      particles: sampleParticles(pathData),
      pointer: {
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT / 2,
        velocityX: 0,
        velocityY: 0,
        lastX: CANVAS_WIDTH / 2,
        lastY: CANVAS_HEIGHT / 2,
        lastTime: performance.now(),
      },
    };
  });

  if (fields.some(({ context, particles }) => !context || !particles.length)) {
    fields.forEach(({ canvas }) => canvas.remove());
    return () => {};
  }

  let frame = 0;
  let isVisible = true;
  let particleColor = getParticleColor();

  const resizeField = (field) => {
    const rect = field.canvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    field.canvas.width = Math.max(1, Math.round(rect.width * pixelRatio));
    field.canvas.height = Math.max(1, Math.round(rect.height * pixelRatio));
    field.context.setTransform(
      (rect.width / CANVAS_WIDTH) * pixelRatio,
      0,
      0,
      (rect.height / CANVAS_HEIGHT) * pixelRatio,
      0,
      0,
    );
  };

  const drawField = (field) => {
    field.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    field.context.fillStyle = particleColor;

    field.particles.forEach((particle) => {
      field.context.globalAlpha = particle.alpha;
      field.context.fillRect(
        particle.x - particle.size / 2,
        particle.y - particle.size / 2,
        particle.size,
        particle.size,
      );
    });

    field.context.globalAlpha = 1;
  };

  const draw = () => fields.forEach(drawField);

  const updatePointer = (event) => {
    const now = performance.now();

    fields.forEach((field) => {
      const rect = field.canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const visualX = ((event.clientX - rect.left) / rect.width) * CANVAS_WIDTH;
      const x = field.mirrored ? CANVAS_WIDTH - visualX : visualX;
      const y = ((event.clientY - rect.top) / rect.height) * CANVAS_HEIGHT;
      const elapsed = Math.max(now - field.pointer.lastTime, 8);

      field.pointer.velocityX = clamp(
        ((x - field.pointer.lastX) / elapsed) * 16,
        -12,
        12,
      );
      field.pointer.velocityY = clamp(
        ((y - field.pointer.lastY) / elapsed) * 16,
        -12,
        12,
      );
      field.pointer.x = x;
      field.pointer.y = y;
      field.pointer.lastX = x;
      field.pointer.lastY = y;
      field.pointer.lastTime = now;

      const pointerSpeed = Math.hypot(
        field.pointer.velocityX,
        field.pointer.velocityY,
      );
      const blastStrength = clamp(1 + pointerSpeed * 0.1, 1, 2.15);

      field.particles.forEach((particle) => {
        const deltaX = particle.x - field.pointer.x;
        const deltaY = particle.y - field.pointer.y;
        const distance = Math.hypot(deltaX, deltaY) || 0.001;
        if (distance >= POINTER_RADIUS) return;

        const proximity = 1 - distance / POINTER_RADIUS;
        const force = Math.pow(proximity, 1.35) * 5.4 * blastStrength;
        particle.velocityX +=
          (deltaX / distance) * force +
          field.pointer.velocityX * proximity * 0.24;
        particle.velocityY +=
          (deltaY / distance) * force +
          field.pointer.velocityY * proximity * 0.24;
        particle.velocityX += Math.cos(particle.drift) * proximity * 0.14;
        particle.velocityY += Math.sin(particle.drift) * proximity * 0.14;

        const particleSpeed = Math.hypot(
          particle.velocityX,
          particle.velocityY,
        );
        if (particleSpeed > 8.5) {
          const speedLimit = 8.5 / particleSpeed;
          particle.velocityX *= speedLimit;
          particle.velocityY *= speedLimit;
        }
      });
    });

    startAnimation();
  };

  const settlePointer = () => {
    fields.forEach(({ pointer }) => {
      pointer.velocityX = 0;
      pointer.velocityY = 0;
    });
    startAnimation();
  };

  const render = () => {
    frame = 0;
    if (!isVisible) return;

    let moving = false;

    fields.forEach((field) => {
      field.particles.forEach((particle) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.velocityX *= 0.91;
        particle.velocityY *= 0.91;

        const homeX = particle.originX - particle.x;
        const homeY = particle.originY - particle.y;
        const homeDistance = Math.hypot(homeX, homeY);
        const dustDrift = Math.min(homeDistance / 32, 1) * 0.018;

        particle.drift += 0.009;
        particle.x += homeX * 0.012 + Math.cos(particle.drift) * dustDrift;
        particle.y += homeY * 0.012 + Math.sin(particle.drift) * dustDrift;

        if (
          Math.abs(particle.velocityX) > 0.008 ||
          Math.abs(particle.velocityY) > 0.008 ||
          Math.abs(particle.originX - particle.x) > 0.08 ||
          Math.abs(particle.originY - particle.y) > 0.08
        ) {
          moving = true;
        }
      });
    });

    fields.forEach(({ pointer }) => {
      pointer.velocityX *= 0.72;
      pointer.velocityY *= 0.72;
    });
    draw();

    if (moving) frame = requestAnimationFrame(render);
  };

  function startAnimation() {
    if (!frame && isVisible) frame = requestAnimationFrame(render);
  }

  const resizeObserver = new ResizeObserver(() => {
    fields.forEach(resizeField);
    draw();
  });

  const visibilityObserver = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible) {
      draw();
      startAnimation();
    } else if (frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  });

  const themeObserver = new MutationObserver(() => {
    particleColor = getParticleColor();
    draw();
  });

  if (!reducedMotion.matches) {
    container.addEventListener("pointerenter", updatePointer, { passive: true });
    container.addEventListener("pointermove", updatePointer, { passive: true });
    container.addEventListener("pointerleave", settlePointer, { passive: true });
    container.addEventListener("pointercancel", settlePointer, { passive: true });
  }
  fields.forEach(({ canvas }) => resizeObserver.observe(canvas));
  visibilityObserver.observe(container);
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  fields.forEach(resizeField);
  draw();
  container.classList.add("is-particle-canvas-ready");

  return () => {
    if (frame) cancelAnimationFrame(frame);
    if (!reducedMotion.matches) {
      container.removeEventListener("pointerenter", updatePointer);
      container.removeEventListener("pointermove", updatePointer);
      container.removeEventListener("pointerleave", settlePointer);
      container.removeEventListener("pointercancel", settlePointer);
    }
    resizeObserver.disconnect();
    visibilityObserver.disconnect();
    themeObserver.disconnect();
    container.classList.remove("is-particle-canvas-ready");
    fields.forEach(({ canvas }) => canvas.remove());
  };
}
