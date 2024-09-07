import About from "./_Components/Body/AboutSection/about";
import Catalogue from "./_Components/Body/CatalogueSection/catalogue";
import Contact from "./_Components/Body/ContactSection/contact";
import Hero from "./_Components/Body/HeroSection/hero";
import Testimonials from "./_Components/Body/TestimonialsSection/testimonials";
import Footer from "./_Components/Footer/footer";

export default function Home() {
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
