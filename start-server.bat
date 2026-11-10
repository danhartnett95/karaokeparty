@echo off
cd /d "%~dp0"
echo Starting server at http://localhost:8000
echo Open that URL in your browser. Press Ctrl+C to stop.
echo.
python -m http.server 8000
pause
