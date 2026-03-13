import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { QuickStart } from "@/components/quick-start";
import { Integrations } from "@/components/integrations";
import { Sponsors } from "@/components/sponsors";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <QuickStart />
        <Integrations />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
