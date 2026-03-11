export function GlowingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top-left lime orb */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #BFFE5F 0%, transparent 70%)",
          top: "-200px",
          left: "-200px",
          filter: "blur(120px)",
        }}
      />
      {/* Center deep green orb */}
      <div
        className="absolute w-[1000px] h-[1000px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #02403D 0%, transparent 70%)",
          top: "400px",
          right: "-300px",
          filter: "blur(150px)",
        }}
      />
      {/* Bottom lime orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #BFFE5F 0%, transparent 70%)",
          bottom: "200px",
          left: "30%",
          filter: "blur(140px)",
        }}
      />
      {/* Mid deep green orb */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #02403D 0%, transparent 70%)",
          top: "1200px",
          left: "-100px",
          filter: "blur(130px)",
        }}
      />
      {/* Far bottom orb */}
      <div
        className="absolute w-[900px] h-[900px] rounded-full opacity-12"
        style={{
          background: "radial-gradient(circle, #BFFE5F 0%, transparent 70%)",
          bottom: "-200px",
          right: "10%",
          filter: "blur(160px)",
        }}
      />
    </div>
  );
}