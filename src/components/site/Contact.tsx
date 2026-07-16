import { useState } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let's create something timeless"
          subtitle="Tell us about your day. We reply to every inquiry within 24 hours."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="grid gap-4 rounded-3xl border border-border bg-surface/60 p-8 sm:p-10"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Name" name="name" placeholder="Your full name" />
                <Input label="Email" name="email" type="email" placeholder="you@studio.com" />
              </div>
              <Input label="Phone" name="phone" placeholder="+1 (555) 000-0000" />
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted-foreground">Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full gold-gradient px-8 py-3 text-xs uppercase tracking-[0.25em] text-background transition hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
              >
                {sent ? "Message sent" : "Send message"} <FiSend className="transition group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <ContactRow icon={FiPhone} label="Call" value="+1 (555) 012-3456" href="tel:+15550123456" />
              <ContactRow icon={FaWhatsapp} label="WhatsApp" value="Chat with us" href="https://wa.me/15550123456" />
              <ContactRow icon={FiMail} label="Email" value="hello@lumierestudio.co" href="mailto:hello@lumierestudio.co" />
              <ContactRow icon={FiMapPin} label="Studio" value="14 Rue de la Lumière, Paris" href="#map" />

              <div className="mt-2 overflow-hidden rounded-2xl border border-border" id="map">
                <iframe
                  title="Studio location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=2.3200%2C48.8550%2C2.3600%2C48.8700&layer=mapnik"
                  className="h-56 w-full grayscale contrast-125"
                  loading="lazy"
                />
              </div>

              <div className="flex gap-3">
                {[
                  { Icon: FaInstagram, href: "#" },
                  { Icon: FaFacebookF, href: "#" },
                  { Icon: FaYoutube, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition hover:border-gold hover:text-gold"
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
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input
        {...rest}
        required
        className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ size?: number }>; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition hover:border-gold/50"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition group-hover:gold-gradient group-hover:text-background">
        <Icon size={18} />
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
        <span className="block truncate font-display text-lg text-foreground">{value}</span>
      </span>
    </a>
  );
}
