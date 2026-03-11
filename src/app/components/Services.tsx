import { useRef } from "react";
import { Palette, Share2, Target } from "lucide-react";
import { motion, useInView } from "motion/react";
import { GlassCard } from "./GlassCard";

const services = [
  {
    id: 1,
    icon: Share2,
    title: "Social Media Designs",
    description:
      "Stop the scroll and capture attention. I design strategic, minimalist social assets engineered to skyrocket engagement, build brand authority, and drive measurable sales for ambitious brands.",
  },
  {
    id: 2,
    icon: Palette,
    title: "Strategic Branding",
    description:
      "Your brand is your most valuable asset. I build premium, timeless identities that command higher prices, establish instant trust, and position you as the undisputed leader in your industry.",
  },
  {
    id: 3,
    icon: Target,
    title: "Click-Magnet Thumbnails",
    description:
      "First impressions dictate your success. I craft bold, hyper-optimized thumbnails for YouTube and social platforms guaranteed to maximize your CTR, hook viewers instantly, and exponentially grow your audience.",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="relative z-10 px-4 sm:px-6 py-14 sm:py-20 md:py-24"
      ref={sectionRef}
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-16 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute top-[-20px] right-[15%] text-[#BFFE5F]/10 text-8xl font-serif hidden md:block select-none pointer-events-none">
            *
          </div>
          <div className="absolute bottom-0 left-[15%] text-[#BFFE5F]/10 text-8xl font-serif hidden md:block select-none pointer-events-none">
            *
          </div>

          <p
            className="uppercase tracking-widest mb-3 sm:mb-4 font-['Inter',sans-serif] text-[#BFFE5F]"
            style={{ fontSize: "clamp(12px, 3vw, 14px)", fontWeight: 700 }}
          >
            What I Do
          </p>
          <h2
            className="text-white font-['Manrope',sans-serif] tracking-tight"
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
            }}
          >
            Services I Offer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative z-10">
          {services.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 * i,
                ease: "easeOut",
              }}
            >
              <GlassCard className="p-6 sm:p-8 md:p-10 group h-full">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#BFFE5F]/10 border border-[#BFFE5F]/20 flex items-center justify-center mb-5 sm:mb-8 transition-colors">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#BFFE5F] stroke-[1.5]" />
                </div>
                <h3
                  className="text-white mb-3 sm:mb-4 font-['Manrope',sans-serif]"
                  style={{ fontSize: "clamp(20px, 4vw, 24px)", fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#A1A1AA] font-['Inter',sans-serif]"
                  style={{
                    fontSize: "clamp(14px, 3.5vw, 16px)",
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
