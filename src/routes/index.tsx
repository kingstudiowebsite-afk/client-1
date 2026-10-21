import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Portfolio } from "@/components/site/Portfolio";
import { Packages } from "@/components/site/Packages";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { InstagramStrip } from "@/components/site/InstagramStrip";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-ink text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Stats />
        <Portfolio />
        <Packages />
        <Testimonials />
        <FAQ />
        <Contact />
        <InstagramStrip />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
