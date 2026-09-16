import { Hero } from "@/components/Hero";
import { QuoteSection } from "@/components/QuoteSection";
import { Services } from "@/components/Services";
import { Advantages } from "@/components/Advantages";
import { About } from "@/components/About";
import { Objects } from "@/components/Objects";
import { FAQ } from "@/components/FAQ";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <QuoteSection />
        <Services />
        <Advantages />
        <About />
        <Objects />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
