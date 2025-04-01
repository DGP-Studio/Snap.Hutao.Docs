Set-Location $env:USERPROFILE\Downloads;
$url="https://api.snapgenshin.com/patch/hutao/download";
$targetFileName="Snap.Hutao.latest.msix";
$targetFilePath=Join-Path -Path $PWD -ChildPath $targetFileName;
Invoke-WebRequest -Uri $url -OutFile $targetFilePath;
Add-AppxPackage -Path $targetFilePath;
Remove-Item -Path $targetFilePath