import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import TrainingCourses from "@/components/TrainingCourses";
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
      <WhatWeDo />
      <TrainingCourses />
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
