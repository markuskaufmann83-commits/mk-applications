# Azure Static Web Apps - Domain- & DNS-Konfiguration
**Projekt:** MK Applications (Markus Kaufmann, Bielefeld)  
**Domains:** `mk-applications.de` und `www.mk-applications.de`  
**Hosting-Plan:** Azure Static Web Apps (Free Tier) – 0 € / Monat  
**SSL-Zertifikat:** Kostenlos & vollautomatisch durch Microsoft Azure gemanagt (Auto-Renewal)

---

## 1. Domain-Setup in Azure Portal
1. Öffne die Azure Static Web App Ressource im [Azure Portal](https://portal.azure.com).
2. Navigiere im linken Menü zu **"Custom domains"** (Benutzerdefinierte Domänen).
3. Klicke auf **"+ Add"** (Hinzufügen) -> **"Custom domain on other DNS"**.

---

## 2. DNS-Einträge bei deinem Domain-Registrar / DNS-Provider (z.B. Strato, IONOS, Netcup, Cloudflare)

### A. Subdomain: `www.mk-applications.de` (Empfohlen als primäre Adresse)
| Typ | Host / Name | Wert / Ziel | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `<deine-app-id>.azurestaticapps.net` | 3600 |

*Sobald der CNAME eingetragen ist, verifiziert Azure den Eintrag innerhalb von 1-5 Minuten und stellt das kostenlose SSL-Zertifikat automatisch aus.*

---

### B. Apex-Domain: `mk-applications.de` (Root Domain)
Für die Apex-Domain (ohne `www`) bietet Azure zwei standardisierte Wege:

#### Option 1: TXT-Validierung & ALIAS/ANAME (Standard)
1. Klicke in Azure auf **"+ Add"** und gib `mk-applications.de` ein.
2. Wähle **"TXT record"** zur Validierung.
3. Azure generiert einen individuellen Validierungs-Token (z.B. `_dnsauth.mk-applications.de`).
4. Trage folgende DNS-Einträge ein:

| Typ | Host / Name | Wert / Ziel | TTL |
| :--- | :--- | :--- | :--- |
| **TXT** | `_dnsauth` (oder `@`) | `<Azure-TXT-Validierungstoken>` | 300 |
| **ALIAS / ANAME** *(falls unterstützt)* | `@` (Root) | `<deine-app-id>.azurestaticapps.net` | 3600 |

#### Option 2: WWW-Redirect (Best Practice für deutsche Hoster wie Hetzner, IONOS, Strato)
Unterstützt dein DNS-Provider keine ALIAS/ANAME-Einträge auf der Apex-Root:
1. Leite im DNS-Menü deines Registrars die Domain `mk-applications.de` per **301 HTTP-Weiterleitung** permanent auf `https://www.mk-applications.de` weiter.
2. In der `staticwebapp.config.json` ist bereits der standardmäßige Host-Header-Schutz konfiguriert.

---

## 3. GitHub Actions Deployment Token hinterlegen
1. Im Azure Portal unter deiner Static Web App auf **"Manage deployment token"** klicken.
2. Den Token kopieren.
3. Im GitHub Repository unter **Settings -> Secrets and variables -> Actions** ein neues Repository Secret anlegen:
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Secret: `<dein-kopierter-token>`
4. Bei jedem Push auf `main` oder `master` baut GitHub Actions die Website via Vite und deployt sie vollautomatisch auf Azure!
