import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router'; // Corrected from react-router-dom
import ShinyText from '../../component/ShinyText'; // Adjust if your path is different

// --- OPTIMIZATION HELPER ---
const optimizeUrl = (url: string) => {
  if (!url) return '';
  if (url.includes('/upload/') && !url.includes('f_auto')) {
    return url.replace('/upload/', '/upload/f_auto,q_auto,w_1600/');
  }
  return url;
};

// --- FULL PROJECTS DATABASE ---
export const projectsDatabase: Record<string, any> = {
  stuboard: {
    id: 'stuboard',
    title: "Stuboard Branding",
    subtitle: "App For Student Management",
    role: "Brand Identity & UI Direction",
    coverImage: optimizeUrl("https://res.cloudinary.com/dykvipays/image/upload/v1774533531/Stu_App_icon_3x_r4zdos.png"),
    description: "A comprehensive brand identity and UI mockup system designed to position Stuboard as the premier student management application. The visual language focuses on modern typography, vibrant accents, and seamless digital utility.",
    gallery: [
      "https://res.cloudinary.com/dykvipays/image/upload/v1774580169/Billboard_Mockup_e_j2mhdf.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1774580157/Lanyard_ID_badge_mockup_ls7cvv.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1774580153/IG_profile_Mockup_2_yswqac.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1774580144/Profile_UI_mockup_wt2ejz.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1774533536/Primary_Logo_Light_Blue_szhjs9.jpg",
      "https://res.cloudinary.com/dykvipays/image/upload/v1774533397/Banner_cesign2_nxx6ih.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1774533468/Subway_Banner_front_design_nmdzam.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1774533440/Round_sticker_mockup_gtjbdv.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1774533421/Billboard_Mockup_cltga0.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1774533479/Stationery_Mockup_4_cko2jz.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1774533531/Stu_App_icon_3x_r4zdos.png"
    ].map(optimizeUrl)
  },
  teesther: {
    id: 'teesther',
    title: "Teesther",
    subtitle: "Cakes, Pastries & Peanuts",
    role: "Social Media & Advertising Design",
    coverImage: optimizeUrl("https://res.cloudinary.com/dykvipays/image/upload/v1773727607/Delivery_Design_iljdfr.png"),
    description: "Appetite-inducing social media campaigns and ad designs for Teesther. The strategy relied on warm, rich color palettes to highlight product quality, driving engagement and direct orders across digital platforms.",
    gallery: [
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727617/Cakes_Design_jwtys6.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727613/Pastries_Design_wtnh3u.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727606/Peanut_Design_crtmfd.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727611/Teesther_Ad_design_zdolc2.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727607/Delivery_Design_iljdfr.png"
    ].map(optimizeUrl)
  },
  solacx: {
    id: 'solacx',
    title: "Solacx",
    subtitle: "Social Media Campaigns",
    role: "Social Media Designer",
    coverImage: optimizeUrl("https://res.cloudinary.com/dykvipays/image/upload/v1773726934/December_Mypayhh_rficsj.png"),
    description: "Targeted marketing ad designs tailored to client specifications and audience psychology. These visual assets anchored a major marketing campaign that successfully acquired 30 high-value business prospects within a single week.",
    gallery: [
      "https://res.cloudinary.com/dykvipays/image/upload/v1773726930/Feb_1st_dczoug.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773726926/February_11_yeddmz.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773726931/Merry_Christmas_rilt4a.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773726933/November_3_cslkcv.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773726934/December_Mypayhh_rficsj.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728986/January_19_ccndc5.png"
    ].map(optimizeUrl)
  },
  cih: {
    id: 'cih',
    title: "Cafe Innovate Hub",
    subtitle: "Thumbnail & Visual Assets",
    role: "Brand Designer",
    coverImage: optimizeUrl("https://res.cloudinary.com/dykvipays/image/upload/v1774533820/Coffee_Chat_Series_With_Seun_Thumbnail_1_grusfz.png"),
    description: "A premium and trustworthy visual presence aimed at youth and MSME development. The compelling, conversion-focused promotional campaigns for these exclusive training sessions successfully translated brand trust into ~₦1M in revenue.",
    gallery: [
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727732/Coffee_Chat_x_Princess_Edokpay_ny7wtg.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727737/Sell_Like_A_Pro_edited_pg6y3j.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728098/Myth_vs_truth_7_ejyrel.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728097/Myth_vs_truth_1_uk1dcy.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728032/03_days_to_SLAP_nyav0s.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728031/March_Edit_2_iqg12k.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728027/Coffee_Chat_digitial_dividend_tzd8qp.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727740/Myth_vs_truth_5_hqj6n3.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728131/Sell_Like_A_Pro_Challenge_hnuj2o.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728189/Coffee_Chat_w_Peter_IG_gclrcr.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1774580668/Unlocking_Opportunities_With_Ai_wyemc3.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1774580683/Coffee_Chat_Series_With_Emmanuel_yt2_cybfwn.png"
    ].map(optimizeUrl)
  }
};

