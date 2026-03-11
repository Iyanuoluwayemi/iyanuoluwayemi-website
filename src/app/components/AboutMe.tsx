import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { GlassCard } from "./GlassCard";

function CountUp({
  target,
  suffix = "",
  duration = 2000,
  start = false,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Brands Elevated" },
  { value: 0, suffix: "", label: "Focused Design", text: "ROI" },
];

export function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-30px" });

  return (
    <motion.section
      id="about"
      className="relative z-10 px-4 sm:px-6 py-14 sm:py-20 md:py-24"
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <GlassCard className="p-5 sm:p-8 md:p-12 lg:p-16" hover={false}>
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <motion.span
                className="text-[#BFFE5F] font-['Inter',sans-serif] uppercase tracking-widest mb-3 sm:mb-4 block"
                style={{ fontWeight: 600, fontSize: "12px" }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                The Story
              </motion.span>
              <motion.h2
                className="text-white font-['Manrope',sans-serif] mb-6 sm:mb-8 tracking-tight"
                style={{
                  fontSize: "clamp(26px, 5vw, 44px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                I build identities that drive{" "}
                <br className="hidden sm:block" />
                <span className="italic text-[#BFFE5F]">
                  real business growth.
                </span>
              </motion.h2>
              <motion.div
                className="space-y-4 sm:space-y-6 text-[#A1A1AA] font-['Inter',sans-serif]"
                style={{ fontSize: "clamp(15px, 3.5vw, 18px)", lineHeight: 1.7 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <p>
                  Hi, I'm Iyanuoluwa. As a dedicated Visual Identity and Social
                  Media Designer, my core mission is simple:{" "}
                  <strong className="text-white" style={{ fontWeight: 500 }}>
                    I help my clients increase their online sales through
                    minimal, bold, and functional designs.
                  </strong>
                </p>
                <p>
                  I believe that good design is far more than just
                  aesthetics—it's a strategic tool. By crafting compelling brand
                  identities and structured visual systems, I create
                  scroll-stopping experiences that build instant trust, capture
                  attention, and ultimately convert your audience into loyal
                  customers.
                </p>
              </motion.div>

              <div
                ref={statsRef}
                className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-10 border-t border-white/10"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * i }}
                  >
                    <h4
                      className="text-white font-['Manrope',sans-serif]"
                      style={{ fontSize: "clamp(24px, 5vw, 30px)", fontWeight: 700 }}
                    >
                      {stat.text ? (
                        stat.text
                      ) : (
                        <CountUp
                          target={stat.value}
                          suffix={stat.suffix}
                          start={statsInView}
                        />
                      )}
                    </h4>
                    <p
                      className="text-[#A1A1AA] mt-1 font-['Inter',sans-serif]"
                      style={{ fontSize: "clamp(11px, 2.5vw, 14px)" }}
                    >
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <motion.div
              className="w-full lg:w-[380px] shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="w-full aspect-square rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent flex items-center justify-center p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(191,254,95,0.15),transparent_50%)]" />
                <p
                  className="font-['Manrope',sans-serif] text-white/90 relative z-10"
                  style={{
                    fontSize: "clamp(20px, 4vw, 30px)",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  "Design is the <br /> silent ambassador <br /> of your brand."
                </p>
              </div>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </motion.section>
  );
}
