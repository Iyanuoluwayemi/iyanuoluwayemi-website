import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Star, CheckCircle2, Clock } from 'lucide-react';

export const CTASection = () => {
  return (
    <section id="contact" className="w-full mt-10 mb-20 animate-fade-in relative px-4 sm:px-6 py-14 sm:py-20 md:py-32">
      <div className="max-w-[1100px] mx-auto">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-[#ccff00]/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="bg-[#npm install ogl] border border-neutral-800 rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden shadow-2xl">
          
          <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
            <span className="text-[#ccff00] text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse"></span>
              Let's Collaborate
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight mb-6 leading-[1.1]">
              Ready to elevate your brand's perception?
            </h2>
            
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10 max-w-md">
              Let's connect and create something amazing. Whether it's a complete visual identity or high-converting social media templates, I'm here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 w-full">
              <Link to="/enquiry" className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#ccff00] text-black font-semibold rounded-full hover:bg-[#b3e600] transition-all duration-300 w-full sm:w-auto">
                Start a Project 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-col gap-4 border-t border-neutral-800 pt-6 mt-2 w-full max-w-md">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_100,h_100,c_fill/v1774446131/WhatsApp_Image_2026-03-25_at_11.14.58_vtsrzf.jpg" alt="Client 1" className="w-10 h-10 rounded-full bg-neutral-700 border-2 border-[#0f0f0f] object-cover" />
                  <img src="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_100,h_100,c_fill/v1774446157/WhatsApp_Image_2026-03-25_at_14.40.12_mbnzvk.jpg" alt="Client 2" className="w-10 h-10 rounded-full bg-neutral-600 border-2 border-[#0f0f0f] object-cover" />
                  <img src="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_100,h_100,c_fill/v1774446380/cd5a07bd-3e2c-47b3-aa07-f52a47eba99d.png" alt="Client 3" className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-[#0f0f0f] object-cover bg-white" />
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border-2 border-[#0f0f0f] flex items-center justify-center text-xs font-mono font-semibold text-white">+50</div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex text-[#ccff00] gap-0.5 mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-xs text-neutral-400 font-mono"><span className="text-white font-mono font-semibold">5.0/5</span> (50+ happy clients)</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[11px] text-neutral-500 font-mono font-semibold tracking-wide">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00]" /> Available for work</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#ccff00]" /> Replies in 24hrs</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700 shadow-2xl group">
               <img 
                 src="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800/v1774432077/NEWYEAR6_pc1y2y.jpg" 
                 alt="Iyanuoluwa Oluwayemi" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
