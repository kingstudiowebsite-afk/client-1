import { Reveal } from "./Reveal";
import about from "@/assets/hero1.png";
import { FiAward, FiCamera, FiHeart, FiStar } from "react-icons/fi";

const cards = [
  { icon: FiCamera, title: "Cinematic Eye", desc: "Every frame composed like a still from film." },
  { icon: FiHeart, title: "Real Emotion", desc: "We photograph feelings, not just faces." },
  { icon: FiAward, title: "Award Winning", desc: "Recognized by international photography guilds." },
  { icon: FiStar, title: "5-Star Service", desc: "White-glove experience from first call to final gallery." },
];

export function About() {
  return (
    <section id="about" className="relative bg-cream py-20 text-ink-fg sm:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-tan/50" />
            <img
              src={about}
              alt="Photographer portrait"
              width={900}
              height={1100}
              loading="lazy"
              className="relative aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-6 right-0 bg-ink px-7 py-5 text-center">
              <p className="font-display text-4xl leading-none text-tan">10+</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/60">Years of craft</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-tan-deep">About the Studio</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.15] text-ink-fg sm:text-5xl">
              A quiet obsession with <span className="text-tan-deep">light, story</span> and the moments in between.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-muted">
              I'm  Poovarasan, a photographer with 10
                  years of experience capturing stories
                  through my lens. From events to creative
                  projects, I approach every shoot with
                  passion, precision, and a drive to exceed
                  expectations. I thrive under pressure, value
                  client satisfaction, and constantly push my
                  creativity to deliver impactful visual results.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px bg-ink/10">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08} className="h-full">
                <div className="h-full bg-cream p-6 transition-colors duration-500 hover:bg-cream-2">
                  <c.icon className="text-tan-deep" size={20} strokeWidth={1.4} />
                  <h3 className="mt-3 font-display text-xl text-ink-fg">{c.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
