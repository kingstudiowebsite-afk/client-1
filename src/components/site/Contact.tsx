import { useState } from "react";
import { Reveal } from "./Reveal";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaBehance } from "react-icons/fa";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow text-tan">Get in Touch</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
              Let's create something timeless
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-white/50">
            Tell us about your day. We reply to every inquiry within 24 hours.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="min-w-0 lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="grid min-w-0 gap-5 bg-white p-7 sm:p-10"
            >
              <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                <Input label="Name" name="name" placeholder="Your full name" />
                <Input label="Email" name="email" type="email" placeholder="you@studio.com" />
              </div>
              <Input label="Phone" name="phone" placeholder="+(91) 12345-67890" />
              <div className="min-w-0">
                <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-ink-muted">Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full min-w-0 border border-ink/15 bg-cream px-4 py-3 text-[14px] text-ink-fg transition-colors placeholder:text-ink-muted/60 focus:border-tan focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-fit items-center justify-center gap-2.5 rounded-[3px] bg-tan px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-tan-light"
              >
                {sent ? "Message sent" : "Send message"} <FiSend className="transition group-hover:translate-x-1" size={13} />
              </button>
            </form>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-2" delay={0.1}>
            <div className="flex h-full min-w-0 flex-col gap-3">
              <ContactRow icon={FiPhone} label="Call" value="+91 7358698040" href="tel:+917358698040" />
              <ContactRow icon={FaWhatsapp} label="WhatsApp" value="Chat with us" href="https://wa.me/917358698040" />
              <ContactRow icon={FiMail} label="Email" value="poovarsanphotography24@gmail.com" href="mailto:poovarsanphotography24@gmail.com" />
              <ContactRow icon={FiMapPin} label="Studio" value="No:13/4,Srinivasa Nagar ,Koyambedu,Chennai" href="#map" />

              <div className="mt-1 min-w-0 overflow-hidden border border-white/10" id="map">
                <iframe
                  title="Studio location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.9935203210084!2d80.21214911256214!3d12.972680561070437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d939fd5fea9%3A0x82481cd7c51598a6!2sSrinivasa%20Nagar%202nd%20St%2C%20Srinivasa%20Nagar%2C%20Velachery%2C%20Greater%20Chennai%2C%20Chennai%2C%20Tamil%20Nadu%20600042!5e0!3m2!1sen!2sin!4v1784279564464!5m2!1sen!2sin"
                  className="h-56 w-full grayscale contrast-125"
                  loading="lazy"
                />
              </div>

              <div className="mt-1 flex gap-3">
                {[
                  { Icon: FaInstagram, href: "https://www.instagram.com/poovarasanphotography?igsh=MTVvdzBuejhkamx0dA%3D%3D&utm_source=qr" },
                  { Icon: FaBehance, href: "https://www.behance.net/poovaraphotogr" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-tan hover:text-tan"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="min-w-0">
      <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-ink-muted">{label}</label>
      <input
        {...rest}
        required
        className="w-full min-w-0 border border-ink/15 bg-cream px-4 py-3 text-[14px] text-ink-fg transition-colors placeholder:text-ink-muted/60 focus:border-tan focus:outline-none"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ size?: number }>; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 border border-white/10 px-5 py-4 transition-colors hover:border-tan/60"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-tan transition-colors group-hover:bg-tan group-hover:text-ink">
        <Icon size={16} />
      </span>
      <span className="min-w-0">
        <span className="block text-[9.5px] uppercase tracking-[0.25em] text-white/40">{label}</span>
        <span className="block truncate font-display text-base text-white">{value}</span>
      </span>
    </a>
  );
}
