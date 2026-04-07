import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Platform from "@/components/Platform";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Platform />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
