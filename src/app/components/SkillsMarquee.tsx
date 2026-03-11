import { useRef } from "react";
import { motion, useInView } from "motion/react";

const skills = [
  "Accessibility",
  "User Friendly",
  "Design Thinking",
  "Empathy",
  "Conversion Focused",
  "Minimalism",
  "Brand Strategy",
];

function StarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M12 24C11.65 12.63 11.37 12.35 0 12C11.37 11.65 11.65 11.37 12 0C12.35 11.37 12.63 11.65 24 12C12.63 12.35 12.35 12.63 12 24Z"
        fill="#02403D"
      />
    </svg>
  );
}

export function SkillsMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative z-10 py-3 sm:py-5 overflow-hidden border-y border-white/5"
      style={{
        background:
          "linear-gradient(167deg, rgba(198, 252, 166, 0.9) 0.38%, rgba(167, 252, 238, 0.6) 98.77%)",
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
          <div key={i} className="flex items-center gap-4 sm:gap-6 mx-3 sm:mx-4">
            <StarIcon />
            <span
              className="text-[#02403D] uppercase font-['Inter',sans-serif] tracking-wider"
              style={{ fontSize: "clamp(13px, 3.5vw, 16px)", fontWeight: 800 }}
            >
              {skill}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}