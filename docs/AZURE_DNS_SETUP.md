# Azure Static Web Apps - Live DNS-Konfiguration
**Projekt:** MK Applications (Markus Kaufmann, Bielefeld)  
**Azure-Instanz:** `swa-mk-applications` in Ressourcengruppe `rg-mk-applications` (West Europe)  
**Azure Default URL:** [https://calm-coast-08438a203.5.azurestaticapps.net](https://calm-coast-08438a203.5.azurestaticapps.net)  
**GitHub Repository:** [https://github.com/markuskaufmann83-commits/mk-applications](https://github.com/markuskaufmann83-commits/mk-applications)  
**Hosting-Plan:** Azure Static Web Apps (Free Tier – 0 € / Monat dauerhaft)  
**SSL:** Automatisch durch Microsoft Azure gemanagt (kostenloses Zertifikat)

---

## Konkrete DNS-Einträge für deinen Domain-Registrar

Hinterlege bei deinem Domain-Anbieter (z.B. Strato, IONOS, Netcup, Hetzner, Cloudflare) die folgenden Einträge für `mk-applications.de`:

### 1. Für `www.mk-applications.de` (Primäre Webadresse)

| Typ | Host / Name | Wert / Ziel | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `calm-coast-08438a203.5.azurestaticapps.net` | 3600 (1 Std.) |

*Alternativ via TXT-Token (bereits in Azure angefordert):*
| Typ | Host / Name | Wert / Ziel | TTL |
| :--- | :--- | :--- | :--- |
| **TXT** | `_dnsauth.www` | `_24kwa3h8lqapga1aojznp6ui088mry8` | 300 |

---

### 2. Für die Root-Domain `mk-applications.de` (Apex-Domain)

#### A. Azure Validierungs-Token (Bereits registriert & aktiv)
| Typ | Host / Name | Wert / Ziel | TTL |
| :--- | :--- | :--- | :--- |
| **TXT** | `_dnsauth` (oder `@`) | `_vzp7jpssw776gftdq70q890q6yau62v` | 300 (5 Min.) |

#### B. Weiterleitung / Routing zur App
Wähle je nach Funktionsumfang deines Registrars eine der beiden Optionen:

- **Empfohlene Standard-Methode bei deutschen Providern (Strato, IONOS, Netcup):**  
  Richte im Kundenmenü eine **301 HTTP-Weiterleitung** von `mk-applications.de` auf `https://www.mk-applications.de` ein. Dadurch landen alle Besucher automatisch auf der verschlüsselten `www`-Adresse.
- **Moderne DNS-Provider (Cloudflare, DNSimple etc.):**  
  Richte einen **ALIAS / ANAME** Eintrag für `@` auf `calm-coast-08438a203.5.azurestaticapps.net` ein (CNAME Flattening).

---

## Validierung prüfen
Sobald die Einträge beim Registrar hinterlegt sind, schließt Azure die Prüfung automatisch ab und stellt das SSL-Zertifikat aus.
Du kannst den Status jederzeit mit folgendem Befehl prüfen:
```bash
az staticwebapp hostname list -n swa-mk-applications -g rg-mk-applications --output table
```
