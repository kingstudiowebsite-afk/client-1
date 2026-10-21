import { motion } from "framer-motion";
import { FiCamera, FiArrowRight } from "react-icons/fi";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      <motion.img
        src={hero}
        alt="Cinematic photography hero"
        width={1920}
        height={1280}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/45" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1400px] items-center px-5 pb-24 pt-40 sm:px-8 lg:pb-28 lg:pt-44">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto]">
          {/* copy */}
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="eyebrow text-white/80"
            >
              Luxury Photography Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-6 font-display text-[2.6rem] leading-[1.05] text-white sm:text-6xl lg:text-[4.4rem]"
            >
              Capturing Moments
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 1 }}
              className="mt-1 font-script text-[3rem] leading-[1.15] text-tan sm:text-[4rem] lg:text-[5.2rem]"
            >
              That Last Forever
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="mt-7 max-w-md text-[15px] leading-relaxed text-white/70"
            >
              Professional wedding, portrait, event and lifestyle photography — crafted with a
              cinematic eye and an obsession for timeless detail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="rounded-[3px] bg-tan px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-tan-light"
              >
                Book a Session
              </a>
              <a
                href="#portfolio"
                className="flex items-center gap-3 rounded-[3px] border border-white/25 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/60"
              >
                View Portfolio
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/35">
                  <FiArrowRight size={10} />
                </span>
              </a>
            </motion.div>
          </div>

          {/* experience card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.9 }}
            className="justify-self-start border border-white/20 bg-white/[0.04] px-10 py-8 text-center backdrop-blur-sm lg:justify-self-end"
          >
            <FiCamera className="mx-auto mb-5 text-white" size={26} strokeWidth={1.1} />
            <p className="font-display text-4xl leading-none text-white">10+</p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/55">Years of Experience</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
