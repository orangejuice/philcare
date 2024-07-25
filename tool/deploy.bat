@echo off
setlocal EnableDelayedExpansion

REM Set your deployment URL here
set "DEPLOY_URL=https://api.vercel.com/v1/integrations/deploy/prj_your_project_id_here"

REM Ask for confirmation
set /p "confirmation=Are you sure you want to trigger the deployment? (Y/N): "

if /i "%confirmation%"=="Y" (
    echo Triggering deployment...

    REM Make the API call using curl
    curl -X POST %DEPLOY_URL%

    if !errorlevel! equ 0 (
        echo.
        echo Deployment triggered successfully.
    ) else (
        echo.
        echo Failed to trigger deployment. Error code: !errorlevel!
    )
) else (
    echo Deployment cancelled.
)

echo.
pause
