#!/usr/bin/env python3

# Simple test script for ClinicCare+ API
import sqlite3

def test_database():
    try:
        conn = sqlite3.connect('../cliniccare_plus.db')
        cursor = conn.cursor()

        # Test basic query
        cursor.execute("SELECT COUNT(*) FROM patients")
        patient_count = cursor.fetchone()[0]
        print(f"✓ Database connected. Found {patient_count} patients.")

        # Test treatments
        cursor.execute("SELECT COUNT(*) FROM treatments")
        treatment_count = cursor.fetchone()[0]
        print(f"✓ Found {treatment_count} treatments.")

        # Test insurance
        cursor.execute("SELECT COUNT(*) FROM insurance_plans")
        insurance_count = cursor.fetchone()[0]
        print(f"✓ Found {insurance_count} insurance plans.")

        conn.close()
        return True
    except Exception as e:
        print(f"✗ Database error: {e}")
        return False

if __name__ == "__main__":
    print("Testing ClinicCare+ Database...")
    if test_database():
        print("✓ All database tests passed!")
    else:
        print("✗ Database tests failed!")