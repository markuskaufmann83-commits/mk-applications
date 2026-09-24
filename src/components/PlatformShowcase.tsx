import React, { useState } from 'react';
import {
  FileCheck2,
  QrCode,
  Clock,
  Gauge,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Palette,
  CheckCircle2,
  Building2,
  FileSpreadsheet,
} from 'lucide-react';
import { TenantTheme } from '../types';

export const PlatformShowcase: React.FC = () => {
  const tenants: TenantTheme[] = [
    {
      id: 'industry',
      name: 'Kaufmann Field Service & Tech',
      category: 'Industrie & Technischer Service',
      primaryColor: '#0f766e',
      badgeBg: 'bg-teal-700',
      badgeText: 'text-teal-100',
      accentColor: '#14b8a6',
      tagline: 'Anlagenwartung, mobile Einsatzberichte & QR-Asset-Tracking',
      modules: ['Audit- & Prüfprotokoll', 'Service-Zeiterfassung', 'Digitaler Technikerausweis'],
    },
    {
      id: 'consulting',
      name: 'Nordic Projekt & Consulting GmbH',
      category: 'B2B Dienstleister & Agenturen',
      primaryColor: '#0369a1',
      badgeBg: 'bg-sky-800',
      badgeText: 'text-sky-100',
      accentColor: '#38bdf8',
      tagline: 'Kundenportal, Leistungsnachweise & Projekt-Controlling',
      modules: ['Leistungsnachweise', 'Projekt-Zeiterfassung', 'Freigabe-Cockpit'],
    },
    {
      id: 'verband',
      name: 'Fachverband & Kammer Westfalen',
      category: 'Berufsverband & Organisation',
      primaryColor: '#1e293b',
      badgeBg: 'bg-slate-800',
      badgeText: 'text-slate-100',
      accentColor: '#0ea5e9',
      tagline: 'Mitgliederverwaltung, Weiterbildungsnachweise & Berechtigungen',
      modules: ['Zertifikatsnachweise', 'Mitgliederausweis', 'Veranstaltungs-Check-in'],
    },
  ];

  const [selectedTenant, setSelectedTenant] = useState<TenantTheme>(tenants[0]);
  const [activeModule, setActiveModule] = useState<'protokoll' | 'stunden' | 'ausweis' | 'cockpit'>('protokoll');

  // Interactive state for testing checklist inside the showcase
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    item1: true,
    item2: true,
    item3: false,
  });

  const toggleItem = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="plattformen" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      {/* Decorative background grid with radial fade */}
      <div className="absolute inset-0 bg-grid-faded pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Enterprise Multi-Tenant Architektur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Modulare Plattform- & Portallösungen.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Mandantenfähige Web-Portale, Prüf-Workflows und digitale Berechtigungssysteme –
            konfigurierbar für Unternehmen, Betriebe und moderne Organisationen.
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
                  Wählen Sie ein Mandanten-Profil zur Echtzeit-Vorschau:
                </span>
              </div>
            </div>

            {/* Tenant Preset Buttons */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {tenants.map((tenant) => {
                const isActive = selectedTenant.id === tenant.id;
                return (
                  <button
                    key={tenant.id}
                    type="button"
                    onClick={() => setSelectedTenant(tenant)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs ${
                      isActive
                        ? `${tenant.badgeBg} text-white shadow-md scale-[1.02]`
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-white/60"
                      style={{ backgroundColor: tenant.accentColor }}
                    />
                    <span>{tenant.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Interactive App Preview Frame */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-300">
          {/* Top Tenant Header Bar */}
          <div
            className="p-5 sm:p-7 text-white transition-colors duration-500"
            style={{ backgroundColor: selectedTenant.primaryColor }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm mb-2">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{selectedTenant.category}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {selectedTenant.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1">{selectedTenant.tagline}</p>
              </div>

              {/* Module Highlights */}
              <div className="flex flex-wrap gap-2">
                {selectedTenant.modules.map((mod, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/15 text-white px-3 py-1 rounded-lg backdrop-blur-sm border border-white/20 font-medium"
                  >
                    &bull; {mod}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation Tabs Inside Preview */}
            <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveModule('protokoll')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeModule === 'protokoll'
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Audit- & Prüfprotokoll</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveModule('stunden')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeModule === 'stunden'
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Leistungs- & Zeiterfassung</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveModule('ausweis')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeModule === 'ausweis'
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>Digitaler QR-Ausweis</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveModule('cockpit')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeModule === 'cockpit'
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Gauge className="w-4 h-4" />
                <span>Mandanten-Cockpit</span>
              </button>
            </div>
          </div>

          {/* Module Content Views */}
          <div className="p-6 sm:p-10 bg-slate-50 min-h-[420px]">
            {/* View 1: Audit- & Prüfprotokoll */}
            {activeModule === 'protokoll' && (
              <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block font-mono">
                      Prüfbericht #PR-2026-0924
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                      Qualitäts- & Sicherheitsprüfung Station B
                    </h4>
                    <span className="text-xs text-slate-500">
                      Zertifizierter Prüfablauf nach ISO / Betriebssicherheitsverordnung
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      Status: In Bearbeitung
                    </span>
                  </div>
                </div>

                {/* Interactive Checklist */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Prüfpunkte (Interaktiv anklicken zum Testen):
                  </div>

                  <div
                    onClick={() => toggleItem('item1')}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-cyan-400 bg-slate-50 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                          checkedItems.item1
                            ? 'bg-emerald-600 text-white'
                            : 'border-2 border-slate-300 bg-white'
                        }`}
                      >
                        {checkedItems.item1 && <CheckCircle className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          1. Sicht- & Funktionsprüfung der Sicherheitssensoren
                        </div>
                        <div className="text-xs text-slate-500">Toleranzbereich eingehalten (&plusmn;0,02 mm)</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-500">
                      {checkedItems.item1 ? 'Erfüllt' : 'Offen'}
                    </span>
                  </div>

                  <div
                    onClick={() => toggleItem('item2')}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-cyan-400 bg-slate-50 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                          checkedItems.item2
                            ? 'bg-emerald-600 text-white'
                            : 'border-2 border-slate-300 bg-white'
                        }`}
                      >
                        {checkedItems.item2 && <CheckCircle className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          2. Kalibrierungsabgleich & Firmware-Integritätsprüfung
                        </div>
                        <div className="text-xs text-slate-500">Prüfsumme SHA-256 verifiziert</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-500">
                      {checkedItems.item2 ? 'Erfüllt' : 'Offen'}
                    </span>
                  </div>

                  <div
                    onClick={() => toggleItem('item3')}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-cyan-400 bg-slate-50 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                          checkedItems.item3
                            ? 'bg-emerald-600 text-white'
                            : 'border-2 border-slate-300 bg-white'
                        }`}
                      >
                        {checkedItems.item3 && <CheckCircle className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          3. Not-Aus-Abschaltung & Reaktionszeitmessung
                        </div>
                        <div className="text-xs text-slate-500">Klicken Sie hier, um diesen Prüfschritt freizugeben</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-500">
                      {checkedItems.item3 ? 'Erfüllt' : 'Offen'}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>
                    <strong>Revisionssicher:</strong> Jeder Prüfschritt wird mit Zeitstempel,
                    Bediener-ID und digitaler Signatur unveränderbar im Audit-Log archiviert.
                  </span>
                </div>
              </div>
            )}

            {/* View 2: Leistungs- & Zeiterfassung */}
            {activeModule === 'stunden' && (
              <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-slate-700">
                      Projektbudget & Leistungsnachweis Q3
                    </span>
                    <span className="text-sm font-bold text-cyan-700">
                      42 von 50 Stunden erfasst (84%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: '84%',
                        backgroundColor: selectedTenant.accentColor,
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        Vor-Ort Inbetriebnahme & Abnahmeprüfung
                      </div>
                      <div className="text-xs text-slate-500">
                        6 Stunden &bull; Standort Werk 2 &bull; Freigabe durch Projektleiter M. Weber
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Freigegeben</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        Architektur-Review & Performance-Audit
                      </div>
                      <div className="text-xs text-slate-500">
                        4 Stunden &bull; Remote &bull; Automatische Zeiterfassung via API-Hook
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Freigegeben</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
                  <FileSpreadsheet className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  <span>
                    <strong>Nahtlose Buchhaltungsintegration:</strong> Monatsabschlüsse und
                    Stundennachweise lassen sich mit einem Klick für DATEV, SAP oder CSV exportieren.
                  </span>
                </div>
              </div>
            )}

            {/* View 3: Digitaler QR-Ausweis */}
            {activeModule === 'ausweis' && (
              <div className="max-w-md mx-auto space-y-4 animate-in fade-in duration-300">
                <div
                  className="rounded-2xl p-6 text-white shadow-xl relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${selectedTenant.primaryColor} 0%, #0f172a 100%)`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-cyan-300 font-bold block">
                        Digitaler Unternehmens- & Zutrittsausweis
                      </span>
                      <div className="text-lg font-bold text-white mt-1">Michael Sommerfeld</div>
                      <div className="text-xs text-slate-300 font-mono">ID: #EMP-2026-0814</div>
                    </div>
                    <span className="text-[10px] bg-white/20 text-white px-2.5 py-1 rounded-full font-bold backdrop-blur-sm">
                      Level 3 Aktiv
                    </span>
                  </div>

                  <div className="my-5 flex items-center justify-center p-3 bg-white rounded-xl shadow-inner max-w-[140px] mx-auto border border-slate-200">
                    <div className="grid grid-cols-5 gap-1 w-28 h-28 p-1">
                      <div className="bg-slate-950 col-span-2 row-span-2 rounded-xs" />
                      <div className="bg-slate-950 col-span-1" />
                      <div className="bg-slate-950 col-span-2 row-span-2 rounded-xs" />
                      <div className="bg-slate-950 col-span-1" />
                      <div className="bg-slate-950 col-span-3" />
                      <div className="bg-slate-950 col-span-1" />
                      <div
                        className="col-span-2"
                        style={{ backgroundColor: selectedTenant.accentColor }}
                      />
                      <div className="bg-slate-950 col-span-2 row-span-2 rounded-xs" />
                      <div className="bg-slate-950 col-span-1" />
                      <div className="bg-slate-950 col-span-2 row-span-2 rounded-xs" />
                    </div>
                  </div>

                  <div className="text-center text-[10px] text-slate-300 font-mono">
                    Token: 8f4a-9c2b-e104 &bull; Offline kryptografisch verifiziert
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-slate-500 block text-[10px] font-medium">Berechtigung</span>
                    <span className="font-bold text-slate-900 text-xs">Produktion & Werk 2</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-slate-500 block text-[10px] font-medium">Authentifizierung</span>
                    <span className="font-bold text-cyan-700 text-xs">NFC, QR & FIDO2</span>
                  </div>
                </div>
              </div>
            )}

            {/* View 4: Mandanten-Cockpit */}
            {activeModule === 'cockpit' && (
              <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-xs font-medium text-slate-500 block">Aktive Benutzer</span>
                    <div className="text-2xl font-bold text-slate-900 mt-1">1.480</div>
                    <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">
                      Tenant-isoliert & DSGVO-konform
                    </span>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-xs font-medium text-slate-500 block">Offene Freigaben</span>
                    <div className="text-2xl font-bold text-cyan-700 mt-1">3 Vorgänge</div>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      &Oslash; Durchlaufzeit: 14 Min.
                    </span>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-xs font-medium text-slate-500 block">Systemverfügbarkeit</span>
                    <div className="text-2xl font-bold text-slate-900 mt-1">99,98%</div>
                    <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">
                      SLA-Überwachung aktiv
                    </span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-bold text-slate-900">
                      Push-Mitteilung an autorisierte Mitarbeiter
                    </div>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-mono">
                      Target: Alle Stationen
                    </span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 font-mono mb-4">
                    &bdquo;Hinweis: Geplante Systemwartung an Station 4 heute ab 17:00 Uhr.&ldquo;
                  </div>
                  <button
                    type="button"
                    className="w-full py-2.5 text-white font-bold rounded-xl text-xs text-center shadow-md transition-opacity hover:opacity-95"
                    style={{ backgroundColor: selectedTenant.primaryColor }}
                  >
                    Mitteilung per 1-Klick ausrollen
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
