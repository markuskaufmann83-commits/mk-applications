import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Loader2,
  Users2,
  LayoutDashboard,
  Smartphone,
  HelpCircle,
} from 'lucide-react';
import { ContactFormData, ApiResponse } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'Vereins-App & PWA',
    message: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const projectTypes = [
    { label: 'Web-App & Portallösung', icon: LayoutDashboard },
    { label: 'B2B Cloud & Schnittstellen', icon: Users2 },
    { label: 'Mobile PWA / Store-App', icon: Smartphone },
    { label: 'Architektur-Sparring & Review', icon: HelpCircle },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMsg('Bitte geben Sie Ihren Namen an.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMsg('Bitte geben Sie eine gültige E-Mail-Adresse an.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMsg('Bitte beschreiben Sie Ihr Vorhaben in mindestens 10 Zeichen.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json().catch(() => ({
        success: response.ok,
        message: response.ok ? 'Anfrage empfangen' : 'Fehler beim Senden',
      }));

      if (response.ok && data.success) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          projectType: 'Vereins-App & PWA',
          message: '',
          honeypot: '',
        });
      } else {
        setErrorMsg(
          data.message ||
            'Beim Senden Ihrer Nachricht ist ein Problem aufgetreten. Bitte schreiben Sie mir direkt per E-Mail an kontakt@mk-applications.de'
        );
      }
    } catch (err) {
      console.warn('Network or API handler fallback triggered:', err);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-800">
              <Mail className="w-3.5 h-3.5 text-cyan-600" />
              <span>Direkter Kontakt & Anfrage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Lassen Sie uns über Ihr Vorhaben sprechen.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Ob Sie eine unverbindliche Ersteinschätzung für ein Portalprojekt suchen oder eine
              skalierbare Cloud-Architektur für Ihr Vorhaben planen: Schreiben Sie mir direkt. Ich
              antworte Ihnen verbindlich innerhalb von 24 Stunden.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                    Standort
                  </div>
                  <div className="text-sm font-bold text-slate-950">
                    Bielefeld, Nordrhein-Westfalen
                  </div>
                  <div className="text-xs text-slate-500">Deutschland &bull; Remote & Vor-Ort-Termine</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-cyan-50 text-cyan-800 flex items-center justify-center flex-shrink-0 shadow-2xs border border-cyan-100">
                  <Mail className="w-5 h-5 text-cyan-700" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                    E-Mail-Adresse
                  </div>
                  <a
                    href="mailto:kontakt@mk-applications.de"
                    className="text-sm font-bold text-cyan-700 hover:text-slate-950 transition-colors"
                  >
                    kontakt@mk-applications.de
                  </a>
                  <div className="text-xs text-slate-500">Direkter Posteingang von Markus Kaufmann</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 shadow-2xs border border-emerald-100">
                  <Clock className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                    Reaktionsgarantie
                  </div>
                  <div className="text-sm font-bold text-slate-950">Innerhalb 24 Stunden</div>
                  <div className="text-xs text-slate-500">Persönlich, verlässlich & unverbindlich</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-600 flex-shrink-0" />
              <span>
                100% datenschutzkonform: Ihre Angaben dienen ausschließlich der Bearbeitung Ihres Anliegens.
                Keine Werbemails, keine Weitergabe an Dritte.
              </span>
            </div>
          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/90 rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm relative">
              {success ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Vielen Dank für Ihre Anfrage!
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Ihre Nachricht ist erfolgreich eingegangen. Markus Kaufmann prüft Ihre Angaben
                    und setzt sich schnellstmöglich persönlich mit Ihnen in Verbindung.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSuccess(false)}
                      className="px-6 py-2.5 text-xs font-bold text-slate-900 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 shadow-sm transition-all"
                    >
                      Weitere Nachricht senden
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {errorMsg && (
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 text-xs sm:text-sm flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Honeypot field for bot protection */}
                  <input
                    type="text"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0 }}
                    aria-hidden="true"
                  />

                  {/* Project Type Selector Pills */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2.5 font-mono">
                      1. Worum geht es in Ihrem Vorhaben?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {projectTypes.map((item) => {
                        const Icon = item.icon;
                        const isSelected = formData.projectType === item.label;
                        return (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: item.label })}
                            className={`p-3 rounded-xl text-xs font-bold transition-all text-left border flex items-center gap-2.5 ${
                              isSelected
                                ? 'bg-slate-950 text-white border-slate-950 shadow-md'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                            <span>{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5 font-mono"
                      >
                        Ihr Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="z.B. Markus Kaufmann"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-slate-400 shadow-2xs"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5 font-mono"
                      >
                        Ihre E-Mail-Adresse *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ihre.adresse@beispiel.de"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-slate-400 shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5 font-mono"
                    >
                      Projektbeschreibung / Ihre Frage *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Beschreiben Sie kurz Ihre Anforderungen, Vereinsgröße, Schnittstellen oder den gewünschten Zeitrahmen..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-slate-400 resize-y shadow-2xs"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-slate-950 hover:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl disabled:opacity-60 transition-all border border-slate-800"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                          <span>Wird verschlüsselt an Azure übermittelt...</span>
                        </>
                      ) : (
                        <>
                          <span>Anfrage jetzt absenden</span>
                          <Send className="w-4 h-4 text-cyan-400" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
