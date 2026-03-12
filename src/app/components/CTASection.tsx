import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="relative z-10 px-4 sm:px-6 py-14 sm:py-20 md:py-32"
      ref={sectionRef}
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 md:p-16 lg:p-20 gap-8 md:gap-8"
          style={{
            backgroundColor: "rgba(20, 20, 22, 0.6)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 40px 100px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.2)",
          }}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Giant subtle glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(191,254,95,0.08) 0%, transparent 65%)",
            }}
          />

          {/* Text Content */}
          <div className="flex-1 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.span
              className="text-[#BFFE5F] font-['Inter',sans-serif] uppercase tracking-[0.2em] mb-4 sm:mb-6 block"
              style={{ fontSize: "clamp(12px, 3vw, 14px)", fontWeight: 700 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's Collaborate
            </motion.span>

            <motion.h2
              className="text-white mb-4 sm:mb-6 font-['Manrope',sans-serif] text-balance"
              style={{
                fontSize: "clamp(28px, 7vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Ready to elevate your{" "}
              <br className="hidden xl:block" />
              brand's perception?
            </motion.h2>

            <motion.p
              className="text-[#A1A1AA] mb-8 sm:mb-10 max-w-[500px] font-['Inter',sans-serif]"
              style={{ fontSize: "clamp(15px, 3.5vw, 18px)", lineHeight: 1.7, fontWeight: 400 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Let's connect and create something amazing. Whether it's a
              complete visual identity or high-converting social media templates,
              I'm here to help.
            </motion.p>

            <motion.div
              className="inline-flex"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Link
                to="/enquiry"
                className="px-8 py-4 sm:px-10 sm:py-5 bg-[#BFFE5F] text-[#02403D] rounded-full flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(191,254,95,0.4)] font-['Inter',sans-serif]"
                style={{ fontSize: "clamp(15px, 3.5vw, 18px)", fontWeight: 700 }}
              >
                Start a Project
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            className="w-full md:w-auto relative shrink-0 flex justify-center z-10 mt-4 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Backdrop Glow */}
            <div className="absolute inset-0 bg-[#BFFE5F] blur-[60px] opacity-15 rounded-full scale-75" />

            <ImageWithFallback
              src="https://4mrv3lw9pg.ucarecd.net/5230a35b-a236-4206-93b0-0907d660c0f5/-/preview/666x1000/"
              alt="Iyanuoluwa Oluwayemi"
              className="relative w-[220px] sm:w-[280px] md:w-[300px] lg:w-[380px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
