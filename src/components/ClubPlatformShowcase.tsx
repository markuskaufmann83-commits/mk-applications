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
  CheckCircle2,
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
      primaryColor: '#166534',
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
      primaryColor: '#0369a1',
      badgeBg: 'bg-sky-800',
      badgeText: 'text-sky-100',
      accentColor: '#38bdf8',
      tagline: 'Liegeplatzverwaltung, Bootshaus & Regatten',
      modules: ['Liegeplatz-Zähler', 'Bootshaus-Ausweis', 'Arbeitsstunden'],
    },
  ];

  const [selectedTheme, setSelectedTheme] = useState<ClubTheme>(clubThemes[0]);
  const [activeModule, setActiveModule] = useState<'fangbuch' | 'stunden' | 'ausweis' | 'zaehler'>('fangbuch');

  return (
    <section id="vereinsplattform" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      {/* Decorative background grid with radial fade */}
      <div className="absolute inset-0 bg-grid-faded pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Branchenlösung für Vereine & Verbände</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Modulare Vereins- & Verbandsplattform.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Verwaltung, rechtssichere Fachmodule und digitale Mitgliederausweise – vereint in einer
            intuitiven, maßgeschneiderten PWA.
          </p>
        </div>

        {/* Dynamic White-Labeling Controller Bar */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200/70 text-cyan-700 flex items-center justify-center flex-shrink-0 shadow-2xs">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block">
                  Mandantenfähigkeit Live testen
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  Wählen Sie einen Beispiel-Verein zur Echtzeit-Vorschau:
                </span>
              </div>
            </div>

            {/* Club Preset Buttons */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {clubThemes.map((theme) => {
                const isActive = selectedTheme.id === theme.id;
                return (
                  <button
                    key={theme.id}
                    type="button"
                    onClick={() => setSelectedTheme(theme)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs ${
                      isActive
                        ? `${theme.badgeBg} text-white shadow-md scale-[1.02]`
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-white/60"
                      style={{ backgroundColor: theme.accentColor }}
                    />
                    <span>{theme.name.split(' ')[0]} {theme.name.split(' ')[1]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* High-End Showcase Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Virtual Club Header with Dynamic Theme Color */}
          <div
            className="p-6 sm:p-8 text-white transition-colors duration-500 relative"
            style={{ backgroundColor: selectedTheme.primaryColor }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center font-bold text-xl shadow-inner">
                  {selectedTheme.name.slice(0, 3)}
                </div>
                <div>
                  <div className="inline-block text-[10px] bg-white/20 font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1">
                    {selectedTheme.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{selectedTheme.name}</h3>
                  <p className="text-xs sm:text-sm text-white/80">{selectedTheme.tagline}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs bg-white/15 px-3 py-1.5 rounded-lg font-semibold backdrop-blur-sm flex items-center gap-1.5 border border-white/20">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  Mandant isoliert & DSGVO-gesichert
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
                    ? 'bg-white text-slate-950 shadow-md'
                    : 'bg-white/15 hover:bg-white/25 text-white'
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
                    ? 'bg-white text-slate-950 shadow-md'
                    : 'bg-white/15 hover:bg-white/25 text-white'
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
                    ? 'bg-white text-slate-950 shadow-md'
                    : 'bg-white/15 hover:bg-white/25 text-white'
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
                    ? 'bg-white text-slate-950 shadow-md'
                    : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
              >
                <Gauge className="w-4 h-4" />
                <span>Zählerstand & Liegeplatz</span>
              </button>
            </div>
          </div>

          {/* Module Content Preview */}
          <div className="p-6 sm:p-10 bg-white">
            {/* MODULE 1: Digitales Fangbuch */}
            {activeModule === 'fangbuch' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                    <Fish className="w-3.5 h-3.5 text-teal-600" />
                    <span>Fachmodul Fischereiwesen</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Gesetzeskonforme Fangerfassung ohne nasse Papierhefte.
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Angler erfassen Fänge sekundenschnell direkt am Gewässer – auch bei Funkloch offline
                    gespeichert. Die App prüft automatisch Mindestmaße und Schonzeiten des Landesfischereigesetzes NRW.
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>GPS-Gewässerabschnitt & Fotodokumentation</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>Automatische Schonzeiten-Validierung nach LFO NRW</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>1-Klick Fangstatistik-Export für die Obere Fischereibehörde</span>
                    </li>
                  </ul>
                </div>

                {/* Visual Demo Card */}
                <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-6 text-white shadow-xl border border-slate-800">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-xs">
                    <span className="font-bold text-teal-400 font-mono">Fangprotokoll #2026-F91</span>
                    <span className="bg-slate-800/90 text-slate-300 px-2.5 py-0.5 rounded-full text-[10px] font-mono">
                      Offline synchronisiert
                    </span>
                  </div>
                  <div className="space-y-3 text-xs">
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                        <span className="text-slate-400 block text-[10px] font-medium">Fischart</span>
                        <span className="font-bold text-white text-sm">Zander (Sander lucioperca)</span>
                      </div>
                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                        <span className="text-slate-400 block text-[10px] font-medium">Länge & Gewicht</span>
                        <span className="font-bold text-teal-300 text-sm">68 cm &bull; 3,2 kg</span>
                      </div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 block text-[10px] font-medium">Gewässer & Entnahme</span>
                      <span className="font-medium text-slate-200">
                        Teuto-Gewässer Sektor 3 &bull; Entnahme für Eigenbedarf
                      </span>
                    </div>
                    <div className="p-2.5 bg-teal-950/80 border border-teal-800/80 rounded-xl text-[11px] text-teal-200 flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      <span>Mindestmaß 50 cm eingehalten. Keine Schonzeit aktiv.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODULE 2: Arbeitsdienst-Tracker */}
            {activeModule === 'stunden' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-800 bg-navy-50 px-2.5 py-1 rounded-md border border-navy-200">
                    <Clock className="w-3.5 h-3.5 text-navy-600" />
                    <span>Spartenübergreifendes Modul</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Pflichtstunden transparent erfassen & abrechnen.
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Mitglieder sehen sofort ihr persönliches Stundenkonto. Vorarbeiter oder Platzwarte
                    signieren erbrachte Stunden einfach per QR-Code-Scan oder Bestätigungs-PIN.
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-navy-700 flex-shrink-0" />
                      <span>Live-Fortschrittsbalken (z.B. 10 von 12 Pflichtstunden)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-navy-700 flex-shrink-0" />
                      <span>Manipulationssicher durch Vorarbeiter-Freigabe</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-navy-700 flex-shrink-0" />
                      <span>Automatischer Einzug von Ersatzgeldern bei Nichterfüllung</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-6 text-white shadow-xl border border-slate-800">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-xs font-mono">
                    <span className="font-bold text-cyan-400">Jahresnachweis Arbeitsdienst</span>
                    <span className="text-slate-400">Saison 2026</span>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-xl mb-3 border border-slate-800">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-slate-400 font-medium">Geleistet: 12 / 12 Stunden</span>
                      <span className="text-emerald-400 font-bold">100% Erfüllt</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full w-full" />
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800/80 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white">Geländepflege Frühjahr</div>
                        <div className="text-[11px] text-slate-400">6 Std. &bull; Vorarbeiter: T. Meyer</div>
                      </div>
                      <span className="text-emerald-400 font-bold text-xs">&check; Bestätigt</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800/80 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white">Renovierung Vereinsheim</div>
                        <div className="text-[11px] text-slate-400">6 Std. &bull; Vorarbeiter: M. Kaufmann</div>
                      </div>
                      <span className="text-emerald-400 font-bold text-xs">&check; Bestätigt</span>
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
                  <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Plastikkarten adé: Der digitale Ausweis auf jedem Smartphone.
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Sparen Sie jährlich Hunderte Euro für Plastikkarten und Porto. Mitglieder haben
                    ihren gültigen Ausweis mit Echtzeit-Status, Lichtbild und Berechtigungen immer dabei.
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-electric-600 flex-shrink-0" />
                      <span>Dynamisch kryptografischer QR-Code gegen Screenshots</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-electric-600 flex-shrink-0" />
                      <span>Offline prüfbar durch Gewässerwarte & Vorstände</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-electric-600 flex-shrink-0" />
                      <span>Sofortige Sperrung bei Vereinsaustritt</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-sm bg-gradient-to-tr from-slate-950 via-slate-900 to-navy-950 p-6 rounded-3xl border border-slate-800 shadow-2xl text-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold tracking-widest uppercase text-cyan-400 font-mono">
                        {selectedTheme.name.slice(0, 22)}...
                      </span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-bold">
                        Gültig 2026
                      </span>
                    </div>

                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-white border border-slate-700 text-lg shadow-inner">
                        MK
                      </div>
                      <div>
                        <div className="font-extrabold text-base">Markus Kaufmann</div>
                        <div className="text-xs text-slate-400 font-mono">Mitglied seit 2018 &bull; #BI-042</div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-2xl max-w-[130px] mx-auto mb-3 shadow-inner">
                      <div className="grid grid-cols-4 gap-1 w-24 h-24 p-0.5">
                        <div className="bg-slate-950 col-span-2 row-span-2 rounded-xs" />
                        <div className="bg-slate-950 col-span-1" />
                        <div className="bg-cyan-600 col-span-1" />
                        <div className="bg-slate-950 col-span-1" />
                        <div className="bg-slate-950 col-span-2 row-span-2 rounded-xs" />
                        <div className="bg-slate-950 col-span-1" />
                      </div>
                    </div>

                    <div className="text-center text-[10px] text-slate-400 font-mono">
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
                  <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Strom-, Wasser- und Liegeplatzverwaltung per Smartphone-Foto.
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Mitglieder erfassen Zählerstände für Stegstrom, Bootsliegeplätze oder Vereinsgärten
                    direkt mit der Smartphone-Kamera. Die Software prüft Plausibilität und berechnet
                    den Verbrauch automatisch.
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <span>Foto-Nachweis bei der Zählereingabe</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <span>Sofortige Warnung bei unplausiblen Sprüngen (Leckage-Erkennung)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <span>SEPA-Export für die direkte Verrechnung</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-6 text-white shadow-xl border border-slate-800">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-xs font-mono">
                    <span className="font-bold text-cyan-400">Stegplatz #14 - Stromzähler</span>
                    <span className="text-slate-400">Zähler-ID: STEG-014</span>
                  </div>
                  <div className="space-y-3 text-xs">
                    <div className="bg-slate-900 p-3.5 rounded-xl flex items-center justify-between border border-slate-800">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Letzter Stand (Oktober 2025)</span>
                        <span className="font-mono text-slate-300 text-sm">1.420 kWh</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500" />
                      <div className="text-right">
                        <span className="text-[10px] text-cyan-400 block font-medium">Neuer Stand (September 2026)</span>
                        <span className="font-mono text-cyan-300 text-base font-bold">1.584 kWh</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-300 font-medium">Verbrauch: 164 kWh &agrave; 0,42 €</span>
                      <span className="font-bold text-white text-sm">68,88 €</span>
                    </div>
                    <div className="text-emerald-400 text-xs flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Plausibilitätsprüfung bestanden & Foto gespeichert</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer CTA of Showcase */}
          <div className="bg-slate-50 p-6 sm:p-7 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              <Smartphone className="w-4 h-4 text-slate-900" />
              <span>Interesse an einer individuellen Vereins-App für Ihren Verband?</span>
            </div>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-900 rounded-xl shadow-md transition-all hover:scale-[1.02]"
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
