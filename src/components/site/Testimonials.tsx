import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SectionHeader } from "./Reveal";

const items = [
  {
    name: "Arshath & Shafi",
    role: "Wedding ",
    quote:
      "Poovarasan didn't just photograph our wedding — he preserved the way it felt. Every image is a heirloom. We'll cherish them for generations.",
    rating: 5,
  },
  {
    name: "Ayesha",
    role: "BirthDay ",
    quote:
      "The most intuitive photographer I've worked with. Cinematic, calm, and endlessly creative. The gallery arrived and I cried.",
    rating: 5,
  },
  {
    name: "Yuvaraj",
    role: "Ear Piercing",
    quote:
      "Warm, patient and quietly brilliant. The photos feel like a scene from a film we didn't know we were living.",
    rating: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const item = items[i];
  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);

  return (
    <section id="testimonials" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader eyebrow="Kind Words" title="What clients say" />

        <div className="relative overflow-hidden rounded-3xl glass p-10 sm:p-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: item.rating }).map((_, k) => (
                  <FiStar key={k} className="fill-current text-gold" />
                ))}
              </div>
              <p className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
                "{item.quote}"
              </p>
              <div className="mt-8">
                <p className="font-display text-lg text-gold-gradient">{item.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-border p-3 text-foreground transition hover:border-gold hover:text-gold"
              aria-label="Previous"
            >
              <FiChevronLeft />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-1.5 bg-border"}`}
                  aria-label={`Slide ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-full border border-border p-3 text-foreground transition hover:border-gold hover:text-gold"
              aria-label="Next"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
