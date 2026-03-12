import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { GlowingOrbs } from "../components/GlowingOrbs";

export default function Enquiry() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-white font-sans selection:bg-[#BFFE5F]/30 selection:text-white w-full"
      style={{ backgroundColor: "#050505" }}
    >
      <style>{`
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
        
        input, textarea, select {
          color-scheme: dark;
        }
      `}</style>

      <GlowingOrbs />
      <Navigation />

      <main className="w-full pt-32 pb-20 px-4 sm:px-6 relative z-10 flex flex-col items-center min-h-[calc(100vh-200px)]">
        <div className="max-w-[700px] w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#BFFE5F] transition-colors mb-8 sm:mb-12 font-['Inter',sans-serif]"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h1
              className="font-['Manrope',sans-serif] text-white mb-4"
              style={{
                fontSize: "clamp(32px, 6vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Start a{" "}
              <span className="text-[#BFFE5F]">Project</span>
            </h1>
            <p className="text-[#A1A1AA] font-['Inter',sans-serif] text-lg max-w-[500px] mx-auto">
              Please fill out the form below to help me understand your needs better. I'll get back to you within 48 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-10"
            style={{
              backgroundColor: "rgba(20, 20, 22, 0.6)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 40px 100px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.2)",
            }}
          >
            <form
              action="https://formsubmit.co/theiyanuoluwayemi@gmail.com"
              method="POST"
              className="flex flex-col gap-6"
            >
              {/* FormSubmit configurations */}
              <input type="hidden" name="_subject" value="New Project Enquiry Form Submission!" />
              <input type="hidden" name="_template" value="table" />
              {/* Replace URL below when running in production, using relative to origin works sometimes but absolute is better if possible. Formsubmit auto-redirects mostly. */}
              {/* <input type="hidden" name="_next" value="URL_TO_THANK_YOU_PAGE"/> */}

              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="fullname" className="text-white/90 font-['Inter',sans-serif] font-medium ml-1">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="Full Name"
                  required
                  placeholder="Jane Doe"
                  className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#BFFE5F]/50 focus:ring-1 focus:ring-[#BFFE5F]/50 transition-all font-['Inter',sans-serif]"
                />
              </div>

              {/* Business Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="business" className="text-white/90 font-['Inter',sans-serif] font-medium ml-1">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="Business Name"
                  placeholder="Acme Corp"
                  className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#BFFE5F]/50 focus:ring-1 focus:ring-[#BFFE5F]/50 transition-all font-['Inter',sans-serif]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white/90 font-['Inter',sans-serif] font-medium ml-1">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="hello@example.com"
                  className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#BFFE5F]/50 focus:ring-1 focus:ring-[#BFFE5F]/50 transition-all font-['Inter',sans-serif]"
                />
              </div>

              {/* Link to website/socials */}
              <div className="flex flex-col gap-2">
                <label htmlFor="links" className="text-white/90 font-['Inter',sans-serif] font-medium ml-1">
                  Link to website/socials
                </label>
                <input
                  type="url"
                  id="links"
                  name="Website or Social Links"
                  placeholder="https://instagram.com/..."
                  className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#BFFE5F]/50 focus:ring-1 focus:ring-[#BFFE5F]/50 transition-all font-['Inter',sans-serif]"
                />
              </div>

              {/* Tell me more */}
              <div className="flex flex-col gap-2">
                <label htmlFor="details" className="text-white/90 font-['Inter',sans-serif] font-medium ml-1">
                  Tell me more about your Business (what products/services do you sell)?
                </label>
                <textarea
                  id="details"
                  name="Business Details"
                  rows={4}
                  placeholder="The more information the better..."
                  className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#BFFE5F]/50 focus:ring-1 focus:ring-[#BFFE5F]/50 transition-all font-['Inter',sans-serif] resize-none"
                />
              </div>

              {/* What services do you require? */}
              <div className="flex flex-col gap-3 mt-2">
                <label className="text-white/90 font-['Inter',sans-serif] font-medium ml-1">
                  What services do you require?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Brand Strategy",
                    "Rebrand of current Visual Identity",
                    "New Visual Identity",
                    "Packaging Design",
                    "Social Media Design",
                    "Other",
                  ].map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-[#050505]/30 cursor-pointer hover:border-[#BFFE5F]/30 transition-colors group"
                    >
                      <input
                        type="checkbox"
                        name="Services Required"
                        value={service}
                        className="w-5 h-5 rounded border-white/20 bg-transparent text-[#BFFE5F] focus:ring-[#BFFE5F] focus:ring-offset-[#050505] cursor-pointer"
                      />
                      <span className="text-white/80 group-hover:text-white transition-colors text-sm font-['Inter',sans-serif]">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pain points & Goals */}
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="painpoints" className="text-white/90 font-['Inter',sans-serif] font-medium ml-1">
                  What are your current business pain points? What goals do you want to achieve with this project?
                </label>
                <textarea
                  id="painpoints"
                  name="Pain Points and Goals"
                  rows={4}
                  placeholder="I'm struggling with..."
                  className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#BFFE5F]/50 focus:ring-1 focus:ring-[#BFFE5F]/50 transition-all font-['Inter',sans-serif] resize-none"
                />
              </div>

              {/* Vision */}
              <div className="flex flex-col gap-2">
                <label htmlFor="vision" className="text-white/90 font-['Inter',sans-serif] font-medium ml-1">
                  What vision do you have for your new branding?
                </label>
                <input
                  type="text"
                  id="vision"
                  name="Branding Vision"
                  placeholder="Link your Pinterest board/vision board..."
                  className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#BFFE5F]/50 focus:ring-1 focus:ring-[#BFFE5F]/50 transition-all font-['Inter',sans-serif]"
                />
              </div>

              {/* Project Investment */}
              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-white/90 font-['Inter',sans-serif] font-medium ml-1">
                  Project Investment
                </label>
                <input
                  type="text"
                  id="budget"
                  name="Budget"
                  placeholder="e.g. $2,000"
                  className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#BFFE5F]/50 focus:ring-1 focus:ring-[#BFFE5F]/50 transition-all font-['Inter',sans-serif]"
                />
              </div>

              {/* How did you find me? */}
              <div className="flex flex-col gap-2">
                <label htmlFor="source" className="text-white/90 font-['Inter',sans-serif] font-medium ml-1">
                  How did you find me?
                </label>
                <div className="relative">
                  <select
                    id="source"
                    name="How did you find me?"
                    className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#BFFE5F]/50 focus:ring-1 focus:ring-[#BFFE5F]/50 transition-all font-['Inter',sans-serif] appearance-none"
                  >
                    <option value="" disabled selected className="text-white/30">
                      Select an option...
                    </option>
                    <option value="Instagram" className="bg-[#141416]">Instagram</option>
                    <option value="TikTok" className="bg-[#141416]">TikTok</option>
                    <option value="Facebook" className="bg-[#141416]">Facebook</option>
                    <option value="YouTube" className="bg-[#141416]">YouTube</option>
                    <option value="Referral" className="bg-[#141416]">Referral</option>
                    <option value="Pinterest" className="bg-[#141416]">Pinterest</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Why me? */}
              <div className="flex flex-col gap-2">
                <label htmlFor="whyme" className="text-white/90 font-['Inter',sans-serif] font-medium ml-1">
                  Why do you specifically want to work with me?
                </label>
                <textarea
                  id="whyme"
                  name="Why work with me"
                  rows={3}
                  placeholder="I love your style, etc..."
                  className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#BFFE5F]/50 focus:ring-1 focus:ring-[#BFFE5F]/50 transition-all font-['Inter',sans-serif] resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full mt-4 py-4 sm:py-5 bg-[#BFFE5F] text-[#02403D] rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(191,254,95,0.3)] font-['Inter',sans-serif]"
                style={{ fontSize: "16px", fontWeight: 700 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Enquiry
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
