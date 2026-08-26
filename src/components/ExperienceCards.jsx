import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

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
                className="experience-subsection-title"
                id="professional-experience-title"
              >
                Professional Experience
              </h2>
            </div>
          </div>
        </div>
        <ExperienceStack />
      </section>

      <section
        className="life-experience-section"
        aria-labelledby="life-experience-title"
      >
        <div className="life-experience-heading">
          <h2
            className="experience-subsection-title"
            id="life-experience-title"
          >
            Life Experience
          </h2>
        </div>
      </section>
    </section>
  );
}
