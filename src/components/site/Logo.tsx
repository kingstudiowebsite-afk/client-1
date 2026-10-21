import kingLogo from "@/assets/king-logo.png";

type LogoProps = {
  /** light = for dark backgrounds, dark = for cream backgrounds */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * The KING wordmark: the original transparent gold 3D "KING->" artwork
 * (src/assets/king-logo.png, 1200x225), used unmodified.
 */
export function KingBadge({ className = "" }: { className?: string }) {
  return (
    <img
      src={kingLogo}
      alt="KING"
      width={1200}
      height={225}
      loading="eager"
      decoding="async"
      className={`shrink-0 ${className}`}
    />
  );
}

export function Logo({ tone = "light", className = "" }: LogoProps) {
  const wordClass = tone === "light" ? "text-white/60" : "text-ink-muted";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <KingBadge className="h-8 w-auto" />
      <span className={`text-[0.72rem] uppercase tracking-[0.42em] ${wordClass}`}>Studio</span>
    </span>
  );
}
