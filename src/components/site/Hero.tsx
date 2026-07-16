import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.img
        src={hero}
        alt="Cinematic photography hero"
        width={1920}
        height={1280}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-6 text-xs uppercase tracking-[0.4em] text-gold"
        >
          — Luxury Photography Studio —
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-display text-5xl leading-[1.05] text-foreground sm:text-7xl md:text-8xl"
        >
          Capturing Moments <br />
          That Last <em className="text-gold-gradient not-italic">Forever</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Professional wedding, portrait, event and lifestyle photography — crafted with
          a cinematic eye and an obsession for timeless detail.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full gold-gradient px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-background transition hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          >
            Book Now
          </a>
          <a
            href="#portfolio"
            className="rounded-full border border-foreground/30 px-8 py-3 text-sm uppercase tracking-[0.2em] text-foreground transition hover:border-gold hover:text-gold"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <FiArrowDown className="animate-scroll-hint" size={18} />
        </div>
      </motion.a>
    </section>
  );
}
