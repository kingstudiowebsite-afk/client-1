import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiArrowRight, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ADDRESS, EMAIL, PHONE, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Packages", href: "#packages" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy so the active link keeps the reference's underline
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.15, 0.4, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* utility bar */}
      <div className="hidden border-b border-white/[0.06] bg-navy-2 lg:block">
        <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between px-8 text-[10.5px] tracking-[0.06em] text-white/45">
          <span className="flex items-center gap-2">
            <FiMapPin className="text-gold" size={12} />
            {ADDRESS}
          </span>
          <span className="flex items-center gap-2.5 uppercase tracking-[0.28em]">
            <FaStar className="text-gold" size={7} />
            Capturing Moments. That Last Forever.
            <FaStar className="text-gold" size={7} />
          </span>
          <span className="flex items-center gap-6">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 transition hover:text-gold">
              <FiPhone className="text-gold" size={12} />
              {PHONE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-gold"
            >
              <WhatsAppIcon size={12} className="text-gold" />
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 transition hover:text-gold">
              <FiMail className="text-gold" size={12} />
              {EMAIL}
            </a>
          </span>
        </div>
      </div>

      {/* main nav */}
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`border-b transition-all duration-500 ${
          scrolled
            ? "border-gold/20 bg-navy shadow-[0_20px_40px_-32px_rgba(0,0,0,0.9)]"
            : "border-gold/10 bg-navy"
        }`}
      >
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#home" aria-label="KING STUDIO home" className="shrink-0">
            <Logo />
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`group relative py-7 text-[10px] font-medium uppercase tracking-[0.22em] transition-colors ${
                    isActive ? "text-white" : "text-white/60 hover:text-gold"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-0 bottom-[22px] h-px bg-gold transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            className="group hidden shrink-0 items-center gap-2.5 rounded-full border border-gold/55 px-5 py-2.5 text-[9.5px] font-medium uppercase tracking-[0.24em] text-gold transition-colors duration-300 hover:bg-gold hover:text-navy lg:inline-flex"
          >
            Book a Session
            <FiArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-white transition hover:text-gold lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-gold/15 bg-navy lg:hidden"
          >
            <div className="mx-5 flex flex-col py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-white/[0.06] py-3.5 text-[10.5px] uppercase tracking-[0.24em] transition ${
                    active === l.href ? "text-gold" : "text-white/75 hover:text-gold"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-full border border-gold/55 px-5 py-3 text-[10px] uppercase tracking-[0.24em] text-gold"
              >
                Book a Session
                <FiArrowRight size={12} />
              </a>
              <div className="mt-5 flex flex-col gap-2 text-[10.5px] text-white/45">
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2">
                  <FiPhone className="text-gold" size={12} /> {PHONE}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <WhatsAppIcon size={12} className="text-gold" /> {PHONE}
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2">
                  <FiMail className="text-gold" size={12} /> {EMAIL}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
