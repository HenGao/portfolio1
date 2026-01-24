# PowerShell script to start the development server
# Right-click and "Run with PowerShell" or run: .\start-dev.ps1

Write-Host "Starting development server..." -ForegroundColor Green

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

# Start the dev server
Write-Host "Starting Vite dev server..." -ForegroundColor Green
Write-Host "The server will open at http://localhost:5173" -ForegroundColor Cyan
npm run dev
