import Grainient from "../components/Grainient";
import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { SkillsMarquee } from "../components/SkillsMarquee";
import { AboutMe } from "../components/AboutMe";
import { SelectedWork } from "../components/SelectedWork";
import { Services } from "../components/Services";
import { CTASection } from "../components/CTASection";
import { InteractiveLogos } from "../components/InteractiveLogos";
import { Footer } from "../components/Footer";
import { TestimonialsSection } from '../components/TestimonialsSection';
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

      <div className="fixed inset-0 pointer-events-none z-0">
        <Grainient
          color1="#023331"
          color2="#000000"
          color3="#bffe5f"
          timeSpeed={1.45}
          colorBalance={0.07}
          warpStrength={1}
          warpFrequency={7.4}
          warpSpeed={3.9}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.49}
          rotationAmount={500}
          noiseScale={2.4}
          grainAmount={0.03}
          grainScale={1.6}
          grainAnimated={false}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        <main className="w-full">
          <HeroSection />
          <div className="bg-[#030803]/95">
            <SkillsMarquee />
            <AboutMe />
            <SelectedWork />
            <Services />
            <CTASection />
            <TestimonialsSection />
            <InteractiveLogos />
          </div>
        </main>
        <div className="bg-[#000000]/95">
          <Footer />
        </div>
      </div>
    </div>
  );
}
