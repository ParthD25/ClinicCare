-- Dental Clinic Updates
-- I removed physical therapy since this is a dental clinic, and added medication warnings for blood thinners and similar medications.

-- Remove physical therapy treatment
DELETE FROM treatments WHERE name = 'Physical Therapy';

-- Add warning flags to medications table
ALTER TABLE medications ADD COLUMN requires_warning TEXT; -- 'blood_thinner', 'anticoagulant', etc.

-- Update existing medications with warnings
UPDATE medications SET requires_warning = 'blood_thinner' WHERE name LIKE '%warfarin%';
UPDATE medications SET requires_warning = 'blood_thinner' WHERE name LIKE '%aspirin%';
UPDATE medications SET requires_warning = 'anticoagulant' WHERE name LIKE '%heparin%';
UPDATE medications SET requires_warning = 'anticoagulant' WHERE name LIKE '%dabigatran%';

-- Add dental-specific medications that might require warnings
INSERT INTO medications (name, form, strength, requires_warning) VALUES
('Warfarin (Coumadin)', 'tablet', '5 mg', 'blood_thinner'),
('Aspirin', 'tablet', '81 mg', 'blood_thinner'),
('Clopidogrel (Plavix)', 'tablet', '75 mg', 'blood_thinner'),
('Rivaroxaban (Xarelto)', 'tablet', '20 mg', 'anticoagulant'),
('Apixaban (Eliquis)', 'tablet', '5 mg', 'anticoagulant');

-- Add dental-specific treatments
INSERT INTO treatments (name, description, category, base_fee) VALUES
('Teeth Cleaning', 'Professional dental cleaning and polishing', 'preventive', 120.00),
('Fluoride Treatment', 'Fluoride application for cavity prevention', 'preventive', 50.00),
('Dental X-Ray', 'Intraoral X-ray for diagnosis', 'diagnostic', 100.00),
('Periodontal Treatment', 'Deep cleaning for gum disease', 'basic', 300.00),
('Tooth Extraction', 'Simple tooth removal', 'basic', 200.00),
('Root Canal Therapy', 'Endodontic treatment', 'major', 800.00),
('Dental Crown', 'Porcelain crown placement', 'major', 1200.00),
('Dental Implant', 'Implant placement surgery', 'major', 2500.00);

-- Update coverage rules for dental categories
INSERT INTO coverage_rules (insurance_plan_id, category, coverage_percent, deductible_amount, copay_amount, notes) VALUES
(1, 'diagnostic', 100, 0, 0, 'Diagnostic procedures usually fully covered'),
(1, 'ortho', 50, 100, 25, 'Orthodontic treatment partial coverage'),
(2, 'diagnostic', 100, 0, 0, 'Full diagnostic coverage'),
(2, 'ortho', 60, 50, 20, 'Better ortho coverage');

-- Create a view for medications requiring warnings
CREATE VIEW medications_with_warnings AS
SELECT id, name, form, strength, requires_warning
FROM medications
WHERE requires_warning IS NOT NULL;

-- Create a view for patient medications with warnings
CREATE VIEW patient_medication_warnings AS
SELECT
  p.first_name || ' ' || p.last_name AS patient_name,
  m.name AS medication_name,
  m.requires_warning AS warning_type,
  pr.prescribed_date,
  pr.dosage,
  pr.frequency
FROM prescriptions pr
JOIN appointments a ON a.id = pr.appointment_id
JOIN patients p ON p.id = a.patient_id
JOIN medications m ON m.id = pr.medication_id
WHERE m.requires_warning IS NOT NULL
ORDER BY pr.prescribed_date DESC;