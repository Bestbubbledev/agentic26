import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustLogos from "@/components/TrustLogos";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import Examples from "@/components/Examples";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustLogos />
      <WhatWeDo />
      <HowItWorks />
      <Examples />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
      <ChatWidget />
    </>
  );
}
