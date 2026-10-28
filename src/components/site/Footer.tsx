import { useState } from "react";
import { FaInstagram, FaBehance } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { KingBadge } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/contact";

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
    <footer className="relative border-t border-gold/20 bg-navy text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* brand */}
          <div className="lg:col-span-3">
            <a href="#home" aria-label="KING STUDIO home" className="flex items-center gap-3.5">
              <KingBadge size={58} />
              <span className="font-display text-[1.15rem] uppercase leading-none tracking-[0.17em] text-white">
                King Studio
              </span>
            </a>
            <p className="mt-6 max-w-[240px] text-[12px] leading-[1.85] text-white/45">
              Capturing real moments and creating timeless memories. Let's tell your story through
              our lens.
            </p>
            <div className="mt-6 flex gap-2.5">
              {[
                { Icon: FaInstagram, href: IG_URL, label: "Instagram" },
                { Icon: FaBehance, href: BE_URL, label: "Behance" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/55 transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-navy"
                >
                  <Icon size={13} />
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/55 transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-navy"
              >
                <WhatsAppIcon size={14} />
              </a>
            </div>
          </div>

          {/* quick links */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-gold">Quick Links</p>
            <ul className="mt-5 space-y-2.5 text-[11.5px] text-white/45">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-gold">Services</p>
            <ul className="mt-5 space-y-2.5 text-[11.5px] text-white/45">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="transition-colors hover:text-gold">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* information */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-gold">Information</p>
            <ul className="mt-5 space-y-2.5 text-[11.5px] text-white/45">
              {informationLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* newsletter */}
          <div className="lg:col-span-3">
            <p className="eyebrow text-gold">Newsletter</p>
            <p className="mt-5 text-[11.5px] leading-[1.85] text-white/45">
              Subscribe to get exclusive offers &amp; photography tips!
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="mt-5 flex items-center border-b border-white/20 focus-within:border-gold"
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
                className="min-w-0 flex-1 bg-transparent py-3 text-[12.5px] text-white placeholder:text-white/30 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gold transition-colors hover:bg-gold hover:text-navy"
              >
                <FiArrowRight size={15} />
              </button>
            </form>
            {subscribed && (
              <p className="mt-2.5 text-[8.5px] uppercase tracking-[0.24em] text-gold">Subscribed</p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-5 py-5 text-[10.5px] tracking-[0.06em] text-white/35 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} KING STUDIO Photography. All Rights Reserved.</p>
          <p>Crafted with obsession in Chennai.</p>
        </div>
      </div>
    </footer>
  );
}
