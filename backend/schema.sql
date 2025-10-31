PRAGMA foreign_keys = ON;

-- Delete everything first in case I run this again
-- I have to delete views first, then tables in the right order
DROP VIEW IF EXISTS visit_summary;
DROP VIEW IF EXISTS prescription_summary;
DROP TABLE IF EXISTS appointment_treatments;
DROP TABLE IF EXISTS prescriptions;
DROP TABLE IF EXISTS medications;
DROP TABLE IF EXISTS treatments;
DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS clinicians;
DROP TABLE IF EXISTS patients;

-- Table 1: Store patient information
CREATE TABLE patients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,  -- automatically gives each patient a unique number
  first_name TEXT NOT NULL,              -- patient's first name (required)
  last_name TEXT NOT NULL,               -- patient's last name (required)
  date_of_birth TEXT,                    -- birthday like "1990-04-12"
  sex TEXT,                              -- M or F
  phone TEXT,                            -- phone number
  email TEXT,                            -- email address
  address TEXT                           -- where they live
);

-- Table 2: Store doctor and nurse information
CREATE TABLE clinicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,  -- unique number for each doctor/nurse
  first_name TEXT NOT NULL,              -- their first name
  last_name TEXT NOT NULL,               -- their last name
  role TEXT,                             -- like "Doctor" or "Nurse"
  specialty TEXT,                        -- what kind of doctor they are
  phone TEXT,                            -- work phone
  email TEXT                             -- work email
);

-- Table 3: Store appointments/visits
CREATE TABLE appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,   -- unique appointment number
  patient_id INTEGER NOT NULL,            -- which patient (links to patients table)
  clinician_id INTEGER NOT NULL,          -- which doctor/nurse (links to clinicians table)
  appt_date TEXT NOT NULL,                -- date like "2025-08-20"
  start_time TEXT,                        -- time like "10:00"
  end_time TEXT,                          -- time like "10:30"
  reason TEXT,                            -- why they're coming in
  diagnosis TEXT,                         -- what the doctor found (after visit)
  status TEXT NOT NULL DEFAULT 'scheduled', -- scheduled, completed, or canceled
  notes TEXT,                             -- any extra notes
  FOREIGN KEY (patient_id) REFERENCES patients(id),      -- makes sure patient exists
  FOREIGN KEY (clinician_id) REFERENCES clinicians(id)   -- makes sure doctor exists
);

-- Table 4: List of treatments we can do
CREATE TABLE treatments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,  -- unique number for each treatment
  name TEXT NOT NULL,                    -- treatment name like "Vaccination"
  description TEXT                       -- what it is
);

-- Table 5: Which treatments happened in which appointments
-- This connects appointments to treatments (many-to-many relationship)
CREATE TABLE appointment_treatments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,  -- unique record number
  appointment_id INTEGER NOT NULL,       -- which appointment
  treatment_id INTEGER NOT NULL,         -- which treatment
  notes TEXT,                            -- any notes about this specific treatment
  FOREIGN KEY (appointment_id) REFERENCES appointments(id),  -- links to appointments
  FOREIGN KEY (treatment_id) REFERENCES treatments(id)       -- links to treatments
);

-- Table 6: List of medications we can prescribe
CREATE TABLE medications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,  -- unique number for each medication
  name TEXT NOT NULL,                    -- medication name like "Amoxicillin 500 mg"
  form TEXT,                             -- tablet, capsule, liquid, etc.
  strength TEXT                          -- like "500 mg" or "10 mg"
);

-- Table 7: Prescriptions given to patients
CREATE TABLE prescriptions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,  -- unique prescription number
  appointment_id INTEGER NOT NULL,       -- which visit this was prescribed at
  medication_id INTEGER NOT NULL,        -- which medication
  dosage TEXT,                           -- how much to take
  frequency TEXT,                        -- how often (like "3 times daily")
  duration_days INTEGER,                 -- for how many days
  instructions TEXT,                     -- special instructions
  prescribed_date TEXT,                  -- when it was prescribed
  FOREIGN KEY (appointment_id) REFERENCES appointments(id),  -- links to appointments
  FOREIGN KEY (medication_id) REFERENCES medications(id)     -- links to medications
);

-- Make searches faster by creating indexes on fields I'll search a lot
CREATE INDEX idx_patients_last_name ON patients(last_name);           -- search patients by last name
CREATE INDEX idx_clinicians_last_name ON clinicians(last_name);       -- search doctors by last name
CREATE INDEX idx_appointments_patient ON appointments(patient_id);    -- find all appointments for a patient
CREATE INDEX idx_appointments_clinician ON appointments(clinician_id); -- find all appointments for a doctor
CREATE INDEX idx_appointments_date ON appointments(appt_date);         -- find appointments by date
CREATE INDEX idx_medications_name ON medications(name);                -- search medications by name
CREATE INDEX idx_prescriptions_appointment ON prescriptions(appointment_id);     -- find prescriptions for an appointment
CREATE INDEX idx_apt_treatments_appt ON appointment_treatments(appointment_id);  -- find treatments for an appointment

-- Create helpful views that join tables together to make queries easier
-- View 1: Visit summary - combines appointment info with patient and doctor names
CREATE VIEW visit_summary AS
SELECT
  a.id AS appointment_id,                                    -- appointment number
  a.appt_date,                                              -- date
  a.start_time,                                             -- start time
  a.end_time,                                               -- end time
  a.status,                                                 -- scheduled/completed/canceled
  p.first_name || ' ' || p.last_name AS patient_name,       -- full patient name
  c.first_name || ' ' || c.last_name AS clinician_name,     -- full doctor name
  a.reason,                                                 -- why they came
  a.diagnosis                                               -- what was found
FROM appointments a
JOIN patients p ON p.id = a.patient_id                      -- get patient info
JOIN clinicians c ON c.id = a.clinician_id;                 -- get doctor info

-- View 2: Prescription summary - shows prescriptions with all the names
CREATE VIEW prescription_summary AS
SELECT
  pr.id AS prescription_id,                                  -- prescription number
  pr.prescribed_date,                                        -- when prescribed
  p.first_name || ' ' || p.last_name AS patient_name,        -- patient name
  c.first_name || ' ' || c.last_name AS clinician_name,      -- doctor name
  m.name AS medication_name,                                 -- medication name
  pr.dosage,                                                 -- how much
  pr.frequency,                                              -- how often
  pr.duration_days,                                          -- for how long
  pr.instructions,                                           -- special instructions
  pr.appointment_id                                          -- which appointment
FROM prescriptions pr
JOIN appointments a ON a.id = pr.appointment_id             -- get appointment info
JOIN patients p ON p.id = a.patient_id                      -- get patient info
JOIN clinicians c ON c.id = a.clinician_id                  -- get doctor info
JOIN medications m ON m.id = pr.medication_id;              -- get medication info


