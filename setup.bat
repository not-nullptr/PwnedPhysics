@echo off
if not "%1"=="am_admin" (
    powershell -Command "Start-Process -Verb RunAs -FilePath '%0' -ArgumentList 'am_admin'"
    exit /b
)
@setlocal enableextensions
@cd /d "%~dp0"
powershell Set-ExecutionPolicy -Scope CurrentUser Unrestricted
powershell .\setup.ps1
pause