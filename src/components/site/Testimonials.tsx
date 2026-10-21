import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Reveal } from "./Reveal";

const items = [
  {
    name: "Robin & Jeslin",
    role: "Wedding ",
    initials: "RJ",
    quote:
      "Poovarasan didn't just photograph our wedding — he preserved the way it felt. Every image is a heirloom. We'll cherish them for generations.",
    rating: 5,
  },
  {
    name: "Ayesha",
    role: "BirthDay ",
    initials: "A",
    quote:
      "The most intuitive photographer I've worked with. Cinematic, calm, and endlessly creative. The gallery arrived and I cried.",
    rating: 5,
  },
  {
    name: "Yuvaraj",
    role: "Ear Piercing",
    initials: "Y",
    quote:
      "Warm, patient and quietly brilliant. The photos feel like a scene from a film we didn't know we were living.",
    rating: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);
  const visible = [0, 1, 2].map((k) => items[(i + k) % items.length]);

  return (
    <section id="testimonials" className="relative bg-cream py-20 text-ink-fg sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow text-tan-deep">Kind Words</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink-fg sm:text-5xl">
            What clients say
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-tan/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-tan" />
            <span className="h-px w-10 bg-tan/40" />
          </div>
        </Reveal>

        <div className="relative mt-14">
          <button
            onClick={prev}
            className="absolute -left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white text-ink-fg shadow-sm transition hover:border-tan hover:text-tan-deep sm:flex"
            aria-label="Previous"
          >
            <FiChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute -right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white text-ink-fg shadow-sm transition hover:border-tan hover:text-tan-deep sm:flex"
            aria-label="Next"
          >
            <FiChevronRight size={16} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -26 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 sm:grid-cols-3"
            >
              {visible.map((t) => (
                <div
                  key={t.name + t.role}
                  className="flex h-full flex-col bg-white p-7 shadow-[0_14px_40px_-24px_rgba(23,19,15,0.45)]"
                >
                  <p className="text-[13.5px] leading-relaxed text-ink-fg/85">"{t.quote}"</p>
                  <div className="mt-auto flex items-center justify-between gap-4 pt-7">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-[11px] font-semibold tracking-wide text-tan">
                        {t.initials}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[13px] font-semibold text-ink-fg">{t.name}</span>
                        <span className="block text-[9.5px] uppercase tracking-[0.2em] text-ink-muted">{t.role}</span>
                      </span>
                    </div>
                    <span className="flex shrink-0 gap-0.5 text-gold">
                      {Array.from({ length: t.rating }).map((_, k) => (
                        <FiStar key={k} className="fill-current" size={12} />
                      ))}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2.5">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-tan" : "w-1.5 bg-ink/20"}`}
              aria-label={`Slide ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
