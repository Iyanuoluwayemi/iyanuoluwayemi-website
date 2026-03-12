import { useState, useEffect } from "react";
import { MapPin, Menu, X } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const navLinks = ["About", "Work", "Services", "Contact"];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
        style={{
          backgroundColor: scrolled
            ? "rgba(5, 5, 5, 0.7)"
            : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled
            ? "blur(24px)"
            : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.05)"
            : "transparent",
          transform: "translateZ(0)",
          willChange:
            "transform, background-color, backdrop-filter",
          isolation: "isolate",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="cursor-pointer shrink-0"
          >
            <ImageWithFallback
              src="https://4mrv3lw9pg.ucarecd.net/29327984-c0a0-4c4e-9840-fce5e7117a16/iyanu.png"
              alt="Iyanuoluwa Logo"
              className="h-10 sm:h-12 md:h-[60px] w-auto object-contain"
            />
          </div>

          {/* Desktop Links & Location */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
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

          <div className="flex items-center gap-3">
            {/* CTA */}
            <Link
              to="/enquiry"
              className="hidden sm:inline-flex px-6 py-2.5 rounded-full text-[14px] text-[#BFFE5F] transition-all duration-300 hover:scale-105 hover:bg-[#BFFE5F]/10 cursor-pointer font-['Inter',sans-serif]"
              style={{
                fontWeight: 500,
                backgroundColor: "rgba(20, 20, 22, 0.45)",
                backdropFilter: "blur(32px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow:
                  "0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
              }}
            >
              Start a Project
            </Link>

            {/* Hamburger Button - Mobile only */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
              style={{
                backgroundColor: "rgba(20, 20, 22, 0.45)",
                backdropFilter: "blur(32px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer Panel */}
          <div
            className="absolute top-0 right-0 w-[300px] max-w-[85vw] h-full flex flex-col"
            style={{
              backgroundColor: "rgba(5, 5, 5, 0.9)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "-20px 0 60px rgba(0, 0, 0, 0.5)",
              animation: "slideInRight 0.3s ease-out",
              transform: "translateZ(0)",
              isolation: "isolate",
            }}
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors cursor-pointer border border-white/10 bg-white/5"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-2 px-6 flex-1">
              {navLinks.map((link, i) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link.toLowerCase())}
                  className="text-left py-4 text-white/80 hover:text-[#BFFE5F] transition-all duration-300 font-['Manrope',sans-serif] cursor-pointer border-b border-white/5"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    animationDelay: `${i * 50}ms`,
                  }}
                >
                  {link}
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="p-6">
              <Link
                to="/enquiry"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full px-6 py-4 bg-[#BFFE5F] text-[#02403D] rounded-full transition-all duration-300 hover:scale-105 font-['Inter',sans-serif]"
                style={{ fontSize: "16px", fontWeight: 600 }}
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Keyframes for slide-in animation */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}