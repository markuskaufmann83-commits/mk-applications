import React from 'react';
import {
  ShieldCheck,
  Code2,
  Euro,
  UserCheck,
  MapPin,
  Terminal,
} from 'lucide-react';

export const AboutMe: React.FC = () => {
  const techCategories = [
    {
      title: 'Frontend & Mobile',
      skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Capacitor (Store-Apps)'],
    },
    {
      title: 'Cloud & Backend',
      skills: ['Microsoft Azure', 'Azure Functions (Serverless)', 'Node.js', 'Python', 'PostgreSQL / SQL'],
    },
    {
      title: 'DevOps & Quality',
      skills: ['GitHub Actions CI/CD', 'Docker', '100% DSGVO & Security Headers', 'Lighthouse 100/100'],
    },
  ];

  const trustFactors = [
    {
      icon: Euro,
      title: 'Transparente Festpreise',
      description: 'Verlässliche Kalkulation ohne versteckte Überraschungen oder ungedeckte Stundensätze.',
    },
    {
      icon: UserCheck,
      title: 'Direkter Entwicklerkontakt',
      description: 'Sie sprechen direkt mit Markus Kaufmann – ohne vorgeschaltete Vertriebs- oder Callcenter-Schleifen.',
    },
    {
      icon: ShieldCheck,
      title: '100% DSGVO & EU-Cloud',
      description: 'Rechtssicher, datensparsam und ohne Cookies oder externe Überwachungswerkzeuge.',
    },
    {
      icon: Code2,
      title: 'Vollständiges Code-Eigentum',
      description: 'Der Quellcode gehört Ihnen. Vollständige Git-Übergabe, transparente Dokumentation, kein Lock-in.',
    },
  ];

  return (
    <section id="ueber-mich" className="py-24 md:py-32 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Personal Profile & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-cyan-600" />
              <span>Bielefeld &bull; Ostwestfalen-Lippe &bull; Remote & Vor Ort</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Softwareentwicklung mit Handwerkerehre & Ingenieursanspruch.
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
              <p>
                Hallo, ich bin <strong className="text-slate-900 font-bold">Markus Kaufmann</strong>,
                Inhaber und leitender Softwarearchitekt von MK Applications. Ich entwickle robuste,
                zukunftssichere Webanwendungen und Vereinsplattformen, die exakt auf die Bedürfnisse
                ihrer Anwender zugeschnitten sind.
              </p>
              <p>
                Mein Schwerpunkt liegt in der Schnittmenge aus moderner Webtechnologie (React, TypeScript,
                PWAs) und hochwirtschaftlichen Cloud-Architekturen auf Microsoft Azure. Ob
                Vereinsplattform oder B2B-Plattform: Ich begleite Sie partnerschaftlich von der ersten
                Konzeption bis zum produktiven Dauerbetrieb.
              </p>
            </div>

            {/* Architecture Quote Box */}
            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-cyan-500 border-slate-200 shadow-sm">
              <p className="text-sm sm:text-base italic text-slate-700 leading-relaxed">
                &bdquo;Gute Software muss nicht komplex in der Bedienung sein. Sie muss robust, schnell und
                wirtschaftlich im Betrieb sein – und dem Menschen die Arbeit abnehmen, nicht neue machen.&ldquo;
              </p>
              <div className="mt-3 text-xs font-bold text-slate-900 flex items-center gap-2">
                <span>Markus Kaufmann</span>
                <span className="text-slate-400">&bull;</span>
                <span className="text-slate-500 font-medium">Inhaber & Senior Cloud-Architekt</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tech Matrix & Trust Guarantee */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xl">
              <div className="flex items-center gap-2.5 mb-6">
                <Terminal className="w-5 h-5 text-cyan-600" />
                <h3 className="text-lg font-black text-slate-950 tracking-tight">
                  Technologie-Stack & Architektur-Kompetenz
                </h3>
              </div>

              {/* Categorized Skills */}
              <div className="space-y-4 mb-8">
                {techCategories.map((cat, i) => (
                  <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2 font-mono">
                      {cat.title}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-semibold bg-white text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Factors */}
              <div className="border-t border-slate-100 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 font-mono">
                  Die MK Applications Vertrauensgarantie
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {trustFactors.map((factor, i) => {
                    const Icon = factor.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{factor.title}</div>
                          <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                            {factor.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
