@echo off
REM Batch script to install dependencies
REM Double-click this file to run

echo Installing dependencies...

REM Set npm to online mode
set npm_config_offline=false

REM Navigate to script directory
cd /d "%~dp0"

REM Install dependencies
call npm install

if errorlevel 1 (
    echo.
    echo Installation failed. Please check your internet connection.
    pause
    exit /b 1
)

echo.
echo Dependencies installed successfully!
echo You can now run start-dev.bat to start the development server.
pause
