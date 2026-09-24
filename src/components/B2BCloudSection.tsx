import React from 'react';
import {
  Cloud,
  Database,
  Lock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const B2BCloudSection: React.FC = () => {
  const pillars = [
    {
      icon: Cloud,
      title: 'Azure Serverless Architektur',
      subtitle: '0 € Grundkosten bei geringer Last',
      desc: 'Keine teuren 24/7-Servermieten für ungenutzte Kapazitäten. Durch Azure Functions und Static Web Apps skaliert die Plattform von 0 bis zu Millionen Aufrufen bei minimalen Kosten.',
    },
    {
      icon: Lock,
      title: '100% DSGVO & EU-Hosting',
      subtitle: 'Standort West Europe / Frankfurt',
      desc: 'Sämtliche Daten verbleiben innerhalb der Europäischen Union. Keine Third-Party-Tracker, keine Cookies, vollständige Konformität mit deutschem Datenschutzrecht.',
    },
    {
      icon: Database,
      title: 'Solide relationale Datenmodelle',
      subtitle: 'PostgreSQL & Azure SQL',
      desc: 'ACID-konforme Datenspeicherung, saubere Backups und rollenbasierte Zugriffskontrollen gewährleisten maximale Datensicherheit für sensible Mitglieder- und Unternehmensdaten.',
    },
  ];

  return (
    <section id="b2b-cloud" className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: B2B Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-bold text-electric-800">
              <Cloud className="w-3.5 h-3.5 text-electric-600" />
              <span>B2B & Cloud Architekturen</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight">
              Wirtschaftliche Cloud-Systeme für Mittelstand & digitale Pioniere.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Standard-Software ist oft entweder zu starr oder mit monatlichen Lizenzkosten pro
              Benutzer unverhältnismäßig teuer. MK Applications entwickelt maßgeschneiderte
              Webplattformen, die Ihnen gehören – ohne wiederkehrende Lizenzabgaben an US-Monopole.
            </p>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-sm text-slate-900 block">
                    Keine Vendor-Lock-ins
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600">
                    Offene, moderne Web-Standards (React, TypeScript, Node.js, SQL), die überall
                    gehostet und jederzeit erweitert werden können.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-sm text-slate-900 block">
                    Automatisierte CI/CD-Bereitstellung
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600">
                    GitHub Actions Pipelines ermöglichen Updates und Deployments per Knopfdruck
                    ohne Ausfallzeiten (Zero-Downtime Releases).
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-sm text-slate-900 block">
                    Native Store-Apps (iOS & Android)
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600">
                    Auf Wunsch Bereitstellung derselben Codebase über Capacitor direkt im Apple App
                    Store und Google Play Store.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-navy-800 hover:bg-navy-900 rounded-xl shadow transition-colors"
              >
                <span>B2B-Projekt unverbindlich anfragen</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 text-cyan-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-electric-700 uppercase tracking-wider">
                        {item.subtitle}
                      </div>
                      <h3 className="text-lg font-bold text-navy-950 mt-0.5 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
