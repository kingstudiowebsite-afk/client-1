import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 1000, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
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
    <span ref={ref} className="font-display text-5xl leading-none text-tan-deep sm:text-6xl">
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative border-y border-ink/10 bg-cream-2 py-16 text-ink-fg sm:py-20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-ink/10 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-cream-2 px-4 py-6 text-center">
            <Counter end={s.value} suffix={s.suffix} />
            <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ink-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
