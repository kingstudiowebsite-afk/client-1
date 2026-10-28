import { FiCheck, FiCamera, FiClock, FiStar, FiAward } from "react-icons/fi";
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
    <section id="packages" className="relative bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid overflow-hidden border border-gold/20 lg:grid-cols-4 xl:grid-cols-[1.02fr_0.82fr_0.82fr_0.82fr_0.86fr]">
          {/* left copy */}
          <div className="border-b border-gold/15 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-9">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold/60" />
              <p className="eyebrow text-gold">Investment</p>
            </div>
            <h2 className="mt-5 font-display text-[2.1rem] uppercase leading-[1.06] text-white sm:text-[2.4rem]">
              Curated
              <br />
              Packages
            </h2>
            <p className="mt-5 max-w-[240px] text-[12px] leading-[1.8] text-white/50">
              Transparent pricing. Every collection is fully customizable to your day.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-gold/55 px-5 py-2.5 text-[8.5px] uppercase tracking-[0.24em] text-gold transition-colors duration-300 hover:bg-gold hover:text-navy"
            >
              View Packages
            </a>
          </div>

          {/* tiers */}
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative border-b border-gold/15 p-7 lg:border-b-0 lg:border-r lg:p-7 ${
                t.highlight ? "bg-navy-3/70" : ""
              }`}
            >
              {t.highlight && (
                <>
                  <span className="absolute inset-x-0 top-0 h-px bg-gold" />
                  <span className="absolute right-5 top-6 rounded-full border border-gold/50 bg-gold/10 px-2.5 py-1 text-[7.5px] uppercase tracking-[0.2em] text-gold">
                    Most Loved
                  </span>
                </>
              )}

              <div className="flex items-center gap-2.5 text-gold/80">
                {t.icons.map((Icon, k) => (
                  <Icon key={k} size={15} strokeWidth={1.2} />
                ))}
              </div>

              <p className="mt-5 font-display text-[1.05rem] uppercase tracking-[0.12em] text-white">
                {t.name}
              </p>
              <p className="mt-1.5 text-[8.5px] uppercase tracking-[0.24em] text-gold">{t.tag}</p>

              <ul className="mt-5 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[10.5px] leading-snug text-white/45">
                    <FiCheck className="mt-[3px] shrink-0 text-gold/80" size={10} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-display text-[1.3rem] leading-none text-gold">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">From </span>
                  {t.price}
                </p>
                <p className="mt-1.5 text-[7.5px] uppercase tracking-[0.24em] text-white/30">
                  starting investment
                </p>
              </div>
            </div>
          ))}

          {/* photo panel */}
          <div className="relative hidden xl:block">
            <img src={bandImage} alt="Photographer at work" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
