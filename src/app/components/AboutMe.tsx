import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Globe } from 'lucide-react';

// --- 1. ANIMATED STAT COMPONENT ---
export const AnimatedStat = ({ end, label, prefix = '', suffix = '' }: any) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = progress * (2 - progress);
            setValue(Math.floor(easeProgress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="p-8 bg-neutral-900/30 border border-neutral-800 rounded-2xl flex flex-col justify-center transition-all hover:border-neutral-600">
      <div className="text-5xl font-mono font-semibold text-white mb-2 tracking-tighter">
        {prefix}{value}{suffix}
      </div>
      <div className="text-xs text-neutral-500 uppercase tracking-widest mt-2 leading-relaxed">
        {label}
      </div>
    </div>
  );
};

// --- 2. ABOUT SECTION COMPONENT ---
export const AboutMe = () => {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto py-24 px-6 md:px-12 flex flex-col gap-16 animate-fade-in relative z-10">
      <div className="flex flex-col md:flex-row gap-12 justify-between items-start">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl text-white tracking-tight">About Me</h2>
          <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
            I am a Strategic Visual Identity Designer with over 5 years of experience building cohesive brand narratives and high-converting marketing campaigns. I don't just design beautiful graphics; I approach every project with a dual lens—ensuring pixel-perfect aesthetic excellence while aligning every visual decision with overarching business goals.
          </p>
          <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
            Whether I am conceptualizing a new workshop campaign, designing scalable layouts in Figma, or crafting high-stakes pitch decks, my focus is always on elevating brand perception and driving tangible growth.
          </p>

          <div className="flex items-center gap-4 mt-2 mb-2 bg-neutral-900/50 border border-neutral-800 w-fit px-4 py-2.5 rounded-full backdrop-blur-sm">
            <span className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#ccff00]" /> Global Experience
            </span>
            <div className="flex gap-2.5 items-center">
              <img src="https://flagcdn.com/w40/gb.png" alt="United Kingdom" className="w-4 h-4 rounded-full object-cover hover:opacity-60 hover:grayscale transition-all duration-300 cursor-help" title="United Kingdom" />
              <img src="https://flagcdn.com/w40/us.png" alt="United States" className="w-4 h-4 rounded-full object-cover hover:opacity-60 hover:grayscale transition-all duration-300 cursor-help" title="United States" />
              <img src="https://flagcdn.com/w40/ng.png" alt="Nigeria" className="w-4 h-4 rounded-full object-cover hover:opacity-60 hover:grayscale transition-all duration-300 cursor-help" title="Nigeria" />
              <img src="https://flagcdn.com/w40/lr.png" alt="Liberia" className="w-4 h-4 rounded-full object-cover hover:opacity-60 hover:grayscale transition-all duration-300 cursor-help" title="Liberia" />
            </div>
          </div>
          
          <Link to="/resume" className="group mt-4 inline-flex items-center gap-3 px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-all duration-300">
            View Full CV 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
          <AnimatedStat end={500} suffix="+" label={<>App Downloads<br/>(MyPay)</>} />
          <AnimatedStat prefix="₦" end={1} suffix="M" label={<>Revenue Generated<br/>(CIH)</>} />
          <AnimatedStat end={50} suffix="%" label={<>Over Attendance<br/>(Genevic)</>} />
          <AnimatedStat end={30} label={<>Prospects / Week<br/>(Solacx)</>} />
        </div>
      </div>
    </section>
  );
};
