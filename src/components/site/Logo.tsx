import { FiAperture } from "react-icons/fi";

type LogoProps = {
  /** light = for dark backgrounds, dark = for cream backgrounds */
  tone?: "light" | "dark";
  className?: string;
  /** hide the small "Photography" sub-line */
  compact?: boolean;
};

export function Logo({ tone = "light", className = "", compact = false }: LogoProps) {
  const wordClass = tone === "light" ? "text-white" : "text-ink-fg";
  const subClass = tone === "light" ? "text-white/50" : "text-ink-muted";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tan text-ink">
        <FiAperture size={19} strokeWidth={1.5} />
      </span>
      <span className={`flex flex-col leading-none ${wordClass}`}>
        <span className="font-display text-[1.35rem] leading-none tracking-[0.02em]">KING STUDIO</span>
        {!compact && (
          <span className={`mt-1 text-[0.5rem] uppercase tracking-[0.5em] ${subClass}`}>Photography</span>
        )}
      </span>
    </span>
  );
}
