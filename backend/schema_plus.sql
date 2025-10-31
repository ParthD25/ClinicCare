-- ClinicCare+ Schema Extensions
-- I added these tables to extend the base ClinicCare database for advanced features like insurance estimation, reminders, documents, and inventory management.

PRAGMA foreign_keys = ON;

-- Insurance basics: I created this to store different insurance plans available to patients.
CREATE TABLE IF NOT EXISTS insurance_plans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  payer_name TEXT NOT NULL,  -- Name of the insurance company
  plan_name TEXT             -- Specific plan name
);

-- Patient insurance links: I added this to connect patients to their insurance plans with details.
CREATE TABLE IF NOT EXISTS patient_insurance (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patient_id INTEGER NOT NULL,
  insurance_plan_id INTEGER NOT NULL,
  member_id TEXT,            -- Member ID on the card
  group_id TEXT,             -- Group number
  effective_date TEXT,       -- When coverage starts
  FOREIGN KEY(patient_id) REFERENCES patients(id),
  FOREIGN KEY(insurance_plan_id) REFERENCES insurance_plans(id)
);

-- Coverage rules: I built this table to define how much each plan covers for different treatment categories.
CREATE TABLE IF NOT EXISTS coverage_rules (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  insurance_plan_id INTEGER NOT NULL,
  category TEXT NOT NULL,           -- e.g. 'preventive','basic','major','ortho'
  coverage_percent INTEGER NOT NULL, -- 0..100 percentage covered
  deductible_amount REAL DEFAULT 0,  -- Deductible per treatment
  copay_amount REAL DEFAULT 0,       -- Fixed copay amount
  notes TEXT,                        -- Any special notes
  FOREIGN KEY(insurance_plan_id) REFERENCES insurance_plans(id)
);

-- I updated the treatments table to include category and base fee for cost estimation.
-- Note: This ALTER will be run separately since SQLite doesn't support multiple ALTERs in one statement.
-- ALTER TABLE treatments ADD COLUMN category TEXT; -- e.g. 'basic'
-- ALTER TABLE treatments ADD COLUMN base_fee REAL; -- clinic fee schedule

-- Documents: I added this for storing uploaded PDFs like benefit coverage, consents, and treatment plans.
CREATE TABLE IF NOT EXISTS documents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patient_id INTEGER,               -- NULL for generic plan docs
  insurance_plan_id INTEGER,        -- Optional link to plan
  kind TEXT NOT NULL,               -- 'benefit_pdf','consent','treatment_plan'
  filename TEXT NOT NULL,           -- Stored filename
  uploaded_by TEXT,                 -- Staff who uploaded
  uploaded_at TEXT NOT NULL,        -- Upload timestamp
  FOREIGN KEY(patient_id) REFERENCES patients(id),
  FOREIGN KEY(insurance_plan_id) REFERENCES insurance_plans(id)
);

-- Reminders: I created this for scheduling bi-weekly check-ins and custom Invisalign changes.
CREATE TABLE IF NOT EXISTS reminders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patient_id INTEGER NOT NULL,
  due_at TEXT NOT NULL,             -- ISO datetime when due
  kind TEXT NOT NULL,               -- 'biweekly_checkin','invisalign_change','appt_nudge'
  payload_json TEXT,                -- Extra data like {"aligner":"#7"}
  sent_at TEXT,                     -- When notification was sent
  FOREIGN KEY(patient_id) REFERENCES patients(id)
);

-- Inventory items: I added this to track clinic supplies like syringes and gloves.
CREATE TABLE IF NOT EXISTS inventory_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,               -- e.g. 'Nitrile Gloves'
  unit TEXT,                        -- 'box','piece'
  quantity_on_hand REAL NOT NULL DEFAULT 0,
  reorder_point REAL NOT NULL DEFAULT 0  -- When to reorder
);

-- Inventory transactions: I built this to log stock changes and usage during appointments.
CREATE TABLE IF NOT EXISTS inventory_txns (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_id INTEGER NOT NULL,
  txn_type TEXT NOT NULL,           -- 'use','stock_in'
  quantity REAL NOT NULL,           -- Amount changed
  reason TEXT,                      -- 'appointment','delivery'
  appt_id INTEGER,                  -- Link to appointment if used there
  created_at TEXT NOT NULL,         -- Transaction timestamp
  FOREIGN KEY(item_id) REFERENCES inventory_items(id),
  FOREIGN KEY(appt_id) REFERENCES appointments(id)
);

-- Treatment inventory mapping: I added this to define how much of each item is used per treatment.
CREATE TABLE IF NOT EXISTS treatment_inventory_map (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  treatment_id INTEGER NOT NULL,
  item_id INTEGER NOT NULL,
  avg_qty_per_treatment REAL NOT NULL, -- e.g. gloves: 2 pairs = 4 pieces
  FOREIGN KEY(treatment_id) REFERENCES treatments(id),
  FOREIGN KEY(item_id) REFERENCES inventory_items(id)
);

-- Indexes for performance: I added these to speed up common queries.
CREATE INDEX IF NOT EXISTS idx_patient_insurance_patient ON patient_insurance(patient_id);
CREATE INDEX IF NOT EXISTS idx_coverage_rules_plan ON coverage_rules(insurance_plan_id);
CREATE INDEX IF NOT EXISTS idx_documents_patient ON documents(patient_id);
CREATE INDEX IF NOT EXISTS idx_reminders_patient ON reminders(patient_id);
CREATE INDEX IF NOT EXISTS idx_reminders_due ON reminders(due_at);
CREATE INDEX IF NOT EXISTS idx_inventory_txns_item ON inventory_txns(item_id);
CREATE INDEX IF NOT EXISTS idx_inventory_txns_appt ON inventory_txns(appt_id);