import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import WhatWeDo from '@/components/sections/WhatWeDo';
import Benefits from '@/components/sections/Benefits';
import Process from '@/components/sections/Process';
import Services from '@/components/sections/Services';
import Technology from '@/components/sections/Technology';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Benefits />
        <Process />
        <Services />
        <Technology />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
