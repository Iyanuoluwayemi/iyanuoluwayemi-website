import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const profileUrl =
  "https://4mrv3lw9pg.ucarecd.net/dded3849-bb01-43dc-803a-04e3d6958411/-/preview/845x1000/";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-10 sm:pb-16 z-10 overflow-hidden">
      {/* Profile Orb */}
      <motion.div
        className="relative mb-8 sm:mb-10 group mt-4 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[#BFFE5F] rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

        <div
          className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full p-1.5 sm:p-2 relative z-10 transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundColor: "rgba(20, 20, 22, 0.65)",
            backdropFilter: "blur(32px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
          }}
        >
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
        className="text-center mb-5 sm:mb-6 font-['Manrope',sans-serif] max-w-[900px] z-20 px-2"
        style={{
          fontSize: "clamp(36px, 10vw, 88px)",
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <span className="text-white block">Minimalism that</span>
        <span
          className="block"
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #BFFE5F 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          converts.
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        className="text-[#A1A1AA] text-center max-w-[600px] mb-8 sm:mb-10 font-['Inter',sans-serif] z-20 px-2"
        style={{ fontSize: "clamp(15px, 4vw, 18px)", lineHeight: 1.7, fontWeight: 400 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        Crafting visual identities and social media designs that raise brand
        visibility, drive real results, and elevate brand perception.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center z-20 w-full sm:w-auto px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <button
          onClick={() => scrollTo("work")}
          className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#BFFE5F] text-[#02403D] rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(191,254,95,0.3)] cursor-pointer font-['Inter',sans-serif]"
          style={{ fontSize: "15px", fontWeight: 600 }}
        >
          View my work
          <ArrowUpRight className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full text-white transition-all duration-300 hover:scale-105 cursor-pointer font-['Inter',sans-serif]"
          style={{
            fontSize: "15px",
            fontWeight: 500,
            backgroundColor: "rgba(20, 20, 22, 0.45)",
            backdropFilter: "blur(32px)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            boxShadow:
              "0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
          }}
        >
          Let's talk strategy
        </button>
      </motion.div>
    </section>
  );
}
