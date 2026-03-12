import { useState, useRef, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { GlassCard } from "./GlassCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./ProjectModal";

interface Project {
  id: number;
  title: string;
  category: string;
  description: ReactNode;
  image: string;
  aspect: string;
  behanceUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Identity Design for Stuboard",
    category: "Visual Identity & Trust Architecture",
    description: (
      <div className="flex flex-col gap-4">
        <div>
          <strong className="block text-white text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">The Challenge:</strong>
          <span className="text-[#A1A1AA]">Stuboard needed students to trust them with their most important asset: their academics.</span>
        </div>
        <div>
          <strong className="block text-white text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">The Strategy:</strong>
          <span className="text-[#A1A1AA]">I moved away from "corporate" and focused on "approachable authority." By using a strategic color palette and a student-centric visual system, we built an identity that made students feel safe entrusting their academic journey to the brand.</span>
        </div>
        <div>
          <strong className="block text-[#BFFE5F] text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">Result:</strong>
          <span className="text-[#A1A1AA]">Established Stuboard as the go-to, reliable authority for the student demographic.</span>
        </div>
      </div>
    ),
    image:
      "https://4mrv3lw9pg.ucarecd.net/47a8a909-02a8-48f8-8de8-92de0174399e/-/preview/1000x900/",
    aspect: "square",
    behanceUrl:
      "https://www.behance.net/gallery/245571611/Stuboard-Brand-Identity",
  },
  {
    id: 2,
    title: "Social Media Campaign for CIH",
    category: "Strategic Social Campaign",
    description: (
      <div className="flex flex-col gap-4">
        <div>
          <strong className="block text-white text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">The Challenge:</strong>
          <span className="text-[#A1A1AA]">Selling sales-growth training to busy MSME owners who are skeptical of "marketing fluff."</span>
        </div>
        <div>
          <strong className="block text-white text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">The Strategy:</strong>
          <span className="text-[#A1A1AA]">I didn't just design; I researched. By identifying exactly what keeps small business owners up at night, I used specific visual elements and high-contrast layouts to stop the scroll and speak their language.</span>
        </div>
        <div>
          <strong className="block text-[#BFFE5F] text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">Result:</strong>
          <span className="text-[#A1A1AA]">Successfully reached and converted 30 MSMEs in less than 2 weeks, proving the power of intent-matched design.</span>
        </div>
      </div>
    ),
    image:
      "https://4mrv3lw9pg.ucarecd.net/436840ed-b8a4-4c5d-973d-54f245c60f4e/-/preview/800x1000/",
    aspect: "square",
  },
  {
    id: 3,
    title: "Social Media Design for Chilled By T",
    category: "Packaging & Market Positioning",
    description: (
      <div className="flex flex-col gap-4">
        <div>
          <strong className="block text-white text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">The Challenge:</strong>
          <span className="text-[#A1A1AA]">Rebranding a local Zobo drink to appeal to both students and office workers who value health as much as taste.</span>
        </div>
        <div>
          <strong className="block text-white text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">The Strategy:</strong>
          <span className="text-[#A1A1AA]">I handled the packaging and market entry strategy. The goal was twofold: trigger an instant "thirst" response while using clean, "safe" design cues to signal health-consciousness.</span>
        </div>
        <div>
          <strong className="block text-[#BFFE5F] text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">Result:</strong>
          <span className="text-[#A1A1AA]">Sales skyrocketed by 50% in the first week post-rebrand, reaching 250% growth within the first month through strategic market positioning.</span>
        </div>
      </div>
    ),
    image:
      "https://4mrv3lw9pg.ucarecd.net/919f6870-136b-4dd7-a341-4f0d124b226a/-/preview/1000x1000/",
    aspect: "wide",
  },
];

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
                      <div
                        className="text-[#A1A1AA] font-['Inter',sans-serif] max-w-3xl"
                        style={{
                          fontSize: "clamp(13px, 3vw, 14px)",
                          lineHeight: 1.6,
                          fontWeight: 400,
                        }}
                      >
                        {project.description}
                      </div>
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
