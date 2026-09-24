import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenLegal: (tab: 'impressum' | 'datenschutz') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLegal: _onOpenLegal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Leistungen', href: '#leistungen' },
    { name: 'Vereinslösung', href: '#vereinsplattform' },
    { name: 'B2B & Cloud', href: '#b2b-cloud' },
    { name: 'Über mich', href: '#ueber-mich' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] border-b border-slate-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg group"
            aria-label="MK Applications Startseite"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/80 backdrop-blur-md shadow-inner"
            aria-label="Hauptnavigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-white/90 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200/70 text-[11px] font-medium text-slate-600">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500" />
              </span>
              <span>Bielefeld &bull; 100% DSGVO</span>
            </div>

            <a
              href="#kontakt"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-xl group bg-gradient-to-r from-navy-800 via-slate-900 to-navy-950 text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.99] transition-all"
            >
              <span className="px-4 py-2 rounded-[10px] bg-gradient-to-r from-navy-800 to-slate-900 flex items-center gap-2 border border-slate-700/50">
                <span>Projekt anfragen</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-slate-200"
              aria-label="Menü umschalten"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-5 px-4 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-2xl shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-navy-900 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium px-3">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  <span>100% DSGVO &bull; Azure West Europe &bull; Bielefeld</span>
                </div>
                <a
                  href="#kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-bold text-white bg-slate-900 rounded-xl shadow-md"
                >
                  <span>Projekt anfragen</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
