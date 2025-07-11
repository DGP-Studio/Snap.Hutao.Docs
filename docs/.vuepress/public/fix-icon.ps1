# 停止 explorer.exe
Get-Process explorer -ErrorAction SilentlyContinue | Stop-Process -Force

# 删除 IconCache.db
$iconCache = "$env:LocalAppData\IconCache.db"
if (Test-Path $iconCache) {
    Remove-Item $iconCache -Force -ErrorAction SilentlyContinue
}

# 删除 thumbcache_*.db 和 iconcache_*.db
$explorerPath = "$env:LocalAppData\Microsoft\Windows\Explorer"
if (Test-Path $explorerPath) {
    Get-ChildItem -Path $explorerPath -Filter "thumbcache_*.db" -Force -ErrorAction SilentlyContinue |
        Remove-Item -Force -ErrorAction SilentlyContinue
    Get-ChildItem -Path $explorerPath -Filter "iconcache_*.db" -Force -ErrorAction SilentlyContinue |
        Remove-Item -Force -ErrorAction SilentlyContinue
}

# 删除注册表项
$regPath = "HKCU:\Local Settings\Software\Microsoft\Windows\CurrentVersion\TrayNotify"
Remove-ItemProperty -Path $regPath -Name "IconStreams" -ErrorAction SilentlyContinue
Remove-ItemProperty -Path $regPath -Name "PastIconsStream" -ErrorAction SilentlyContinue

# 重启 explorer
Start-Process "explorer.exe" -ArgumentList "/factory,{7848a7c6-85f3-11d0-a9b3-00a0c90f2719}"