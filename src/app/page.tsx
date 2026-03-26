import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import VideoSection from "@/components/VideoSection";
import Services from "@/components/Services";
import MidCTA from "@/components/MidCTA";
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
      <div className="pleca-divider" />
      <WhyUs />
      <div className="pleca-divider" />
      <VideoSection />
      <div className="pleca-divider" />
      <Services />
      <MidCTA />
      <div className="pleca-divider" />
      <Testimonials />
      <Calendly />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
