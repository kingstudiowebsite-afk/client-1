import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import hero from "@/assets/hero.jpg";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy">
      <img
        src={hero}
        alt="Cinematic photography hero"
        width={1920}
        height={1280}
        decoding="async"
        fetchPriority="high"
        className="animate-hero-zoom absolute inset-0 h-full w-full object-cover object-[64%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#070d1c_0%,rgba(7,13,28,0.95)_32%,rgba(7,13,28,0.62)_58%,rgba(7,13,28,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,13,28,0.88)_0%,rgba(7,13,28,0.15)_34%,rgba(7,13,28,0.72)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-[1440px] items-center px-5 pb-20 pt-36 sm:px-8 lg:min-h-[92vh] lg:pb-24 lg:pt-40">
        <div className="grid w-full items-end gap-12 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-[660px]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease }}
              className="flex items-center gap-3 eyebrow text-white/70"
            >
              <span className="h-px w-8 bg-gold/70" />
              Luxury Photography Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 1, ease }}
              className="mt-7 font-display text-[2.9rem] uppercase leading-[0.98] text-white sm:text-[4rem] lg:text-[4.9rem]"
            >
              Capturing
              <br />
              Moments
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease }}
              className="mt-1 font-display text-[2.5rem] uppercase leading-[1.02] italic text-gold sm:text-[3.5rem] lg:text-[4.2rem]"
            >
              That Last Forever
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.9, ease }}
              className="mt-8 max-w-[420px] text-[13.5px] leading-relaxed text-white/60"
            >
              Professional wedding, portrait, event and lifestyle photography — crafted with a
              cinematic eye and an obsession for timeless detail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.82, duration: 0.9, ease }}
              className="mt-10 flex flex-wrap items-center gap-7"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-gold/70 px-7 py-3.5 text-[9.5px] font-medium uppercase tracking-[0.26em] text-gold transition-colors duration-300 hover:bg-gold hover:text-navy"
              >
                Book a Session
                <FiArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2.5 text-[9.5px] uppercase tracking-[0.26em] text-white/65 transition-colors hover:text-white"
              >
                View Portfolio
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 transition-colors group-hover:border-gold group-hover:text-gold">
                  <FiArrowRight size={11} />
                </span>
              </a>
            </motion.div>
          </div>

          {/* vertical rail — keeps the 10+ stat without adding copy */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.9, ease }}
            className="hidden flex-col items-center gap-5 pb-2 lg:flex"
          >
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/45 [writing-mode:vertical-rl]">
              Years of Experience
            </span>
            <span className="h-14 w-px bg-gold/40" />
            <span className="font-display text-[1.6rem] leading-none text-gold">10+</span>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0" />
    </section>
  );
}
