import React, { useState, useEffect } from "react";
import {
  MapPin,
  ArrowUpRight,
  Palette,
  Share2,
  Target,
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  X,
  ExternalLink,
} from "lucide-react";

// --- CORE COMPONENTS ---

function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false);
  const ERROR_IMG_SRC =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgi xmlnsPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9Ijg4IiBoZWlnaHQ9Ijg4IiBmaWxsPSIjMWExYTFhIi8+PHRleHQgeD0iNDQiIHk9IjQ4IiBmaWxsPSIjNTU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2U8L3RleHQ+PC9zdmc+';

  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div className={`inline-block bg-[#141416] text-center align-middle ${className ?? ""}`} style={style}>
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" className="w-full h-full object-cover opacity-50" {...rest} />
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={() => setDidError(true)}
    />
  );
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

function GlassCard({ children, className = "", hover = true, onClick }: GlassCardProps) {
  return (
    <div
      className={`
        relative rounded-[2rem] overflow-hidden
        transition-all duration-300 ease-out
        ${hover ? "hover:scale-[1.02] hover:border-[#BFFE5F]/30" : ""}
        ${className}
      `}
      onClick={onClick}
      style={{
        backgroundColor: "rgba(20, 20, 22, 0.45)",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
      }}
    >
      {children}
    </div>
  );
}

// --- PAGE SECTIONS ---

function GlowingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #BFFE5F 0%, transparent 70%)",
          top: "-200px",
          left: "-200px",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute w-[1000px] h-[1000px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #02403D 0%, transparent 70%)",
          top: "400px",
          right: "-300px",
          filter: "blur(150px)",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #BFFE5F 0%, transparent 70%)",
          bottom: "200px",
          left: "30%",
          filter: "blur(140px)",
        }}
      />
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #02403D 0%, transparent 70%)",
          top: "1200px",
          left: "-100px",
          filter: "blur(130px)",
        }}
      />
    </div>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(20, 20, 22, 0.6)" : "transparent",
        backdropFilter: scrolled ? "blur(32px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(32px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="cursor-pointer shrink-0">
          <ImageWithFallback
            src="https://4mrv3lw9pg.ucarecd.net/29327984-c0a0-4c4e-9840-fce5e7117a16/iyanu.png"
            alt="Iyanuoluwa Logo"
            className="h-12 md:h-[60px] w-auto object-contain"
          />
        </div>

        {/* Links & Location */}
        <div className="hidden md:flex items-center gap-8">
          {["About", "Work", "Services", "Contact"].map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="text-[14px] text-[#A1A1AA] hover:text-white transition-colors duration-300 font-['Inter',sans-serif] cursor-pointer"
              style={{ fontWeight: 400 }}
            >
              {link}
            </button>
          ))}
          
          <div className="h-4 w-[1px] bg-white/20 mx-2"></div>
          
          <div className="flex items-center gap-1.5 text-[#A1A1AA] text-sm font-['Inter',sans-serif]">
            <MapPin className="w-4 h-4 text-[#BFFE5F]" />
            <span>Nigeria</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://cal.com/theiyanuoluwayemi"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-full text-[14px] text-[#BFFE5F] transition-all duration-300 hover:scale-105 hover:bg-[#BFFE5F]/10 cursor-pointer font-['Inter',sans-serif]"
          style={{
            fontWeight: 500,
            backgroundColor: "rgba(20, 20, 22, 0.45)",
            backdropFilter: "blur(32px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
          }}
        >
          Book a call
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  const profileUrl = "https://4mrv3lw9pg.ucarecd.net/dded3849-bb01-43dc-803a-04e3d6958411/-/preview/845x1000/";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-16 z-10 overflow-hidden">
      
      {/* Profile Orb */}
      <div className="relative mb-10 group mt-12 md:mt-0">
        {/* Subtle spotlight glow behind the profile picture to draw attention */}
        <div className="absolute inset-0 bg-[#BFFE5F] rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        <div 
          className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full p-2 relative z-10 transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundColor: "rgba(20, 20, 22, 0.65)",
            backdropFilter: "blur(32px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2)"
          }}
        >
          <ImageWithFallback
            src={profileUrl}
            alt="Iyanuoluwa Oluwayemi"
            className="w-full h-full rounded-full object-cover border border-white/5 transition-all duration-700"
          />
          {/* Pulsing Status Dot */}
          <div className="absolute bottom-3 right-3 w-5 h-5 bg-[#BFFE5F] rounded-full border-[3px] border-[#141416] shadow-[0_0_15px_rgba(191,254,95,0.6)] animate-pulse" />
        </div>
      </div>

      {/* Headline */}
      <h1
        className="text-center mb-6 font-['Manrope',sans-serif] max-w-[900px] z-20"
        style={{
          fontSize: "clamp(48px, 8vw, 88px)",
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
        }}
      >
        <span className="text-white block">Minimalism that</span>
        <span
          className="block"
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #BFFE5F 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          converts.
        </span>
      </h1>

      {/* Subheadline */}
      <p
        className="text-[#A1A1AA] text-center max-w-[600px] mb-10 font-['Inter',sans-serif] z-20"
        style={{ fontSize: "18px", lineHeight: 1.7, fontWeight: 400 }}
      >
        Crafting visual identities and social media designs that raise brand
        visibility, drive real results, and elevate brand perception.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 items-center z-20">
        <button
          onClick={() => scrollTo("work")}
          className="px-8 py-4 bg-[#BFFE5F] text-[#02403D] rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(191,254,95,0.3)] cursor-pointer font-['Inter',sans-serif]"
          style={{ fontSize: "16px", fontWeight: 600 }}
        >
          View my work
          <ArrowUpRight className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 cursor-pointer font-['Inter',sans-serif]"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            backgroundColor: "rgba(20, 20, 22, 0.45)",
            backdropFilter: "blur(32px)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
          }}
        >
          Let's talk strategy
        </button>
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section id="about" className="relative z-10 px-6 py-24">
      <div className="max-w-[1200px] mx-auto">
        <GlassCard className="p-8 sm:p-12 md:p-16" hover={false}>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Text Content */}
            <div className="flex-1">
              <span className="text-[#BFFE5F] font-['Inter',sans-serif] uppercase tracking-widest text-sm font-semibold mb-4 block">
                The Story
              </span>
              <h2 className="text-white font-['Manrope',sans-serif] text-[clamp(32px,4vw,44px)] font-bold leading-tight mb-8 tracking-tight">
                I build identities that drive <br/><span className="italic text-[#BFFE5F]">real business growth.</span>
              </h2>
              <div className="space-y-6 text-[#A1A1AA] font-['Inter',sans-serif] text-lg leading-relaxed">
                <p>
                  Hi, I'm Iyanuoluwa. As a dedicated Visual Identity and Social Media Designer, my core mission is simple: 
                  <strong className="text-white font-medium"> I help my clients increase their online sales through minimal, bold, and functional designs.</strong>
                </p>
                <p>
                  I believe that good design is far more than just aesthetics—it's a strategic tool. By crafting 
                  compelling brand identities and structured visual systems, I create scroll-stopping experiences that 
                  build instant trust, capture attention, and ultimately convert your audience into loyal customers.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
                <div>
                  <h4 className="text-3xl font-bold text-white font-['Manrope',sans-serif]">5+</h4>
                  <p className="text-sm text-[#A1A1AA] mt-1 font-['Inter',sans-serif]">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white font-['Manrope',sans-serif]">30+</h4>
                  <p className="text-sm text-[#A1A1AA] mt-1 font-['Inter',sans-serif]">Brands Elevated</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white font-['Manrope',sans-serif]">ROI</h4>
                  <p className="text-sm text-[#A1A1AA] mt-1 font-['Inter',sans-serif]">Focused Design</p>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="w-full lg:w-[400px] shrink-0">
               <div className="w-full aspect-square rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent flex items-center justify-center p-10 text-center relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(191,254,95,0.15),transparent_50%)]" />
                  <p className="font-['Manrope',sans-serif] text-white/90 text-2xl md:text-3xl font-medium leading-snug relative z-10">
                    "Design is the <br/> silent ambassador <br/> of your brand."
                  </p>
               </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function SkillsMarquee() {
  const skills = [
    "Accessibility",
    "User Friendly",
    "Design Thinking",
    "Empathy",
    "Conversion Focused",
    "Minimalism",
    "Brand Strategy",
  ];

  return (
    <div
      className="relative z-10 py-5 overflow-hidden border-y border-white/5"
      style={{
        background: "linear-gradient(167deg, rgba(198, 252, 166, 0.9) 0.38%, rgba(167, 252, 238, 0.6) 98.77%)",
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
          <div key={i} className="flex items-center gap-6 mx-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <path d="M12 24C11.65 12.63 11.37 12.35 0 12C11.37 11.65 11.65 11.37 12 0C12.35 11.37 12.63 11.65 24 12C12.63 12.35 12.35 12.63 12 24Z" fill="#02403D" />
            </svg>
            <span
              className="text-[#02403D] uppercase font-['Inter',sans-serif] tracking-wider"
              style={{ fontSize: "16px", fontWeight: 800 }}
            >
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: any; onClose: () => void }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md" />
      <div
        className="relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto rounded-[2rem] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "rgba(20, 20, 22, 0.85)",
          backdropFilter: "blur(40px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 8px 48px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white bg-black/40 backdrop-blur-md transition-colors cursor-pointer border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative overflow-hidden rounded-t-[2rem] aspect-[16/10] bg-[#141416]">
          <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgba(20,20,22,0.95)] to-transparent" />
        </div>

        <div className="p-8 sm:p-10 relative mt-[-2rem]">
          <span className="text-[#02403D] bg-[#BFFE5F] px-4 py-1.5 rounded-full font-['Inter',sans-serif] uppercase tracking-widest text-xs font-bold inline-block mb-5">
            {project.category}
          </span>
          <h2 className="text-white font-['Manrope',sans-serif] mb-4 text-3xl sm:text-4xl font-bold tracking-tight">
            {project.title}
          </h2>
          <p className="text-[#A1A1AA] font-['Inter',sans-serif] mb-8 max-w-[700px] text-lg leading-relaxed">
            {project.description}
          </p>

          {project.behanceUrl && (
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#BFFE5F] text-[#02403D] rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(191,254,95,0.3)] font-['Inter',sans-serif] font-semibold"
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

function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Brand Identity Design for Stuboard",
      category: "Visual Identity",
      description: "A complete brand identity system for Stuboard — from logo design and typography to color palettes and brand guidelines — built to establish trust, recognition, and a premium market position.",
      image: "https://4mrv3lw9pg.ucarecd.net/47a8a909-02a8-48f8-8de8-92de0174399e/-/preview/1000x900/",
      aspect: "square",
      behanceUrl: "https://www.behance.net/gallery/245571611/Stuboard-Brand-Identity",
    },
    {
      id: 2,
      title: "Social Media Campaign for CIH",
      category: "Social Media Design",
      description: "A strategic social media campaign designed to boost brand visibility and audience engagement for CIH, raising awareness and driving meaningful interactions across platforms.",
      image: "https://4mrv3lw9pg.ucarecd.net/436840ed-b8a4-4c5d-973d-54f245c60f4e/-/preview/800x1000/",
      aspect: "square",
    },
    {
      id: 3,
      title: "Social Media Design for Chilled By T",
      category: "Social Media Design",
      description: "Eye-catching social media content for Chilled By T, a local drink brand — designed to strengthen brand presence, increase visibility, and connect with a wider audience.",
      image: "https://4mrv3lw9pg.ucarecd.net/919f6870-136b-4dd7-a341-4f0d124b226a/-/preview/1000x1000/",
      aspect: "wide",
    },
  ];

  return (
    <>
      <section id="work" className="relative z-10 px-6 py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <h2 className="text-white font-['Manrope',sans-serif] text-[clamp(32px,4vw,48px)] font-bold tracking-tight">
              Selected Work
            </h2>
            <p className="text-[#A1A1AA] mt-4 max-w-xl font-['Inter',sans-serif]">A curated showcase of design systems and visual narratives that converted attention into quantifiable results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <GlassCard
                key={project.id}
                className={`group cursor-pointer ${project.aspect === "wide" ? "md:col-span-2" : ""}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-4 sm:p-6">
                  <div className={`relative overflow-hidden rounded-2xl mb-6 bg-[#0a0a0c] ${project.aspect === "wide" ? "aspect-[21/9]" : "aspect-[4/3] sm:aspect-square"}`}>
                    <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                      <div className="w-16 h-16 rounded-full bg-[#BFFE5F] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                        <ArrowUpRight className="w-8 h-8 text-[#02403D]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-white font-['Manrope',sans-serif] text-[22px] font-semibold">{project.title}</h3>
                    <span className="text-[#BFFE5F] font-['Inter',sans-serif] uppercase tracking-widest text-[11px] font-bold">{project.category}</span>
                    <p className="text-[#A1A1AA] font-['Inter',sans-serif] text-[14px] leading-relaxed max-w-3xl">{project.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

function Services() {
  const services = [
    {
      id: 1,
      icon: Share2,
      title: "Social Media Designs",
      description: "Stop the scroll and capture attention. I design strategic, minimalist social assets engineered to skyrocket engagement, build brand authority, and drive measurable sales for ambitious brands.",
    },
    {
      id: 2,
      icon: Palette,
      title: "Strategic Branding",
      description: "Your brand is your most valuable asset. I build premium, timeless identities that command higher prices, establish instant trust, and position you as the undisputed leader in your industry.",
    },
    {
      id: 3,
      icon: Target,
      title: "Click-Magnet Thumbnails",
      description: "First impressions dictate your success. I craft bold, hyper-optimized thumbnails for YouTube and social platforms guaranteed to maximize your CTR, hook viewers instantly, and exponentially grow your audience.",
    },
  ];

  return (
    <section id="services" className="relative z-10 px-6 py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 relative">
          {/* Subtle asterisk decoration inspired by your reference */}
          <div className="absolute top-[-20px] right-[15%] text-[#BFFE5F]/10 text-8xl font-serif hidden md:block select-none pointer-events-none">*</div>
          <div className="absolute bottom-0 left-[15%] text-[#BFFE5F]/10 text-8xl font-serif hidden md:block select-none pointer-events-none">*</div>
          
          <p className="uppercase tracking-widest mb-4 font-['Inter',sans-serif] text-[14px] font-bold text-[#BFFE5F]">
            What I Do
          </p>
          <h2 className="text-white font-['Manrope',sans-serif] text-[clamp(32px,4vw,48px)] font-bold tracking-tight">
            Services I Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {services.map((item) => (
            <GlassCard key={item.id} className="p-10 group">
              <div className="w-16 h-16 rounded-2xl bg-[#BFFE5F]/10 border border-[#BFFE5F]/20 flex items-center justify-center mb-8 transition-colors">
                <item.icon className="w-8 h-8 text-[#BFFE5F] stroke-[1.5]" />
              </div>
              <h3 className="text-white mb-4 font-['Manrope',sans-serif] text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="text-[#A1A1AA] font-['Inter',sans-serif] text-base leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="relative z-10 px-6 py-16 md:py-32">
      <div className="max-w-[1100px] mx-auto">
        <div
          className="relative overflow-hidden rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between p-10 md:p-16 lg:p-20 gap-12 md:gap-8"
          style={{
            backgroundColor: "rgba(20, 20, 22, 0.6)",
            backdropFilter: "blur(40px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 40px 100px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Giant subtle glow behind the whole card */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(191,254,95,0.08) 0%, transparent 65%)" }}
          />

          {/* Text Content */}
          <div className="flex-1 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-[#BFFE5F] font-['Inter',sans-serif] text-sm uppercase tracking-[0.2em] font-bold mb-6 block">
              Let's Collaborate
            </span>
            
            <h2 className="text-white mb-6 font-['Manrope',sans-serif] text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.05] tracking-tight text-balance">
              Ready to elevate your <br className="hidden xl:block"/> brand's perception?
            </h2>

            <p className="text-[#A1A1AA] mb-10 max-w-[500px] font-['Inter',sans-serif] text-lg md:text-xl leading-relaxed">
              Let's connect and create something amazing. Whether it's a complete visual identity or high-converting social media templates, I'm here to help.
            </p>

            <a
              href="https://cal.com/theiyanuoluwayemi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-10 py-5 bg-[#BFFE5F] text-[#02403D] rounded-full items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(191,254,95,0.4)] font-['Inter',sans-serif] text-lg font-bold"
            >
              Start a Project
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>

          {/* Image Section - Transparent PNG without house frame */}
          <div className="w-full md:w-auto relative shrink-0 flex justify-center z-10 mt-8 md:mt-0">
            {/* Backdrop Glow specific to the image to help it pop */}
            <div className="absolute inset-0 bg-[#BFFE5F] blur-[60px] opacity-15 rounded-full scale-75" />
            
            <ImageWithFallback 
              src="https://4mrv3lw9pg.ucarecd.net/e2531751-126f-4986-900a-9e7e0fef7506/-/preview/1000x1000/" 
              alt="Iyanuoluwa Oluwayemi" 
              className="relative w-[280px] sm:w-[320px] lg:w-[380px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- DRAGGABLE COMPONENT FOR INTERACTIVE LOGOS ---
function InteractiveLogos() {
  const sceneRef = React.useRef<HTMLDivElement>(null);
  const elementsRef = React.useRef<(HTMLDivElement | null)[]>([]);

  const stickers = [
    "https://4mrv3lw9pg.ucarecd.net/4aa32d89-5e9d-41a1-86a2-eccfa8317116/stuboard.png",
    "https://4mrv3lw9pg.ucarecd.net/64842230-77e5-43d3-9301-728d2f5264bd/pfp.png",
    "https://4mrv3lw9pg.ucarecd.net/0536e142-7f36-4bc4-bf6f-b49386e285a7/miracrat.png",
    "https://4mrv3lw9pg.ucarecd.net/52187b7f-cdee-4d5b-9a7b-32f22b76b295/teamlink.png",
    "https://4mrv3lw9pg.ucarecd.net/c1a1c670-5da0-4570-84d7-81bb077264d1/chatpay.png",
    "https://4mrv3lw9pg.ucarecd.net/c446f2da-a947-4ff3-93ca-0e07b5f3a8b6/kinspaul.png",
    "https://4mrv3lw9pg.ucarecd.net/d1394609-2d1a-47f2-96b8-9282ef81a001/rosebud.png",
    "https://4mrv3lw9pg.ucarecd.net/a38f240b-99dc-4df0-911a-8d6245f9df43/kenspice.png",
    "https://4mrv3lw9pg.ucarecd.net/14763c73-8389-4e9c-a1bb-95fbb244353a/cih.png",
    "https://4mrv3lw9pg.ucarecd.net/00a982e1-adbf-45ed-b4d6-7d8b1ab15829/Nextgen.png",
    "https://4mrv3lw9pg.ucarecd.net/a4f8c16d-14bd-438d-aeb4-9a319cf6e8cf/ifera.png"
  ];

  useEffect(() => {
    let isMounted = true;
    let runner: any;

    const initPhysics = () => {
      if (!isMounted || !sceneRef.current) return;
      const Matter = (window as any).Matter;
      if (!Matter) return;

      const width = sceneRef.current.clientWidth;
      const height = sceneRef.current.clientHeight;

      const engine = Matter.Engine.create();
      
      const isMobile = window.innerWidth < 768;
      // Map these exactly to the tailwind sizes (w-[120px] h-[60px] mobile, w-[160px] h-[80px] desktop)
      const blockW = isMobile ? 120 : 160;
      const blockH = isMobile ? 60 : 80;

      // Create extremely thick walls so items don't glitch through when dragged hard
      const wallOpts = { isStatic: true, render: { visible: false } };
      const floor = Matter.Bodies.rectangle(width / 2, height + 100, width * 2, 200, wallOpts);
      const leftWall = Matter.Bodies.rectangle(-100, height / 2, 200, height * 2, wallOpts);
      const rightWall = Matter.Bodies.rectangle(width + 100, height / 2, 200, height * 2, wallOpts);
      // Notice we intentionally leave the ceiling open so they can fall in from above

      Matter.World.add(engine.world, [floor, leftWall, rightWall]);

      // Create the rigid bodies for the logos
      const bodies = stickers.map((_, i) => {
        const startX = (width / 2) + (Math.random() * (width - blockW) - (width - blockW) / 2);
        // Stagger their Y positions above the container so they cascade down nicely
        const startY = -200 - (i * 120); 
        return Matter.Bodies.rectangle(startX, startY, blockW, blockH, {
          chamfer: { radius: isMobile ? 12 : 20 },
          restitution: 0.6, // This adds the satisfying "bounciness"
          friction: 0.2,
          density: 0.05
        });
      });
      Matter.World.add(engine.world, bodies);

      // Setup the mouse drag constraint interacting with the container
      const mouse = Matter.Mouse.create(sceneRef.current);
      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false }
        }
      });
      Matter.World.add(engine.world, mouseConstraint);

      // The core visual loop: Sync the DOM elements strictly to the physics bodies
      Matter.Events.on(engine, 'afterUpdate', () => {
        bodies.forEach((body: any, i: number) => {
          if (elementsRef.current[i]) {
            const { x, y } = body.position;
            // Native translate over state updates for smooth 60fps performance
            elementsRef.current[i]!.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${body.angle}rad)`;
          }
        });
      });

      // Hook up device tilt (gravity manipulation)
      const handleOrientation = (e: DeviceOrientationEvent) => {
        if (e.gamma !== null && e.beta !== null) {
          // Accelerometer values clamped strictly
          engine.world.gravity.x = Matter.Common.clamp(e.gamma, -90, 90) / 90;
          engine.world.gravity.y = Matter.Common.clamp(e.beta, -90, 90) / 90;
        }
      };
      window.addEventListener("deviceorientation", handleOrientation);

      // Handle window resizing cleanly
      const handleResize = () => {
        if (!sceneRef.current) return;
        const newW = sceneRef.current.clientWidth;
        const newH = sceneRef.current.clientHeight;
        Matter.Body.setPosition(floor, { x: newW / 2, y: newH + 100 });
        Matter.Body.setPosition(rightWall, { x: newW + 100, y: newH / 2 });
        Matter.Body.setPosition(leftWall, { x: -100, y: newH / 2 });
      };
      window.addEventListener("resize", handleResize);

      // Fire up the simulation
      runner = Matter.Runner.create();
      Matter.Runner.run(runner, engine);

      // Attach cleanup mapping for the specific scene
      (sceneRef.current as any)._cleanup = () => {
        window.removeEventListener("deviceorientation", handleOrientation);
        window.removeEventListener("resize", handleResize);
        Matter.Runner.stop(runner);
        Matter.Engine.clear(engine);
      };
    };

    // Dynamically load the lightweight Matter.js script if not present
    if ((window as any).Matter) {
      initPhysics();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js";
      script.onload = initPhysics;
      document.head.appendChild(script);
    }

    return () => {
      isMounted = false;
      if (sceneRef.current && (sceneRef.current as any)._cleanup) {
        (sceneRef.current as any)._cleanup();
      }
    };
  }, [stickers.length]);

  return (
    <section className="relative z-10 px-6 py-12 mb-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center mb-8">
         <h3 className="text-[#A1A1AA] font-['Inter',sans-serif] text-sm uppercase tracking-widest font-bold">
           Brands I've Worked With (Play around!)
         </h3>
      </div>
      
      <div 
        ref={sceneRef} 
        className="max-w-[1200px] mx-auto h-[450px] md:h-[550px] relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-[rgba(20,20,22,0.45)] backdrop-blur-[32px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-grab active:cursor-grabbing"
      >
         {/* Subtle background glow */}
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BFFE5F]/5 to-transparent pointer-events-none" />
         
         {stickers.map((src, i) => (
            <div
              key={i}
              ref={el => elementsRef.current[i] = el}
              className="absolute top-0 left-0 w-[120px] h-[60px] md:w-[160px] md:h-[80px] pointer-events-none select-none flex items-center justify-center will-change-transform"
              style={{ zIndex: 20 }}
            >
               <ImageWithFallback 
                 src={src} 
                 alt="Brand Logo" 
                 draggable={false} 
                 className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
               />
            </div>
         ))}
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/theiyanuoluwayemi/" },
    { icon: Twitter, label: "X (Twitter)", url: "https://x.com/iyanuoluwayemi_" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/iyanuoluwayemi/" },
  ];

  return (
    <footer className="relative z-10 px-6 py-10 mt-10 border-t border-white/5 bg-black/20 backdrop-blur-lg">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="cursor-pointer shrink-0">
          <ImageWithFallback
            src="https://4mrv3lw9pg.ucarecd.net/29327984-c0a0-4c4e-9840-fce5e7117a16/iyanu.png"
            alt="Iyanuoluwa Logo"
            className="h-12 md:h-[60px] w-auto object-contain"
          />
        </div>
        <div className="flex items-center gap-6">
          {socials.map(({ icon: Icon, label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#A1A1AA] hover:text-[#BFFE5F] transition-all duration-300 hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p className="text-[#A1A1AA] font-['Inter',sans-serif] text-sm">
          &copy; {new Date().getFullYear()} Iyanuoluwa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// --- MAIN APP ENTRY ---

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white font-sans selection:bg-[#BFFE5F]/30 selection:text-white" style={{ backgroundColor: "#050505" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&family=Manrope:wght@500;600;700;800&display=swap');
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(191, 254, 95, 0.3) transparent;
        }
        html { scroll-behavior: smooth; }
      `}</style>

      <GlowingOrbs />
      <Navigation />
      <main>
        <HeroSection />
        <SkillsMarquee />
        <AboutMe />
        <SelectedWork />
        <Services />
        <CTASection />
        <InteractiveLogos />
      </main>
      <Footer />
    </div>
  );
}