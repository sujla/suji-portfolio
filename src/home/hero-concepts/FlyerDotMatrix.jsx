import { useEffect, useRef } from 'react';

const COLUMNS = 40;
const ROWS = 7;

const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, value));
const ease = (value) => {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
};

const sparkles = [{ x: 6, y: 3 }, { x: 19, y: 3, asterisk: true }, { x: 32, y: 3 }];

const sparkleDistance = (x, y) => {
  let nearest = Infinity;
  sparkles.forEach(({ x: cx, y: cy, asterisk }) => {
    const dx = Math.abs(x - cx);
    const dy = Math.abs(y - cy);
    const isAsterisk = asterisk
      && ((dx === 0 && dy <= 3) || (dy === 0 && dx <= 3) || (dx === dy && dx <= 2));
    const isSparkle = !asterisk
      && ((dx === 0 && dy <= 3) || (dy === 0 && dx <= 3) || (dx === 1 && dy === 1));
    if (isAsterisk || isSparkle) {
      nearest = Math.min(nearest, Math.max(dx, dy));
    }
  });
  return nearest;
};

const enterpriseTopCells = new Set([
  '17,0', '18,0', '19,0', '20,0', '21,0', '22,0',
  '17,1', '22,1', '19,2', '20,2',
]);

const enterpriseThreeCells = new Set([
  '7,3', '8,3', '9,3', '10,3', '11,3', '12,3', '13,3', '14,3', '15,3', '16,3',
  '17,3', '18,3', '19,3', '20,3', '21,3', '22,3', '23,3', '24,3', '25,3', '26,3',
  '27,3', '28,3', '29,3', '30,3', '31,3', '32,3',
  '8,4', '19,4', '20,4', '31,4',
  '5,5', '6,5', '7,5', '8,5', '9,5', '10,5',
  '17,5', '18,5', '19,5', '20,5', '21,5', '22,5',
  '29,5', '30,5', '31,5', '32,5', '33,5', '34,5',
  '5,6', '10,6', '17,6', '22,6', '29,6', '34,6',
]);

const barHeights = [3, 5, 2, 7, 4, 6, 3, 5, 1, 7, 4, 2, 6, 3, 5, 7, 2, 4, 6, 3];

const cartShape = new Set([
  '0,0', '1,0', '1,1', '2,1', '3,1', '4,1', '5,1', '6,1', '7,1', '8,1', '9,1',
  '2,2', '4,2', '6,2', '8,2', '9,2',
  '2,3', '3,3', '5,3', '7,3', '8,3',
  '3,4', '4,4', '5,4', '6,4', '7,4', '8,4',
  '3,6', '8,6',
]);

const carShape = new Set([
  '4,0', '5,0', '3,1', '4,1', '5,1', '6,1',
  '2,2', '3,2', '6,2', '7,2', '1,3', '2,3', '8,3', '9,3',
  '0,4', '1,4', '2,4', '3,4', '4,4', '5,4', '6,4', '7,4', '8,4', '9,4', '10,4',
  '1,5', '2,5', '3,5', '4,5', '5,5', '6,5', '7,5', '8,5', '9,5',
  '2,6', '8,6',
]);

const busShape = new Set([
  '0,0', '1,0', '2,0', '3,0', '4,0', '5,0', '6,0', '7,0', '8,0', '9,0', '10,0', '11,0', '12,0',
  '0,1', '1,1', '3,1', '5,1', '7,1', '9,1', '11,1', '12,1',
  '0,2', '1,2', '3,2', '5,2', '7,2', '9,2', '11,2', '12,2',
  '0,3', '12,3',
  '0,4', '1,4', '2,4', '3,4', '4,4', '5,4', '6,4', '7,4', '8,4', '9,4', '10,4', '11,4', '12,4',
  '1,5', '2,5', '3,5', '4,5', '5,5', '6,5', '7,5', '8,5', '9,5', '10,5', '11,5',
  '2,6', '10,6',
]);

