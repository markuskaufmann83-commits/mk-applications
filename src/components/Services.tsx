import React from 'react';
import {
  Smartphone,
  CloudCog,
  LayoutDashboard,
  Check,
  ArrowRight,
  Zap,
  ShieldCheck,
  Database,
  Lock,
  QrCode,
  WifiOff,
} from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="leistungen" className="py-24 md:py-32 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/80 text-xs font-semibold text-cyan-800 mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-600" />
            <span>Senior IT-Engineering & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Maßgeschneiderte Softwarearchitektur für konkrete Ergebnisse.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Keine überteuerten Agentur-Zwischenhändler, sondern praxiserprobte Systeme direkt vom
            erfahrenen Full-Stack-Architekten.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Bento Item 1: Vereins- & Verbandsplattform (Large Featured Card - 7 Columns) */}
          <div className="md:col-span-12 lg:col-span-7 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-electric-400 text-slate-950 flex items-center justify-center font-bold shadow-lg">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800/80 px-3 py-1 rounded-full font-mono">
                  Kernkompetenz #01
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Web-Apps & Plattform-Portale
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
                Modulare, mandantenfähige Portale und Fachanwendungen für Unternehmen, Verbände und Organisationen.
                Maßgeschneiderte Workflows, Rollenberechtigungen und responsive Benutzeroberflächen.
              </p>

              {/* Feature Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                  <QrCode className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Kryptografische QR-Token</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Granulares Rollen- & Rechtesystem</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Strukturierte Audit- & Prüfprotokolle</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% DSGVO & Mandantentrennung</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">React &bull; TypeScript &bull; Multi-Tenant</span>
              <a
                href="#plattformen"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Plattform-Showcase ansehen</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento Item 2: Mobile & Progressive Web Apps (5 Columns) */}
          <div className="md:col-span-12 lg:col-span-5 bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-cyan-400 flex items-center justify-center shadow-md">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs font-mono">
                  PWA & Store-Ready
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                Mobile & Progressive Web Apps
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Web-Apps, die sich auf Smartphones wie native Apps anfühlen – installierbar direkt
                über den Browser oder auf Wunsch im Apple App Store & Google Play Store via Capacitor.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <WifiOff className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                  <span>Offline-First durch Service Worker & IndexedDB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                  <span>Push-Mitteilungen & Echtzeit-Benachrichtigungen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                  <span>Kamera-, GPS- & QR-Scanner nativ nutzbar</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">iOS &bull; Android &bull; Web</span>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-cyan-600 transition-colors"
              >
                <span>App planen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bento Item 3: Managed Cloud & Azure Serverless (5 Columns) */}
          <div className="md:col-span-12 lg:col-span-5 bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-electric-400 flex items-center justify-center shadow-md">
                  <CloudCog className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs font-mono">
                  Pay-per-Use Cloud
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                Managed Azure Cloud & Serverless
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Wirtschaftliche Cloud-Infrastruktur auf Microsoft Azure: Bedarfsgerechte Skalierung ohne teuren
                Server-Overhead – maximale Performance bei optimierten Betriebskosten.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-electric-600 flex-shrink-0" />
                  <span>Azure Static Web Apps & Serverless Functions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-electric-600 flex-shrink-0" />
                  <span>PostgreSQL / Azure SQL Datenmodelle</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-electric-600 flex-shrink-0" />
                  <span>EU-Rechenzentren (Frankfurt / West Europe)</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">Azure &bull; GitHub Actions</span>
              <a
                href="#b2b-cloud"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-electric-600 transition-colors"
              >
                <span>Architektur prüfen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bento Item 4: Webdesign & B2B-Tools (7 Columns) */}
          <div className="md:col-span-12 lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-cyan-400 flex items-center justify-center shadow-md">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full shadow-2xs font-mono">
                  Mittelstand & B2B
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                Webdesign & B2B-Prozessdigitalisierung
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
                Individuelle Webanwendungen und interne Dashboards, die fehleranfällige Excel-Listen
                und Papierformulare durch sichere, automatisierte Workflows ablösen.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>Echtzeit KPI-Dashboards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>Automatisierte PDF- & SEPA-Generierung</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>Google Lighthouse 100/100 Ladezeiten</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>Schnittstellen (REST/GraphQL) zu Bestands-IT</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">Next.js &bull; Tailwind &bull; Node.js</span>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors"
              >
                <span>B2B-Anfrage stellen</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
