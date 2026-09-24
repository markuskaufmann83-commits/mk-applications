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
      setScrolled(window.scrollY > 20);
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
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 rounded-lg"
            aria-label="MK Applications Startseite"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-navy-700 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
              <span>Bielefeld &bull; 100% DSGVO</span>
            </div>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-navy-700 to-navy-800 hover:from-navy-800 hover:to-navy-900 rounded-lg shadow-sm hover:shadow transition-all duration-200 border border-navy-700 group"
            >
              <span>Projekt anfragen</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-navy-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-electric-500"
              aria-label="Menü umschalten"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-5 px-4 bg-white border border-slate-200 rounded-2xl shadow-xl transition-all animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-800 hover:text-navy-700 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium px-3 py-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  <span>100% DSGVO &bull; Azure EU Cloud &bull; Bielefeld</span>
                </div>
                <a
                  href="#kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-navy-700 to-navy-800 rounded-lg shadow"
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
