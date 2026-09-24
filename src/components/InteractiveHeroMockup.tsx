import React, { useState } from 'react';
import {
  Smartphone,
  Monitor,
  QrCode,
  Shield,
  CheckCircle2,
  WifiOff,
  Bell,
  Sparkles,
  Layers,
  Activity,
  FileCheck2,
  TrendingUp,
  Server,
  KeyRound,
  Building2,
} from 'lucide-react';

interface MockupTenant {
  id: string;
  name: string;
  type: string;
  tenantCode: string;
  accent: string;
}

export const InteractiveHeroMockup: React.FC = () => {
  const tenants: MockupTenant[] = [
    {
      id: 'industry',
      name: 'Kaufmann Industrial Solutions',
      type: 'Industrie & Field Service',
      tenantCode: 'TENANT-IND-9402',
      accent: '#0ea5e9',
    },
    {
      id: 'nordic',
      name: 'Nordic Logistik & Tech GmbH',
      type: 'B2B Enterprise Portal',
      tenantCode: 'TENANT-LOG-3180',
      accent: '#14b8a6',
    },
    {
      id: 'verband',
      name: 'Hanseatischer Fachverband',
      type: 'Organisation & Verband',
      tenantCode: 'TENANT-ORG-1044',
      accent: '#38bdf8',
    },
  ];

  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedTenantIndex, setSelectedTenantIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'cockpit' | 'workflows' | 'ausweis' | 'identity'>('cockpit');

  const currentTenant = tenants[selectedTenantIndex];

  const handleNextTenant = () => {
    setSelectedTenantIndex((prev) => (prev + 1) % tenants.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-12 -left-12 w-80 h-80 bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-electric-500/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Control bar above mockup */}
      <div className="flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="text-[11px] font-bold text-slate-700 uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Enterprise Multi-Tenant PWA
          </span>
        </div>

        {/* Device toggle */}
        <div className="flex items-center gap-1 bg-white/90 p-1 rounded-xl border border-slate-200 shadow-sm backdrop-blur-md">
          <button
            type="button"
            onClick={() => setDeviceMode('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              deviceMode === 'desktop'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title="Desktop Ansicht"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              deviceMode === 'mobile'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
        {/* Mockup Frame with layered border & shadow */}
        <div className="bg-slate-950 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.45)] overflow-hidden transition-all duration-300">
          {/* Top Window Bar (Browser or Phone Notch) */}
          <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between select-none">
            {deviceMode === 'desktop' ? (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                <div className="ml-3 text-[11px] font-mono text-slate-300 bg-slate-950/80 px-3 py-1 rounded-md border border-slate-800 flex items-center gap-2">
                  <Shield className="w-3 h-3 text-cyan-400" />
                  <span>https://portal.mk-applications.de/{activeTab}</span>
                </div>
              </div>
            ) : (
              <div className="w-full flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span>09:41</span>
                <div className="w-20 h-4 bg-slate-950 rounded-full border border-slate-800" />
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px]">5G</span>
                  <div className="w-4 h-2.5 border border-slate-400 rounded-sm p-0.5">
                    <div className="w-full h-full bg-cyan-400 rounded-2xs" />
                  </div>
                </div>
              </div>
            )}

            {/* Offline-Ready Badge */}
            <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-semibold text-cyan-300 bg-cyan-950/70 border border-cyan-800/80 px-2.5 py-0.5 rounded-full shadow-inner">
              <WifiOff className="w-3 h-3 text-cyan-400" />
              <span>Offline-First Engine</span>
            </div>
          </div>

          {/* App Header Inside Mockup */}
          <div className="bg-gradient-to-r from-slate-900 via-navy-950 to-slate-900 text-white p-3.5 sm:p-4 border-b border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-electric-400 flex items-center justify-center font-bold text-slate-950 text-xs shadow-md">
                  MK
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>{currentTenant.name}</span>
                    <span className="text-[9px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-500/30 font-mono">
                      v2.5
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {currentTenant.tenantCode} &bull; {currentTenant.type}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleNextTenant}
                  className="text-[10px] font-bold text-cyan-300 hover:text-white bg-slate-800/90 hover:bg-slate-700 px-2.5 py-1 rounded-md border border-slate-700 transition-colors shadow-sm flex items-center gap-1"
                  title="Mandant wechseln"
                >
                  <Building2 className="w-3 h-3" />
                  <span>Mandant wechseln</span>
                </button>
                <div className="relative p-1">
                  <Bell className="w-4 h-4 text-slate-300" />
                  <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-cyan-400 rounded-full" />
                </div>
              </div>
            </div>

            {/* Sub-Navigation Tabs */}
            <div className="flex items-center gap-1.5 mt-3.5 overflow-x-auto pb-1 no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveTab('cockpit')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === 'cockpit'
                    ? 'bg-gradient-to-r from-cyan-500 to-electric-400 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Operations Cockpit</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('workflows')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === 'workflows'
                    ? 'bg-gradient-to-r from-cyan-500 to-electric-400 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Workflows & Prüfkladde</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('ausweis')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === 'ausweis'
                    ? 'bg-gradient-to-r from-cyan-500 to-electric-400 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>Digitaler ID-Token</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('identity')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === 'identity'
                    ? 'bg-gradient-to-r from-cyan-500 to-electric-400 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>Rollen & RBAC</span>
              </button>
            </div>
          </div>

          {/* Interactive Screen Body */}
          <div className="p-4 sm:p-5 bg-slate-950 min-h-[320px] text-slate-100">
            {/* Screen 1: Operations Cockpit */}
            {activeTab === 'cockpit' && (
              <div className="space-y-3.5 animate-in fade-in duration-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-medium block">Service Uptime</span>
                    <div className="text-xl font-bold text-white mt-0.5 flex items-center gap-1.5">
                      <span>99,98%</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono mt-0.5 block">SLA Übererfüllt</span>
                  </div>

                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-medium block">API Latenz Edge</span>
                    <div className="text-xl font-bold text-cyan-400 mt-0.5 font-mono">24 ms</div>
                    <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">Azure West Europe</span>
                  </div>

                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-slate-400 font-medium block">Aktive Benutzer</span>
                    <div className="text-xl font-bold text-white mt-0.5">1.420</div>
                    <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold mt-0.5">
                      <TrendingUp className="w-3 h-3" />
                      <span>+18% im Monatsverlauf</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-xs space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-cyan-400" />
                      Cloud Services Status
                    </span>
                    <span className="text-emerald-400 font-mono text-[10px]">All Systems Operational</span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-[11px] bg-slate-950/80 p-2 rounded-lg border border-slate-800/80">
                      <span className="text-slate-300 font-mono">Core API Gateway (Serverless)</span>
                      <span className="text-emerald-400 font-mono text-[10px]">12ms &bull; 100%</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] bg-slate-950/80 p-2 rounded-lg border border-slate-800/80">
                      <span className="text-slate-300 font-mono">PostgreSQL Dedicated Cluster</span>
                      <span className="text-emerald-400 font-mono text-[10px]">ACID Verified &bull; Encrypted</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] bg-slate-950/80 p-2 rounded-lg border border-slate-800/80">
                      <span className="text-slate-300 font-mono">RBAC Token Rotation Service</span>
                      <span className="text-cyan-400 font-mono text-[10px]">Zero-Trust Active</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Screen 2: Workflows & Prüfkladde */}
            {activeTab === 'workflows' && (
              <div className="space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-300 flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-cyan-400" />
                    Aktuelle Prüfprotokolle & Freigaben
                  </span>
                  <span className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 cursor-pointer">
                    + Neuer Datensatz
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl p-3 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Wartungs- & Prüfprotokoll #402</div>
                        <div className="text-[11px] text-slate-400">
                          Instandhaltung Station 4 &bull; Signiert via PIN: M. Weber
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-mono">
                        Freigegeben
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl p-3 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Compliance & Sicherheits-Audit</div>
                        <div className="text-[11px] text-slate-400">
                          ISO 27001 Kriterien &bull; Automatische PDF-Archivierung
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded font-mono">
                        Rechtskonform
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-[11px] text-slate-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Vollständige Revisionssicherheit mit lückenlosem Audit-Trail und Zeitstempel.</span>
                </div>
              </div>
            )}

            {/* Screen 3: Digitaler ID-Token / Ausweis */}
            {activeTab === 'ausweis' && (
              <div className="space-y-3.5 animate-in fade-in duration-300">
                <div className="bg-gradient-to-br from-slate-900 via-navy-900 to-slate-900 border border-slate-800 rounded-2xl p-4 relative overflow-hidden shadow-xl">
                  {/* Ambient sheen */}
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold block">
                        Digitaler Unternehmens- & Zutrittstoken
                      </span>
                      <div className="text-base font-bold text-white mt-0.5">
                        Michael Sommerfeld
                      </div>
                      <div className="text-xs text-slate-400 font-mono">ID: #EMP-2026-0814 &bull; Level 3</div>
                    </div>
                    <div className="flex items-center gap-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Aktiv &bull; 2026</span>
                    </div>
                  </div>

                  <div className="my-3 flex items-center justify-center p-2.5 bg-white rounded-xl shadow-inner max-w-[130px] mx-auto border border-slate-200">
                    {/* High-contrast QR Grid */}
                    <div className="grid grid-cols-5 gap-1 w-24 h-24 p-1">
                      <div className="bg-slate-950 col-span-2 row-span-2 rounded-xs" />
                      <div className="bg-slate-950 col-span-1" />
                      <div className="bg-slate-950 col-span-2 row-span-2 rounded-xs" />
                      <div className="bg-slate-950 col-span-1" />
                      <div className="bg-slate-950 col-span-3" />
                      <div className="bg-slate-950 col-span-1" />
                      <div className="bg-cyan-600 col-span-2" />
                      <div className="bg-slate-950 col-span-2 row-span-2 rounded-xs" />
                      <div className="bg-slate-950 col-span-1" />
                      <div className="bg-slate-950 col-span-2 row-span-2 rounded-xs" />
                    </div>
                  </div>

                  <div className="text-center text-[10px] text-slate-400 font-mono">
                    Token: 8f4a-9c2b-e104 &bull; Offline kryptografisch verifiziert
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px] font-medium">Berechtigung</span>
                    <span className="font-bold text-white text-xs">Produktion & Labor 2</span>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px] font-medium">Authentifizierung</span>
                    <span className="font-bold text-cyan-400 text-xs">NFC, QR & FIDO2</span>
                  </div>
                </div>
              </div>
            )}

            {/* Screen 4: Rollen & RBAC */}
            {activeTab === 'identity' && (
              <div className="space-y-3 animate-in fade-in duration-300">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-medium">Mandant</span>
                    <div className="text-sm font-bold text-white mt-0.5">{currentTenant.name}</div>
                    <span className="text-[10px] text-cyan-400 font-mono mt-0.5 block">Isolierter Tenant-Namespace</span>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-medium">Rechte-Architektur</span>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">Granulares RBAC</div>
                    <span className="text-[10px] text-slate-400">Admin, Auditor, Operator</span>
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-xs space-y-2">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      Sicherheits- & Governance-Richtlinien
                    </span>
                    <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                      Zero-Trust
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>End-to-End verschlüsselte Datenübertragung (TLS 1.3 / HSTS)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Single-Sign-On (SSO / Azure Active Directory / OAuth2)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Lückenloses Audit-Logging ohne Third-Party-Tracker</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar inside Mockup */}
          <div className="bg-slate-950 px-4 py-2.5 border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between font-mono">
            <span>Microsoft Azure &bull; Frankfurt / West Europe</span>
            <span className="text-cyan-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Multi-Tenant Architecture Live
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
