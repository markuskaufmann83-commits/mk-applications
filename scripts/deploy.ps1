# Azure Static Web Apps Deployment Helper Script
# MK Applications (Bielefeld)

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " MK Applications - Azure Static Web Apps Deployment Check" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Check Node and Dependencies
Write-Host "`n[1/4] Prüfe Abhängigkeiten..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "Installiere NPM Pakete..." -ForegroundColor Gray
    npm install
}

# 2. Build Frontend
Write-Host "`n[2/4] Erstelle Produktions-Build (Vite SSG)..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "FEHLER: Build fehlgeschlagen!" -ForegroundColor Red
    exit 1
}
Write-Host "Build erfolgreich abgeschlossen in /dist." -ForegroundColor Green

# 3. Check Azure Function
Write-Host "`n[3/4] Prüfe Serverless API (/api/contact)..." -ForegroundColor Yellow
if (Test-Path "api/contact/index.js") {
    Write-Host "Azure Function API ist bereit für Deployment." -ForegroundColor Green
} else {
    Write-Host "WARNUNG: api/contact/index.js nicht gefunden." -ForegroundColor Red
}

# 4. Azure SWA CLI Option
Write-Host "`n[4/4] Bereitstellungshinweis:" -ForegroundColor Yellow
Write-Host "Das primäre Deployment erfolgt via GitHub Actions bei jedem Git-Push." -ForegroundColor White
Write-Host "Falls du direkt lokal mit der Azure SWA CLI deployen möchtest:" -ForegroundColor Gray
Write-Host "  npx @azure/static-web-apps-cli deploy ./dist --api-location ./api --env production" -ForegroundColor Cyan

Write-Host "`nFertig! Alle Artefakte sind produktionsreif." -ForegroundColor Green
