# Stop on error
$ErrorActionPreference = "Stop"

# Store the original directory before switching
$OriginalDir = Get-Location

# Build the site
npm run build

# Define output folder
$OutputFolder = "dist"
$TempSite = "$env:TEMP\_site"

# Remove and recreate temporary directory
if (Test-Path $TempSite) { Remove-Item -Recurse -Force $TempSite }
New-Item -ItemType Directory -Path $TempSite | Out-Null

# Copy .git folder (preserves deployment history)
Copy-Item -Recurse -Force .git $TempSite

# Navigate to temporary site directory
Push-Location $TempSite

# Check if the gh-pages branch exists before deleting
$BranchExists = git branch --list gh-pages
if ($BranchExists) {
    git branch -D gh-pages
}

# Create new orphan branch
git checkout --orphan gh-pages
git reset

# Return to original directory
Pop-Location

# Copy CNAME if exists
if (Test-Path ".gh-pages") { Copy-Item ".gh-pages" "$TempSite\CNAME" }

# Copy the built site from 'dist/'
Copy-Item -Recurse -Force "$OutputFolder\*" $TempSite

# Navigate to the temporary site directory
Push-Location $TempSite

# Commit and push
git add -A
git commit -m "Deploy site"
git push --force --no-verify --set-upstream origin gh-pages

# Restore the original directory
Pop-Location
Set-Location $OriginalDir   # <----- Ensures script returns to the original directory

# Cleanup
Remove-Item -Recurse -Force $TempSite
