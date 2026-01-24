# PowerShell script to preview production build
# Right-click and "Run with PowerShell" or run: .\start-preview.ps1

Write-Host "Building and previewing production version..." -ForegroundColor Green

# Set npm to online mode
$env:npm_config_offline = 'false'

# Navigate to project directory
Set-Location $PSScriptRoot

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Installation failed. Please check your internet connection." -ForegroundColor Red
        exit 1
    }
}

# Build the project
Write-Host "Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

# Preview the build
Write-Host "Starting preview server..." -ForegroundColor Green
Write-Host "The preview will open at http://localhost:4173" -ForegroundColor Cyan
npm run preview
