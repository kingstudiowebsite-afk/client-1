import kingLogo from "@/assets/king-logo.png";

type LogoProps = {
  /** light = for dark backgrounds, dark = for cream backgrounds */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * The circular KING crest: gold-rimmed navy disc with the original transparent
 * gold "KING->" artwork (src/assets/king-logo.png) centred inside it.
 */
export function KingBadge({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        padding: Math.max(2.5, size * 0.055),
        background:
          "linear-gradient(150deg,#f6e2b8 0%,#c9a24a 30%,#8a6520 54%,#edcf8f 78%,#a8822f 100%)",
        boxShadow: "0 12px 28px -18px rgba(0,0,0,0.95), 0 0 0 1px rgba(201,162,74,0.22)",
      }}
    >
      <span
        className="flex h-full w-full items-center justify-center rounded-full"
        style={{
          background:
            "radial-gradient(circle at 34% 26%, #1d2c4e 0%, #121e3a 38%, #0a1122 72%, #050a14 100%)",
          boxShadow:
            "inset 0 0 0 1px rgba(201,162,74,0.45), inset 0 8px 20px rgba(0,0,0,0.55)",
        }}
      >
        <img
          src={kingLogo}
          alt=""
          width={1200}
          height={225}
          loading="eager"
          decoding="async"
          className="w-[84%]"
          style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.6))" }}
        />
      </span>
    </span>
  );
}

export function Logo({ tone = "light", className = "" }: LogoProps) {
  const wordClass = tone === "light" ? "text-white" : "text-navy";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <KingBadge size={52} />
      <span
        className={`font-display text-[1.08rem] uppercase leading-none tracking-[0.16em] ${wordClass}`}
      >
        King Studio
      </span>
    </span>
  );
}
