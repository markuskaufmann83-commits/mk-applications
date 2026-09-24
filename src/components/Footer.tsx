import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, ArrowUp, Cloud } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (tab: 'impressum' | 'datenschutz') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" isDark={true} />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              MK Applications entwickelt moderne Progressive Web Apps, Multi-Tenant Vereinsplattformen
              und wirtschaftliche Cloud-Lösungen auf Microsoft Azure – maßgeschneidert aus Bielefeld.
            </p>
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono pt-1">
              <Cloud className="w-4 h-4" />
              <span>Optimiert für Azure Static Web Apps (Free Tier)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#leistungen" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Leistungsübersicht
                </a>
              </li>
              <li>
                <a href="#vereinsplattform" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Die Vereinsplattform
                </a>
              </li>
              <li>
                <a href="#b2b-cloud" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  B2B & Cloud Architekturen
                </a>
              </li>
              <li>
                <a href="#ueber-mich" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Über Markus Kaufmann
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Projekt anfragen
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Credentials Card */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              Rechtliche Angaben
            </div>
            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 text-xs text-slate-400 space-y-2.5">
              <div>
                <strong className="text-white font-bold block text-sm">MK Applications</strong>
                <span>Inhaber: Markus Kaufmann</span>
                <br />
                <span>Standort: Bielefeld, Deutschland</span>
              </div>
              <div className="text-cyan-300 font-semibold text-[11px] pt-1 border-t border-slate-800">
                Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
              </div>
              <div className="flex items-center gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => onOpenLegal('impressum')}
                  className="text-xs font-bold text-slate-200 hover:text-cyan-400 underline underline-offset-4 transition-colors"
                >
                  Impressum öffnen
                </button>
                <button
                  type="button"
                  onClick={() => onOpenLegal('datenschutz')}
                  className="text-xs font-bold text-slate-200 hover:text-cyan-400 underline underline-offset-4 transition-colors"
                >
                  Datenschutzerklärung
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
            <span>&copy; {new Date().getFullYear()} MK Applications &bull; Alle Rechte vorbehalten.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono">100% DSGVO-konform ohne Cookies</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-all shadow-sm"
              aria-label="Nach oben scrollen"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
