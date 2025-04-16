$greenCheck = @{
  Object = [Char]8730
  ForegroundColor = 'Green'
  NoNewLine = $true
}

$redCross = @{
  Object = [Char]10060
  ForegroundColor = 'Red'
  NoNewLine = $true
}

try {
  Write-Host ""
  Write-Host "*** Pre Push Hook ***"
  Write-Host "======================================"


  # Run linting
  Write-Host "Running linting..."
  $lintResult = npm run lint 2>&1
  if ($LASTEXITCODE -ne 0) {
    throw "Linting failed: $lintResult"
  }

  Write-Host "======================================"
  Write-Host @greenCheck
  Write-Host " Checks passed, proceeding with push."
} catch {
  Write-Error $_.Exception.Message
  Write-Host "======================================"
  Write-Host @redCross
  Write-Host " Checks failed, push aborted."
  Write-Host "**Please note: the file causing the problem might not be committed yet.**"
  exit 1
}

Write-Host ""
exit 0
