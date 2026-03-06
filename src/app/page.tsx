import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import BatchTimings from "@/components/BatchTimings";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import VideoTestimonials from "@/components/VideoTestimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Results />
      <Courses />
      <BatchTimings />
      <Facilities />
      <Gallery />
      <Testimonials />
      <VideoTestimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
