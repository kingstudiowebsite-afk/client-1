import { useId } from "react";

type LogoProps = {
  /** light = for dark backgrounds, dark = for cream backgrounds */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * The KING wordmark: beveled 3D gold "KING" whose G crossbar runs out into a
 * solid gold arrow. Transparent background - no panel, no border.
 */
export function KingBadge({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const face = `url(#face${uid})`;
  const side = `url(#side${uid})`;
  const head = `url(#head${uid})`;

  const textProps = {
    x: 6,
    y: 112,
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif",
    fontWeight: 900,
    fontSize: 139,
    letterSpacing: 2,
  } as const;

  return (
    <svg viewBox="0 0 520 132" className={`shrink-0 ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`face${uid}`} gradientUnits="userSpaceOnUse" x1="0" y1="8" x2="0" y2="112">
          <stop offset="0%" stopColor="#fdf5da" />
          <stop offset="14%" stopColor="#f6dda2" />
          <stop offset="42%" stopColor="#e8bf68" />
          <stop offset="68%" stopColor="#cb9530" />
          <stop offset="100%" stopColor="#96671b" />
        </linearGradient>
        <linearGradient id={`side${uid}`} gradientUnits="userSpaceOnUse" x1="0" y1="8" x2="0" y2="112">
          <stop offset="0%" stopColor="#b07e22" />
          <stop offset="55%" stopColor="#6d4a11" />
          <stop offset="100%" stopColor="#3b2806" />
        </linearGradient>
        <linearGradient id={`head${uid}`} gradientUnits="userSpaceOnUse" x1="452" y1="20" x2="520" y2="76">
          <stop offset="0%" stopColor="#fdf5da" />
          <stop offset="28%" stopColor="#f2d696" />
          <stop offset="62%" stopColor="#dcae4b" />
          <stop offset="100%" stopColor="#9e6e1e" />
        </linearGradient>
      </defs>

      {/* extruded depth: two dark copies offset down-right behind the face */}
      <g {...textProps} fill={side}>
        <text x={textProps.x} y={textProps.y} transform="translate(4.6,5.4)">
          KING
        </text>
        <text x={textProps.x} y={textProps.y} transform="translate(2.3,2.6)">
          KING
        </text>
      </g>

      {/* lit face, widened to match the reference wordmark */}
      <g transform="scale(1.15,1)">
        <text {...textProps} fill={face} stroke="#8a5f18" strokeWidth="0.8">
          KING
        </text>
      </g>

      {/* the arrow that runs out of the G */}
      <g>
        <rect x="336" y="43" width="132" height="11" fill={side} transform="translate(3.6,4.2)" />
        <polygon points="454,20 520,48 454,76" fill={side} transform="translate(3.6,4.2)" />
        <rect x="336" y="43" width="132" height="11" fill={face} />
        <polygon points="454,20 520,48 454,76" fill={head} stroke="#8a5f18" strokeWidth="0.8" />
      </g>
    </svg>
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
