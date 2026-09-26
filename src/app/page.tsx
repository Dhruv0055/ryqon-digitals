import React from "react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TechTicker from "@/components/TechTicker";
import ThreePillars from "@/components/ThreePillars";
import ServicesSection from "@/components/ServicesSection";
import PartnershipSection from "@/components/PartnershipSection";
import CommitmentSection from "@/components/CommitmentSection";
import ProcessRoadmap from "@/components/ProcessRoadmap";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <TechTicker />
      <ThreePillars />
      <ServicesSection />
      <PartnershipSection />
      <CommitmentSection />
      <ProcessRoadmap />
      <PortfolioSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
