import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const profileUrl =
  "https://4mrv3lw9pg.ucarecd.net/dded3849-bb01-43dc-803a-04e3d6958411/-/preview/845x1000/";

// OPTIMIZATION 3: Moved outside the component to prevent recreation on re-renders
const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// OPTIMIZATION 1: Framer Motion Variants for cleaner animation orchestration
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Automatically delays each child by 0.2s
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-10 sm:pb-16 z-10 overflow-hidden">
      
      {/* Container orchestrates the staggered children animations */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center z-20"
      >
        {/* Profile Orb */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8 sm:mb-10 group mt-4 md:mt-0"
        >
          <div className="absolute inset-0 bg-[#BFFE5F] rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

          {/* OPTIMIZATION 2: Replaced inline styles with Tailwind arbitrary values */}
          <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full p-1.5 sm:p-2 relative z-10 transition-transform duration-500 group-hover:scale-105 bg-[#141416]/65 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <ImageWithFallback
              src={profileUrl}
              alt="Iyanuoluwa Oluwayemi"
              className="w-full h-full rounded-full object-cover border border-white/5 transition-all duration-700"
            />
            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-4 h-4 sm:w-5 sm:h-5 bg-[#BFFE5F] rounded-full border-[3px] border-[#141416] shadow-[0_0_15px_rgba(191,254,95,0.6)] animate-pulse" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-center mb-5 sm:mb-6 font-['Manrope',sans-serif] max-w-[900px] px-2 text-[clamp(36px,10vw,88px)] font-bold leading-[1.05] tracking-tight"
        >
          <span className="text-white block">Minimalism that</span>
          {/* OPTIMIZATION 2: Text gradient converted to Tailwind */}
          <span className="block bg-gradient-to-br from-white to-[#BFFE5F] bg-clip-text text-transparent">
            converts.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-[#A1A1AA] text-center max-w-[600px] mb-8 sm:mb-10 font-['Inter',sans-serif] px-2 text-[clamp(15px,4vw,18px)] leading-relaxed font-normal"
        >
          Crafting visual identities and social media designs that raise brand
          visibility, drive real results, and elevate brand perception.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center w-full sm:w-auto px-2"
        >
          {/* OPTIMIZATION 4: Changed button to anchor tag for semantic HTML/SEO */}
          <a
            href="#work"
            onClick={(e) => scrollTo(e, "work")}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#BFFE5F] text-[#02403D] rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(191,254,95,0.3)] font-['Inter',sans-serif] text-[15px] font-semibold"
          >
            View my work
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <Link
            to="/enquiry"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full text-white transition-all duration-300 hover:scale-105 text-center font-['Inter',sans-serif] text-[15px] font-medium bg-[#141416]/45 backdrop-blur-2xl border border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)]"
          >
            Let's talk strategy
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
