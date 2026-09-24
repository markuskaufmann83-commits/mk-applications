# MK Applications – Offizielle Unternehmenswebsite
> **Maßgeschneiderte digitale Lösungen aus Bielefeld**  
> Inhaber: Markus Kaufmann &bull; Standort: Bielefeld, Deutschland  
> Hosting: **Microsoft Azure Static Web Apps (Free Tier – 0 € / Monat)**

---

## 🌟 Über das Projekt
Produktionsreife, responsive One-Page-Unternehmenspräsenz für **MK Applications** mit drei Kernschwerpunkten:
1. **Nischenvereine & Verbände:** Modulare PWAs, Mitglieder- & Arbeitsdienstverwaltung, Fangbuch, QR-Ausweise.
2. **B2B & Mittelstand:** Skalierbare Web-Apps, Cloud-Backends auf Azure, Prozessdigitalisierung.
3. **Store-Apps:** Plattformübergreifende Apps für iOS & Android.

---

## 🚀 Hosting- & Cloud-Architektur (Azure SWA Free Tier)
- **Kosten:** Dauerhaft 0,00 € / Monat im Microsoft Azure Free Tier Kontingent.
- **Rendering:** Static Site Generation (SSG) via Vite + React + TypeScript für minimale Ladezeiten und 100/100 Lighthouse-Performance.
- **Serverless API:** Integrierte Azure Function unter `/api/contact` zur Validierung und Entgegennahme von Kontaktanfragen.
- **Sicherheit & Routing:** Vorkonfigurierte `staticwebapp.config.json` mit strikter Content Security Policy (CSP), HSTS, XSS-Protection und Single-Page Navigation-Fallbacks.
- **DSGVO & Datenschutz:** 100% datenschutzkonform ohne Cookie-Banner (keine externen Tracking-Dienste, rein lokale Systemschriften).
- **Custom Domain & SSL:** Voll vorbereitet für `mk-applications.de` und `www.mk-applications.de` mit kostenlosem, automatischem Azure SSL-Zertifikat.

---

## 🛠️ Tech-Stack
- **Frontend-Framework:** React 18 + TypeScript + Vite 6
- **Styling:** Tailwind CSS (Navy `#0f3460`, Cyan `#0ea5e9`, Teal `#14b8a6`)
- **Icons:** Lucide-React
- **API & Backend:** Azure Functions v4 (Node.js / TypeScript)
- **CI/CD:** GitHub Actions (`.github/workflows/azure-static-web-apps.yml`)

---

## 💻 Lokale Entwicklung & Befehle

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Lokalen Entwicklungsserver starten
npm run dev
# Browser öffnen: http://localhost:3000

# 3. Produktions-Build erstellen
npm run build
# Erstellt optimiertes Bundle in /dist

# 4. Vorschau des Produktions-Builds
npm run preview
```

---

## 🌐 Deployment auf Azure Static Web Apps

1. **Code auf GitHub pushen:**
   ```bash
   git remote add origin https://github.com/<dein-user>/mk-applications.git
   git push -u origin main
   ```

2. **Azure Deployment Token hinterlegen:**
   - Erstelle im Azure Portal eine kostenlose Ressource **"Static Web Apps"** (Free Tier).
   - Wähle Region (z.B. *West Europe* oder *Germany West Central*).
   - Kopiere den **Deployment Token** aus der Übersicht.
   - Füge ihn im GitHub-Repository unter **Settings ➔ Secrets and variables ➔ Actions** als Secret mit dem Namen `AZURE_STATIC_WEB_APPS_API_TOKEN` ein.

3. **Automatisches CI/CD:**
   - Der hinterlegte Workflow `.github/workflows/azure-static-web-apps.yml` baut die Anwendung bei jedem Git-Push automatisch und deployt Frontend (`dist`) sowie API (`api`).

---

## 📑 Custom Domain (`mk-applications.de`)
Detaillierte Schritt-für-Schritt-Anleitung für CNAME- und TXT-Einträge bei Ihrem Registrar:
👉 Siehe [`docs/AZURE_DNS_SETUP.md`](docs/AZURE_DNS_SETUP.md)

---

## ⚖️ Rechtliches
- **Inhaber:** Markus Kaufmann, Bielefeld
- **Kleinunternehmerregelung:** Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
