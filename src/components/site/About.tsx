import { Reveal } from "./Reveal";
import { FadeImage } from "./FadeImage";
import about from "@/assets/hero1.jpg";
import { FiAward, FiCamera, FiHeart, FiStar, FiArrowRight } from "react-icons/fi";

const cards = [
  { icon: FiCamera, title: "Cinematic Eye", desc: "Every frame composed like a still from film." },
  { icon: FiHeart, title: "Real Emotion", desc: "We photograph feelings, not just faces." },
  { icon: FiAward, title: "Award Winning", desc: "Recognized by international photography guilds." },
  { icon: FiStar, title: "5-Star Service", desc: "White-glove experience from first call to final gallery." },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.12fr_1fr_248px] lg:gap-12 xl:gap-16">
        <Reveal>
          <div className="relative">
            <div
              className="relative h-[360px] overflow-hidden sm:h-[440px] lg:h-[480px]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 84%, 0 100%)" }}
            >
              <FadeImage
                src={about}
                alt="Photographer portrait"
                className="h-full w-full"
                imgClassName="object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
            </div>
            <span className="absolute right-8 top-8 h-16 w-px bg-gold/60" />
            <span className="absolute left-0 top-0 h-px w-24 bg-gold/50" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold/60" />
              <p className="eyebrow text-gold">About the Studio</p>
            </div>
            <h2 className="mt-5 font-display text-[1.9rem] uppercase leading-[1.14] text-white sm:text-[2.35rem] xl:text-[2.6rem]">
              A quiet obsession with <span className="text-gold">light, story</span> and the moments
              in between.
            </h2>
            <p className="mt-6 max-w-xl text-[13px] leading-[1.85] text-white/55">
              I'm Poovarasan, a photographer with 10 years of experience capturing stories through my
              lens. From events to creative projects, I approach every shoot with passion, precision,
              and a drive to exceed expectations. I thrive under pressure, value client satisfaction,
              and constantly push my creativity to deliver impactful visual results.
            </p>
            <a
              href="#portfolio"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-gold/50 px-6 py-3 text-[9px] uppercase tracking-[0.26em] text-gold transition-colors duration-300 hover:bg-gold hover:text-navy"
            >
              View Portfolio
              <FiArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="self-stretch">
          <div className="border-t border-white/10">
            {cards.map((c) => (
              <div
                key={c.title}
                className="group flex items-start gap-4 border-b border-white/10 py-5"
              >
                <c.icon
                  className="mt-0.5 shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-0.5"
                  size={19}
                  strokeWidth={1.15}
                />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/90">{c.title}</p>
                  <p className="mt-1.5 text-[10.5px] leading-[1.6] text-white/40">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
