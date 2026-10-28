import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** extra classes applied to the <img> itself (hover zoom etc.) */
  imgClassName?: string;
  eager?: boolean;
  fit?: "cover" | "contain";
};

/**
 * An image that fades in once its bytes are decoded, so a lazy-loaded photo
 * never snaps onto the page. Opacity only — the hover transform stays free.
 */
export function FadeImage({ src, alt, className = "", imgClassName = "", eager = false, fit = "cover" }: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <span className={`relative block overflow-hidden ${className}`}>
      <span
        aria-hidden="true"
        className={`absolute inset-0 bg-navy-3 transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`${
          fit === "contain" ? "h-auto w-full object-contain" : "h-full w-full object-cover"
        } transition-opacity duration-[900ms] ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        } ${imgClassName}`}
      />
    </span>
  );
}
