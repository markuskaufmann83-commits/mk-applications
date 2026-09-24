import React from 'react';
import {
  Cloud,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export const B2BCloudSection: React.FC = () => {
  const architectureSteps = [
    {
      step: '01',
      title: 'Global Edge & CDN',
      tech: 'Azure Static Web Apps',
      desc: 'Statische Assets werden blitzschnell über Microsofts weltweites Anycast CDN ausgeliefert. Automatische SSL-Verwaltung und DDoS-Schutz inklusive.',
    },
    {
      step: '02',
      title: 'Serverless Backend API',
      tech: 'Azure Functions (Node/TS)',
      desc: 'Keine dauerhaft laufenden virtuellen Maschinen. Rechenkapazität startet und skaliert bedarfsgerecht in Millisekunden – 0 € Grundkosten bei Leerlauf.',
    },
    {
      step: '03',
      title: 'Relationale Datenbank',
      tech: 'PostgreSQL / Azure SQL',
      desc: 'Strenge Datenintegrität (ACID), automatisierte Point-in-Time-Wiederherstellung und verschlüsselte Datenspeicherung in der EU (Region West Europe / Frankfurt).',
    },
  ];

  return (
    <section id="b2b-cloud" className="py-24 md:py-32 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: B2B Narrative & Cost Comparison */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 border border-electric-200 text-xs font-bold text-electric-800">
              <Cloud className="w-3.5 h-3.5 text-electric-600" />
              <span>B2B & Cloud Architekturen</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Wirtschaftliche Cloud-Systeme für Mittelstand & Macher.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Standard-Software ist oft entweder zu starr oder durch monatliche Lizenzgebühren pro
              Benutzer unverhältnismäßig teuer. MK Applications baut skalierbare Plattformen, die Ihnen
              gehören – ohne wiederkehrende Lizenzabgaben.
            </p>

            {/* Direct Cost Comparison Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Wirtschaftlichkeits-Vergleich
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-semibold block uppercase">
                    Klassische Server
                  </span>
                  <div className="text-xl font-black text-rose-600 mt-1">ab 150 € / Mtl.</div>
                  <span className="text-[11px] text-slate-500 block mt-1">
                    Feste Kosten auch nachts und bei Null Zugriffen
                  </span>
                </div>

                <div className="p-4 bg-slate-950 text-white rounded-xl border border-slate-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl pointer-events-none" />
                  <span className="text-[10px] text-cyan-400 font-bold block uppercase font-mono">
                    MK Applications Azure
                  </span>
                  <div className="text-xl font-black text-white mt-1">0,00 € / Mtl.</div>
                  <span className="text-[11px] text-slate-300 block mt-1">
                    Free Tier Kontingent & Pay-per-Execution
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-sm text-slate-900 block">
                    Keine Vendor-Lock-ins
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600">
                    Offene Standards (React, TypeScript, Node.js, SQL), die überall gehostet und
                    jederzeit weiterentwickelt werden können.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-sm text-slate-900 block">
                    100% DSGVO & Serverstandort Deutschland / EU
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600">
                    Kein Cookie-Banner erforderlich, keine Drittanbieter-Tracker, Datenhaltung in
                    zertifizierten Microsoft EU-Rechenzentren.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-slate-950 hover:bg-slate-900 rounded-xl shadow-md transition-all hover:scale-[1.02]"
              >
                <span>B2B-Projekt unverbindlich anfragen</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Architecture Blueprint */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              Architektur-Blueprint auf Microsoft Azure
            </div>

            {architectureSteps.map((step, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-200 relative group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center flex-shrink-0 font-mono font-black text-sm shadow-sm group-hover:scale-105 transition-transform">
                    {step.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-electric-600">
                        {step.tech}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-950 mt-0.5 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-4 bg-slate-950 text-white rounded-2xl border border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero-Trust Security & HSTS Preload aktiv</span>
              </div>
              <span className="text-cyan-400 font-bold">100/100 Lighthouse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
