import { useMemo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SectionHeader, Reveal } from "./Reveal";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpeg";
import p9 from "@/assets/p9.JPG";
import p10 from "@/assets/p10.PNG";
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
    <section id="portfolio" className="relative bg-surface/40 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Selected Work"
          title="A gallery of stories"
          subtitle="A curated selection from recent weddings, editorials and journeys."
        />

        <Reveal className="mb-12 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition ${
                active === c
                  ? "border-gold bg-gold text-background"
                  : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.button
                key={item.src + idx + active}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                onClick={() => setLightbox(idx)}
                className="group relative block w-full overflow-hidden rounded-xl break-inside-avoid"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-background/20 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gold">{item.cat}</p>
                    <h3 className="mt-1 font-display text-2xl text-foreground">{item.title}</h3>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-6 top-6 rounded-full border border-border p-2 text-foreground hover:border-gold hover:text-gold"
              aria-label="Close"
            >
              <FiX size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 rounded-full border border-border p-3 text-foreground hover:border-gold hover:text-gold sm:left-8"
              aria-label="Previous"
            >
              <FiChevronLeft size={24} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 rounded-full border border-border p-3 text-foreground hover:border-gold hover:text-gold sm:right-8"
              aria-label="Next"
            >
              <FiChevronRight size={24} />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {lightbox + 1} / {filtered.length} — {filtered[lightbox].title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
