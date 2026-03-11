import { useRef } from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    url: "https://www.instagram.com/theiyanuoluwayemi/",
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    url: "https://x.com/iyanuoluwayemi_",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/iyanuoluwayemi/",
  },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={footerRef}
      className="relative z-10 px-4 sm:px-6 py-8 sm:py-10 mt-4 sm:mt-10 border-t border-white/5 bg-black/20 backdrop-blur-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-5 sm:gap-6 md:flex-row md:justify-between">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer shrink-0"
        >
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
        <p
          className="text-[#A1A1AA] font-['Inter',sans-serif]"
          style={{ fontSize: "14px" }}
        >
          &copy; {new Date().getFullYear()} Iyanuoluwa. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}