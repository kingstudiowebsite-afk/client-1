import { FiCheck, FiCamera, FiClock, FiStar, FiAward, FiGift } from "react-icons/fi";
import bandImage from "@/assets/about.jpg";

const tiers = [
  {
    name: "Essence",
    price: "5,000",
    tag: "Basic",
    icons: [FiCamera, FiClock],
    features: ["4 hours coverage", "1 photographer", "80+ edited photos", "Online gallery", "Personal use license"],
    highlight: false,
  },
  {
    name: "Signature",
    price: "10,000",
    tag: "Premium",
    icons: [FiCamera, FiStar],
    features: ["8 hours coverage", "2 photographers", "300+ edited photos", "Cinematic highlight film", "Fine-art proof box", "Print release included"],
    highlight: true,
  },
  {
    name: "Heritage",
    price: "20,000",
    tag: "Luxury",
    icons: [FiCamera, FiAward],
    features: ["Full-day coverage", "Lead + 2 photographers", "600+ edited photos", "Feature film + teaser", "Handcrafted heirloom album", "Drone & second location", "Priority scheduling"],
    highlight: false,
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-2xl bg-ink lg:grid-cols-[1.05fr_0.78fr_0.78fr_0.78fr_0.9fr]">
          {/* left copy */}
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="eyebrow text-tan">Investment</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.12] text-white sm:text-4xl">
              Curated packages
            </h2>
            <p className="mt-4 text-[13px] leading-relaxed text-white/50">
              Transparent pricing. Every collection is fully customizable to your day.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-[3px] bg-tan px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-tan-light"
            >
              View Packages
            </a>
          </div>

          {/* tiers */}
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative border-t border-white/10 p-7 lg:border-l lg:border-t-0 lg:p-8 ${
                t.highlight ? "bg-ink-2" : ""
              }`}
            >
              {t.highlight && (
                <span className="absolute right-5 top-5 rounded-[2px] bg-tan px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink">
                  Most Loved
                </span>
              )}

              <div className="flex items-center gap-2.5 text-white/70">
                {t.icons.map((Icon, k) => (
                  <Icon key={k} size={17} strokeWidth={1.2} />
                ))}
              </div>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                {t.name}
              </p>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-tan">{t.tag}</p>

              <ul className="mt-4 space-y-1.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[11.5px] leading-snug text-white/45">
                    <FiCheck className="mt-[3px] shrink-0 text-tan" size={11} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[13px] font-semibold tracking-[0.06em] text-white">FROM {t.price}</p>
              <p className="text-[9.5px] uppercase tracking-[0.2em] text-white/30">starting investment</p>
            </div>
          ))}

          {/* photo panel */}
          <div className="relative hidden lg:block">
            <img src={bandImage} alt="Photographer at work" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/25 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
