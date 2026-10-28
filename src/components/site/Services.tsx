import { FiArrowRight, FiHeart, FiCamera, FiGift, FiUser, FiBox, FiFilm } from "react-icons/fi";
import { TbDrone } from "react-icons/tb";
import { Reveal } from "./Reveal";
import { FadeImage } from "./FadeImage";
import { useRevealOnScroll } from "./useRevealOnScroll";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpeg";
import p9 from "@/assets/p9.JPG";

const services = [
  {
    icon: FiHeart,
    title: "Wedding Photography",
    desc: "Full-day storytelling from getting ready to last dance.",
    image: p1,
  },
  {
    icon: FiCamera,
    title: "Pre Wedding",
    desc: "Cinematic engagement sessions in bespoke locations.",
    image: p2,
  },
  {
    icon: FiGift,
    title: "Birthday Shoot",
    desc: "Editorial-style celebrations for milestone moments.",
    image: p6,
  },
  {
    icon: FiUser,
    title: "Portrait Shoot",
    desc: "Personal, brand and family portraits with soul.",
    image: p7,
  },
  {
    icon: FiBox,
    title: "Product Photography",
    desc: "Luxury still life for premium brands and e-commerce.",
    image: p5,
  },
  {
    icon: TbDrone,
    title: "Drone Photography",
    desc: "Sweeping aerial cinematography for grand venues.",
    image: p4,
  },
  {
    icon: FiFilm,
    title: "Cinematic Video",
    desc: "Short films that play like a director's cut.",
    image: p9,
  },
];

export function Services() {
  useRevealOnScroll();
  return (
    <section id="services" className="relative bg-cream py-20 text-ink-fg sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[262px_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold-deep/50" />
              <p className="eyebrow text-gold-deep">Our Services</p>
            </div>
            <h2 className="mt-5 font-display text-[2.6rem] uppercase leading-[1.02] tracking-[0.005em] text-navy sm:text-[3rem]">
              What
              <br />
              We Do
            </h2>
            <div className="mt-7 h-px w-14 bg-navy/15" />
            <a
              href="#portfolio"
              className="group mt-7 inline-flex items-center gap-2.5 text-[9px] uppercase tracking-[0.24em] text-gold-deep transition-colors hover:text-navy"
            >
              View Portfolio
              <FiArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-7 lg:gap-x-3 xl:gap-x-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                className="reveal-up h-full"
              >
                <a href="#contact" className="group flex h-full flex-col">
                  <div className="relative">
                    <div className="relative aspect-[3/3.6] overflow-hidden bg-navy">
                      <FadeImage
                        src={s.image}
                        alt={s.title}
                        className="h-full w-full"
                        imgClassName="transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/5 to-transparent" />
                    </div>
                    <span className="absolute -bottom-[19px] left-3 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-gold/50 bg-navy text-gold shadow-[0_10px_20px_-12px_rgba(0,0,0,0.9)] transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                      <s.icon size={15} strokeWidth={1.25} />
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-[13px] uppercase leading-[1.35] tracking-[0.05em] text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[10.5px] leading-[1.65] text-ink-muted">{s.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[8.5px] uppercase tracking-[0.22em] text-gold-deep">
                    Learn More
                    <FiArrowRight
                      size={10}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
