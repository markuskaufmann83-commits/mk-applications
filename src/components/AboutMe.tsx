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
  const techStack = [
    { name: 'TypeScript', category: 'Language', highlight: true },
    { name: 'React / Next.js', category: 'Frontend', highlight: true },
    { name: 'Tailwind CSS', category: 'UI & Styling', highlight: true },
    { name: 'Microsoft Azure', category: 'Cloud Infrastructure', highlight: true },
    { name: 'PostgreSQL / SQL', category: 'Database', highlight: true },
    { name: 'Python', category: 'Backend & Data', highlight: true },
    { name: 'Node.js', category: 'Serverless Runtime', highlight: false },
    { name: 'Capacitor', category: 'iOS & Android Store', highlight: false },
    { name: 'GitHub Actions', category: 'CI/CD Automation', highlight: false },
    { name: 'Docker', category: 'Containerization', highlight: false },
  ];

  const trustFactors = [
    {
      icon: Euro,
      title: 'Transparente Festpreise',
      description: 'Verlässliche Kalkulation ohne versteckte Überraschungen oder ausufernde Stundensätze.',
    },
    {
      icon: UserCheck,
      title: 'Persönlicher Architekt',
      description: 'Direkter Draht zu Markus Kaufmann – keine vorgeschalteten Vertriebler oder Junior-Entwickler.',
    },
    {
      icon: ShieldCheck,
      title: '100% DSGVO & EU-Hosting',
      description: 'Keine Cookies, keine Datenschnüffelei. Hosting strictly nach europäischem Datenschutzstandard.',
    },
    {
      icon: Code2,
      title: 'Kein Vendor-Lock-in',
      description: 'Der Code gehört Ihnen. Klare Dokumentation, saubere Git-Repositories und moderne Standards.',
    },
  ];

  return (
    <section id="ueber-mich" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Personal Intro */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-navy-800 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-cyan-600" />
              <span>Bielefeld &bull; Ostwestfalen-Lippe</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
              Softwareentwicklung mit Handwerkerehre & Ingenieursanspruch.
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                Hallo, ich bin <strong className="text-navy-900 font-semibold">Markus Kaufmann</strong>,
                Inhaber von MK Applications. Als pragmatischer IT- und Full-Stack-Architekt aus Bielefeld
                entwickle ich digitale Lösungen, die echte Probleme lösen – und keine neuen schaffen.
              </p>
              <p>
                Ob Sie als Sport- oder Fischereiverein von Papierakten und Excel-Chaos befreit werden
                möchten oder als mittelständisches Unternehmen eine hochperformante Cloud-Anwendung
                benötigen: Ich begleite Sie von der ersten Architektur-Skizze bis zum produktiven
                Betrieb auf Microsoft Azure.
              </p>
            </div>

            {/* Quote / Philosophy Box */}
            <div className="bg-white p-5 rounded-2xl border-l-4 border-l-cyan-500 border-slate-200 shadow-sm">
              <p className="text-sm italic text-slate-700">
                &bdquo;Gute Software muss nicht kompliziert sein. Sie muss robust, wartungsarm und für den
                Nutzer intuitiv verständlich sein. Das ist der Anspruch von MK Applications.&ldquo;
              </p>
              <div className="mt-2 text-xs font-bold text-navy-900">
                — Markus Kaufmann, Inhaber & Cloud-Architekt
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack & Badges */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-5 h-5 text-electric-600" />
                <h3 className="text-lg font-bold text-navy-950">
                  Moderner & zukunftssicherer Tech-Stack
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      tech.highlight
                        ? 'bg-slate-50 border-slate-300/80 hover:border-cyan-400 hover:shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600'
                    }`}
                  >
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                      {tech.category}
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-navy-950 block mt-0.5">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                  Die MK Applications Vertrauensgarantie
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {trustFactors.map((factor, i) => {
                    const Icon = factor.icon;
                    return (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-navy-50 text-navy-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{factor.title}</div>
                          <div className="text-[11px] text-slate-500 leading-snug">
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
