import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { SectionHeader } from "./Reveal";

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
    <section id="faq" className="relative bg-surface/40 py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader eyebrow="Answers" title="Frequently asked" />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-surface/60">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-lg text-foreground sm:text-xl">{f.q}</span>
                  <FiPlus
                    className={`shrink-0 text-gold transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                    size={22}
                  />
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
                      <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
