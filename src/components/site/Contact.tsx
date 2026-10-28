import { useState } from "react";
import { Reveal } from "./Reveal";
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaInstagram, FaBehance } from "react-icons/fa";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ADDRESS, EMAIL, PHONE, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

const IG_URL =
  "https://www.instagram.com/poovarasanphotography?igsh=MTVvdzBuejhkamx0dA%3D%3D&utm_source=qr";
const BE_URL = "https://www.behance.net/poovaraphotogr";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-8 border-b border-gold/15 pb-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold/60" />
              <p className="eyebrow text-gold">Get in Touch</p>
            </div>
            <h2 className="mt-5 max-w-2xl font-display text-[2.4rem] uppercase leading-[1.04] text-white sm:text-[3rem]">
              Let's create
              <br />
              something <span className="italic text-gold">timeless</span>
            </h2>
          </div>
          <p className="max-w-[300px] text-[12.5px] leading-[1.85] text-white/50">
            Tell us about your day. We reply to every inquiry within 24 hours.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* info */}
          <Reveal className="min-w-0">
            <div className="border-t border-white/10">
              <ContactRow icon={FiPhone} label="Call" value={PHONE} href={`tel:${PHONE_TEL}`} />
              <ContactRow
                icon={WhatsAppIcon}
                label="WhatsApp"
                value={PHONE}
                href={WHATSAPP_URL}
                external
              />
              <ContactRow icon={FiMail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactRow icon={FiMapPin} label="Studio" value={ADDRESS} href="#map" />
            </div>

            <div className="mt-7 flex gap-2.5">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-gold hover:bg-gold hover:text-navy"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>

            <div className="mt-7 min-w-0 overflow-hidden border border-gold/20" id="map">
              <iframe
                title="Studio location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.9935203210084!2d80.21214911256214!3d12.972680561070437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d939fd5fea9%3A0x82481cd7c51598a6!2sSrinivasa%20Nagar%202nd%20St%2C%20Srinivasa%20Nagar%2C%20Velachery%2C%20Greater%20Chennai%2C%20Chennai%2C%20Tamil%20Nadu%20600042!5e0!3m2!1sen!2sin!4v1784279564464!5m2!1sen!2sin"
                className="h-48 w-full opacity-70 grayscale transition-opacity duration-500 hover:opacity-100"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* form */}
          <Reveal className="min-w-0" delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid min-w-0 gap-6 border border-gold/20 bg-navy-2/60 p-7 sm:p-9"
            >
              <div className="grid min-w-0 gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your full name" />
                <Field label="Email" name="email" type="email" placeholder="you@studio.com" />
              </div>
              <Field label="Phone" name="phone" placeholder="+(91) 12345-67890" />

              <div className="min-w-0">
                <label className="mb-2 block text-[8px] uppercase tracking-[0.28em] text-gold/80">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full min-w-0 resize-none border-0 border-b border-white/15 bg-transparent px-0 py-2.5 text-[13.5px] text-white transition-colors placeholder:text-white/25 focus:border-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="group mt-1 inline-flex w-fit items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-[9px] font-medium uppercase tracking-[0.26em] text-navy transition-colors duration-300 hover:bg-gold-light"
              >
                {sent ? "Message sent" : "Send message"}
                <FiArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="min-w-0">
      <label className="mb-2 block text-[8px] uppercase tracking-[0.28em] text-gold/80">{label}</label>
      <input
        {...rest}
        required
        className="w-full min-w-0 border-0 border-b border-white/15 bg-transparent px-0 py-2.5 text-[13.5px] text-white transition-colors placeholder:text-white/25 focus:border-gold focus:outline-none"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center gap-4 border-b border-white/10 py-4 transition-colors hover:border-gold/50"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
        <Icon size={15} />
      </span>
      <span className="min-w-0">
        <span className="block text-[8px] uppercase tracking-[0.28em] text-white/35">{label}</span>
        <span className="mt-1 block truncate font-display text-[14px] text-white">{value}</span>
      </span>
    </a>
  );
}
