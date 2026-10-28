import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { FiUsers, FiGrid, FiAward, FiStar } from "react-icons/fi";
import hero from "@/assets/hero.jpg";

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients", icon: FiUsers },
  { value: 1000, suffix: "+", label: "Projects Completed", icon: FiGrid },
  { value: 10, suffix: "+", label: "Years Experience", icon: FiAward },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: FiStar },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 2000;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);

  return (
    <span ref={ref} className="font-display text-[2.3rem] leading-none text-white sm:text-[2.7rem]">
      {n}
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-gold/15 bg-navy-2 py-0 text-white">
      <div className="mx-auto grid max-w-[1440px] items-center lg:grid-cols-[0.78fr_1.7fr]">
        {/* circular lens-style image bleeding off the left edge */}
        <div className="relative hidden h-[340px] lg:block">
          <div className="absolute -left-44 top-1/2 h-[440px] w-[440px] -translate-y-1/2 overflow-hidden rounded-full ring-1 ring-gold/25">
            <img src={hero} alt="" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-navy/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-navy/40" />
          </div>
          <div className="absolute -left-24 top-1/2 h-[470px] w-[470px] -translate-y-1/2 rounded-full border border-gold/15" />
        </div>

        <div className="px-5 py-14 sm:px-8 lg:pl-0 lg:pr-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <p className="eyebrow text-gold">Our Impact</p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-5 lg:px-6 ${
                  i === 0 ? "pl-0 lg:pl-0" : "border-l border-white/10"
                } ${i === 1 ? "pl-5" : ""}`}
              >
                <s.icon className="text-gold" size={21} strokeWidth={1.1} />
                <div className="mt-4">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2.5 text-[9px] uppercase tracking-[0.24em] text-white/55">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
