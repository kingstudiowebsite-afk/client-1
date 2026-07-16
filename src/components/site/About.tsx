import { Reveal } from "./Reveal";
import about from "@/assets/about.jpg";
import { FiAward, FiCamera, FiHeart, FiStar } from "react-icons/fi";

const cards = [
  { icon: FiCamera, title: "Cinematic Eye", desc: "Every frame composed like a still from film." },
  { icon: FiHeart, title: "Real Emotion", desc: "We photograph feelings, not just faces." },
  { icon: FiAward, title: "Award Winning", desc: "Recognized by international photography guilds." },
  { icon: FiStar, title: "5-Star Service", desc: "White-glove experience from first call to final gallery." },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-gold/30" />
            <img
              src={about}
              alt="Photographer portrait"
              width={900}
              height={1100}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 rounded-2xl glass px-6 py-4">
              <p className="text-3xl text-gold-gradient font-display">08+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Years of craft</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">— About the Studio —</p>
            <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
              A quiet obsession with <em className="text-gold-gradient not-italic">light, story</em> and the moments in between.
            </h2>
            <p className="mt-6 text-muted-foreground">
              I'm Alexandre — a photographer working with couples, brands and families who
              want more than a photograph. For nearly a decade I've traveled from
              chapels in Tuscany to rooftops in Tokyo, chasing the honest, in-between
              seconds that most people miss.
            </p>
            <p className="mt-4 text-muted-foreground">
              My work has been featured in Vogue, Harper's Bazaar and Condé Nast Traveller.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-surface/50 p-5 transition hover:border-gold/40">
                  <c.icon className="text-gold" size={22} />
                  <h3 className="mt-3 font-display text-xl text-foreground">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
