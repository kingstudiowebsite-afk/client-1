import { useState } from "react";
import { FaInstagram, FaBehance } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Logo } from "./Logo";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Wedding Photography",
  "Pre Wedding",
  "Birthday Shoot",
  "Portrait Shoot",
  "Product Photography",
  "Drone Photography",
  "Cinematic Video",
];

const informationLinks = [
  { label: "FAQ", href: "#faq" },
  { label: "Pricing & Packages", href: "#packages" },
  { label: "Booking Process", href: "#contact" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const IG_URL =
  "https://www.instagram.com/poovarasanphotography?igsh=MTVvdzBuejhkamx0dA%3D%3D&utm_source=qr";
const BE_URL = "https://www.behance.net/poovaraphotogr";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative bg-ink text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* brand */}
          <div className="lg:col-span-3">
            <Logo />
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-white/45">
              Capturing real moments and creating timeless memories. Let's tell your story through
              our lens.
            </p>
            <div className="mt-6 flex gap-2.5">
              {[
                { Icon: FaInstagram, href: IG_URL },
                { Icon: FaBehance, href: BE_URL },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/60 transition hover:border-tan hover:text-tan"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* quick links */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-white/85">Quick Links</p>
            <ul className="mt-5 space-y-2.5 text-[13px] text-white/45">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition hover:text-tan">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-white/85">Services</p>
            <ul className="mt-5 space-y-2.5 text-[13px] text-white/45">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="transition hover:text-tan">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* information */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-white/85">Information</p>
            <ul className="mt-5 space-y-2.5 text-[13px] text-white/45">
              {informationLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition hover:text-tan">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* newsletter */}
          <div className="lg:col-span-3">
            <p className="eyebrow text-white/85">Newsletter</p>
            <p className="mt-5 text-[13px] leading-relaxed text-white/45">
              Subscribe to get exclusive offers &amp; photography tips!
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="mt-5 flex"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubscribed(false);
                }}
                placeholder="Enter your email"
                className="min-w-0 flex-1 border border-white/12 bg-ink-2 px-4 py-3 text-[13px] text-white placeholder:text-white/35 transition-colors focus:border-tan focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex w-12 shrink-0 items-center justify-center bg-tan text-ink transition hover:bg-tan-light"
              >
                <FiArrowRight size={16} />
              </button>
            </form>
            {subscribed && <p className="mt-2.5 text-[11px] uppercase tracking-[0.2em] text-tan">Subscribed</p>}
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-5 py-5 text-[12px] text-white/35 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} KING STUDIO Photography. All Rights Reserved.</p>
          <p>Crafted with obsession in Chennai.</p>
        </div>
      </div>
    </footer>
  );
}