const movingShapeContains = (shape, trackWidth, origins, x, y, offset, direction = 1) =>
  origins.some((origin) => {
    const left = ((origin + direction * offset) % trackWidth + trackWidth) % trackWidth;
    return shape.has(`${x - left},${y}`)
      || shape.has(`${x - left + trackWidth},${y}`)
      || shape.has(`${x - left - trackWidth},${y}`);
  });

function cellStrength(type, x, y, elapsed) {
  const starDistance = sparkleDistance(x, y);
  if (type === 'ai' && Number.isFinite(starDistance)) {
    const cycle = elapsed % 2700;
    const reveal = ease(cycle / 900 - starDistance * .12);
    const fade = 1 - ease((cycle - 2300) / 300);
    return reveal * fade;
  }

  if (type === 'enterprise') {
    const key = `${x},${y}`;
    if (!enterpriseTopCells.has(key) && !enterpriseThreeCells.has(key)) return 0;
    const cycle = elapsed % 2600;
    const reveal = ease(cycle / 760 - y * .1);
    const fade = 1 - ease((cycle - 2200) / 300);
    return reveal * fade;
  }

  if (type === 'fintech' && x % 2 === 0) {
    const height = barHeights[x / 2];
    if (y >= ROWS - height) {
      const cycle = elapsed % 3000;
      const level = cycle < 1000 ? cycle / 1000 : cycle < 2000 ? 1 : (3000 - cycle) / 1000;
      return ease(level * 1.65 - (ROWS - 1 - y) * .1);
    }
  }

  if (type === 'e-commerce') {
    const offset = Math.floor(elapsed / 145);
    return movingShapeContains(cartShape, 64, [0, 16, 32, 48], x, y, offset) ? 1 : 0;
  }

  if (type === 'mobility') {
    const offset = Math.floor(elapsed / 125);
    if (movingShapeContains(carShape, 88, [0, 44], x, y, offset, -1)) return 1;
    if (movingShapeContains(busShape, 88, [21, 65], x, y, offset, -1)) return 1;
  }

  return 0;
}

export function FlyerDotMatrix() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const flyer = canvas.closest('.tear-flyer');
    const context = canvas.getContext('2d');
    let activeType = '';
    let started = 0;
    let frame = 0;
    let width = 0;
    let height = 0;

    const draw = (time = performance.now()) => {
      frame = 0;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const bounds = canvas.getBoundingClientRect();
      if (bounds.width !== width || bounds.height !== height) {
        width = bounds.width;
        height = bounds.height;
        canvas.width = Math.max(1, Math.round(width * ratio));
        canvas.height = Math.max(1, Math.round(height * ratio));
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
      }
      context.clearRect(0, 0, width, height);

      const columnStep = width / COLUMNS;
      const rowStep = height / ROWS;
      const cellSize = Math.min(columnStep * .56, rowStep * .56);
      const radius = Math.max(1, cellSize * .2);
      const elapsed = Math.max(0, time - started);

      for (let y = 0; y < ROWS; y += 1) {
        for (let x = 0; x < COLUMNS; x += 1) {
          const strength = cellStrength(activeType, x, y, elapsed);
          const left = x * columnStep + (columnStep - cellSize) / 2;
          const top = y * rowStep + (rowStep - cellSize) / 2;
          context.fillStyle = `rgba(23, 23, 23, ${.1 + strength * .9})`;
          context.beginPath();
          context.roundRect(left, top, cellSize, cellSize, radius);
          context.fill();
        }
      }

      if (activeType) frame = requestAnimationFrame(draw);
    };

    const preview = (event) => {
      const nextType = event.detail?.type || '';
      if (nextType === activeType) return;
      activeType = nextType;
      started = performance.now();
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const resizeObserver = new ResizeObserver(() => { if (!frame) frame = requestAnimationFrame(draw); });
    resizeObserver.observe(canvas);
    flyer.addEventListener('flyer-filter-preview', preview);
    draw();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      flyer.removeEventListener('flyer-filter-preview', preview);
    };
  }, []);

  return <canvas ref={canvasRef} className="flyer-dot-matrix" aria-hidden="true" />;
}
