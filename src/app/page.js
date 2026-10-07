'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ProductEdu from '@/components/ProductEdu';
import ProductFinance from '@/components/ProductFinance';
import NeuralEngineSection from '@/components/NeuralEngineSection';
import InteractiveDemoSandbox from '@/components/InteractiveDemoSandbox';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FooterSection from '@/components/FooterSection';
import WaitlistModal from '@/components/WaitlistModal';

export default function Home() {
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);

  const openWaitlist = () => setWaitlistModalOpen(true);
  const closeWaitlist = () => setWaitlistModalOpen(false);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navigation Bar */}
      <Navbar onOpenWaitlist={openWaitlist} />

      {/* Main Page Content */}
      <main className="flex-grow">
        
        {/* Hero Section with Dual Live Simulator */}
        <HeroSection onOpenWaitlist={openWaitlist} />

        {/* Global Impact Stats Bar */}
        <StatsSection />

        {/* Product Spotlight 1: Edu AI (English practice & test prep) */}
        <ProductEdu onOpenWaitlist={openWaitlist} />

        {/* Product Spotlight 2: Trade AI (Money management & trading app) */}
        <ProductFinance onOpenWaitlist={openWaitlist} />

        {/* Core Technology & Neural Engine */}
        <NeuralEngineSection />

        {/* Interactive In-Browser Sandbox */}
        <InteractiveDemoSandbox onOpenWaitlist={openWaitlist} />

        {/* Pricing Tiers */}
        <PricingSection onOpenWaitlist={openWaitlist} />

        {/* Community & Institutional Testimonials */}
        <TestimonialsSection />

      </main>

      {/* Footer */}
      <FooterSection onOpenWaitlist={openWaitlist} />

      {/* Early Access / Registration Modal */}
      <WaitlistModal isOpen={waitlistModalOpen} onClose={closeWaitlist} />

    </div>
  );
}
