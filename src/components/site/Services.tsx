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
    <section id="services" className="relative z-20 -mt-14 pb-24 sm:-mt-20 sm:pb-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-7">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-ink-2 px-5 py-8 text-center transition-colors duration-500 hover:bg-ink-3"
            >
              <s.icon
                className="mx-auto text-white/85 transition-colors duration-500 group-hover:text-tan"
                size={26}
                strokeWidth={1.1}
              />
              <h3 className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                {s.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[190px] text-[11.5px] leading-relaxed text-white/45">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
