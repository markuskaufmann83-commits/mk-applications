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
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-navy-900/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" isDark={true} />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              MK Applications entwickelt moderne Progressive Web Apps, Vereinsplattformen und
              skalierbare Cloud-Lösungen auf Microsoft Azure – maßgeschneidert aus Bielefeld.
            </p>
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium pt-1">
              <Cloud className="w-4 h-4" />
              <span>Optimiert für Azure Static Web Apps (Free Tier)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#leistungen" className="hover:text-cyan-400 transition-colors">
                  Leistungsübersicht
                </a>
              </li>
              <li>
                <a href="#vereinsplattform" className="hover:text-cyan-400 transition-colors">
                  Die Vereinsplattform
                </a>
              </li>
              <li>
                <a href="#b2b-cloud" className="hover:text-cyan-400 transition-colors">
                  B2B & Cloud Architekturen
                </a>
              </li>
              <li>
                <a href="#ueber-mich" className="hover:text-cyan-400 transition-colors">
                  Über Markus Kaufmann
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-cyan-400 transition-colors">
                  Projekt anfragen
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Preview Box */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Rechtliche Hinweise & Impressum
            </div>
            <div className="bg-navy-900/80 p-4 rounded-2xl border border-navy-800 text-xs text-slate-400 space-y-2">
              <div>
                <strong className="text-slate-200">MK Applications</strong>
                <br />
                Inhaber: Markus Kaufmann
                <br />
                Standort: Bielefeld, Deutschland
              </div>
              <div className="text-cyan-300 font-medium text-[11px] pt-1 border-t border-navy-800">
                Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
              </div>
              <div className="flex items-center gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => onOpenLegal('impressum')}
                  className="text-xs font-semibold text-slate-200 hover:text-cyan-400 underline underline-offset-2 transition-colors"
                >
                  Impressum öffnen
                </button>
                <button
                  type="button"
                  onClick={() => onOpenLegal('datenschutz')}
                  className="text-xs font-semibold text-slate-200 hover:text-cyan-400 underline underline-offset-2 transition-colors"
                >
                  Datenschutz
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
            <span className="text-[11px]">100% DSGVO-konform ohne Tracking-Cookies</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors"
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
