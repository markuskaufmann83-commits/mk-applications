import React from 'react';
import {
  Smartphone,
  Users2,
  CloudCog,
  LayoutDashboard,
  Check,
  ArrowRight,
  Zap,
} from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      id: 'pwa',
      icon: Smartphone,
      accentColor: 'from-cyan-500 to-electric-500',
      badge: 'PWA-First & Store',
      title: 'Mobile & Progressive Web Apps',
      description:
        'Apps, die ohne App-Store-Zwang direkt im Browser installiert werden können – blitzschnell, offline-fähig und mit nativer Smartphone-Haptik.',
      features: [
        'Offline-fähig durch Service Worker & IndexedDB',
        'Store-Ready: Bereitstellbar für iOS App Store & Google Play',
        'Push-Benachrichtigungen für Termine & Warnungen',
        'Kamera- & QR-Code-Integration ohne Zusatzhardware',
      ],
      tags: ['React', 'TypeScript', 'PWA', 'Capacitor', 'Web Push'],
    },
    {
      id: 'vereine',
      icon: Users2,
      accentColor: 'from-navy-700 to-electric-600',
      badge: 'Spezialisierung',
      title: 'Vereins- & Verbandssoftware',
      description:
        'Modulare, multi-tenantfähige Software für Nischenvereine, Verbände und Organisationen, die Standardlösungen überfordern oder einschränken.',
      features: [
        'Mitglieder- & Spartenverwaltung mit Rollenkonzept',
        'Kryptografische digitale QR-Mitgliedsausweise',
        'Arbeitsdienst-Tracker & digitale Stundennachweise',
        'Branchenspezifische Fachmodule (Fangbuch, Kladde, Belegung)',
      ],
      tags: ['Multi-Tenant', 'QR-Signatur', 'DSGVO-konform', 'Automatisierung'],
    },
    {
      id: 'cloud',
      icon: CloudCog,
      accentColor: 'from-blue-600 to-cyan-500',
      badge: '0 € Leerlaufkosten',
      title: 'Managed Cloud & Backend',
      description:
        'Serverlose, hochskalierbare Cloud-Architekturen auf Microsoft Azure. Dauerhaft minimale Betriebskosten bei maximaler Sicherheit und Ausfallsicherheit.',
      features: [
        'Serverless Azure Functions & Azure Static Web Apps',
        'Strukturierte relationale SQL- & PostgreSQL-Datenbanken',
        'REST- & GraphQL-Schnittstellen mit sauberer Dokumentation',
        'Automatisierte GitHub Actions CI/CD Deployment-Pipelines',
      ],
      tags: ['Azure Cloud', 'Serverless', 'PostgreSQL', 'GitHub Actions'],
    },
    {
      id: 'b2b',
      icon: LayoutDashboard,
      accentColor: 'from-navy-800 to-navy-600',
      badge: 'Mittelstand & B2B',
      title: 'Webdesign & B2B-Tools',
      description:
        'Maßgeschneiderte Webanwendungen und interne Mitarbeiter-Dashboards, die papierbasierte Prozesse ablösen und Arbeitszeit sparen.',
      features: [
        'Interaktive Management-Dashboards mit Live-KPIs',
        'Formular- & Dokumentengenerierung (PDF, Excel-Export)',
        '100% DSGVO-konforme Datenspeicherung in der EU',
        'Lighthouse Score 100/100 für beste Google-Sichtbarkeit',
      ],
      tags: ['Tailwind CSS', 'Next.js / Vite', 'Prozessdigitalisierung', 'B2B'],
    },
  ];

  return (
    <section id="leistungen" className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/60 text-xs font-semibold text-cyan-800 mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-600" />
            <span>Schwerpunkte & Kernkompetenzen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Leistungsstarke Softwarelösungen für Ihren konkreten Bedarf.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Keine aufgeblasenen Agenturpakete, sondern pragmatische, wartungsarme und passgenaue
            Systeme direkt vom Entwickler.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-slate-50/70 hover:bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glow Accent Border Top */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 rounded-t-2xl bg-gradient-to-r ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center shadow group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-xs font-bold text-navy-800 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-950 mb-3 group-hover:text-navy-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & CTA Link */}
                <div className="pt-5 border-t border-slate-200/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#kontakt"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-navy-700 hover:text-cyan-600 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Lösung für diesen Bereich anfragen</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
