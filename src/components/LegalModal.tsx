import React, { useEffect } from 'react';
import { X, ShieldCheck, Scale } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: 'impressum' | 'datenschutz';
  onClose: () => void;
  onTabChange: (tab: 'impressum' | 'datenschutz') => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onTabChange('impressum')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'impressum'
                  ? 'bg-navy-800 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>Impressum</span>
            </button>
            <button
              type="button"
              onClick={() => onTabChange('datenschutz')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'datenschutz'
                  ? 'bg-navy-800 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Datenschutzerklärung</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto text-slate-700 text-sm leading-relaxed space-y-6">
          {activeTab === 'impressum' ? (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-navy-950">Impressum</h3>

              <div>
                <h4 className="font-bold text-slate-900">Angaben gemäß § 5 TMG</h4>
                <p className="mt-1">
                  <strong>MK Applications</strong>
                  <br />
                  Inhaber: Markus Kaufmann
                  <br />
                  Standort: Bielefeld, Deutschland
                  <br />
                  E-Mail: kontakt@mk-applications.de
                  <br />
                  Internet: https://mk-applications.de
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900">Umsatzsteuer-Hinweis</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerstatus).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h4>
                <p className="mt-1">
                  Markus Kaufmann
                  <br />
                  Bielefeld
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">EU-Streitschlichtung</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-700 underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  .<br />
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>100% datenschutzfreundlich: Keine Cookies &bull; Keine externen Tracker &bull; Lokale Schriftarten</span>
              </div>

              <h3 className="text-xl font-bold text-navy-950">Datenschutzerklärung</h3>

              <div>
                <h4 className="font-bold text-slate-900">1. Datenschutz auf einen Blick</h4>
                <p className="mt-1 text-xs text-slate-600">
                  Der Schutz Ihrer persönlichen Daten ist MK Applications ein wichtiges Anliegen. Diese
                  Website verzichtet bewusst auf Analyse-Tracker (wie Google Analytics), Marketing-Cookies
                  oder externe CDN-Fonts. Es werden daher keine Daten an unbefugte Dritte weitergegeben.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">2. Verantwortliche Stelle</h4>
                <p className="mt-1 text-xs text-slate-600">
                  MK Applications – Inhaber: Markus Kaufmann
                  <br />
                  Bielefeld, Deutschland
                  <br />
                  E-Mail: kontakt@mk-applications.de
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">3. Datenerfassung auf dieser Website</h4>
                <div className="space-y-2 text-xs text-slate-600 mt-1">
                  <p>
                    <strong>Hosting via Azure Static Web Apps:</strong> Diese Website wird in der Cloud-Infrastruktur
                    von Microsoft Azure in einem europäischen Rechenzentrum (Region West Europe) betrieben. Beim
                    Aufruf der Seiten erfasst der Server automatisch technische Verbindungsdaten (Server-Logs
                    wie IP-Adresse, Datum/Uhrzeit, Browserversion), die zur technischen Auslieferung und
                    Gefahrenabwehr zwingend erforderlich sind (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                  <p>
                    <strong>Kontaktformular:</strong> Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                    werden Ihre Angaben (Name, E-Mail-Adresse, Vorhabensart, Nachricht) zwecks Bearbeitung der
                    Anfrage und für den Fall von Anschlussfragen bei uns gespeichert (Art. 6 Abs. 1 lit. b DSGVO).
                    Diese Daten geben wir niemals ohne Ihre ausdrückliche Einwilligung weiter.
                  </p>
                  <p>
                    <strong>Keine Cookies:</strong> Diese Website verwendet ausschließlich technisch notwendige,
                    zustandslose Übertragungen und setzt keine Tracking- oder Marketing-Cookies. Ein Cookie-Banner
                    ist daher gesetzlich nicht erforderlich.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">4. Ihre Rechte als betroffene Person</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
                  personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung
                  sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu können Sie
                  sich jederzeit unter kontakt@mk-applications.de an uns wenden.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-navy-800 hover:bg-navy-900 rounded-xl transition-colors"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
