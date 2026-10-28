import { useMemo, useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { FadeImage } from "./FadeImage";
import { useRevealOnScroll } from "./useRevealOnScroll";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpeg";
import p9 from "@/assets/p9.JPG";
import p10 from "@/assets/p10.jpg";
import p11 from "@/assets/p11.JPG";
import p12 from "@/assets/p12.JPG";
import p13 from "@/assets/p13.JPG";
import p14 from "@/assets/p14.JPG";
import p15 from "@/assets/p15.JPG";
import p16 from "@/assets/p16.JPG";
import p17 from "@/assets/p17.JPG";
import p18 from "@/assets/p18.JPG";

type Item = { src: string; cat: string; title: string };
const items: Item[] = [
  { src: p1, cat: "Wedding", title: "The Vow" },
  { src: p15, cat: "Wedding", title: "The Vow" },

  { src: p11, cat: "Portrait", title: "" },
  { src: p12, cat: "Portrait", title: "" },

  { src: p2, cat: "Pre Wedding", title: "Misty Fields" },
  { src: p5, cat: "Fashion", title: "Noir Editorial" },
  { src: p9, cat: "Fashion", title: "Movie Shoot" },
  { src: p10, cat: "Fashion", title: "Movie Shoot" },

  { src: p4, cat: "Nature", title: "Alpine Light" },
  { src: p6, cat: "Events", title: "Nights" },
  { src: p13, cat: "Events", title: "Shoot" },
  { src: p14, cat: "Events", title: "Shoot" },

  { src: p7, cat: "Portrait", title: "Quiet Study" },
  { src: p16, cat: "Portrait", title: "Actor SK" },
  { src: p17, cat: "Portrait", title: "Actor SK" },
];

const cats = ["All", "Wedding", "Pre Wedding", "Portrait", "Nature", "Fashion", "Events"];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const scroller = useRef<HTMLDivElement>(null);
  useRevealOnScroll(active);

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.cat === active)),
    [active]
  );

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((v) => (v === null ? null : (v + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () => setLightbox((v) => (v === null ? null : (v - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );

  const scroll = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.82, behavior: "smooth" });
  };

  const pick = (c: string) => {
    setActive(c);
    scroller.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  return (
    <section id="portfolio" className="relative bg-cream py-20 text-ink-fg sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-9 lg:grid-cols-[262px_minmax(0,1fr)] lg:items-end lg:gap-12 xl:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold-deep/50" />
              <p className="eyebrow text-gold-deep">Selected Work</p>
            </div>
            <h2 className="mt-5 font-display text-[2.4rem] uppercase leading-[1.02] text-navy sm:text-[2.8rem]">
              A Gallery
              <br />
              Of Stories
            </h2>
            <p className="mt-6 max-w-[250px] text-[13px] leading-[1.75] text-ink-muted">
              A curated selection from recent weddings, editorials and journeys.
            </p>
            <button
              onClick={() => pick("All")}
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full border border-navy/20 px-5 py-2.5 text-[8.5px] uppercase tracking-[0.24em] text-navy transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-navy"
            >
              View All Galleries
              <FiArrowRight
                size={11}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-x-6 gap-y-2.5">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => pick(c)}
                  className={`relative pb-2 text-[9px] uppercase tracking-[0.2em] transition-colors ${
                    active === c ? "text-navy" : "text-ink-muted hover:text-gold-deep"
                  }`}
                >
                  {c}
                  {active === c && (
                    <motion.span
                      layoutId="portfolio-filter"
                      className="absolute inset-x-0 bottom-0 h-px bg-gold-deep"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-[9px] uppercase tracking-[0.26em] text-ink-muted">
                {filtered.length} Projects
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll(-1)}
                  aria-label="Scroll portfolio left"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-gold hover:bg-gold"
                >
                  <FiChevronLeft size={15} />
                </button>
                <button
                  onClick={() => scroll(1)}
                  aria-label="Scroll portfolio right"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-gold hover:bg-gold"
                >
                  <FiChevronRight size={15} />
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        <div
          ref={scroller}
          className="no-scrollbar mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
        >
          {filtered.map((item, idx) => (
            <button
              key={item.src + idx + active}
              onClick={() => setLightbox(idx)}
              style={{ ["--reveal-delay" as string]: `${Math.min(idx, 6) * 60}ms` }}
              className="reveal-up group relative aspect-[3/4.35] w-[45%] shrink-0 snap-start overflow-hidden rounded-[4px] bg-navy sm:w-[29%] md:w-[22.5%] xl:w-[calc((100%-4rem)/5)]"
            >
              <FadeImage
                src={item.src}
                alt={item.title || item.cat}
                className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy via-navy/70 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-5 text-center">
                {item.title && (
                  <p className="font-display text-[12.5px] uppercase leading-tight tracking-[0.1em] text-white">
                    {item.title}
                  </p>
                )}
                <p
                  className={`text-[8px] uppercase tracking-[0.24em] text-gold/85 ${
                    item.title ? "mt-1.5" : ""
                  }`}
                >
                  {item.cat}
                </p>
              </div>
              <span className="pointer-events-none absolute inset-3 border border-gold/0 transition-colors duration-500 group-hover:border-gold/35" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/97 p-4 backdrop-blur-xl"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-6 top-6 rounded-full border border-gold/30 p-2 text-white transition hover:border-gold hover:text-gold"
              aria-label="Close"
            >
              <FiX size={22} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 rounded-full border border-gold/30 p-3 text-white transition hover:border-gold hover:text-gold sm:left-8"
              aria-label="Previous"
            >
              <FiChevronLeft size={22} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title || filtered[lightbox].cat}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 rounded-full border border-gold/30 p-3 text-white transition hover:border-gold hover:text-gold sm:right-8"
              aria-label="Next"
            >
              <FiChevronRight size={22} />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-white/45">
              {lightbox + 1} / {filtered.length} — {filtered[lightbox].title || filtered[lightbox].cat}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
