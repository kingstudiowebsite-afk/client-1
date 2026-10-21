import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "How far in advance should I book?", a: "Weddings are typically booked 6–14 months in advance. Portrait and editorial sessions usually 4–6 weeks out." },
  { q: "Do you travel internationally?", a: "Absolutely. We've shot in over 20 countries. Travel is quoted transparently as a flat add-on." },
  { q: "When will I receive my photos?", a: "A curated preview arrives within 72 hours. Full galleries deliver in 4–6 weeks, films in 8–10 weeks." },
  { q: "Can we customize a package?", a: "Yes — every collection can be tailored. Reach out and we'll design one around your day." },
  { q: "Do you offer albums and prints?", a: "We offer handcrafted fine-art albums, framed prints and archival boxes through partner ateliers." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-cream py-20 text-ink-fg sm:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-tan-deep">Answers</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink-fg sm:text-5xl">
            Frequently asked
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-muted">
            Everything you need to know before we start shooting.
          </p>
        </Reveal>

        <div className="border-t border-ink/12">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="border-b border-ink/12">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg text-ink-fg sm:text-xl">{f.q}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center border transition-all duration-500 ${
                        isOpen ? "rotate-45 border-tan bg-tan text-ink" : "border-ink/20 text-ink-muted"
                      }`}
                    >
                      <FiPlus size={14} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pr-10 text-[14px] leading-relaxed text-ink-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
