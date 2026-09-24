import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ClubPlatformShowcase } from './components/ClubPlatformShowcase';
import { B2BCloudSection } from './components/B2BCloudSection';
import { AboutMe } from './components/AboutMe';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

export const App: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'impressum' | 'datenschutz'>('impressum');

  const handleOpenLegal = (tab: 'impressum' | 'datenschutz') => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenLegal={handleOpenLegal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <ClubPlatformShowcase />
        <B2BCloudSection />
        <AboutMe />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Accessible Legal Dialog (Impressum & Datenschutz) */}
      <LegalModal
        isOpen={legalModalOpen}
        activeTab={legalTab}
        onClose={() => setLegalModalOpen(false)}
        onTabChange={(tab) => setLegalTab(tab)}
      />
    </div>
  );
};

export default App;
