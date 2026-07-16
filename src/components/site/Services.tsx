import { Reveal, SectionHeader } from "./Reveal";
import { FiHeart, FiCamera, FiGift, FiUser, FiBox, FiFilm } from "react-icons/fi";
import { TbDrone } from "react-icons/tb";

const services = [
  { icon: FiHeart, title: "Wedding Photography", desc: "Full-day storytelling from getting ready to last dance." },
  { icon: FiCamera, title: "Pre Wedding", desc: "Cinematic engagement sessions in bespoke locations." },
  { icon: FiGift, title: "Birthday Shoot", desc: "Editorial-style celebrations for milestone moments." },
  { icon: FiUser, title: "Portrait Shoot", desc: "Personal, brand and family portraits with soul." },
  { icon: FiBox, title: "Product Photography", desc: "Luxury still life for premium brands and e-commerce." },
  { icon: TbDrone, title: "Drone Photography", desc: "Sweeping aerial cinematography for grand venues." },
  { icon: FiFilm, title: "Cinematic Video", desc: "Short films that play like a director's cut." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What We Offer"
          title="Services crafted with intention"
          subtitle="Every project begins with a conversation and ends with a heirloom."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/60 p-8 transition duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.3)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold transition group-hover:gold-gradient group-hover:text-background">
                  <s.icon size={24} />
                </div>
                <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
