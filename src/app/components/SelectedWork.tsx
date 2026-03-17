import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router";
import { GlassCard } from "./GlassCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { WORK_CATEGORIES, WorkCategory } from "../data/projects";

const CategoryCard = ({ category, i }: { category: WorkCategory; i: number }) => (
  <motion.div
    key={category.id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      duration: 0.7,
      delay: 0.15 * i,
      ease: "easeOut",
    }}
  >
    <Link to={`/work/${category.id}`} className="block h-full outline-none">
      <GlassCard className="group cursor-pointer h-full">
        <div className="p-3 sm:p-4 md:p-6 h-full flex flex-col">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-6 bg-[#0a0a0c] shrink-0 aspect-[4/3] sm:aspect-video">
            <ImageWithFallback
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Neuromorphic / Solid Neutral Hover Overlay with Go To Icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#050505]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-white font-['Manrope',sans-serif] text-base md:text-lg font-bold tracking-widest uppercase">
                  View My Work
                </span>
                <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7 text-[#BFFE5F]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 grow">
            <h3
              className="text-white font-['Manrope',sans-serif] tracking-tight"
              style={{ fontSize: "clamp(20px, 4vw, 26px)", fontWeight: 600 }}
            >
              {i + 1}. {category.title}
            </h3>
            <span
              className="text-[#A1A1AA] font-['Inter',sans-serif]"
              style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 400 }}
            >
              ({category.subtitle})
            </span>
          </div>
        </div>
      </GlassCard>
    </Link>
  </motion.div>
);

export function SelectedWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="work"
      className="relative z-10 px-4 sm:px-6 py-14 sm:py-20 md:py-24"
      ref={sectionRef}
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2
            className="text-white font-['Manrope',sans-serif] tracking-tight"
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
            }}
          >
            Core Work Showcase
          </h2>
          <p
            className="text-[#A1A1AA] mt-3 sm:mt-4 max-w-3xl font-['Inter',sans-serif]"
            style={{ fontSize: "clamp(14px, 3.5vw, 16px)", lineHeight: 1.7 }}
          >
            A curated selection of visual narratives designed to break through
            the noise, elevate brands, and convert attention into results across
            various core disciplines.
          </p>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {WORK_CATEGORIES.map((category, i) => (
            <CategoryCard key={category.id} category={category} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
