param([switch]$NoLaunch)
$ErrorActionPreference = 'Stop'
$taskRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
Set-Location -LiteralPath $taskRoot
try {
    $taskManifestPath = Join-Path $taskRoot 'release/latest-client.json'
    if (-not (Test-Path -LiteralPath $taskManifestPath)) { throw 'Chua co client PC. Hay chay npm run client:build.' }
    $taskManifest = Get-Content -LiteralPath $taskManifestPath -Raw | ConvertFrom-Json
    $taskReleaseRoot = [System.IO.Path]::GetFullPath((Join-Path $taskRoot 'release'))
    $taskExe = [System.IO.Path]::GetFullPath((Join-Path $taskReleaseRoot $taskManifest.executable))
    if (-not $taskExe.StartsWith($taskReleaseRoot + [System.IO.Path]::DirectorySeparatorChar, [System.StringComparison]::OrdinalIgnoreCase)) { throw 'Duong dan client khong hop le.' }
    if (-not (Test-Path -LiteralPath $taskExe)) { throw 'Khong tim thay AnThanh.exe. Hay build lai client.' }
    $taskConfig = Get-Content -LiteralPath (Join-Path $taskRoot 'desktop/client-config.json') -Raw | ConvertFrom-Json
    $taskOrigin = [Uri]$taskConfig.serverOrigin
    if ($taskOrigin.Scheme -ne 'http' -or $taskOrigin.Host -notin @('localhost','127.0.0.1','[::1]')) { throw 'File mo local chi dung cho server tren may nay. Server online: mo AnThanh.exe va bam F8.' }
    # The local Node server listens on IPv4; Windows PowerShell may otherwise
    # wait on ::1 when resolving localhost, unlike Chromium's IPv4 fallback.
    $taskProbeBuilder = New-Object System.UriBuilder($taskOrigin)
    $taskProbeBuilder.Host = '127.0.0.1'
    $taskProbeOrigin = $taskProbeBuilder.Uri
    function Test-GameServer {
        try {
            $taskInfo = Invoke-RestMethod -Uri ($taskProbeOrigin.GetLeftPart([System.UriPartial]::Authority) + '/api/client-info') -TimeoutSec 2
            return ($taskInfo.app -eq 'an-thanh' -and $taskInfo.protocol -eq 1 -and $taskInfo.database -eq 'postgresql')
        } catch { return $false }
    }
    if (-not (Test-GameServer)) {
        $taskSocket = New-Object System.Net.Sockets.TcpClient
        try { $taskPortBusy = $taskSocket.ConnectAsync($taskProbeOrigin.Host,$taskProbeOrigin.Port).Wait(700) -and $taskSocket.Connected } catch { $taskPortBusy = $false } finally { $taskSocket.Dispose() }
        if ($taskPortBusy) { throw 'Cong server dang duoc dung nhung khong phai ban An Thanh tuong thich. Hay khoi dong lai dung server game.' }
        $taskNodeCommand = Get-Command node.exe -ErrorAction SilentlyContinue
        if ($taskNodeCommand) { $taskNode = $taskNodeCommand.Source } else {
            $taskNode = Join-Path $env:USERPROFILE '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'
        }
        if (-not (Test-Path -LiteralPath $taskNode)) { throw 'Khong tim thay Node.js de bat server local.' }
        $taskLocal = Join-Path $taskRoot '.local'
        New-Item -ItemType Directory -Path $taskLocal -Force | Out-Null
        Write-Host 'Dang bat PostgreSQL va server An Thanh...'
        $taskProcess = Start-Process -FilePath $taskNode -ArgumentList @('scripts/start-local-game.mjs') -WorkingDirectory $taskRoot -WindowStyle Hidden -PassThru -RedirectStandardOutput (Join-Path $taskLocal 'pc-server-out.log') -RedirectStandardError (Join-Path $taskLocal 'pc-server-error.log')
        $taskDeadline = [DateTime]::UtcNow.AddSeconds(45)
        while (-not (Test-GameServer)) {
            $taskProcess.Refresh()
            if ($taskProcess.HasExited) { throw 'Server khong khoi dong duoc. Xem .local/pc-server-error.log.' }
            if ([DateTime]::UtcNow -gt $taskDeadline) { throw 'Server chua san sang sau 45 giay. Xem log trong .local.' }
            Start-Sleep -Milliseconds 400
        }
    }
    Write-Host 'Server va PostgreSQL da san sang.'
    if (-not $NoLaunch) {
        # A game window is the interactive application the user is opening.
        $taskPreviousOrigin = $env:ANTHANH_SERVER_URL
        try {
            $env:ANTHANH_SERVER_URL = $taskProbeOrigin.GetLeftPart([System.UriPartial]::Authority)
            Start-Process -FilePath $taskExe -WorkingDirectory (Split-Path -Parent $taskExe) | Out-Null
        } finally { $env:ANTHANH_SERVER_URL = $taskPreviousOrigin }
        Write-Host 'Da mo client An Thanh.'
    }
} catch { Write-Host ('Khong mo duoc game: ' + $_.Exception.Message) -ForegroundColor Red; exit 1 }
