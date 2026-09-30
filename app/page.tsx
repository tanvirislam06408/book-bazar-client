import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { CategoryShortcuts } from "@/components/landing/CategoryShortcuts";
import { LatestListings } from "@/components/landing/LatestListings";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WhyBoiBazar } from "@/components/landing/WhyBoiBazar";
import { SafetyTips } from "@/components/landing/SafetyTips";
import { SeasonalBanner } from "@/components/landing/SeasonalBanner";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Category Shortcuts */}
        <CategoryShortcuts />

        {/* 4. Latest Listings */}
        <LatestListings />

        {/* 5. How It Works */}
        <HowItWorks />

        {/* 6. Why BoiBazar */}
        <WhyBoiBazar />

        {/* 7. Safety Tips */}
        <SafetyTips />

        {/* 8. Seasonal Banner */}
        <SeasonalBanner />

        {/* 9. Final CTA */}
        <FinalCTA />

        {/* 10. FAQ */}
        <FAQ />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
