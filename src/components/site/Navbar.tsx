import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ADDRESS, EMAIL, PHONE, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* utility bar */}
      <div className="hidden border-b border-white/[0.07] bg-ink-2 lg:block">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-8 text-[11px] text-white/55">
          <span className="flex items-center gap-2">
            <FiMapPin className="text-tan" size={12} />
            {ADDRESS}
          </span>
          <span className="flex items-center gap-2.5 tracking-[0.08em]">
            <FaStar className="text-tan" size={9} />
            Capturing Moments. That Last Forever.
            <FaStar className="text-tan" size={9} />
          </span>
          <span className="flex items-center gap-6">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 transition hover:text-white">
              <FiPhone className="text-tan" size={12} />
              {PHONE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <WhatsAppIcon size={13} className="text-tan" />
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 transition hover:text-white">
              <FiMail className="text-tan" size={12} />
              {EMAIL}
            </a>
          </span>
        </div>
      </div>

      {/* main nav */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`border-b border-white/[0.07] transition-colors duration-500 ${
          scrolled ? "bg-ink/95 backdrop-blur-xl" : "bg-ink"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#home" aria-label="KING STUDIO home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative py-6 text-[11px] font-medium uppercase tracking-[0.18em] text-white/75 transition hover:text-white"
              >
                {l.label}
                <span className="absolute inset-x-0 bottom-4 h-px scale-x-0 bg-tan transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden shrink-0 rounded-[3px] bg-tan px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-tan-light lg:inline-block"
          >
            Book a Session
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-white lg:hidden"
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
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/10 bg-ink lg:hidden"
          >
            <div className="mx-5 flex flex-col gap-1 py-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/[0.07] py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 transition hover:text-tan"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-[3px] bg-tan px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-ink"
              >
                Book a Session
              </a>
              <div className="mt-4 flex flex-col gap-1.5 text-[11px] text-white/50">
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2">
                  <FiPhone className="text-tan" size={12} /> {PHONE}
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <WhatsAppIcon size={12} className="text-tan" /> {PHONE}
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2">
                  <FiMail className="text-tan" size={12} /> {EMAIL}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
