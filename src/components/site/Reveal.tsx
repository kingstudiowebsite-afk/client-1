import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <Reveal className="mx-auto mb-16 max-w-2xl text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">— {eyebrow} —</p>
      <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}
