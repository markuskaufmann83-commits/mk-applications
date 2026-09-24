import React, { useState } from 'react';
import {
  Smartphone,
  Monitor,
  QrCode,
  Fish,
  Clock,
  Shield,
  CheckCircle2,
  WifiOff,
  Bell,
  Sparkles,
  Users,
} from 'lucide-react';

export const InteractiveHeroMockup: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'ausweis' | 'fangbuch' | 'arbeitsdienst' | 'cockpit'>('ausweis');
  const [clubName, setClubName] = useState('ASV Bielefeld 1934 e.V.');

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-electric-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* Control bar above mockup */}
      <div className="flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
            Live PWA Interaktiv-Demo
          </span>
        </div>

        {/* Device toggle */}
        <div className="flex items-center gap-1 bg-slate-200/80 p-0.5 rounded-lg border border-slate-300/60">
          <button
            type="button"
            onClick={() => setDeviceMode('desktop')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
              deviceMode === 'desktop'
                ? 'bg-white text-navy-800 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Desktop Ansicht"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
              deviceMode === 'mobile'
                ? 'bg-white text-navy-800 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Mobile Ansicht"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Smartphone</span>
          </button>
        </div>
      </div>

      {/* Outer Shell */}
      <div
        className={`transition-all duration-500 mx-auto ${
          deviceMode === 'mobile' ? 'max-w-[340px]' : 'max-w-full'
        }`}
      >
        {/* Mockup Frame */}
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-700/60 shadow-2xl overflow-hidden transition-all duration-300">
          {/* Top Window Bar (Browser or Phone Notch) */}
          <div className="bg-slate-950/80 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between select-none">
            {deviceMode === 'desktop' ? (
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <div className="ml-2 text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/50 flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-cyan-400" />
                  <span>https://app.mk-applications.de/{activeTab}</span>
                </div>
              </div>
            ) : (
              <div className="w-full flex items-center justify-between text-[11px] font-medium text-slate-400">
                <span>09:41</span>
                <div className="w-16 h-3 bg-slate-800 rounded-full" />
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <div className="w-3.5 h-2 border border-slate-400 rounded-sm p-0.5">
                    <div className="w-full h-full bg-cyan-400" />
                  </div>
                </div>
              </div>
            )}

            {/* Offline-Ready Badge */}
            <div className="hidden sm:flex items-center gap-1 text-[10px] text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded-full">
              <WifiOff className="w-3 h-3" />
              <span>Offline Sync PWA</span>
            </div>
          </div>

          {/* App Header Inside Mockup */}
          <div className="bg-navy-900 text-white p-3 sm:p-4 border-b border-navy-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-electric-400 flex items-center justify-center font-bold text-navy-950 text-xs shadow">
                  MK
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span>{clubName}</span>
                    <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.2 rounded font-normal">
                      PWA
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-300">Tenant-ID: #BI-9402</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setClubName(
                      clubName.includes('ASV')
                        ? 'SV Teutoburg 1928 e.V.'
                        : 'ASV Bielefeld 1934 e.V.'
                    )
                  }
                  className="text-[10px] text-cyan-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-2 py-1 rounded border border-slate-700 transition-colors"
                  title="Tenant umschalten"
                >
                  Wechseln
                </button>
                <div className="relative">
                  <Bell className="w-4 h-4 text-slate-300" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full" />
                </div>
              </div>
            </div>

            {/* Sub-Navigation Tabs */}
            <div className="flex items-center gap-1 mt-3 overflow-x-auto pb-1 no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveTab('ausweis')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                  activeTab === 'ausweis'
                    ? 'bg-cyan-500 text-navy-950 font-semibold shadow'
                    : 'text-slate-300 hover:text-white hover:bg-navy-800'
                }`}
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>QR-Ausweis</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('fangbuch')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                  activeTab === 'fangbuch'
                    ? 'bg-cyan-500 text-navy-950 font-semibold shadow'
                    : 'text-slate-300 hover:text-white hover:bg-navy-800'
                }`}
              >
                <Fish className="w-3.5 h-3.5" />
                <span>Fangbuch / Kladde</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('arbeitsdienst')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                  activeTab === 'arbeitsdienst'
                    ? 'bg-cyan-500 text-navy-950 font-semibold shadow'
                    : 'text-slate-300 hover:text-white hover:bg-navy-800'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Arbeitsdienst</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('cockpit')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                  activeTab === 'cockpit'
                    ? 'bg-cyan-500 text-navy-950 font-semibold shadow'
                    : 'text-slate-300 hover:text-white hover:bg-navy-800'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Admin Cockpit</span>
              </button>
            </div>
          </div>

          {/* Interactive Screen Body */}
          <div className="p-4 sm:p-5 bg-slate-900 min-h-[310px] text-slate-100">
            {/* Screen 1: QR Ausweis */}
            {activeTab === 'ausweis' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="bg-gradient-to-br from-navy-800/90 to-slate-800/90 border border-slate-700/80 rounded-2xl p-4 relative overflow-hidden shadow-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-cyan-400 font-bold">
                        Digitaler Mitgliedsausweis
                      </div>
                      <div className="text-base font-bold text-white mt-0.5">
                        Michael Sommerfeld
                      </div>
                      <div className="text-xs text-slate-300">Mitgliedsnr. #2026-0814</div>
                    </div>
                    <div className="flex items-center gap-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full text-[10px] font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Aktiv 2026</span>
                    </div>
                  </div>

                  <div className="my-4 flex items-center justify-center p-3 bg-white rounded-xl shadow-inner max-w-[140px] mx-auto">
                    {/* Stylized QR Code Graphic */}
                    <div className="grid grid-cols-5 gap-1 w-24 h-24 p-1">
                      <div className="bg-navy-900 col-span-2 row-span-2 rounded-sm" />
                      <div className="bg-navy-900 col-span-1" />
                      <div className="bg-navy-900 col-span-2 row-span-2 rounded-sm" />
                      <div className="bg-navy-900 col-span-1" />
                      <div className="bg-navy-900 col-span-3" />
                      <div className="bg-navy-900 col-span-1" />
                      <div className="bg-cyan-600 col-span-2" />
                      <div className="bg-navy-900 col-span-2 row-span-2 rounded-sm" />
                      <div className="bg-navy-900 col-span-1" />
                      <div className="bg-navy-900 col-span-2 row-span-2 rounded-sm" />
                    </div>
                  </div>

                  <div className="text-center text-[10px] text-slate-400">
                    Kryptografisch signierter Token &bull; Offline verifizierbar vor Ort
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/60">
                    <span className="text-slate-400 block text-[10px]">Gewässerberechtigung</span>
                    <span className="font-semibold text-white">Obersee & Teuto-Süd</span>
                  </div>
                  <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/60">
                    <span className="text-slate-400 block text-[10px]">Bootshaus-Zugang</span>
                    <span className="font-semibold text-cyan-400">Freigeschaltet (NFC/QR)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Screen 2: Fangbuch / Kladde */}
            {activeTab === 'fangbuch' && (
              <div className="space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">
                    Letzte Fangeinträge (Saison 2026)
                  </span>
                  <span className="text-[11px] text-cyan-400 font-medium">+ Neuer Fang</span>
                </div>

                <div className="space-y-2">
                  <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-800/80 flex items-center justify-center text-cyan-300">
                        <Fish className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Hecht (Esox lucius)</div>
                        <div className="text-[11px] text-slate-400">
                          84 cm &bull; 4,8 kg &bull; Sektor A (Stausee)
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded">
                        Gestern, 18:40
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-800/80 flex items-center justify-center text-cyan-300">
                        <Fish className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Spiegelkarpfen</div>
                        <div className="text-[11px] text-slate-400">
                          62 cm &bull; 6,1 kg &bull; Schonzeitprüfung: OK
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded">
                        22. Sep
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-navy-950/60 p-2.5 rounded-lg border border-cyan-900/40 text-[11px] text-slate-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Automatische Gewässerstatistik für den Gewässerwart bei Jahresabschluss.</span>
                </div>
              </div>
            )}

            {/* Screen 3: Arbeitsdienst Tracker */}
            {activeTab === 'arbeitsdienst' && (
              <div className="space-y-3 animate-in fade-in duration-300">
                <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3.5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-400">Pflichtstunden 2026</span>
                    <span className="text-xs font-bold text-cyan-400">10 von 12 Std. geleistet</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-electric-400 h-full rounded-full w-[83%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="bg-slate-800/60 border border-slate-700/80 rounded-lg p-2.5 text-xs flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Uferreinigung Frühjahr</div>
                      <div className="text-[10px] text-slate-400">5 Stunden &bull; Abgezeichnet via Vorarbeiter-PIN</div>
                    </div>
                    <div className="text-emerald-400 font-medium text-[11px] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Bestätigt</span>
                    </div>
                  </div>

                  <div className="bg-slate-800/60 border border-slate-700/80 rounded-lg p-2.5 text-xs flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Steginstandsetzung Steg 2</div>
                      <div className="text-[10px] text-slate-400">5 Stunden &bull; QR-Scan am Vereinsheim</div>
                    </div>
                    <div className="text-emerald-400 font-medium text-[11px] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Bestätigt</span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 text-center pt-1">
                  Keine Zettelwirtschaft mehr: Automatische Abrechnung für den Vorstand per Mausklick.
                </div>
              </div>
            )}

            {/* Screen 4: Admin Cockpit */}
            {activeTab === 'cockpit' && (
              <div className="space-y-3 animate-in fade-in duration-300">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-slate-400">Aktive Mitglieder</span>
                    <div className="text-xl font-black text-white mt-0.5">482</div>
                    <span className="text-[10px] text-emerald-400">+14 in diesem Monat</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-slate-400">Offene Arbeitsstunden</span>
                    <div className="text-xl font-black text-cyan-400 mt-0.5">38 Std.</div>
                    <span className="text-[10px] text-slate-400">92% Quote erfüllt</span>
                  </div>
                </div>

                <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-xs">
                  <div className="font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    <Bell className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Push-Mitteilung an alle Mitglieder senden</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded border border-slate-800 text-[11px] text-slate-400 mb-2">
                    &bdquo;Erinnerung: Nächster Arbeitsdienst am Samstag ab 08:30 Uhr.&ldquo;
                  </div>
                  <button
                    type="button"
                    className="w-full py-1.5 bg-gradient-to-r from-electric-500 to-cyan-500 text-navy-950 font-bold rounded text-[11px] text-center"
                  >
                    1-Klick Vereinsnachricht pushen
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar inside Mockup */}
          <div className="bg-slate-950 px-4 py-2 border-t border-slate-800/80 text-[10px] text-slate-500 flex items-center justify-between">
            <span>Microsoft Azure Cloud &bull; West Europe</span>
            <span className="text-cyan-400">Multi-Tenant Engine v2.4</span>
          </div>
        </div>
      </div>
    </div>
  );
};
