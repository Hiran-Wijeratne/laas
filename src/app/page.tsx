import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatWeDo from "@/components/WhatWeDo";
import TrustBar from "@/components/TrustBar";
import WhoWeAre from "@/components/WhoWeAre";
import Innovations from "@/components/Innovations";
import Proof from "@/components/Proof";
import LogoWall from "@/components/LogoWall";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col">
      <Header />
      <Hero />
      <Problem />
      <WhatWeDo />
      <TrustBar />
      <WhoWeAre />
      <Innovations />
      <Proof />
      <LogoWall />
      <ContactSection />
      <Footer />
    </main>
  );
}
