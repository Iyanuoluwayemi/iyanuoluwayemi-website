import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectBySlug } from "../../sanity/client";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectDetails() {
  const { categoryId } = useParams();
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      if (!categoryId) return;
      try {
        const data = await getProjectBySlug(categoryId);
        setProject(data);
      } catch (error) {
        console.error("Error fetching project details from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProject();
  }, [categoryId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050805] flex flex-col items-center justify-center p-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-2 border-[#BFFE5F] border-t-transparent rounded-full mb-6"
        />
        <p className="text-[#BFFE5F] font-mono text-sm tracking-[0.3em] animate-pulse uppercase">
          Fetching Case Study
        </p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050805] text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-[#BFFE5F]">Project Not Found</h1>
        <Link to="/" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#050805] text-white selection:bg-[#BFFE5F] selection:text-[#050805]"
    >
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/60 hover:text-[#BFFE5F] transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back to Showcase</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-[#BFFE5F] font-mono text-sm tracking-widest uppercase mb-4 block">
              {project.role}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-medium">
              {project.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:pt-4"
          >
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-normal">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div 
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {project.gallery?.map((imgUrl: string, index: number) => (
            <div 
              key={index}
              className="break-inside-avoid rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <img 
                src={imgUrl} 
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-40">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden p-12 lg:p-24 text-center border border-[#BFFE5F]/30 bg-[#BFFE5F]/5"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#BFFE5F]/5 to-transparent pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10 text-white">
            Have a similar <br /> project in mind?
          </h2>
          <Link 
            to="/enquiry"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#BFFE5F] text-[#050805] rounded-full text-lg font-bold hover:scale-105 transition-transform relative z-10 group"
          >
            Start Your Project
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#BFFE5F]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#BFFE5F]/10 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>
      </section>
    </motion.div>
  );
}
