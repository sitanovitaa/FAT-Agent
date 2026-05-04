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

  New-Item -ItemType SymbolicLink -Path $TargetPath -Target (Join-Path $SourceDir $Skill) | Out-Null
}

Write-Host "Symlinked FAT skills into $TargetDir"
