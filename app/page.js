"use client";

import { usePathname } from "next/navigation";
import About from "./_Components/Body/AboutSection/about";
import Catalogue from "./_Components/Body/CatalogueSection/catalogue";
import Contact from "./_Components/Body/ContactSection/contact";
import Hero from "./_Components/Body/HeroSection/hero";
import Testimonials from "./_Components/Body/TestimonialsSection/Testimonials";
import Footer from "./_Components/Footer/footer";

export default function Home() {
  const path = usePathname();
  if (path.includes("#")) return "";
  return (
    <div>
      <Hero />
      <Catalogue />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
