import * as THREE from 'three';
import paperTextureUrl from './flyer-paper-texture.jpg';

const mounted = new Map();
const tearHandlers = new WeakMap();
// Fixed irregular samples keep the paper fibers still while the sheet moves.
const fiberNoise = (n) => { const v = Math.sin(n * 127.1 + 31.7) * 43758.5453; return v - Math.floor(v); };
const tornEdgeAt = (u) => {
  const sample = u * 28;
  const i = Math.floor(sample);
  const grain = THREE.MathUtils.lerp(fiberNoise(i), fiberNoise(i + 1), sample - i);
  return (1.2 + grain * 2.8 + fiberNoise(Math.floor(u * 7)) * 1.6) * Math.min(1, u * 40, (1 - u) * 40);
};
// Subpixel fibers plus broader, shallow dents: a worn edge, not another tear.
const paperEdgeAt = (position, seed) => {
  const sample = (spacing) => {
    const n = position / spacing;
    return THREE.MathUtils.lerp(fiberNoise(Math.floor(n) + seed), fiberNoise(Math.floor(n) + seed + 1), n % 1);
  };
  return .25 + sample(27) * 1.1 + sample(3) * .65;
};
// A few unevenly spaced horizontal cuts per tab leave paper bridges between them.
const paperSlits = (tab) => {
  const centers = [
    [.18, .49, .79],
    [.14, .37, .63, .85],
    [.28, .71],
    [.17, .46, .81],
    [.13, .36, .62, .86],
  ][tab.index];
  return centers.map((position, index) => {
    const center = tab.width * position;
    const half = Math.min(tab.width * .065, 3.5 + fiberNoise(tab.index * 7 + index + 17) * 1.5);
    return { left: center - half, right: center + half };
  });
};
const fiberDepthAt = (u) => {
  const sample = u * 22;
  const i = Math.floor(sample);
  return 2 + THREE.MathUtils.lerp(fiberNoise(i + 200), fiberNoise(i + 201), sample - i) * 2.6;
};

export async function playFlyerTear(button) {
  if (button.classList.contains('is-torn')) return true;
  const handler = tearHandlers.get(button.closest('.flyer-tabs'));
  if (handler) return handler(button);
  const style = getComputedStyle(button);
  const finalTransform = `translate(${style.getPropertyValue('--tear-shift').trim()}, 14px) rotate(${style.getPropertyValue('--tear-angle').trim()})`;
  button.classList.add('is-tearing');
  try {
    await button.animate([
      { transform: 'rotateX(0) translateY(0)', opacity: 1 },
      { transform: 'rotateX(-12deg) rotate(-3deg) translateY(8px)', opacity: 1, offset: .55 },
      { transform: finalTransform, opacity: 1 },
    ], { duration: 820, easing: 'ease-in-out', fill: 'none' }).finished;
    button.classList.add('is-torn');
    return true;
  } catch { return false; }
  finally { button.classList.remove('is-tearing'); }
}

