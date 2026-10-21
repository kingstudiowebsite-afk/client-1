type LogoProps = {
  /** light = for dark backgrounds, dark = for cream backgrounds */
  tone?: "light" | "dark";
  className?: string;
};

/** The KING disc mark: dark navy face, brass ring, "KING" with a trailing arrow. */
export function KingMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-hidden="true">
      <defs>
        <radialGradient id="kingFace" cx="34%" cy="26%" r="84%">
          <stop offset="0%" stopColor="#25324f" />
          <stop offset="55%" stopColor="#141d33" />
          <stop offset="100%" stopColor="#070c18" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48.5" fill="url(#kingFace)" />
      <circle cx="50" cy="50" r="46.8" fill="none" stroke="#c9a250" strokeWidth="3.2" />
      <text
        x="41"
        y="59"
        textAnchor="middle"
        fill="#d3b165"
        fontSize="21"
        fontWeight="500"
        letterSpacing="1.2"
        fontFamily="Inter, 'Helvetica Neue', Arial, sans-serif"
      >
        KING
      </text>
      <path d="M61 50 H84" stroke="#d3b165" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M80.5 45.8 L85.8 50 L80.5 54.2"
        fill="none"
        stroke="#d3b165"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ tone = "light", className = "" }: LogoProps) {
  const wordClass = tone === "light" ? "text-white/60" : "text-ink-muted";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <KingMark className="h-9 w-9" />
      <span className={`text-[0.72rem] uppercase tracking-[0.42em] ${wordClass}`}>Studio</span>
    </span>
  );
}
