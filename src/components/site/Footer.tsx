import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const links = ["Home", "About", "Portfolio", "Services", "Packages", "Contact"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 pt-16 pb-8">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div>
          <span className="font-display text-3xl text-foreground">
            Lum<span className="text-gold-gradient">ière</span>
          </span>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A luxury photography studio crafting cinematic stories for people who
            value the extraordinary.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Quick Links</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-muted-foreground transition hover:text-gold">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Follow</p>
          <div className="flex gap-3">
            {[FaInstagram, FaFacebookF, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:border-gold hover:text-gold"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border px-6 pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Lumière Studio. All rights reserved.</p>
        <p>Crafted with obsession in Paris.</p>
      </div>
    </footer>
  );
}
