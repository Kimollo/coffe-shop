import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisitSection from "@/components/VisitSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MenuSection />
      <AboutSection />
      <TestimonialsSection />
      <VisitSection />
      <Footer />
    </>
  );
}
