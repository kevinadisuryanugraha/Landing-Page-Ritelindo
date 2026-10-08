import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { Layout3DSection } from './components/Layout3DSection';
import { PackageShowcase } from './components/PackageShowcase';
import { StoreEstimator } from './components/StoreEstimator';
import { ProjectShowcase } from './components/ProjectShowcase';
import { BusinessSectors } from './components/BusinessSectors';
import { WorkflowSection } from './components/WorkflowSection';
import { Testimonials } from './components/Testimonials';
import { FaqAccordion } from './components/FaqAccordion';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { StickyWhatsApp } from './components/StickyWhatsApp';

import { useLenis } from './hooks/useLenis';

export const App: React.FC = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-primary selection:text-white pb-16 md:pb-0">
      {/* 1. Header Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section (Architectural Framed Canvas & 4 Overlapping Cards) */}
        <Hero />

        {/* 3. 7 Core Value Propositions Grid (3-3-1 Spotlight Card) */}
        <ValueProps />

        {/* 4. Fitur Unggulan Layanan Desain 3D (CAD Blueprint vs Real Store Interactive Slider) */}
        <Layout3DSection />

        {/* 5. Showcase Paket & Produk Rak Retail */}
        <PackageShowcase />

        {/* 6. Interactive Store Setup Calculator & Estimator (Clean B2B Tool) */}
        <StoreEstimator />

        {/* 7. Galeri Realisasi Proyek Toko (Apex Arc & Housify Inspired Photo Cards) */}
        <ProjectShowcase />

        {/* 8. Sektor Bisnis Retail yang Dilayani */}
        <BusinessSectors />

        {/* 9. Alur Pemesanan & Pemasangan Rak */}
        <WorkflowSection />

        {/* 10. Standar Mutu Fabrikasi & Ketahanan Fisik */}
        <Testimonials />

        {/* 11. Interactive FAQ Accordion */}
        <FaqAccordion />

        {/* 12. Final Call-to-Action Banner */}
        <FinalCta />
      </main>

      {/* 13. Footer Identitas Perusahaan */}
      <Footer />

      {/* 14. Persistent Mobile Dual-Action Smart Dock & Desktop Floating CTA */}
      <StickyWhatsApp />
    </div>
  );
};

export default App;
