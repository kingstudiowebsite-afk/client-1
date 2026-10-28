import { FiInstagram, FiArrowRight } from "react-icons/fi";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p9 from "@/assets/p9.JPG";
import p11 from "@/assets/p11.JPG";
import p13 from "@/assets/p13.JPG";
import p16 from "@/assets/p16.JPG";

const IG_URL =
  "https://www.instagram.com/poovarasanphotography?igsh=MTVvdzBuejhkamx0dA%3D%3D&utm_source=qr";

const shots = [p1, p2, p5, p6, p9, p11, p13, p16];

export function InstagramStrip() {
  return (
    <section className="relative border-t border-gold/15 bg-navy-2 py-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="shrink-0">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold/60" />
            <p className="eyebrow text-gold">Follow Me On Instagram</p>
          </div>
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="group mt-4 flex items-center gap-2.5 font-display text-[1.05rem] text-white transition-colors hover:text-gold"
          >
            <FiInstagram size={14} className="text-gold" />
            @poovarasanphotography
            <FiArrowRight
              size={12}
              className="text-gold/70 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-8 lg:w-[62%]">
          {shots.map((src, i) => (
            <a
              key={i}
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="group relative aspect-square overflow-hidden bg-navy"
            >
              <img
                src={src}
                alt="Instagram post"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-0 bg-navy/30 transition-opacity duration-500 group-hover:opacity-0" />
              <span className="pointer-events-none absolute inset-0 border border-gold/0 transition-colors duration-500 group-hover:border-gold/60" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