export function mountFlyerFlutter(group) {
  if (!group?.isConnected) return;
  mounted.get(group)?.();
  const buttons = [...group.querySelectorAll('.flyer-tab')];
  const header = group.closest('.tear-flyer')?.querySelector('.flyer-body');
  const headerEdge = group.closest('.flyer-stage')?.querySelector('[data-flyer-tear-edge]');
  let headerHeight = header?.offsetHeight || 410;
  let previousHeaderPath = '';
  let headerOuterStart = '';
  let headerOuterEnd = '';
  const headerFibers = document.createElement('canvas');
  headerFibers.className = 'flyer-header-fibers';
  headerFibers.setAttribute('aria-hidden', 'true');
  header?.append(headerFibers);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.domElement.className = 'flyer-flutter-canvas';
  renderer.domElement.setAttribute('aria-hidden', 'true');
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-24, 1, 0, -208, .1, 2000);
  camera.position.z = 600;
  const rows = 36;
  const columns = 96;
  let width = 0;
  let frame = 0;
  let lastTime = 0;
  let visible = true;
  let disposed = false;
  let pointerX = 0;
  let active = -1;
  let previewed = -1;
  let gesture = null;
  let suppressedClick = null;
  let dragCanvas = false;
  let canvasBounds = '';

  const paperImage = new Image();

  const tabs = buttons.map((button, index) => {
    const canvas = document.createElement('canvas');
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const geometry = new THREE.PlaneGeometry(1, 160, columns, rows);
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, vertexColors: true, transparent: true, depthTest: false, depthWrite: false });
    // Draw rows from the pinned edge to the curled tip in one pass. The default
    // back-then-front passes would paint the front over the overlapping white tip.
    material.forceSinglePass = true;
    // The reverse of the paper is unprinted; retain the texture's cutout alpha.
    material.onBeforeCompile = (shader) => {
      shader.vertexShader = 'attribute float paperReverse;\nvarying float vPaperReverse;\nvarying float vPaperTipDistance;\n' + shader.vertexShader.replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\nvPaperReverse = paperReverse;\nvPaperTipDistance = uv.y;',
      );
      shader.fragmentShader = 'varying float vPaperReverse;\nvarying float vPaperTipDistance;\n' + shader.fragmentShader.replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        if (!gl_FrontFacing || vPaperReverse > 0.5) {
          // The raised tip is the top of the visible reverse; the fold is below it.
          float foldShade = pow(clamp(vPaperTipDistance / 0.14, 0.0, 1.0), 0.55);
          diffuseColor.rgb = mix(vec3(1.0), vec3(0.38), foldShade);
        }`,
      );
    };
    material.customProgramCacheKey = () => 'flyer-gradient-curled-tip';
    geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array((columns + 1) * (rows + 1) * 3).fill(1), 3));
    geometry.setAttribute('paperReverse', new THREE.BufferAttribute(new Float32Array((columns + 1) * (rows + 1)), 1));
    const mesh = new THREE.Mesh(geometry, material);
    mesh.frustumCulled = false;
    mesh.renderOrder = 1;
    scene.add(mesh);
    // Layer faint, offset silhouettes to soften the shadow around the torn outline.
    const shadowMaterial = new THREE.MeshBasicMaterial({ color: '#392b34', transparent: true,
      opacity: 0, side: THREE.DoubleSide, depthWrite: false, depthTest: false });
    const shadows = Array.from({ length: 25 }, () => {
      const shadow = new THREE.Mesh(geometry, shadowMaterial);
      shadow.position.set(2, -4, -40);
      shadow.frustumCulled = false;
      scene.add(shadow);
      return shadow;
    });
    return { button, index, canvas, texture, geometry, material, mesh, shadowMaterial, shadows, width: 0, left: 0,
      dragX: 0, dragY: 0, dragVX: 0, dragVY: 0, placedX: 0, placedY: 0,
      bend: .48 + index * .07, velocity: 0, twist: (index - 2) * .05, twistVelocity: 0,
      paperCanvas: document.createElement('canvas'), baseCanvas: document.createElement('canvas'), paintedSeparation: -1, tear: null, separation: button.classList.contains('is-torn') ? 1 : 0, separationVelocity: 0 };
  });

  function paint(tab) {
    const scale = 2;
    const { canvas, button } = tab;
    canvas.width = Math.max(1, Math.round(tab.width * scale));
    canvas.height = 160 * scale;
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);
    const paperStyle = getComputedStyle(group);
    // Sample the same full-sheet gradient used by the body, before adding texture.
    const gradient = ctx.createLinearGradient(0, -headerHeight, 0, 160);
    gradient.addColorStop(0, paperStyle.getPropertyValue('--flyer-gradient-start').trim());
    gradient.addColorStop(.7, paperStyle.getPropertyValue('--flyer-paper-color').trim());
    gradient.addColorStop(1, paperStyle.getPropertyValue('--flyer-gradient-end').trim());
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, tab.width, 160);
    if (paperImage.complete && paperImage.naturalWidth && width) {
      const sheetHeight = headerHeight + 160;
      ctx.globalCompositeOperation = 'multiply';
      ctx.globalAlpha = .65;
      ctx.drawImage(paperImage,
        tab.left / width * paperImage.naturalWidth,
        headerHeight / sheetHeight * paperImage.naturalHeight,
        tab.width / width * paperImage.naturalWidth,
        160 / sheetHeight * paperImage.naturalHeight,
        0, 0, tab.width, 160);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    }
    tab.paperCanvas.width = canvas.width;
    tab.paperCanvas.height = canvas.height;
    tab.paperCanvas.getContext('2d').drawImage(canvas, 0, 0);
    ctx.strokeStyle = '#17171770';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(0, 1); ctx.lineTo(tab.width, 1); ctx.stroke();
    ctx.setLineDash([]);
    for (const slit of paperSlits(tab)) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.moveTo(slit.left, 0); ctx.lineTo(slit.right, 0);
      ctx.lineTo(slit.right - 1, 1.6); ctx.lineTo(slit.left + 1, 1.3);
      ctx.closePath(); ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
    }
    const label = button.querySelector('.flyer-tab-label');
    const style = getComputedStyle(label);
    const buttonStyle = getComputedStyle(button);
    tab.tearShift = parseFloat(buttonStyle.getPropertyValue('--tear-shift')) || 0;
    tab.tearAngle = -(parseFloat(buttonStyle.getPropertyValue('--tear-angle')) || 0) * Math.PI / 180;
    ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#171717';
    const lines = [];
    for (const hardLine of label.innerText.split('\n')) {
      let line = '';
      for (const part of hardLine.split(/(?<=[/\-\s])/)) {
        if (line && ctx.measureText(line + part).width > tab.width - 12) {
          lines.push(line.trim()); line = '';
        }
        for (const char of part) {
          if (line && ctx.measureText(line + char).width > tab.width - 12) {
            lines.push(line.trim()); line = '';
          }
          line += char;
        }
      }
      if (line) lines.push(line.trim());
    }
    const lineHeight = parseFloat(style.lineHeight);
    ctx.globalCompositeOperation = 'color-burn';
    lines.forEach((text, i) => ctx.fillText(text, tab.width / 2, 88 + (i - (lines.length - 1) / 2) * lineHeight));
    ctx.globalCompositeOperation = 'source-over';
    tab.baseCanvas.width = canvas.width;
    tab.baseCanvas.height = canvas.height;
    tab.baseCanvas.getContext('2d').drawImage(canvas, 0, 0);
    tab.paintedSeparation = -1;
    // GPU texture storage must be recreated when responsive sizing changes its dimensions.
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    tab.material.map = texture;
    tab.texture.dispose();
    tab.texture = texture;
  }

  function paintTornEdge(tab) {
    if (Math.abs(tab.paintedSeparation - tab.separation) < .001) return;
    tab.paintedSeparation = tab.separation;
    const ctx = tab.canvas.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, tab.canvas.width, tab.canvas.height);
    ctx.drawImage(tab.baseCanvas, 0, 0);
    ctx.scale(2, 2);
    for (let x = 0; x < tab.width; x += .5) {
      const u = x / tab.width;
      const released = THREE.MathUtils.smoothstep(tab.separation, u * .65, u * .65 + .25);
      if (!released) continue;
      ctx.globalAlpha = released;
      // The detached edge keeps its paper color; only the body exposes white paper fibers.
      // Restore the original textured surface over the released perforation.
      ctx.drawImage(tab.paperCanvas, x * 2, 0, 1, 14, x, 0, .5, 7);
    }
    ctx.globalAlpha = 1;
    tab.texture.needsUpdate = true;
  }

  function sizeCanvas(expanded) {
    dragCanvas = expanded;
    const side = expanded ? Math.ceil(Math.max(256, ...tabs.map(tab => Math.abs(tab.dragX) + 56)) / 128) * 128 : 56;
    const top = expanded ? Math.ceil(Math.max(256, ...tabs.map(tab => -tab.dragY + 48)) / 128) * 128 : 40;
    const bottom = expanded ? Math.ceil(Math.max(416, ...tabs.map(tab => tab.dragY + 240)) / 128) * 128 : 240;
    const bounds = `${width}:${side}:${top}:${bottom}`;
    if (bounds === canvasBounds) return;
    canvasBounds = bounds;
    renderer.setSize(width + side * 2, top + bottom);
    renderer.domElement.style.left = `${-side}px`;
    renderer.domElement.style.top = `${-top}px`;
    camera.left = -side;
    camera.right = width + side;
    camera.top = top;
    camera.bottom = -bottom;
    camera.updateProjectionMatrix();
  }

  function resize() {
    const layoutWidth = group.clientWidth;
    if (!layoutWidth) return;
    width = layoutWidth;
    headerHeight = header?.offsetHeight || 410;
    group.closest('.tear-flyer')?.style.setProperty('--flyer-paper-height', `${headerHeight + 160}px`);
    group.style.setProperty('--flyer-paper-width', `${width}px`);
    headerFibers.width = Math.round(width * 2);
    headerFibers.height = 32;
    previousHeaderPath = '';
    const topSteps = Math.ceil(width / 3);
    const sideSteps = Math.ceil(headerHeight / 4);
    headerOuterStart = `M${paperEdgeAt(0, 100) / width} ${paperEdgeAt(0, 400) / headerHeight}`;
    for (let i = 1; i <= topSteps; i++) {
      const x = i / topSteps * width;
      headerOuterStart += `L${Math.min(x, width - paperEdgeAt(0, 200)) / width} ${paperEdgeAt(x, 400) / headerHeight}`;
    }
    for (let i = 1; i <= sideSteps; i++) {
      const y = i / sideSteps * headerHeight;
      headerOuterStart += `L${1 - paperEdgeAt(y, 200) / width} ${y / headerHeight}`;
    }
    headerOuterEnd = `L${paperEdgeAt(headerHeight, 100) / width} 1`;
    for (let i = sideSteps - 1; i >= 0; i--) {
      const y = i / sideSteps * headerHeight;
      headerOuterEnd += `L${paperEdgeAt(y, 100) / width} ${Math.max(y, paperEdgeAt(0, 400)) / headerHeight}`;
    }
    headerOuterEnd += 'Z';
    sizeCanvas(dragCanvas);
    tabs.forEach(tab => {
      tab.left = tab.button.offsetLeft;
      tab.width = tab.button.offsetWidth;
      tab.button.style.setProperty('--flyer-paper-left', `${-tab.left}px`);
      tab.edgeLeft = Float32Array.from({ length: rows + 1 }, (_, row) =>
        paperEdgeAt(headerHeight + row / rows * 160, tab.index === 0 ? 100 : 500 + tab.index) * (tab.index === 0 ? 1 : .25));
      tab.edgeRight = Float32Array.from({ length: rows + 1 }, (_, row) =>
        paperEdgeAt(headerHeight + row / rows * 160, tab.index === tabs.length - 1 ? 200 : 501 + tab.index) * (tab.index === tabs.length - 1 ? 1 : .25));
      tab.edgeBottom = Float32Array.from({ length: columns + 1 }, (_, col) =>
        paperEdgeAt(tab.left + col / columns * tab.width, 300));
      paint(tab);
    });
    wake();
  }

  function deform(tab, time, tearProgress = 0) {
    const positions = tab.geometry.attributes.position;
    const colors = tab.geometry.attributes.color;
    const paperReverse = tab.geometry.attributes.paperReverse;
    const step = 160 / rows;
    const tipLift = THREE.MathUtils.clamp((tab.bend - .025) / .925, 0, 1) * (1 - tearProgress);
    let y = 0;
    let z = 0;
    for (let row = 0; row <= rows; row++) {
      const t = row / rows;
      // Integrating a curved spine keeps the paper length constant and its top pinned.
      // Curl only the final fifth past 90 degrees, revealing a narrow white reverse.
      const tipCurl = THREE.MathUtils.smoothstep(t, .8, 1) * .95 * tipLift;
      const angle = tab.bend * (t * 1.35 + Math.sin(t * Math.PI * 2 - time * 7 + tab.left * .025) * t * .12) + tipCurl;
      if (row) { y += Math.cos(angle) * step; z += Math.sin(angle) * step; }
      for (let col = 0; col <= columns; col++) {
        const across = col / columns - .5;
        const twist = tab.twist * t * t;
        const camber = Math.sin((across + .5) * Math.PI) * tab.bend * t * t * 7;
        const x = across * tab.width
          + tab.edgeLeft[row] * Math.pow(1 - col / columns, 12)
          - tab.edgeRight[row] * Math.pow(col / columns, 12);
        const idx = row * (columns + 1) + col;
        let px = x * Math.cos(twist);
        let py = -y + Math.sin(twist) * x * .65 + camber * .6 + tab.edgeBottom[col] * Math.pow(t, 12);
        let pz = z + Math.sin(twist) * x + camber;
        if (tearProgress > 0) {
          // The tear advances left to right; the unbroken edge keeps holding the sheet.
          const released = THREE.MathUtils.smoothstep(tearProgress, col / columns * .65, col / columns * .65 + .25);
          const tug = Math.sin(tearProgress * Math.PI);
          py -= released * (14 + tug * (1 - t) * 5);
          // A shallow irregular fracture exposes the rough paper core.
          const tornEdge = tornEdgeAt(col / columns);
          py -= released * tornEdge * Math.pow(1 - t, 8);
          pz += released * (1 - t) * (4 + tug * 18);
          // Fan outward only after the final part of the perforation has released.
          const settled = THREE.MathUtils.smoothstep(tearProgress, .75, 1);
          const angle = tab.tearAngle * settled;
          const pivotY = py + 94;
          const rotatedX = px * Math.cos(angle) - pivotY * Math.sin(angle);
          py = px * Math.sin(angle) + pivotY * Math.cos(angle) - 94;
          px = rotatedX + tab.tearShift * settled;
        }
        // Add perspective to the orthographic scene so a lifted tip approaches the viewer.
        // Keep the perforation pinned and fade this cue out as the tab is torn off.
        const perspective = 1 + Math.max(0, pz) / 600 * (1 - tearProgress);
        positions.setXYZ(idx, tab.left + tab.width / 2 + px * perspective + tab.dragX, py * perspective - tab.dragY, pz);
        const shade = 1 - Math.min(.10, Math.abs(angle) * .06) + across * twist * .04;
        colors.setXYZ(idx, shade, shade, shade);
        // Explicitly mark the folded tip: screen-space winding alone can miss the curl.
        paperReverse.setX(idx, tipCurl > 0 ? THREE.MathUtils.smoothstep(angle, 1.4, 1.6) : 0);
      }
    }
    positions.needsUpdate = true;
    colors.needsUpdate = true;
    paperReverse.needsUpdate = true;
  }

  function updateHeaderEdge() {
    if (!headerEdge || !width) return;
    let path = headerOuterStart;
    for (let index = tabs.length - 1; index >= 0; index--) {
      const tab = tabs[index];
      if (tab.separation >= .002) {
        path += `L${(tab.left + tab.width) / width} 1`;
        for (let col = columns; col >= 0; col--) {
          const u = col / columns;
          const released = THREE.MathUtils.smoothstep(tab.separation, u * .65, u * .65 + .25);
          path += `L${(tab.left + u * tab.width) / width} ${1 - released * tornEdgeAt(u) / headerHeight}`;
        }
        path += `L${tab.left / width} 1`;
      } else {
        for (const slit of paperSlits(tab).reverse()) {
          const left = tab.left + slit.left;
          const right = tab.left + slit.right;
          path += `L${right / width} 1L${(right - 1) / width} ${1 - .7 / headerHeight}L${(left + 1) / width} ${1 - .5 / headerHeight}L${left / width} 1`;
        }
      }
    }
    path += headerOuterEnd;
    if (path !== previousHeaderPath) {
      headerEdge.setAttribute('d', path);
      previousHeaderPath = path;
      const ctx = headerFibers.getContext('2d');
      ctx.setTransform(2, 0, 0, 2, 0, 0);
      ctx.clearRect(0, 0, width, 16);
      for (const tab of tabs) {
        if (tab.separation < .002) continue;
        for (let x = 0; x < tab.width; x += .5) {
          const u = x / tab.width;
          const released = THREE.MathUtils.smoothstep(tab.separation, u * .65, u * .65 + .25);
          const edgeY = 16 - released * tornEdgeAt(u);
          const depth = fiberDepthAt(u) * released;
          ctx.fillStyle = fiberNoise(x * 2 + 91) > .28 ? '#fffaf3' : '#ded9d3';
          ctx.fillRect(tab.left + x, edgeY - depth, .6, depth + 1);
          ctx.strokeStyle = '#fffdf5';
          ctx.lineWidth = .45;
          ctx.beginPath(); ctx.moveTo(tab.left + x, edgeY - depth + .8);
          ctx.lineTo(tab.left + x + (fiberNoise(x + 43) - .5) * 2.5, edgeY - depth - released * fiberNoise(x + 8) * 1.1);
          if (released > 0 && Number.isInteger(x / 3)) ctx.stroke();
        }
      }
    }
  }

  function animate(now) {
    frame = 0;
    if (disposed || (!visible && !tabs.some(tab => tab.tear || tab.dragX || tab.dragY))) return;
    const dt = Math.min((now - (lastTime || now - 16)) / 1000, .032);
    lastTime = now;
    let moving = false;
    tabs.forEach((tab, index) => {
      const beingMoved = gesture?.tab === tab && gesture.dragging && gesture.kind === 'reattach';
      if (!beingMoved) {
        tab.dragVX += ((tab.placedX - tab.dragX) * 140 - tab.dragVX * 23) * dt;
        tab.dragVY += ((tab.placedY - tab.dragY) * 140 - tab.dragVY * 23) * dt;
        tab.dragX += tab.dragVX * dt;
        tab.dragY += tab.dragVY * dt;
        if (Math.abs(tab.placedX - tab.dragX) + Math.abs(tab.placedY - tab.dragY) + Math.abs(tab.dragVX) + Math.abs(tab.dragVY) < .02) {
          tab.dragX = tab.placedX; tab.dragY = tab.placedY;
          tab.dragVX = tab.dragVY = 0;
        }
      }
      tab.button.style.translate = `${tab.dragX}px ${tab.dragY}px`;
      moving ||= Math.abs(tab.placedX - tab.dragX) + Math.abs(tab.placedY - tab.dragY) + Math.abs(tab.dragVX) + Math.abs(tab.dragVY) > .02;
      const torn = tab.button.classList.contains('is-torn');
      if (tab.tear) {
        if (!tab.tear.dragging) tab.separation = Math.min(1, (now - tab.tear.started) / 900);
        tab.separationVelocity = 0;
      } else {
        tab.separationVelocity += (((torn ? 1 : 0) - tab.separation) * 85 - tab.separationVelocity * 19) * dt;
        tab.separation = THREE.MathUtils.clamp(tab.separation + tab.separationVelocity * dt, 0, 1);
      }
      const target = tab.tear ? .08 + Math.sin(tab.separation * Math.PI) * .45 : index === active ? (torn ? .18 : .95) : .025;
      const twistTarget = !tab.tear && index === active ? (.14 + pointerX * .6) * (torn ? .3 : 1) : 0;
      tab.velocity += ((target - tab.bend) * 65 - tab.velocity * 10) * dt;
      tab.bend += tab.velocity * dt;
      tab.twistVelocity += ((twistTarget - tab.twist) * 55 - tab.twistVelocity * 9) * dt;
      tab.twist += tab.twistVelocity * dt;
      const lifted = tab.separation > .002;
      // Composite each lifted sheet AFTER its shadow, above the resting neighbors.
      // Previously every shadow was behind every sheet, hiding the overlap cue.
      const hoverLift = THREE.MathUtils.clamp((tab.bend - .025) / .925, 0, 1) * (1 - tab.separation);
      const layer = beingMoved ? 30 : lifted ? 10 + index * 2 : hoverLift > .01 ? 2 : 0;
      tab.shadows.forEach((shadow, i) => {
        // Distribute soft shadow samples over a disk that grows as the paper lifts.
        const angle = i * 2.399963229728653;
        const radius = Math.sqrt(i / (tab.shadows.length - 1)) * (3 + 29 * hoverLift);
        shadow.position.set(2 + 8 * hoverLift + Math.cos(angle) * radius,
          -4 - 16 * hoverLift + Math.sin(angle) * radius, -40);
        shadow.renderOrder = layer;
      });
      tab.mesh.renderOrder = layer + 1;
      tab.button.style.zIndex = String(layer + 1);
      tab.shadowMaterial.opacity = (.024 * tab.separation + .022 * hoverLift) * 9 / tab.shadows.length;
      paintTornEdge(tab);
      deform(tab, now / 1000, tab.separation);
      if (tab.tear) {
        moving = true;
        if (tab.separation === 1 && !tab.tear.dragging) {
          tab.button.classList.add('is-torn');
          tab.button.classList.remove('is-tearing');
          tab.tear.resolve(true);
          tab.tear = null;
        }
      }
      moving ||= Math.abs(tab.velocity) + Math.abs(tab.twistVelocity) + Math.abs(target - tab.bend) > .002;
      moving ||= Math.abs(tab.separationVelocity) + Math.abs((torn ? 1 : 0) - tab.separation) > .002;
    });
    if (dragCanvas && !gesture?.dragging && tabs.every(tab => !tab.dragX && !tab.dragY)) sizeCanvas(false);
    updateHeaderEdge();
    renderer.render(scene, camera);
    if (moving || active !== -1) frame = requestAnimationFrame(animate);
  }

  function wake() { if (!frame && (visible || tabs.some(tab => tab.tear || tab.dragX || tab.dragY)) && !disposed) { lastTime = 0; frame = requestAnimationFrame(animate); } }
  function tear(button) {
    const tab = tabs.find(tab => tab.button === button);
    if (!tab || disposed) return Promise.resolve(false);
    if (tab.tear) return tab.tear.promise;
    if (button.classList.contains('is-torn')) return Promise.resolve(true);
    let resolve;
    const promise = new Promise(done => { resolve = done; });
    tab.tear = { started: performance.now(), promise, resolve };
    tab.button.classList.add('is-tearing');
    active = -1;
    wake();
    return promise;
  }
  function move(event) {
    if (event.pointerType === 'touch' || group.classList.contains('is-tear-locked')) return;
    const index = buttons.indexOf(event.target.closest('.flyer-tab'));
    active = index;
    if (previewed !== index) {
      previewed = index;
      group.closest('.tear-flyer')?.dispatchEvent(new CustomEvent('flyer-filter-preview', {
        detail: { type: index === -1 ? '' : buttons[index].dataset.projectTypeFilter },
      }));
    }
    if (index !== -1) {
      const rect = buttons[index].getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / rect.width - .5;
    }
    wake();
  }
  function leave() {
    active = -1;
    previewed = -1;
    group.closest('.tear-flyer')?.dispatchEvent(new CustomEvent('flyer-filter-preview', { detail: { type: '' } }));
    wake();
  }
  function press(event) {
    if (event.button !== 0 || !event.isPrimary || gesture) return;
    suppressedClick = null;
    if (group.classList.contains('is-tear-locked')) return;
    const index = buttons.indexOf(event.target.closest('.flyer-tab'));
    if (index !== -1 && !tabs[index].tear) {
      const tab = tabs[index];
      tab.velocity += 3;
      const transform = new DOMMatrixReadOnly(getComputedStyle(group.closest('.flyer-stack')).transform);
      gesture = { tab, pointerId: event.pointerId, x: event.clientX, y: event.clientY,
        startX: tab.dragX, startY: tab.dragY,
        kind: tab.button.classList.contains('is-torn') ? 'reattach' : 'tear',
        inverse: transform.inverse(), dragging: false, locked: [] };

      wake();
    }
  }
  function dragMove(event) {
    if (!gesture || event.pointerId !== gesture.pointerId) return;
    const distance = Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y);
    if (!gesture.dragging && distance < 6) return;
    const { tab } = gesture;
    if (!gesture.dragging) {
      gesture.dragging = true;
      if (gesture.kind === 'tear') {
        tear(tab.button);
        tab.tear.dragging = true;
      } else {
        sizeCanvas(true);
        tab.button.classList.add('is-dragging');
        active = -1;
      }
      group.classList.add('is-tear-locked');
      gesture.locked = buttons.filter(button => button !== tab.button).map(button => [button, button.disabled]);
      gesture.locked.forEach(([button]) => { button.disabled = true; });
      tab.button.setPointerCapture(event.pointerId);
    }
    if (gesture.kind === 'reattach') {
      const dx = event.clientX - gesture.x;
      const dy = event.clientY - gesture.y;
      tab.dragX = gesture.startX + gesture.inverse.a * dx + gesture.inverse.c * dy;
      tab.dragY = gesture.startY + gesture.inverse.b * dx + gesture.inverse.d * dy;
      sizeCanvas(true);
      tab.dragVX = tab.dragVY = 0;
    } else {
      // During an initial tear, reversing the pointer does not reattach the paper.
      tab.separation = Math.max(tab.separation, Math.min(1, (distance - 6) / 110));
      tab.separationVelocity = 0;
    }
    event.preventDefault();
    wake();
  }
  function finishDrag(event) {
    if (!gesture || event.pointerId !== gesture.pointerId) return;
    const current = gesture;
    gesture = null;
    if (!current.dragging) return; // A press and release stays a normal click.
    const { tab } = current;
    if (tab.button.hasPointerCapture(current.pointerId)) tab.button.releasePointerCapture(current.pointerId);
    current.locked.forEach(([button, wasDisabled]) => { button.disabled = wasDisabled; });
    group.classList.remove('is-tear-locked');
    if (current.kind === 'reattach') {
      suppressedClick = tab.button;
      tab.button.classList.remove('is-dragging');
      // Compare the moved paper's center to its original slot in flyer coordinates.
      const distanceToSlot = Math.hypot(tab.dragX + tab.tearShift, tab.dragY + 14);
      if (event.type !== 'pointercancel' && tab.dragY < -6 && distanceToSlot < 16) {
        tab.button.classList.remove('is-torn');
        tab.separationVelocity = 0;
        tab.placedX = tab.placedY = 0;
      } else if (event.type !== 'pointercancel') {
        tab.placedX = tab.dragX;
        tab.placedY = tab.dragY;
        tab.dragVX = tab.dragVY = 0;
      }
      wake();
      return;
    }
    if (event.type === 'pointercancel') {
      tab.tear.resolve(false);
      tab.tear = null;
      tab.button.classList.remove('is-tearing');
      wake();
      return;
    }
    tab.tear.dragging = false;
    tab.tear.started = performance.now() - tab.separation * 900;
    suppressedClick = tab.button;
    // Route release through the same filter handler, even outside the original tab.
    // Its pending tear promise finishes the remaining movement before filtering.
    tab.button.click();
    wake();
  }
  function preventDuplicateClick(event) {
    if (event.isTrusted && event.detail > 0 && event.target.closest('.flyer-tab') === suppressedClick) {
      suppressedClick = null;
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
  paperImage.onload = () => { if (!disposed) { tabs.forEach(paint); wake(); } };
  paperImage.src = paperTextureUrl;
  group.append(renderer.domElement);
  const resizeObserver = new ResizeObserver(resize);
  const stateObserver = new MutationObserver(() => { tabs.forEach(paint); wake(); });
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) wake();
    else { active = -1; if (!tabs.some(tab => tab.tear || tab.dragX || tab.dragY)) { cancelAnimationFrame(frame); frame = 0; } }
  });
  group.addEventListener('pointermove', move);
  group.addEventListener('pointerleave', leave);
  group.addEventListener('pointerdown', press);
  group.addEventListener('click', preventDuplicateClick, true);
  window.addEventListener('pointermove', dragMove, { passive: false });
  window.addEventListener('pointerup', finishDrag);
  window.addEventListener('pointercancel', finishDrag);
  resizeObserver.observe(group);
  stateObserver.observe(group, { attributes: true, subtree: true, attributeFilter: ['aria-pressed', 'class'] });
  intersectionObserver.observe(group);
  resize();
  // Reveal WebGL only after its first successful render; HTML remains the hit target.
  cancelAnimationFrame(frame);
  animate(performance.now());
  group.classList.add('has-flutter');
  renderer.domElement.addEventListener('webglcontextlost', dispose);
  window.addEventListener('pagehide', dispose, { once: true });

  function dispose() {
    if (disposed) return;
    disposed = true;
    paperImage.onload = null;
    cancelAnimationFrame(frame);
    resizeObserver.disconnect(); stateObserver.disconnect(); intersectionObserver.disconnect();
    group.removeEventListener('pointermove', move);
    group.removeEventListener('pointerleave', leave);
    group.removeEventListener('pointerdown', press);
    group.removeEventListener('click', preventDuplicateClick, true);
    window.removeEventListener('pointermove', dragMove);
    window.removeEventListener('pointerup', finishDrag);
    window.removeEventListener('pointercancel', finishDrag);
    gesture?.locked.forEach(([button, wasDisabled]) => { button.disabled = wasDisabled; });
    gesture = null;
    suppressedClick = null;
    group.classList.remove('is-tear-locked');
    group.classList.remove('has-flutter');
    headerEdge?.setAttribute('d', 'M0 0H1V1H0Z');
    headerFibers.remove();
    renderer.domElement.removeEventListener('webglcontextlost', dispose);
    window.removeEventListener('pagehide', dispose);
    tabs.forEach(tab => {
      tab.tear?.resolve(false);
      tab.button.classList.remove('is-tearing', 'is-dragging');
      tab.button.style.removeProperty('translate');
      tab.button.style.removeProperty('z-index');
      tab.geometry.dispose(); tab.material.dispose(); tab.shadowMaterial.dispose(); tab.texture.dispose();
    });
    tearHandlers.delete(group);
    renderer.dispose(); renderer.domElement.remove(); mounted.delete(group);
  }
  mounted.set(group, dispose);
  tearHandlers.set(group, tear);
  return dispose;
}

if (import.meta.hot) import.meta.hot.dispose(() => { for (const dispose of mounted.values()) dispose(); });
