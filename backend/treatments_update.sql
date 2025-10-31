-- Treatments Table Updates for ClinicCare+
-- I added these columns to support the cost estimator feature.

-- Add category column for treatment classification (e.g., 'preventive', 'basic', 'major')
ALTER TABLE treatments ADD COLUMN category TEXT;

-- Add base_fee column for clinic pricing
ALTER TABLE treatments ADD COLUMN base_fee REAL;