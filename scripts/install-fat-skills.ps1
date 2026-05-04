$ErrorActionPreference = 'Stop'

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir
$SourceDir = Join-Path $ProjectRoot 'codex-skills'
$TargetDir = Join-Path $HOME '.codex\skills'

$Skills = @(
  'fat-coordinator',
  'fat-company-context',
  'fat-finance',
  'fat-accounting',
  'fat-tax',
  'fat-reporting'
)

New-Item -ItemType Directory -Force -Path $TargetDir | Out-Null

foreach ($Skill in $Skills) {
  $TargetPath = Join-Path $TargetDir $Skill
  if (Test-Path $TargetPath) {
    Remove-Item -Recurse -Force $TargetPath
  }

  Copy-Item -Recurse -Force (Join-Path $SourceDir $Skill) $TargetPath
}

Write-Host "Installed FAT skills into $TargetDir"
