import React from 'react';
import { ArrowRight, Sparkles, Shield, Cloud, Smartphone } from 'lucide-react';
import { InteractiveHeroMockup } from './InteractiveHeroMockup';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-subtle-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-200/40 via-electric-200/30 to-navy-200/20 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-navy-800">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Full-Stack & Cloud Architektur &bull; Bielefeld</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy-950 tracking-tight leading-[1.12]">
              Moderne Apps & Web-Lösungen –{' '}
              <span className="bg-gradient-to-r from-navy-700 via-electric-600 to-cyan-500 bg-clip-text text-transparent">
                maßgeschneidert
              </span>{' '}
              aus Bielefeld.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Von der modularen Vereins-App bis zur individuellen Cloud-Plattform: Leistungsstarke
              Softwarearchitektur für Organisationen und Macher.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#kontakt"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-white bg-gradient-to-r from-navy-700 via-navy-800 to-navy-900 hover:from-navy-800 hover:to-navy-950 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 border border-navy-700 group"
              >
                <span>Projekt anfragen</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#vereinsplattform"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Lösungen entdecken</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                <span>100% DSGVO-konform</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-electric-600 flex-shrink-0" />
                <span>Azure Serverless SWA</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Smartphone className="w-4 h-4 text-navy-700 flex-shrink-0" />
                <span>PWA & Offline-First</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive UI Mockup */}
          <div className="lg:col-span-6 relative">
            <InteractiveHeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
