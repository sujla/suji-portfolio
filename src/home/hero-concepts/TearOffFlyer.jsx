import { motion, useSpring, useMotionTemplate } from 'framer-motion';
import { FlyerDotMatrix } from './FlyerDotMatrix.jsx';
import './tear-off-flyer.css';

export function TearOffFlyer() {
  const spring = { stiffness: 130, damping: 19, mass: .65 };
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const lift = useSpring(0, spring);
  const shadow = useMotionTemplate`0px ${lift}px ${lift}px rgba(45, 12, 32, 0.16)`;

  const liftHeader = (event) => {
    if (event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    rotateX.set(-1 - (1 - y) * 2.5);
    rotateY.set((x - .5) * 3);
    lift.set(4 + (1 - y) * 6);
  };
  const settleHeader = () => {
    rotateX.set(0);
    rotateY.set(0);
    lift.set(0);
  };

  return (
    <div className="hero-visual flyer-stage">
      <svg className="flyer-edge-defs" width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="flyer-header-torn-edge" clipPathUnits="objectBoundingBox">
            <path data-flyer-tear-edge d="M0 0H1V1H0Z" />
          </clipPath>
        </defs>
      </svg>
      <h1 className="flyer-side-copy flyer-side-copy--role" id="hero-title">Lead Product Designer</h1>
      <div className="flyer-stack">
        <article className="tear-flyer">
          <div className="flyer-header" onPointerMove={liftHeader} onPointerLeave={settleHeader} onPointerCancel={settleHeader}>
            <motion.div className="flyer-body" style={{ rotateX, rotateY, transformPerspective: 1000, boxShadow: shadow }}>
              <div className="flyer-copy">
                <h2 className="flyer-headline">Driving<br />measurable<br />impact</h2>
                <div className="flyer-caption" aria-label="Enterprise to Consumer Products">
                  <span className="flyer-caption-label">Enterprise</span>
                  <span className="flyer-caption-connector" aria-hidden="true">
                    <svg viewBox="0 0 320 40" preserveAspectRatio="none" focusable="false">
                      <path d="M1 21H104 M216 21H311" />
                      <ellipse cx="160" cy="21" rx="56" ry="13" />
                      <path className="flyer-caption-arrow" d="M311 21L301 15V27Z" />
                    </svg>
                    <span className="flyer-caption-to">to</span>
                  </span>
                  <span className="flyer-caption-label">Consumer Products</span>
                </div>
                <FlyerDotMatrix />
              </div>
            </motion.div>
          </div>
          <div data-pf-type-filter data-flyer-filters />
        </article>
      </div>
      <p className="flyer-side-copy flyer-side-copy--location">Based in Singapore 🇸🇬</p>
    </div>
  );
}
