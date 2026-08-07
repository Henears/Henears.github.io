$ErrorActionPreference = 'Stop'
$rootDir  = Split-Path -Parent $MyInvocation.MyCommand.Path
$parent   = Split-Path -Parent $rootDir
$webDir   = Join-Path $rootDir 'web'
$gitDir   = Join-Path $parent 'henears-site'
$usbDir   = Join-Path $parent 'usb_yousxi'

Write-Host "dev  : $rootDir"
Write-Host "git  : $gitDir"
Write-Host "usb  : $usbDir"
Write-Host ''

# 1) 网站发布版(上传 git): web -> henears-site  (保留 henears-site/.git)
robocopy $webDir $gitDir /MIR /XD .git /NFL /NDL /NJH /NJS /NP | Out-Null
if ($LASTEXITCODE -gt 7) { Write-Host '[ERROR] sync to git repo failed'; exit $LASTEXITCODE }
$gitCode = $LASTEXITCODE

# 2) U盘便携包(整体全量): imaddablog -> usb_yousxi
robocopy $rootDir $usbDir /MIR /XD .git /NFL /NDL /NJH /NJS /NP | Out-Null
if ($LASTEXITCODE -gt 7) { Write-Host '[ERROR] sync to USB copy failed'; exit $LASTEXITCODE }
$usbCode = $LASTEXITCODE

Write-Host ''
Write-Host ("git repo copy: ok (robocopy code $gitCode)")
Write-Host ("usb copy     : ok (robocopy code $usbCode)")
Write-Host 'done.'