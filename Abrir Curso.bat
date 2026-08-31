@echo off
rem ============================================
rem  Your English Path
rem  Doble clic para abrir tu curso de ingles
rem ============================================
cd /d "%~dp0"

rem Si el servidor ya esta corriendo, solo abre el navegador
netstat -ano | findstr ":8770" >nul 2>&1
if %errorlevel%==0 (
  start "" http://localhost:8770
  exit /b
)

start "Curso Ingles - servidor local" /min python -m http.server 8770 --directory app
timeout /t 1 /nobreak >nul
start "" http://localhost:8770
