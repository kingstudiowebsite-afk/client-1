import { FiInstagram } from "react-icons/fi";
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
    <section className="relative bg-ink-2 py-9">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="eyebrow text-white/70">Follow me on Instagram</p>
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-2 text-[14px] text-tan transition hover:text-tan-light"
          >
            <FiInstagram size={14} />
            @poovarasanphotography
          </a>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
          {shots.map((src, i) => (
            <a
              key={i}
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="group aspect-square overflow-hidden rounded-[3px]"
            >
              <img
                src={src}
                alt="Instagram post"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
