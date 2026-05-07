import TopMarquee from "@/components/TopMarquee";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Firma from "@/components/Firma";
import Proceso from "@/components/Proceso";
import Abogados from "@/components/Abogados";
import Areas from "@/components/Areas";
import Casos from "@/components/Casos";
import Clientes from "@/components/Clientes";
import Reconocimientos from "@/components/Reconocimientos";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-ink-900">
      <TopMarquee />
      <Navbar />
      <Hero />
      <Firma />
      <Proceso />
      <Abogados />
      <Areas />
      <Casos />
      <Clientes />
      <Reconocimientos />
      <FAQ />
      <Contacto />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
