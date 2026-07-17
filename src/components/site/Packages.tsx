import { Reveal, SectionHeader } from "./Reveal";
import { FiCheck } from "react-icons/fi";

const tiers = [
  {
    name: "Essence",
    price: "5,000",
    tag: "Basic",
    features: ["4 hours coverage", "1 photographer", "80+ edited photos", "Online gallery", "Personal use license"],
    highlight: false,
  },
  {
    name: "Signature",
    price: "10,000",
    tag: "Premium",
    features: ["8 hours coverage", "2 photographers", "300+ edited photos", "Cinematic highlight film", "Fine-art proof box", "Print release included"],
    highlight: true,
  },
  {
    name: "Heritage",
    price: "20,000",
    tag: "Luxury",
    features: ["Full-day coverage", "Lead + 2 photographers", "600+ edited photos", "Feature film + teaser", "Handcrafted heirloom album", "Drone & second location", "Priority scheduling"],
    highlight: false,
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative bg-surface/40 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Investment"
          title="Curated packages"
          subtitle="Transparent pricing. Every collection is fully customizable to your day."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 transition duration-500 hover:-translate-y-2 ${
                  t.highlight
                    ? "border-gold/60 bg-gradient-to-b from-gold/10 to-transparent shadow-[0_30px_80px_-30px_rgba(212,175,55,0.5)]"
                    : "border-border bg-surface/60 hover:border-gold/40"
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gold-gradient px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-background">
                    Most Loved
                  </span>
                )}
                <p className="text-xs uppercase tracking-[0.3em] text-gold">{t.tag}</p>
                <h3 className="mt-3 font-display text-4xl text-foreground">{t.name}</h3>
                <p className="mt-4 font-display text-5xl text-gold-gradient">{t.price}</p>
                <p className="text-xs text-muted-foreground">starting investment</p>

                <ul className="mt-8 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <FiCheck className="mt-1 shrink-0 text-gold" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 block rounded-full py-3 text-center text-xs uppercase tracking-[0.25em] transition ${
                    t.highlight
                      ? "gold-gradient text-background hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
                      : "border border-foreground/30 text-foreground hover:border-gold hover:text-gold"
                  }`}
                >
                  Book Now
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
