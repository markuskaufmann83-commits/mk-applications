import React, { useState } from 'react';
import {
  Fish,
  QrCode,
  Clock,
  Gauge,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Smartphone,
  Palette,
  ArrowRight,
} from 'lucide-react';
import { ClubTheme } from '../types';

export const ClubPlatformShowcase: React.FC = () => {
  const clubThemes: ClubTheme[] = [
    {
      id: 'asv',
      name: 'ASV Hecht Bielefeld 1934 e.V.',
      category: 'Angelsport- & Fischereiverein',
      primaryColor: '#0f766e',
      badgeBg: 'bg-teal-700',
      badgeText: 'text-teal-100',
      accentColor: '#14b8a6',
      tagline: 'Gewässerhege & Angelsport an der Lutter & Teuto-Seen',
      modules: ['Digitales Fangbuch', 'Gewässerberechtigung', 'Arbeitsdienst-Tracker'],
    },
    {
      id: 'schuetzen',
      name: 'St. Hubertus Schützenbruderschaft e.V.',
      category: 'Schützen- & Traditionsverein',
      primaryColor: '#15803d',
      badgeBg: 'bg-green-800',
      badgeText: 'text-green-100',
      accentColor: '#22c55e',
      tagline: 'Brauchtumspflege, Schießsport & Vereinsheim',
      modules: ['Schießkladde & Nachweise', 'Arbeitsdienst-Tracker', 'QR-Zutritt'],
    },
    {
      id: 'wassersport',
      name: 'Wassersportclub Obersee e.V.',
      category: 'Segel-, Ruder- & Kanuverein',
      primaryColor: '#0284c7',
      badgeBg: 'bg-sky-700',
      badgeText: 'text-sky-100',
      accentColor: '#38bdf8',
      tagline: 'Liegeplatzverwaltung, Bootshaus & Regatten',
      modules: ['Liegeplatz-Zähler', 'Bootshaus-Ausweis', 'Arbeitsstunden'],
    },
  ];

  const [selectedTheme, setSelectedTheme] = useState<ClubTheme>(clubThemes[0]);
  const [activeModule, setActiveModule] = useState<'fangbuch' | 'stunden' | 'ausweis' | 'zaehler'>('fangbuch');

  return (
    <section id="vereinsplattform" className="py-20 md:py-28 bg-slate-100/60 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-300 text-xs font-bold text-navy-800 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Multi-Tenant Vereinsplattform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Schluss mit Zettelwirtschaft in Vereinen & Verbänden.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Eine modulare, intuitive PWA, die sich maßgeschneidert an das Wappen, die Farben und die
            spezifischen Arbeitsabläufe Ihrer Organisation anpasst.
          </p>
        </div>

        {/* Dynamic White-Labeling Bar */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center flex-shrink-0">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Interaktiver White-Labeling Test
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  Wählen Sie einen Beispiel-Verein zur Live-Vorschau:
                </span>
              </div>
            </div>

            {/* Club Preset Buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {clubThemes.map((theme) => {
                const isActive = selectedTheme.id === theme.id;
                return (
                  <button
                    key={theme.id}
                    type="button"
                    onClick={() => setSelectedTheme(theme)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? `${theme.badgeBg} text-white shadow-md scale-102`
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-white/60"
                      style={{ backgroundColor: theme.accentColor }}
                    />
                    <span>{theme.category.split('-')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Interactive Showcase Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Virtual Vereins-Header in Selected Theme Colors */}
          <div
            className="p-6 sm:p-8 text-white transition-colors duration-500 relative"
            style={{ backgroundColor: selectedTheme.primaryColor }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center font-black text-xl shadow-inner">
                  {selectedTheme.name.slice(0, 3)}
                </div>
                <div>
                  <div className="inline-block text-[11px] bg-white/20 font-semibold px-2 py-0.5 rounded-full mb-1">
                    {selectedTheme.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">{selectedTheme.name}</h3>
                  <p className="text-xs sm:text-sm text-white/80">{selectedTheme.tagline}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <span className="text-xs bg-white/20 px-3 py-1.5 rounded-lg font-medium backdrop-blur-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  Tenant-Mandant geschützt
                </span>
              </div>
            </div>

            {/* Module Switcher Buttons */}
            <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 no-scrollbar border-t border-white/20 pt-4">
              <button
                type="button"
                onClick={() => setActiveModule('fangbuch')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeModule === 'fangbuch'
                    ? 'bg-white text-slate-900 shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <Fish className="w-4 h-4" />
                <span>Digitales Fangbuch</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveModule('stunden')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeModule === 'stunden'
                    ? 'bg-white text-slate-900 shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Arbeitsdienst-Tracker</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveModule('ausweis')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeModule === 'ausweis'
                    ? 'bg-white text-slate-900 shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>QR-Mitgliedsausweis</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveModule('zaehler')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeModule === 'zaehler'
                    ? 'bg-white text-slate-900 shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <Gauge className="w-4 h-4" />
                <span>Zählerstand & Liegeplatz</span>
              </button>
            </div>
          </div>

          {/* Module Content Preview */}
          <div className="p-6 sm:p-10">
            {/* MODULE 1: Digitales Fangbuch */}
            {activeModule === 'fangbuch' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                    <Fish className="w-3.5 h-3.5 text-teal-600" />
                    <span>Fachmodul Fischereiwesen</span>
                  </div>
                  <h4 className="text-2xl font-bold text-navy-950">
                    Gesetzeskonforme Fangerfassung ohne nasse Papierhefte.
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Angler erfassen Fänge sekundenschnell direkt am Ufer – auch bei Funkloch offline
                    gespeichert. Die App prüft automatisch Mindestmaße und Schonzeiten des Bundeslands NRW.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>GPS-Gewässerabschnitt & Bildnachweis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>Automatische Schonzeiten-Validierung nach LFO NRW</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>1-Klick Fangstatistik-Export für die Obere Fischereibehörde</span>
                    </li>
                  </ul>
                </div>

                {/* Visual Demo Card */}
                <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-5 text-white shadow-lg border border-slate-800">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-xs">
                    <span className="font-semibold text-teal-400">Fangprotokoll #2026-F91</span>
                    <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[11px]">
                      Offline synchronisiert
                    </span>
                  </div>
                  <div className="space-y-3 text-xs">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-slate-800/80 p-2.5 rounded-lg">
                        <span className="text-slate-400 block text-[10px]">Fischart</span>
                        <span className="font-bold text-white text-sm">Zander (Sander lucioperca)</span>
                      </div>
                      <div className="bg-slate-800/80 p-2.5 rounded-lg">
                        <span className="text-slate-400 block text-[10px]">Länge & Gewicht</span>
                        <span className="font-bold text-teal-300 text-sm">68 cm &bull; 3,2 kg</span>
                      </div>
                    </div>
                    <div className="bg-slate-800/80 p-2.5 rounded-lg">
                      <span className="text-slate-400 block text-[10px]">Gewässer & Entnahme</span>
                      <span className="font-medium text-slate-200">
                        Teuto-Gewässer Sektor 3 &bull; Entnahme für Eigenbedarf: Ja
                      </span>
                    </div>
                    <div className="p-2 bg-teal-950/70 border border-teal-800/60 rounded text-[11px] text-teal-200 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      <span>Mindestmaß 50cm eingehalten. Keine Schonzeit aktiv.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODULE 2: Arbeitsdienst- & QR-Stundennachweis */}
            {activeModule === 'stunden' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-800 bg-navy-50 px-2.5 py-1 rounded-md border border-navy-200">
                    <Clock className="w-3.5 h-3.5 text-navy-600" />
                    <span>Spartenübergreifendes Modul</span>
                  </div>
                  <h4 className="text-2xl font-bold text-navy-950">
                    Pflichtstunden transparent erfassen & abrechnen.
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Mitglieder sehen sofort ihr persönliches Stundenkonto. Vorarbeiter oder Platzwarte
                    signieren erbrachte Stunden einfach per QR-Code-Scan oder Bestätigungs-PIN.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-navy-700 flex-shrink-0" />
                      <span>Live-Fortschrittsbalken (z.B. 10 von 12 Pflichtstunden)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-navy-700 flex-shrink-0" />
                      <span>Manipulationssicher durch Vorarbeiter-Freigabe</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-navy-700 flex-shrink-0" />
                      <span>Automatischer Einzug von Ersatzgeldern bei Nichterfüllung</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-5 text-white shadow-lg border border-slate-800">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-xs">
                    <span className="font-semibold text-cyan-400">Jahresnachweis Arbeitsdienst</span>
                    <span className="text-slate-400">Saison 2026</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl mb-3">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-400">Geleistet: 12 / 12 Stunden</span>
                      <span className="text-emerald-400 font-bold">100% Erfüllt</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full w-full" />
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 bg-slate-800 rounded-lg flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-white">Geländepflege Frühjahr</div>
                        <div className="text-[10px] text-slate-400">6 Std. &bull; Vorarbeiter: T. Meyer</div>
                      </div>
                      <span className="text-emerald-400 font-bold text-[11px]">&check; Bestätigt</span>
                    </div>
                    <div className="p-2.5 bg-slate-800 rounded-lg flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-white">Renovierung Vereinsheim</div>
                        <div className="text-[10px] text-slate-400">6 Std. &bull; Vorarbeiter: M. Kaufmann</div>
                      </div>
                      <span className="text-emerald-400 font-bold text-[11px]">&check; Bestätigt</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODULE 3: QR-Mitgliedsausweis */}
            {activeModule === 'ausweis' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-electric-800 bg-electric-50 px-2.5 py-1 rounded-md border border-electric-200">
                    <QrCode className="w-3.5 h-3.5 text-electric-600" />
                    <span>Zutritt & Berechtigungen</span>
                  </div>
                  <h4 className="text-2xl font-bold text-navy-950">
                    Plastikkarten adé: Der digitale Ausweis auf jedem Smartphone.
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Sparen Sie jährlich Hunderte Euro für Plastikkarten und Porto. Mitglieder haben
                    ihren gültigen Ausweis mit Echtzeit-Status, Lichtbild und Berechtigungen immer dabei.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-electric-600 flex-shrink-0" />
                      <span>Dynamisch kryptografischer QR-Code gegen Screenshots</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-electric-600 flex-shrink-0" />
                      <span>Offline prüfbar durch Gewässerwarte & Vorstände</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-electric-600 flex-shrink-0" />
                      <span>Sofortige Sperrung bei Vereinsaustritt</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-sm bg-gradient-to-tr from-navy-900 to-slate-900 p-5 rounded-2xl border border-slate-700 shadow-2xl text-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold tracking-widest uppercase text-cyan-400">
                        {selectedTheme.name.slice(0, 20)}...
                      </span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold">
                        Gültig 2026
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600 text-lg">
                        MK
                      </div>
                      <div>
                        <div className="font-bold text-base">Markus Kaufmann</div>
                        <div className="text-xs text-slate-400">Mitglied seit 2018 &bull; #BI-042</div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl max-w-[130px] mx-auto mb-3 shadow-inner">
                      <div className="grid grid-cols-4 gap-1 w-24 h-24 p-0.5">
                        <div className="bg-navy-950 col-span-2 row-span-2 rounded-sm" />
                        <div className="bg-navy-950 col-span-1" />
                        <div className="bg-cyan-600 col-span-1" />
                        <div className="bg-navy-950 col-span-1" />
                        <div className="bg-navy-950 col-span-2 row-span-2 rounded-sm" />
                        <div className="bg-navy-950 col-span-1" />
                      </div>
                    </div>

                    <div className="text-center text-[10px] text-slate-400">
                      Zutrittsberechtigt: Bootshaus, Steganlage 1-4, Werkstatt
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODULE 4: Zählerstand & Liegeplatz */}
            {activeModule === 'zaehler' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200">
                    <Gauge className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Infrastruktur & Abrechnung</span>
                  </div>
                  <h4 className="text-2xl font-bold text-navy-950">
                    Strom-, Wasser- und Liegeplatzverwaltung per Smartphone-Foto.
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Mitglieder erfassen Zählerstände für Stegstrom, Bootsliegeplätze oder Vereinsgärten
                    direkt mit der Smartphone-Kamera. Die Software prüft Plausibilität und berechnet
                    den Verbrauch automatisch.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <span>Foto-Nachweis bei der Zählereingabe</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <span>Sofortige Warnung bei unplausiblen Sprüngen (Leckage-Erkennung)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <span>SEPA-Export für die direkte Verrechnung</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-5 text-white shadow-lg border border-slate-800">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-xs">
                    <span className="font-semibold text-cyan-400">Stegplatz #14 - Stromzähler</span>
                    <span className="text-slate-400">Zähler-ID: STEG-014</span>
                  </div>
                  <div className="space-y-3 text-xs">
                    <div className="bg-slate-800 p-3 rounded-xl flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Letzter Stand (Oktober 2025)</span>
                        <span className="font-mono text-slate-300 text-sm">1.420 kWh</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500" />
                      <div className="text-right">
                        <span className="text-[10px] text-cyan-400 block">Neuer Stand (September 2026)</span>
                        <span className="font-mono text-cyan-300 text-base font-bold">1.584 kWh</span>
                      </div>
                    </div>
                    <div className="p-2.5 bg-slate-800/80 rounded-lg flex justify-between items-center">
                      <span className="text-slate-300">Verbrauch: 164 kWh &agrave; 0,42 €</span>
                      <span className="font-bold text-white text-sm">68,88 €</span>
                    </div>
                    <div className="text-emerald-400 text-[11px] flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Plausibilitätsprüfung bestanden & Foto gespeichert</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer CTA of Showcase */}
          <div className="bg-slate-50 p-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
              <Smartphone className="w-4 h-4 text-navy-700" />
              <span>Interesse an einer individuellen Vereins-App für Ihren Verband?</span>
            </div>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-navy-800 hover:bg-navy-900 rounded-xl shadow transition-colors"
            >
              <span>Unverbindliche Vereins-Demo anfragen</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
