$credsText = "protocol=https`nhost=github.com`n" | git credential fill
$token = ""
foreach ($line in ($credsText -split "`n")) {
    if ($line -match "^password=(.*)$") {
        $token = $matches[1].Trim()
    }
}

$env:GH_TOKEN = $token
$gh = "C:\Program Files\GitHub CLI\gh.exe"

$deployToken = "7cf03384480cb9d8f971e0581340b3a7ad559027a186dbdb8549df95d8ced36605-e0b054bb-f974-450d-8fb5-32725759a528003170508438a203"

Write-Host "Setze GitHub Actions Secret 'AZURE_STATIC_WEB_APPS_API_TOKEN'..." -ForegroundColor Cyan
& $gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN --repo markuskaufmann83-commits/mk-applications --body "$deployToken"

Write-Host "`nPrüfe gesetzte Secrets:" -ForegroundColor Yellow
& $gh secret list --repo markuskaufmann83-commits/mk-applications
