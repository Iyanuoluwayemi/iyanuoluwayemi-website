import { useState, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router";
import { ArrowLeft, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ProjectModal } from "../components/ProjectModal";
import { WORK_CATEGORIES, PROJECTS, Project } from "../data/projects";

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Prevents right-click, drag, and long-press saving on an element */
const protectProps = {
  onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
  onDragStart: (e: React.DragEvent) => e.preventDefault(),
  draggable: false,
};

// ─── Social Media Lightbox ───────────────────────────────────────────────────

interface LightboxProps {
  images: Project[];
  startIndex: number;
  onClose: () => void;
}

function SocialLightbox({ images, startIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() =>
    setCurrent((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() =>
    setCurrent((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  // Prevent body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center"
        style={{
          backgroundColor: "rgba(5,5,5,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white bg-white/10 hover:bg-white/20 transition-all border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Prev */}
        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 sm:left-8 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white bg-white/10 hover:bg-white/20 transition-all border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Image */}
        <motion.div
          key={current}
          className="relative max-w-[90vw] max-h-[88vh] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          {...protectProps}
        >
          {/* Transparent overlay blocks right-click / long-press save on the image */}
          <div
            className="absolute inset-0 z-10 cursor-default"
            {...protectProps}
            style={{ userSelect: "none", WebkitUserSelect: "none" }}
          />
          <img
            src={images[current].image}
            alt={images[current].title}
            className="max-w-[90vw] max-h-[88vh] object-contain rounded-xl shadow-2xl"
            style={{
              pointerEvents: "none",
              userSelect: "none",
              WebkitUserSelect: "none",
              imageRendering: "high-quality",
            }}
            {...protectProps}
          />
        </motion.div>

        {/* Next */}
        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 sm:right-8 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white bg-white/10 hover:bg-white/20 transition-all border border-white/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 font-['Inter'] text-sm tracking-widest">
            {current + 1} / {images.length}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Standard project card (hover + description) ─────────────────────────────

const ProjectCard = ({ project, setSelectedProject, i }: {
  project: Project;
  setSelectedProject: (p: Project) => void;
  i: number;
}) => (
  <motion.div
    key={project.id}
    className={project.aspect === "wide" ? "md:col-span-2" : ""}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay: 0.15 * i, ease: "easeOut" }}
  >
    <GlassCard className="group cursor-pointer h-full" onClick={() => setSelectedProject(project)}>
      <div className="p-3 sm:p-4 md:p-6 h-full flex flex-col">
        <div
          className={`relative overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-6 bg-[#0a0a0c] shrink-0 ${project.aspect === "wide"
              ? "aspect-[16/9] md:aspect-[21/9]"
              : project.aspect === "16/9"
                ? "aspect-video"
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
        <div className="flex flex-col gap-2 sm:gap-3 grow">
          <h3 className="text-white font-['Manrope',sans-serif]" style={{ fontSize: "clamp(18px, 4vw, 22px)", fontWeight: 600 }}>
            {project.title}
          </h3>
          <span className="text-[#BFFE5F] font-['Inter',sans-serif] uppercase tracking-widest" style={{ fontSize: "11px", fontWeight: 700 }}>
            {project.category}
          </span>
          <div className="text-[#A1A1AA] font-['Inter',sans-serif] max-w-3xl" style={{ fontSize: "clamp(13px, 3vw, 14px)", lineHeight: 1.6, fontWeight: 400 }}>
            {project.description}
          </div>
        </div>
      </div>
    </GlassCard>
  </motion.div>
);

// ─── Protected image card (social media grid) ────────────────────────────────

const ImageCard = ({ project, i, onClick }: {
  project: Project;
  i: number;
  onClick: () => void;
}) => (
  <motion.div
    key={project.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, delay: 0.08 * i, ease: "easeOut" }}
    className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#0a0a0c] aspect-square cursor-pointer group"
    onClick={onClick}
    {...protectProps}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      style={{
        pointerEvents: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
        imageRendering: "high-quality",
        filter: "contrast(1.04) saturate(1.08)",
      }}
      {...protectProps}
    />
    {/* Transparent protective overlay */}
    <div
      className="absolute inset-0 z-10"
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
      {...protectProps}
    />
    {/* Tap-hint overlay */}
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-white text-xs font-['Inter'] tracking-widest uppercase bg-black/50 px-3 py-1.5 rounded-full">
        View
      </span>
    </div>
  </motion.div>
);

// ─── Page ────────────────────────────────────────────────────────────────────

export default function WorkCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isSocialMedia = categoryId === "social-media-design";

  useEffect(() => { window.scrollTo(0, 0); }, [location]);

  const categoryInfo = WORK_CATEGORIES.find((c) => c.id === categoryId);
  const projects = categoryId ? PROJECTS[categoryId] || [] : [];

  if (!categoryInfo) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-4 font-['Manrope']">Category Not Found</h1>
        <Link to="/" className="text-[#BFFE5F] underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-white font-sans w-full"
      style={{ backgroundColor: "#050505", userSelect: isSocialMedia ? "none" : undefined }}
      {...(isSocialMedia ? protectProps : {})}
    >
      <Navigation />

      <main className="w-full pt-28 sm:pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate("/#work")}
            className="group flex flex-row items-center gap-2 text-[#A1A1AA] hover:text-[#BFFE5F] transition-colors mb-8 sm:mb-12 font-['Inter']"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to All Work
          </button>

          <motion.div
            className="mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1
              className="text-white font-['Manrope',sans-serif] tracking-tight mb-4"
              style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700 }}
            >
              {categoryInfo.title}
            </h1>
            <p
              className="text-[#A1A1AA] max-w-3xl font-['Inter',sans-serif]"
              style={{ fontSize: "clamp(16px, 4vw, 20px)", lineHeight: 1.7 }}
            >
              Explore my selected {categoryInfo.title.toLowerCase()} works. {categoryInfo.subtitle}
            </p>
          </motion.div>

          {projects.length > 0 ? (
            isSocialMedia ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {projects.map((project, i) => (
                  <ImageCard
                    key={project.id}
                    project={project}
                    i={i}
                    onClick={() => setLightboxIndex(i)}
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {projects.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    setSelectedProject={setSelectedProject}
                    i={i}
                  />
                ))}
              </div>
            )
          ) : (
            <div className="py-20 text-center text-[#A1A1AA] font-['Inter'] text-lg border border-white/5 rounded-2xl bg-white/5">
              New projects dropping soon. Stay configured...
            </div>
          )}
        </div>
      </main>

      <Footer />

      {!isSocialMedia && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {isSocialMedia && lightboxIndex !== null && (
        <SocialLightbox
          images={projects}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
