param(
    [string]$ImageDir = (Join-Path (Split-Path $PSScriptRoot -Parent) "images\portfoliokoak"),
    [string]$OutputFile = (Join-Path (Split-Path $PSScriptRoot -Parent) "js\gallery-files.js")
)

$files = Get-ChildItem -LiteralPath $ImageDir -File | Where-Object {
    $_.Extension -match '\.(jpg|jpeg|png|webp)$'
} | Sort-Object { [int]($_.BaseName -replace '\D', '') }

$array = $files | ForEach-Object { "'$($_.Name)'" }
$content = "var galleryFiles = [$($array -join ', ')];"

Set-Content -LiteralPath $OutputFile -Value $content -Encoding UTF8
Write-Host "Generated $($files.Count) files -> $OutputFile"
