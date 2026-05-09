import TopMarquee from "@/components/TopMarquee";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Firma from "@/components/Firma";
import Proceso from "@/components/Proceso";
import Abogados from "@/components/Abogados";
import Areas from "@/components/Areas";
import Casos from "@/components/Casos";
import Comparacion from "@/components/Comparacion";
import FAQ from "@/components/FAQ";
import Recursos from "@/components/Recursos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCTA from "@/components/StickyCTA";
import MidCTA from "@/components/MidCTA";

export default function Home() {
  return (
    <main className="bg-ink-900">
      <ScrollProgress />
      <TopMarquee />
      <Navbar />
      <Hero />
      <Firma />
      <Proceso />
      <Areas />
      <Casos />
      <MidCTA
        headline="Tu caso merece abogados con un análisis serio"
        italicWord="serio"
        ctaLabel="Agenda consulta gratuita"
      />
      <Comparacion />
      <Abogados />
      <FAQ />
      <Recursos />
      <Contacto />
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </main>
  );
}
