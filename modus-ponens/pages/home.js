// Will migrate to index.js once ready

// First 730
// Second 1100
// Third 510
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import CreatorSection from "../components/Home/CreatorSection";
import ContactSection from "../components/Home/ContactSection";

export default function Index() {
  return (
    <div>
      <HeroSection />
      <CreatorSection />
      <ContactSection />
    </div>
  );
}
