import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getProjects } from '../../sanity/client';

// --- OPTIMIZATION HELPER (Forcing AVIF for maximum speed where applicable) ---
const optimizeUrl = (url: string) => {
  if (!url) return '';
  // Only apply to Cloudinary URLs if any still exist
  if (url.includes('/upload/') && !url.includes('f_avif')) {
    return url.replace('/upload/', '/upload/f_avif,q_auto,w_800/');
  }
  return url;
};

export function ProjectShowcase() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data || []);
      } catch (error) {
        console.error("Error fetching projects from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const nextSlide = useCallback(() => {
    if (projects.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    if (projects.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    if (isDragging || projects.length === 0) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isDragging, nextSlide, projects.length]);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    if (info.offset.x > 50) prevSlide();
    else if (info.offset.x < -50) nextSlide();
  };

  if (isLoading) {
    return (
      <div className="w-full py-24 flex flex-col items-center justify-center bg-[#050805] min-h-[600px]">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5] 
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="w-16 h-16 border-4 border-[#BFFE5F] border-t-transparent rounded-full"
        />
        <p className="text-[#BFFE5F] mt-8 font-medium tracking-widest text-sm animate-pulse">
          LOADING CURATED WORK
        </p>
      </div>
    );
  }

  if (projects.length === 0) return null;

  return (
    <motion.section 
      id="work"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full py-24 overflow-hidden flex flex-col items-center justify-center z-0 bg-[#050805]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#BFFE5F]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="text-center max-w-4xl px-6 mx-auto mb-16 z-20">
        <h2 className="text-5xl md:text-[64px] font-bold tracking-tight mb-4 text-[#BFFE5F]">
          Project Showcase
        </h2>
        <p className="text-white/80 text-[14px] md:text-[16px] leading-[1.6] font-normal max-w-[650px] mx-auto">
          Design Is A Business Investment, Not A Decoration. This Is A Curated Selection Of Brand Identities And Digital Assets Engineered To Break Through Market Noise And Convert Passive Attention Into Measurable Authority.
        </p>
      </div>

      <div className="relative w-full max-w-[100vw] h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center perspective-[1000px]">
        <AnimatePresence mode='popLayout'>
          {projects.map((project, index) => {
            const offset = index - currentIndex;
            let visualOffset = offset;
            if (offset > projects.length / 2) visualOffset -= projects.length;
            if (offset < -projects.length / 2) visualOffset += projects.length;

            const isCenter = visualOffset === 0;
            const absOffset = Math.abs(visualOffset);
            if (absOffset > 2) return null;

            const xOffset = visualOffset * 95; 
            const scale = isCenter ? 1 : Math.max(0.8, 1 - absOffset * 0.1);
            const zIndex = 10 - absOffset;
            const opacity = isCenter ? 1 : Math.max(0.4, 1 - absOffset * 0.4);

            return (
              <motion.div
                key={project.slug}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                animate={{ x: `${xOffset}%`, scale, zIndex, opacity }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className={`absolute w-[80%] sm:w-[70%] md:w-[55%] max-w-[850px] aspect-[1.6] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-grab active:cursor-grabbing border transition-shadow duration-500 ${isCenter ? 'border-[#BFFE5F]/50 shadow-[0_0_40px_rgba(191,254,95,0.2)]' : 'border-transparent'} bg-[#0a0f0a]`}
              >
                <img src={optimizeUrl(project.coverImage)} alt={project.title} className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none opacity-80" />

                <div className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end pointer-events-none transition-opacity duration-500 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-white/80 text-sm md:text-base font-medium">{project.subtitle}</p>
                    </div>
                    <Link 
                      to={`/work/${project.slug}`}
                      className="pointer-events-auto px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white text-sm font-medium transition-all hover:bg-white hover:text-black hover:border-white w-fit shrink-0"
                      onClick={(e) => { if(!isCenter) e.preventDefault(); }} 
                    >
                      View Project
                    </Link>
                  </div>
                </div>
                {!isCenter && <div className="absolute inset-0 bg-black/60 pointer-events-none" />}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3 mt-12 z-20">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full w-2 h-2 ${currentIndex === index ? "bg-white" : "bg-white/30 hover:bg-white/60"}`}
          />
        ))}
      </div>
    </motion.section>
  );
}