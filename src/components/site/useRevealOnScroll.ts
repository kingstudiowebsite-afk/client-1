import { useEffect } from "react";

export function useRevealOnScroll(key?: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal-up"));
    if (!els.length) return;

    const show = (el: Element) => el.classList.add("is-visible");

    if (!("IntersectionObserver" in window)) {
      els.forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );
    els.forEach((el) => io.observe(el));

    // if a section was jumped past, reveal it instead of leaving it invisible
    let raf = 0;
    const pass = () => {
      raf = 0;
      for (const el of els) {
        if (el.classList.contains("is-visible")) continue;
        if (el.getBoundingClientRect().bottom < 0) {
          show(el);
          io.unobserve(el);
        }
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(pass);
    };
    pass();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [key]);
}
