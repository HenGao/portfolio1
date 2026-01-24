@echo off
REM Batch script to start the development server
REM Double-click this file to run

echo Starting development server...

REM Set npm to online mode
set npm_config_offline=false

REM Navigate to script directory
cd /d "%~dp0"

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo Installation failed. Please check your internet connection.
        pause
        exit /b 1
    )
)

REM Start the dev server
echo Starting Vite dev server...
echo The server will open at http://localhost:5173
call npm run dev

pause
