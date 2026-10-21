import { useId } from "react";

type LogoProps = {
  /** light = for dark backgrounds, dark = for cream backgrounds */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * The KING badge: a dark navy panel with a brass border and beveled gold
 * "KING" lettering that runs into a solid gold arrow.
 */
export function KingBadge({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg viewBox="0 0 232 76" className={`shrink-0 ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`panel${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1b2843" />
          <stop offset="45%" stopColor="#0e1728" />
          <stop offset="100%" stopColor="#05080f" />
        </linearGradient>
        <linearGradient id={`gold${uid}`} gradientUnits="userSpaceOnUse" x1="0" y1="20" x2="0" y2="60">
          <stop offset="0%" stopColor="#f7e6bd" />
          <stop offset="28%" stopColor="#e6c489" />
          <stop offset="58%" stopColor="#c89a4c" />
          <stop offset="100%" stopColor="#8a6427" />
        </linearGradient>
        <linearGradient id={`goldSide${uid}`} gradientUnits="userSpaceOnUse" x1="0" y1="20" x2="0" y2="60">
          <stop offset="0%" stopColor="#b98f43" />
          <stop offset="100%" stopColor="#5d4318" />
        </linearGradient>
      </defs>

      <rect
        x="1.6"
        y="1.6"
        width="228.8"
        height="72.8"
        rx="13"
        fill={`url(#panel${uid})`}
        stroke="#c9a250"
        strokeWidth="3.2"
      />
      <rect
        x="8"
        y="8"
        width="216"
        height="60"
        rx="8"
        fill="none"
        stroke="#c9a250"
        strokeWidth="0.9"
        opacity="0.55"
      />

      {/* bevel: dark copy offset down-right, then the lit face on top */}
      <text
        x="23"
        y="54"
        fontSize="42"
        fontWeight="700"
        letterSpacing="0.5"
        fontFamily="Inter, 'Helvetica Neue', Arial, sans-serif"
        fill={`url(#goldSide${uid})`}
        transform="translate(1.8,2.6)"
      >
        KING
      </text>
      <text
        x="23"
        y="54"
        fontSize="42"
        fontWeight="700"
        letterSpacing="0.5"
        fontFamily="Inter, 'Helvetica Neue', Arial, sans-serif"
        fill={`url(#gold${uid})`}
      >
        KING
      </text>

      {/* the arrow that runs out of the G */}
      <g>
        <rect x="120" y="41" width="74" height="6.4" fill={`url(#goldSide${uid})`} transform="translate(1.6,2.4)" />
        <polygon points="187,25 221,44 187,63" fill={`url(#goldSide${uid})`} transform="translate(1.6,2.4)" />
        <rect x="120" y="41" width="74" height="6.4" fill={`url(#gold${uid})`} />
        <polygon points="187,25 221,44 187,63" fill={`url(#gold${uid})`} />
      </g>
    </svg>
  );
}

export function Logo({ tone = "light", className = "" }: LogoProps) {
  const wordClass = tone === "light" ? "text-white/60" : "text-ink-muted";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <KingBadge className="h-9 w-auto" />
      <span className={`text-[0.72rem] uppercase tracking-[0.42em] ${wordClass}`}>Studio</span>
    </span>
  );
}