const carouselProjects = [
  projectsDatabase.stuboard,
  projectsDatabase.cih,
  projectsDatabase.teesther,
  projectsDatabase.solacx
];

// --- CAROUSEL VIEW ---
function ProjectCarousel({ onViewProject }: { onViewProject: (id: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const nextSlide = useCallback(() => setCurrentIndex((prev) => (prev + 1) % carouselProjects.length), []);
  const prevSlide = useCallback(() => setCurrentIndex((prev) => (prev - 1 + carouselProjects.length) % carouselProjects.length), []);

  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isDragging, nextSlide]);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    if (info.offset.x > 50) prevSlide();
    else if (info.offset.x < -50) nextSlide();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      className="relative w-full py-24 overflow-hidden flex flex-col items-center justify-center z-0"
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
        {carouselProjects.map((project, index) => {
          const offset = index - currentIndex;
          let visualOffset = offset;
          if (offset > carouselProjects.length / 2) visualOffset -= carouselProjects.length;
          if (offset < -carouselProjects.length / 2) visualOffset += carouselProjects.length;

          const isCenter = visualOffset === 0;
          const absOffset = Math.abs(visualOffset);
          if (absOffset > 2) return null;

          const xOffset = visualOffset * 95; 
          const scale = isCenter ? 1 : Math.max(0.8, 1 - absOffset * 0.1);
          const zIndex = 10 - absOffset;
          const opacity = isCenter ? 1 : Math.max(0.4, 1 - absOffset * 0.4);

          return (
            <motion.div
              key={project.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              animate={{ x: `${xOffset}%`, scale, zIndex, opacity }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className={`absolute w-[80%] sm:w-[70%] md:w-[55%] max-w-[850px] aspect-[1.6] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-grab active:cursor-grabbing border transition-shadow duration-500 ${isCenter ? 'border-[#BFFE5F]/50 shadow-[0_0_40px_rgba(191,254,95,0.2)]' : 'border-transparent'} bg-[#0a0f0a]`}
            >
              <img src={project.coverImage} alt={project.title} className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none opacity-80" />

              <div className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end pointer-events-none transition-opacity duration-500 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm md:text-base font-medium">{project.subtitle}</p>
                  </div>
                  <button 
                    className="pointer-events-auto px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white text-sm font-medium transition-all hover:bg-white hover:text-black hover:border-white w-fit shrink-0"
                    onClick={(e) => { e.stopPropagation(); onViewProject(project.id); }}
                  >
                    View Project
                  </button>
                </div>
              </div>
              {!isCenter && <div className="absolute inset-0 bg-black/60 pointer-events-none" />}
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center gap-3 mt-12 z-20">
        {carouselProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full w-2 h-2 ${currentIndex === index ? "bg-white" : "bg-white/30 hover:bg-white/60"}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

// --- CASE STUDY / DETAILS VIEW ---
function ProjectDetails({ project, onBack }: { project: any, onBack: () => void }) {
  useEffect(() => {
    // Scroll to the top of the details view when it opens
    window.scrollTo(0, 0); 
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full pb-32 pt-20" // Added pt-20 to clear fixed navbars
    >
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16">
         <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-white/60 hover:text-[#BFFE5F] transition-colors text-sm font-medium mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Showcase
          </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="inline-block px-3 py-1 rounded-full border border-[#BFFE5F]/30 bg-[#BFFE5F]/10 text-[#BFFE5F] text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
              {project.role}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-xl text-white/60 font-medium max-w-lg">
              {project.subtitle}
            </p>
          </div>
          <div className="lg:pl-12 border-l border-white/10">
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      <main className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {project.gallery.map((imgUrl: string, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.5) }} // Cap delay
              className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-[#111] border border-white/5"
            >
              <img 
                src={imgUrl} 
                alt={`${project.title} showcase ${index + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </main>

      <div className="mt-32 text-center px-6">
        <div className="w-px h-24 bg-gradient-to-b from-[#BFFE5F]/50 to-transparent mx-auto mb-12" />
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to build something like this?</h2>
        <Link to="/enquiry" className="inline-flex items-center gap-3 px-8 py-4 bg-[#BFFE5F] text-[#030803] font-semibold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(191,254,95,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
          Let's discuss your project <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  );
}

// --- MAIN WRAPPER ---
// This is what you actually import in your Home page
export function ProjectShowcase() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  return (
    <section id="work" className="relative w-full z-10 bg-[#050805]">
      <AnimatePresence mode="wait">
        {!activeProjectId ? (
          <ProjectCarousel key="carousel" onViewProject={setActiveProjectId} />
        ) : (
          <ProjectDetails 
            key="details" 
            project={projectsDatabase[activeProjectId]} 
            onBack={() => setActiveProjectId(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}