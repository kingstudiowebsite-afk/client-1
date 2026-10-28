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
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold-deep/50" />
              <p className="eyebrow text-gold-deep">Kind Words</p>
            </div>
            <h2 className="mt-5 font-display text-[2.3rem] uppercase leading-[1.04] text-navy sm:text-[2.7rem]">
              What Clients Say
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-gold hover:bg-gold"
              aria-label="Previous"
            >
              <FiChevronLeft size={15} />
            </button>
            <button
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-gold hover:bg-gold"
              aria-label="Next"
            >
              <FiChevronRight size={15} />
            </button>
          </div>
        </Reveal>

        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -26 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-5 sm:grid-cols-3"
            >
              {visible.map((t) => (
                <div
                  key={t.name + t.role}
                  className="group flex h-full flex-col border border-navy/12 bg-cream-2/40 p-7 transition-colors duration-500 hover:border-gold/50 hover:bg-cream-2/70"
                >
                  <span className="font-display text-[2.6rem] leading-[0.7] text-gold/70">“</span>
                  <p className="mt-5 text-[13px] leading-[1.8] text-ink-fg/80">{t.quote}</p>

                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-navy/10 pt-6">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-navy text-[10px] tracking-wide text-gold">
                        {t.initials}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-display text-[14px] text-navy">
                          {t.name}
                        </span>
                        <span className="block text-[8px] uppercase tracking-[0.22em] text-ink-muted">
                          {t.role}
                        </span>
                      </span>
                    </div>
                    <span className="flex shrink-0 gap-0.5 text-gold">
                      {Array.from({ length: t.rating }).map((_, k) => (
                        <FiStar key={k} className="fill-current" size={10} />
                      ))}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-9 flex items-center gap-2.5">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-px transition-all duration-500 ${
                k === i ? "w-10 bg-gold-deep" : "w-5 bg-navy/20"
              }`}
              aria-label={`Slide ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
