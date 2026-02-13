import { Navbar } from "@/components/sections/navbar";
import { Methodology } from "@/components/sections/methodology";
import { BabyTennis } from "@/components/sections/baby-tennis";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Modalities } from "@/components/sections/modalities";
import { Benefits } from "@/components/sections/benefits";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Modalities />
      <BabyTennis />
      <Methodology />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
