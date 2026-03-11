import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { GlassCard } from "./GlassCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "Brand Identity Design for Stuboard",
    category: "Visual Identity",
    description:
      "A complete brand identity system for Stuboard — from logo design and typography to color palettes and brand guidelines — built to establish trust, recognition, and a premium market position.",
    image:
      "https://4mrv3lw9pg.ucarecd.net/47a8a909-02a8-48f8-8de8-92de0174399e/-/preview/1000x900/",
    aspect: "square",
    behanceUrl:
      "https://www.behance.net/gallery/245571611/Stuboard-Brand-Identity",
  },
  {
    id: 2,
    title: "Social Media Campaign for CIH",
    category: "Social Media Design",
    description:
      "A strategic social media campaign designed to boost brand visibility and audience engagement for CIH, raising awareness and driving meaningful interactions across platforms.",
    image:
      "https://4mrv3lw9pg.ucarecd.net/436840ed-b8a4-4c5d-973d-54f245c60f4e/-/preview/800x1000/",
    aspect: "square",
  },
  {
    id: 3,
    title: "Social Media Design for Chilled By T",
    category: "Social Media Design",
    description:
      "Eye-catching social media content for Chilled By T, a local drink brand — designed to strengthen brand presence, increase visibility, and connect with a wider audience.",
    image:
      "https://4mrv3lw9pg.ucarecd.net/919f6870-136b-4dd7-a341-4f0d124b226a/-/preview/1000x1000/",
    aspect: "wide",
  },
];

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <>
      <section
        id="work"
        className="relative z-10 px-4 sm:px-6 py-14 sm:py-20 md:py-24"
        ref={sectionRef}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="mb-10 sm:mb-16"
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
              Selected Work
            </h2>
            <p
              className="text-[#A1A1AA] mt-3 sm:mt-4 max-w-xl font-['Inter',sans-serif]"
              style={{ fontSize: "clamp(14px, 3.5vw, 16px)", lineHeight: 1.7 }}
            >
              A curated showcase of design systems and visual narratives that
              converted attention into quantifiable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className={project.aspect === "wide" ? "md:col-span-2" : ""}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.15 * i,
                  ease: "easeOut",
                }}
              >
                <GlassCard
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="p-3 sm:p-4 md:p-6">
                    <div
                      className={`relative overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-6 bg-[#0a0a0c] ${
                        project.aspect === "wide"
                          ? "aspect-[16/9] md:aspect-[21/9]"
                          : "aspect-[4/3] sm:aspect-square"
                      }`}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#BFFE5F] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                          <ArrowUpRight className="w-7 h-7 sm:w-8 sm:h-8 text-[#02403D]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <h3
                        className="text-white font-['Manrope',sans-serif]"
                        style={{ fontSize: "clamp(18px, 4vw, 22px)", fontWeight: 600 }}
                      >
                        {project.title}
                      </h3>
                      <span
                        className="text-[#BFFE5F] font-['Inter',sans-serif] uppercase tracking-widest"
                        style={{ fontSize: "11px", fontWeight: 700 }}
                      >
                        {project.category}
                      </span>
                      <p
                        className="text-[#A1A1AA] font-['Inter',sans-serif] max-w-3xl"
                        style={{
                          fontSize: "clamp(13px, 3vw, 14px)",
                          lineHeight: 1.6,
                          fontWeight: 400,
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
