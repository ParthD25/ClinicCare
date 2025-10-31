# ClinicCare+ Setup Script
# I created this PowerShell script to easily set up the extended database.

# Database file
$dbFile = "cliniccare_plus.db"

# Remove existing database if it exists
if (Test-Path $dbFile) {
    Remove-Item $dbFile
    Write-Host "Removed existing database file."
}

# Create new database with base schema
Write-Host "Creating database with base schema..."
Get-Content "schema.sql" | sqlite3 $dbFile

# Apply schema extensions
Write-Host "Adding ClinicCare+ tables..."
Get-Content "schema_plus.sql" | sqlite3 $dbFile

# Update treatments table
Write-Host "Updating treatments table..."
Get-Content "treatments_update.sql" | sqlite3 $dbFile

# Apply dental clinic updates
Write-Host "Applying dental clinic updates..."
Get-Content "dental_updates.sql" | sqlite3 $dbFile

# Add sample data
Write-Host "Adding base sample data..."
Get-Content "queries.sql" | sqlite3 $dbFile

# Add ClinicCare+ sample data
Write-Host "Adding ClinicCare+ sample data..."
Get-Content "seed_plus.sql" | sqlite3 $dbFile

Write-Host "Setup complete! Database: $dbFile"