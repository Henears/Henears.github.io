@echo off
taskkill /IM caddy.exe /F >nul 2>&1
echo Local server (Caddy) stopped.
timeout /t 1 /nobreak >nul