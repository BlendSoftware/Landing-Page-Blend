import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Difference from '@/components/sections/Difference';
import Faq from '@/components/sections/Faq';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Difference />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
