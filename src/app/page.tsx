import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Facilities />
      <Gallery />
      <Results />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
