@echo off
rem one-click sync: dev/imaddablog -> git repo (henears-site) + USB copy (usb_yousxi)
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0sync.ps1"
echo.
echo Press any key to close...
pause >nul