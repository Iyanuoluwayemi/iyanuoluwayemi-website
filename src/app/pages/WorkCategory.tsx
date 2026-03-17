import { useState, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router";
import { ArrowLeft, ArrowUpRight, X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ProjectModal } from "../components/ProjectModal";
import { WORK_CATEGORIES, PROJECTS, SOCIAL_BRANDS, SocialBrand, Project } from "../data/projects";

const PREVIEW_COUNT = 4;

// ─── Cloudinary optimizer ───────────────────────────────────────────────────

const getOptimizedUrl = (url: string, type: 'thumbnail' | 'full' = 'thumbnail'): string => {
  if (!url.includes('cloudinary.com')) return url;
  const parts = url.split('/upload/');
  if (parts.length !== 2) return url;
  const t = type === 'thumbnail'
    ? 'c_fill,w_600,h_600,q_auto,f_auto'
    : 'q_auto,f_auto';
  return `${parts[0]}/upload/${t}/${parts[1]}`;
};

// ─── Protection helpers ──────────────────────────────────────────────────────

const noContext = (e: React.MouseEvent) => e.preventDefault();
// Use React's HTML drag event (not Framer's pan event) on plain divs/imgs only
const noDrag = (e: React.DragEvent) => e.preventDefault();

// ─── Social Media Lightbox ───────────────────────────────────────────────────

interface LightboxProps {
  images: string[];
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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center"
        style={{
          backgroundColor: "rgba(5,5,5,0.96)",
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
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white bg-white/10 hover:bg-white/20 transition-all border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 sm:left-8 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white bg-white/10 hover:bg-white/20 transition-all border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <motion.div
          key={current}
          className="relative max-w-[90vw] max-h-[88vh] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          onContextMenu={noContext}
        >
          {/* Transparent click-blocker overlay */}
          <div
            className="absolute inset-0 z-10 cursor-default"
            onContextMenu={noContext}
            style={{ userSelect: "none", WebkitUserSelect: "none" }}
          />
          <img
            src={getOptimizedUrl(images[current], 'full')}
            alt="Social media design"
            className="max-w-[90vw] max-h-[88vh] object-contain rounded-xl shadow-2xl"
            style={{
              pointerEvents: "none",
              userSelect: "none",
              WebkitUserSelect: "none",
            }}
            onContextMenu={noContext}
            draggable={false}
          />
        </motion.div>

        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 sm:right-8 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white bg-white/10 hover:bg-white/20 transition-all border border-white/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 font-['Inter'] text-sm tracking-widest">
            {current + 1} / {images.length}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Brand Section ────────────────────────────────────────────────────────────

interface BrandSectionProps {
  brand: SocialBrand;
  brandIndex: number;
  onImageClick: (images: string[], index: number) => void;
}

function BrandSection({ brand, brandIndex, onImageClick }: BrandSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = brand.images.length > PREVIEW_COUNT;
  const visibleImages = expanded ? brand.images : brand.images.slice(0, PREVIEW_COUNT);

  return (
    <motion.div
      className="mb-14 sm:mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.1 * brandIndex, ease: "easeOut" }}
    >
      {/* Brand header */}
      <div className="flex items-center gap-4 mb-6 sm:mb-8">
        <div className="h-[1px] w-8 bg-[#BFFE5F]/40" />
        <div className="flex flex-col gap-0.5">
          <h2 className="text-white font-['Manrope',sans-serif] font-semibold text-lg sm:text-xl tracking-tight">
            {brand.brandName}
          </h2>
          <span className="text-[#A1A1AA] font-['Inter',sans-serif] text-xs sm:text-sm tracking-wide">
            {brand.subtitle}
          </span>
        </div>
        <div className="h-[1px] flex-1 bg-white/8" />
        <span className="text-[#A1A1AA] font-['Inter',sans-serif] text-xs tracking-widest shrink-0">
          {brand.images.length} designs
        </span>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        <AnimatePresence initial={false}>
          {visibleImages.map((src, imgIndex) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: 0.04 * imgIndex }}
              className="relative overflow-hidden rounded-xl bg-[#0a0a0c] aspect-square cursor-pointer group"
              onClick={() => onImageClick(brand.images, imgIndex + (expanded ? 0 : 0))}
              onContextMenu={noContext}
            >
              <img
                src={getOptimizedUrl(src, 'thumbnail')}
                alt={`${brand.brandName} design ${imgIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  pointerEvents: "none",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  filter: "contrast(1.04) saturate(1.06)",
                }}
                onContextMenu={noContext}
                draggable={false}
              />
              {/* Transparent overlay blocks interaction */}
              <div
                className="absolute inset-0 z-10"
                onContextMenu={noContext}
                style={{ userSelect: "none", WebkitUserSelect: "none" }}
              />
              {/* Subtle hover state */}
              <div className="absolute inset-0 z-20 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-[10px] sm:text-xs font-['Inter'] tracking-widest uppercase bg-black/50 px-3 py-1 rounded-full">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View More / View Less */}
      {hasMore && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 text-[#A1A1AA] hover:text-white hover:border-[#BFFE5F]/40 transition-all duration-300 font-['Inter'] text-sm"
          >
            {expanded ? (
              <>View Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>View {brand.images.length - PREVIEW_COUNT} More <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      )}
    </motion.div>
  );
}

// ─── Social Media Gallery Page ────────────────────────────────────────────────

function SocialMediaGallery() {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-white font-sans w-full"
      style={{ backgroundColor: "#050505", userSelect: "none" }}
      onContextMenu={noContext}
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
            className="mb-14 sm:mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1
              className="text-white font-['Manrope',sans-serif] tracking-tight mb-6"
              style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.05 }}
            >
              Social Media Design
            </h1>
            <p
              className="text-[#A1A1AA] max-w-2xl font-['Inter',sans-serif]"
              style={{ fontSize: "clamp(15px, 3.5vw, 18px)", lineHeight: 1.8, fontWeight: 400 }}
            >
              In a digital world full of noise, I design to make your ideal customers{" "}
              <span className="text-white font-medium">stop scrolling and take action.</span> This
              curated collection of social media graphics, carousels, and campaigns goes beyond
              aesthetics. Every piece was strategically crafted to help my clients boost brand
              visibility, drive massive traffic, and ultimately{" "}
              <span className="text-white font-medium">increase their sales and revenue.</span>
              <br /><br />
              Take a look around, and let's talk about how we can build an unforgettable,
              high-converting presence for your brand.
            </p>
          </motion.div>

          {/* Brand Segments */}
          {SOCIAL_BRANDS.map((brand, i) => (
            <BrandSection
              key={brand.brandName}
              brand={brand}
              brandIndex={i}
              onImageClick={(images, index) => setLightbox({ images, index })}
            />
          ))}
        </div>
      </main>

      <Footer />

      {lightbox && (
        <SocialLightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}

// ─── Standard project card ────────────────────────────────────────────────────

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
          className={`relative overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-6 bg-[#0a0a0c] shrink-0 ${
            project.aspect === "wide"
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

// ─── Main page ────────────────────────────────────────────────────────────────

export default function WorkCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, [location]);

  // Social media gets its own dedicated layout
  if (categoryId === "social-media-design") {
    return <SocialMediaGallery />;
  }

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
      style={{ backgroundColor: "#050505" }}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} setSelectedProject={setSelectedProject} i={i} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-[#A1A1AA] font-['Inter'] text-lg border border-white/5 rounded-2xl bg-white/5">
              New projects dropping soon. Stay configured...
            </div>
          )}
        </div>
      </main>

      <Footer />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
