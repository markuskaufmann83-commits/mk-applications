import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { InteractiveHeroMockup } from './InteractiveHeroMockup';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-faded">
      {/* High-end ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-300/30 via-electric-400/20 to-navy-600/10 blur-[100px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, Trust Signals & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.06)] backdrop-blur-md text-xs font-bold text-slate-800">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Senior Full-Stack & Cloud Architektur &bull; Bielefeld</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.15]">
              Moderne Apps & Web-Lösungen –{' '}
              <span className="bg-gradient-to-r from-navy-800 via-electric-600 to-cyan-500 bg-clip-text text-transparent">
                maßgeschneidert
              </span>{' '}
              aus Bielefeld.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Von der maßgeschneiderten Webanwendung bis zur hochskalierbaren Cloud-Plattform: Leistungsstarke
              Softwarearchitektur für Unternehmen, Institutionen und Organisationen – ohne Agentur-Wasserkopf.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#kontakt"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-slate-950 hover:bg-slate-900 rounded-xl shadow-[0_10px_25px_-5px_rgba(15,23,42,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.35)] hover:-translate-y-0.5 transition-all duration-200 border border-slate-800 group"
              >
                <span>Projekt anfragen</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#plattformen"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Lösungen entdecken</span>
              </a>
            </div>

            {/* Metrics Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">&gt; 99,9%</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  Enterprise Uptime
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold text-cyan-600 tracking-tight">100%</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  DSGVO / EU-Cloud
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">100/100</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  Lighthouse Score
                </div>
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
