import { useRef } from "react";
import { motion, useInView } from "motion/react";

const stickers = [
  {
    src: "https://4mrv3lw9pg.ucarecd.net/4aa32d89-5e9d-41a1-86a2-eccfa8317116/stuboard.png",
    alt: "Stuboard",
  },
  {
    src: "https://4mrv3lw9pg.ucarecd.net/64842230-77e5-43d3-9301-728d2f5264bd/pfp.png",
    alt: "PFP",
  },
  {
    src: "https://4mrv3lw9pg.ucarecd.net/0536e142-7f36-4bc4-bf6f-b49386e285a7/miracrat.png",
    alt: "Miracrat",
  },
  {
    src: "https://4mrv3lw9pg.ucarecd.net/52187b7f-cdee-4d5b-9a7b-32f22b76b295/teamlink.png",
    alt: "Teamlink",
  },
  {
    src: "https://4mrv3lw9pg.ucarecd.net/c1a1c670-5da0-4570-84d7-81bb077264d1/chatpay.png",
    alt: "Chatpay",
  },
  {
    src: "https://4mrv3lw9pg.ucarecd.net/c446f2da-a947-4ff3-93ca-0e07b5f3a8b6/kinspaul.png",
    alt: "Kinspaul",
  },
  {
    src: "https://4mrv3lw9pg.ucarecd.net/a4f8c16d-14bd-438d-aeb4-9a319cf6e8cf/ifera.png",
    alt: "Ifera",
  },
  {
    src: "https://4mrv3lw9pg.ucarecd.net/d1394609-2d1a-47f2-96b8-9282ef81a001/rosebud.png",
    alt: "Rosebud",
  },
  {
    src: "https://4mrv3lw9pg.ucarecd.net/a38f240b-99dc-4df0-911a-8d6245f9df43/kenspice.png",
    alt: "Kenspice",
  },
  {
    src: "https://4mrv3lw9pg.ucarecd.net/14763c73-8389-4e9c-a1bb-95fbb244353a/cih.png",
    alt: "CIH",
  },
  {
    src: "https://4mrv3lw9pg.ucarecd.net/00a982e1-adbf-45ed-b4d6-7d8b1ab15829/Nextgen.png",
    alt: "Nextgen",
  },
];

export function InteractiveLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const row = [...stickers, ...stickers, ...stickers, ...stickers];

  return (
    <motion.section
      className="relative z-10 py-10 sm:py-16 mb-4 sm:mb-10 overflow-hidden"
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <div className="max-w-[1200px] mx-auto text-center mb-6 sm:mb-10 px-4 sm:px-6">
        <h3
          className="text-[#A1A1AA] font-['Inter',sans-serif] uppercase tracking-widest"
          style={{ fontSize: "clamp(11px, 3vw, 14px)", fontWeight: 700 }}
        >
          Brands I've Worked With
        </h3>
      </div>

      {/* Marquee strip */}
      <div
        className="relative py-6 sm:py-8 border-y border-white/5"
        style={{
          background:
            "linear-gradient(167deg, rgba(198, 252, 166, 0.08) 0.38%, rgba(167, 252, 238, 0.05) 98.77%)",
        }}
      >
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #050505, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #050505, transparent)" }}
        />

        {/* Scrolling row */}
        <div className="flex animate-brands-marquee whitespace-nowrap">
          {row.map((sticker, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-5 sm:mx-8 md:mx-12 shrink-0"
            >
              <img
                src={sticker.src}
                alt={sticker.alt}
                draggable={false}
                className="h-[30px] sm:h-[40px] md:h-[55px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 select-none"
                style={{
                  filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brands-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-brands-marquee {
          animation: brands-marquee 30s linear infinite;
        }
      `}</style>
    </motion.section>
  );
}
