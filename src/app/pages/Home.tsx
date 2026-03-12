import { GlowingOrbs } from "../components/GlowingOrbs";
import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { SkillsMarquee } from "../components/SkillsMarquee";
import { AboutMe } from "../components/AboutMe";
import { SelectedWork } from "../components/SelectedWork";
import { Services } from "../components/Services";
import { CTASection } from "../components/CTASection";
import { InteractiveLogos } from "../components/InteractiveLogos";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-white font-sans selection:bg-[#BFFE5F]/30 selection:text-white w-full"
      style={{ backgroundColor: "#050505" }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        *, *::before, *::after {
          box-sizing: border-box;
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(191, 254, 95, 0.3) transparent;
        }
        html, body {
          scroll-behavior: smooth;
          overflow-x: hidden;
          width: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>

      <GlowingOrbs />
      <Navigation />
      <main className="w-full">
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
