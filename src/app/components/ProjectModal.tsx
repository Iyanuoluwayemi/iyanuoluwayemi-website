import { X, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md" />
      <div
        className="relative w-full sm:max-w-[900px] max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-t-[1.5rem] sm:rounded-[2rem]"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "rgba(20, 20, 22, 0.85)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow:
            "0 8px 48px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white bg-black/40 backdrop-blur-md transition-colors cursor-pointer border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative overflow-hidden rounded-t-[1.5rem] sm:rounded-t-[2rem] aspect-[16/10] bg-[#141416]">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgba(20,20,22,0.95)] to-transparent" />
        </div>

        <div className="p-5 sm:p-8 md:p-10 relative mt-[-2rem]">
          <span className="text-[#02403D] bg-[#BFFE5F] px-4 py-1.5 rounded-full font-['Inter',sans-serif] uppercase tracking-widest inline-block mb-5" style={{ fontSize: "11px", fontWeight: 700 }}>
            {project.category}
          </span>
          <h2
            className="text-white font-['Manrope',sans-serif] mb-4 tracking-tight"
            style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700 }}
          >
            {project.title}
          </h2>
          <p
            className="text-[#A1A1AA] font-['Inter',sans-serif] mb-6 sm:mb-8 max-w-[700px]"
            style={{ fontSize: "clamp(15px, 3.5vw, 18px)", lineHeight: 1.7, fontWeight: 400 }}
          >
            {project.description}
          </p>

          {project.behanceUrl && (
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-[#BFFE5F] text-[#02403D] rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(191,254,95,0.3)] font-['Inter',sans-serif]"
              style={{ fontSize: "clamp(14px, 3.5vw, 16px)", fontWeight: 600 }}
            >
              View Full Project
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}