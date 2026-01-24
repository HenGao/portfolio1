@echo off
REM Batch script to preview production build
REM Double-click this file to run

echo Building and previewing production version...

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

REM Build the project
echo Building project...
call npm run build

if errorlevel 1 (
    echo Build failed!
    pause
    exit /b 1
)

REM Preview the build
echo Starting preview server...
echo The preview will open at http://localhost:4173
call npm run preview

pause
