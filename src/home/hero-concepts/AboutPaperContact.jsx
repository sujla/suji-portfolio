import paperTextureUrl from './flyer-paper-texture.jpg';

// Exposed white pulp follows the uneven left fracture of this horizontal tab.
const noise = (n) => {
  const value = Math.sin(n * 127.1 + 31.7) * 43758.5453;
  return value - Math.floor(value);
};
const edgePoints = Array.from({ length: 51 }, (_, i) => ({
  x: 1.2 + noise(i) * 3.8 + Math.sin(i * .43) * .7,
  y: 99 - i / 50 * 98,
}));
const tornSide = edgePoints.map(({ x, y }) => `L${x} ${y}`).join(' ');
const paperOutline = `M4 1 L58 1.8 L113 2.4 L176 4.1 L236 5.2 L237.2 34 L238.1 64 L239 95 L175 96.7 L113 96.2 L55 98.6 ${tornSide} Z`;
const pulpOutline = `M${edgePoints[0].x} ${edgePoints[0].y} ${tornSide} ${[...edgePoints].reverse().map(({ x, y }, i) => `L${x + 3 + noise(i + 70) * 4} ${y}`).join(' ')} Z`;
const fibers = edgePoints.map(({ x, y }, i) =>
  `M${x + 1} ${y} l${3 + noise(i + 110) * 5} ${(noise(i + 200) - .5) * 2.8}`
).join(' ');

export function AboutPaperContact() {
  return (
    <a className="about-paper-cta" href="mailto:kweonsuji@gmail.com" data-cursor-label="Email Suji">
      <svg className="about-contact-paper" viewBox="0 0 240 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="about-contact-paper-edge"><path d={paperOutline} /></clipPath>
          <linearGradient id="about-contact-paper-color" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--flyer-paper-color)" />
            <stop offset="1" stopColor="var(--flyer-gradient-end)" />
          </linearGradient>
        </defs>
        <g clipPath="url(#about-contact-paper-edge)">
          <rect width="240" height="100" fill="url(#about-contact-paper-color)" />
          <image href={paperTextureUrl} x="-50" y="-120" width="100" height="240" transform="translate(120 50) rotate(90) scale(2.2)" preserveAspectRatio="none" style={{ mixBlendMode: 'multiply', opacity: .65 }} />
          <path d={pulpOutline} fill="#fffaf3" />
          <path d={fibers} fill="none" stroke="#d6d2ca" strokeWidth=".45" opacity=".7" />
          <path d={fibers} transform="translate(.6 .55)" fill="none" stroke="#fffef9" strokeWidth=".6" />
        </g>
      </svg>
      <span className="about-paper-cta-copy">
        <span className="about-body">Curious to know more?</span>
        <span className="about-contact-link">Let&apos;s talk!</span>
      </span>
    </a>
  );
}
