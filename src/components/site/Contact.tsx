import { useState } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaBehance } from "react-icons/fa";

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
              <Input label="Phone" name="phone" placeholder="+(91) 12345-67890" />
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
              <ContactRow icon={FiPhone} label="Call" value="+91 7358698040" href="tel:+91 7358698040" />
              <ContactRow icon={FaWhatsapp} label="WhatsApp" value="Chat with us" href="https://wa.me/917358698040" />
              <ContactRow icon={FiMail} label="Email" value="poovarsanphotography24@gmail.com" href="mailto:poovarsanphotography24@gmail.com" />
              <ContactRow icon={FiMapPin} label="Studio" value="No:13/4,Srinivasa Nagar ,Koyambedu,Chennai" href="#map" />

              <div className="mt-2 overflow-hidden rounded-2xl border border-border" id="map">
                <iframe
                  title="Studio location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.9935203210084!2d80.21214911256214!3d12.972680561070437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d939fd5fea9%3A0x82481cd7c51598a6!2sSrinivasa%20Nagar%202nd%20St%2C%20Srinivasa%20Nagar%2C%20Velachery%2C%20Greater%20Chennai%2C%20Chennai%2C%20Tamil%20Nadu%20600042!5e0!3m2!1sen!2sin!4v1784279564464!5m2!1sen!2sin"
                  className="h-56 w-full grayscale contrast-125"
                  loading="lazy"
                />
              </div>

              <div className="flex gap-3">
                {[
                  { Icon: FaInstagram, href: "https://www.instagram.com/poovarasanphotography?igsh=MTVvdzBuejhkamx0dA%3D%3D&utm_source=qr" },
                  
                  { Icon: FaBehance, href: "https://www.behance.net/poovaraphotogr" }

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
