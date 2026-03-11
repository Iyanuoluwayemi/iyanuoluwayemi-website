import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = "", hover = true, onClick }: GlassCardProps) {
  return (
    <div
      className={`
        relative rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] overflow-hidden
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
        boxShadow:
          "0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
      }}
    >
      {children}
    </div>
  );
}
