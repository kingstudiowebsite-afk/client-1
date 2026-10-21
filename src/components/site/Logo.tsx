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
    <span className={`flex items-center gap-2.5 ${className}`}>
      <KingBadge className="h-6 w-auto" />
      <span className={`text-[1.25rem] font-medium uppercase leading-none tracking-[0.26em] ${wordClass}`}>
        Studio
      </span>
    </span>
  );
}
