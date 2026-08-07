@echo off
setlocal
title GamePortal - Local Server
cd /d "%~dp0"

echo ==========================================
echo   GamePortal  (offline, no install)
echo   website + game hub + Ruffle(Flash) engine
echo ==========================================
echo.

if not exist "server\caddy.exe" goto nocaddy

rem 1. start the bundled zero-install server in background
start "gprelp-server" /b server\caddy.exe file-server --root "%~dp0web" --listen 127.0.0.1:9090 >nul 2>&1

rem 2. wait until the port responds (up to ~10s)
powershell -NoProfile -Command "for($i=0;$i -lt 20;$i++){try{Invoke-WebRequest -Uri 'http://127.0.0.1:9090/' -UseBasicParsing -TimeoutSec 1|Out-Null; exit 0}catch{Start-Sleep -Milliseconds 500}};exit 1"
if errorlevel 1 goto fail

rem 3. open the site in the default browser
start "" "http://127.0.0.1:9090/"
echo.
echo   Opened:  http://127.0.0.1:9090/      (home page)
echo   Games:   http://127.0.0.1:9090/game/
echo.
echo   Close this window after playing; the server stops automatically.
if defined NO_PAUSE goto done
pause

:done
taskkill /IM caddy.exe /F >nul 2>&1
exit /b 0

:fail
echo [ERROR] server did not start. Port 9090 may be in use.
pause
exit /b 1

:nocaddy
echo [ERROR] server\caddy.exe not found - copy the whole folder.
pause
exit /b 1