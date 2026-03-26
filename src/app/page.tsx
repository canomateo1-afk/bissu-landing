import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import VideoSection from "@/components/VideoSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Calendly from "@/components/Calendly";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <VideoSection />
      <Services />
      <Testimonials />
      <Calendly />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
