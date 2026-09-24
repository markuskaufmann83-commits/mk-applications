$credsText = "protocol=https`nhost=github.com`n" | git credential fill
$token = ""
foreach ($line in ($credsText -split "`n")) {
    if ($line -match "^password=(.*)$") {
        $token = $matches[1].Trim()
    }
}

if (-not $token) {
    Write-Error "Kein GitHub Token gefunden."
    exit 1
}

# Create payload file
$payload = '{"name":"mk-applications","description":"MK Applications - Massgeschneiderte digitale Loesungen","private":false}'
$payloadPath = "$PSScriptRoot\create-repo.json"
[System.IO.File]::WriteAllText($payloadPath, $payload, [System.Text.Encoding]::UTF8)

Write-Host "Erstelle GitHub Repository 'mk-applications'..." -ForegroundColor Cyan
$response = curl.exe -s -X POST -H "Authorization: Bearer $token" -H "Accept: application/vnd.github.v3+json" -H "Content-Type: application/json" -d "@$payloadPath" "https://api.github.com/user/repos"

Remove-Item $payloadPath -ErrorAction SilentlyContinue

Write-Host "API Antwort:"
$response | Select-String "html_url|message|errors" | Out-String | Write-Host

# Push to origin
Write-Host "Setze Git Remote und pushe nach main..." -ForegroundColor Cyan
git remote remove origin 2>$null
git remote add origin "https://github.com/markuskaufmann83-commits/mk-applications.git"
git push -u origin main
