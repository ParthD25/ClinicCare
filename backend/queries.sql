-- ClinicCare Database Queries
PRAGMA foreign_keys = ON;


-- Patients
INSERT INTO patients (first_name, last_name, date_of_birth, sex, phone, email, address) VALUES
('Alice', 'Brown', '1990-04-12', 'F', '555-0101', 'alice.brown@example.com', '10 Maple St'),
('Ben',   'Chan',  '1985-09-21', 'M', '555-0102', 'ben.chan@example.com',   '22 Oak Ave'),
('Carla', 'Diaz',  '2001-01-08', 'F', '555-0103', 'carla.diaz@example.com', '7 Pine Rd');

-- Clinicians
INSERT INTO clinicians (first_name, last_name, role, specialty, phone, email) VALUES
('Emma', 'Patel', 'Physician', 'Family Medicine', '555-0201', 'emma.patel@clinic.org'),
('John', 'Lee',   'Nurse',     'General',         '555-0202', 'john.lee@clinic.org');

-- Treatments (catalog)
INSERT INTO treatments (name, description) VALUES
('Vaccination', 'Administration of a vaccine'),
('Physical Therapy', 'Therapeutic exercises and manual therapy');

-- Medications (catalog)
INSERT INTO medications (name, form, strength) VALUES
('Amoxicillin 500 mg', 'capsule', '500 mg'),
('Ibuprofen 200 mg',   'tablet',  '200 mg'),
('Loratadine 10 mg',   'tablet',  '10 mg');

-- Appointments (mix of scheduled and completed)
INSERT INTO appointments (patient_id, clinician_id, appt_date, start_time, end_time, reason, diagnosis, status, notes) VALUES
(1, 1, '2025-08-01', '09:00', '09:20', 'Sore throat', 'Strep throat', 'completed', 'Rapid strep positive'),
(2, 1, '2025-08-20', '10:00', '10:30', 'Annual physical', NULL, 'scheduled', NULL),
(3, 2, '2025-08-21', '14:00', '14:20', 'Shoulder pain', NULL, 'scheduled', NULL);

-- Treatments performed during the completed visit
INSERT INTO appointment_treatments (appointment_id, treatment_id, notes) VALUES
(1, 1, 'Tetanus booster given'), -- during Alice Brown visit
(1, 2, 'Home exercise program given');

-- Prescriptions written during the completed visit
INSERT INTO prescriptions (appointment_id, medication_id, dosage, frequency, duration_days, instructions, prescribed_date) VALUES
(1, 1, '500 mg', '3 times daily', 10, 'Take with food', '2025-08-01'),
(1, 2, '200 mg', 'as needed', 5, 'For pain, do not exceed label', '2025-08-01');

-- COMMON QUERIES

-- All upcoming (scheduled) appointments, by date
SELECT * FROM visit_summary
WHERE status = 'scheduled'
ORDER BY appt_date, start_time;

-- Daily schedule for a clinician (by last name and date)
SELECT appointment_id, appt_date, start_time, end_time, patient_name, reason, status
FROM visit_summary
WHERE clinician_name LIKE '%Patel%'
  AND appt_date = '2025-08-20'
ORDER BY start_time;

-- A patient's visit history (by last name)
SELECT appointment_id, appt_date, clinician_name, reason, diagnosis, status
FROM visit_summary
WHERE patient_name LIKE '%Brown%'
ORDER BY appt_date DESC;

-- Prescriptions for a given patient
SELECT prescription_id, prescribed_date, medication_name, dosage, frequency, duration_days, instructions
FROM prescription_summary
WHERE patient_name LIKE '%Brown%'
ORDER BY prescribed_date DESC;

-- Who has been prescribed a specific medication (e.g., 'Amoxicillin')
SELECT patient_name, clinician_name, prescribed_date, medication_name, dosage
FROM prescription_summary
WHERE medication_name LIKE '%Amoxicillin%';

-- Count of appointments per clinician
SELECT clinician_name, COUNT(*) AS total_appointments
FROM visit_summary
GROUP BY clinician_name
ORDER BY total_appointments DESC;

-- Top prescribed medications (simple count)
SELECT medication_name, COUNT(*) AS times_prescribed
FROM prescription_summary
GROUP BY medication_name
ORDER BY times_prescribed DESC, medication_name;

-- All treatments performed for a specific appointment
SELECT a.id AS appointment_id, a.appt_date, t.name AS treatment_name, at.notes
FROM appointments AS a
JOIN appointment_treatments AS at ON at.appointment_id = a.id
JOIN treatments AS t ON t.id = at.treatment_id
WHERE a.id = 1;

-- DATA MODIFICATION EXAMPLES

-- Insert: schedule a new appointment
INSERT INTO appointments (patient_id, clinician_id, appt_date, start_time, end_time, reason, status)
VALUES (1, 1, '2025-09-01', '11:00', '11:20', 'Follow-up', 'scheduled');

-- Update: mark an appointment completed with diagnosis and notes
UPDATE appointments
SET status = 'completed',
    diagnosis = 'Resolved pharyngitis',
    notes = 'Symptoms resolved; no further antibiotics needed'
WHERE id = 2; -- change id as appropriate

-- Delete: remove a prescription that was entered by mistake
DELETE FROM prescriptions
WHERE id = 2; -- change id as appropriate

-- Update: correct a patient's phone number
UPDATE patients
SET phone = '555-0199'
WHERE last_name = 'Chan' AND first_name = 'Ben';

-- Cancel (do not delete) an appointment
UPDATE appointments
SET status = 'canceled',
    notes = 'Patient requested cancellation'
WHERE id = 3; -- change id as appropriate

-- ============================
-- ADDITIONAL USEFUL QUERIES
-- ============================

-- List all patients alphabetically
SELECT id, first_name, last_name, date_of_birth FROM patients
ORDER BY last_name, first_name;

-- Find all appointments on a specific date
SELECT * FROM visit_summary
WHERE appt_date = '2025-08-20'
ORDER BY start_time;

-- Search medications by keyword
SELECT id, name FROM medications
WHERE name LIKE '%mg%';
