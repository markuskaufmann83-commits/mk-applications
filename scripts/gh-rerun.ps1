$credsText = "protocol=https`nhost=github.com`n" | git credential fill
$token = ""
foreach ($line in ($credsText -split "`n")) {
    if ($line -match "^password=(.*)$") {
        $token = $matches[1].Trim()
    }
}

$env:GH_TOKEN = $token
$gh = "C:\Program Files\GitHub CLI\gh.exe"
Write-Host "Rerunning workflow with updated secret..." -ForegroundColor Cyan
& $gh run rerun 36033983064 --repo markuskaufmann83-commits/mk-applications
