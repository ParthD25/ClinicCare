-- ClinicCare+ Seed Data
-- I added this sample data to test the new features.

-- Insurance plans
INSERT INTO insurance_plans (payer_name, plan_name) VALUES
('Blue Cross Blue Shield', 'PPO Standard'),
('Aetna', 'HMO Plus');

-- Patient insurance (link existing patients to plans)
INSERT INTO patient_insurance (patient_id, insurance_plan_id, member_id, group_id, effective_date) VALUES
(1, 1, 'BCBS123456', 'GRP001', '2025-01-01'), -- Alice Brown
(2, 2, 'AET789012', 'GRP002', '2025-01-01'); -- Ben Chan

-- Coverage rules
INSERT INTO coverage_rules (insurance_plan_id, category, coverage_percent, deductible_amount, copay_amount, notes) VALUES
(1, 'preventive', 100, 0, 0, 'No cost for preventive care'),
(1, 'basic', 80, 50, 25, '80% coverage after deductible'),
(1, 'major', 70, 100, 50, 'Major procedures'),
(2, 'preventive', 100, 0, 0, 'Full coverage'),
(2, 'basic', 90, 25, 15, 'High coverage for basic services');

-- Update treatments with categories and fees
UPDATE treatments SET category = 'preventive', base_fee = 150.00 WHERE name = 'Vaccination';
UPDATE treatments SET category = 'basic', base_fee = 200.00 WHERE name = 'Physical Therapy';

-- Add more treatments for testing
INSERT INTO treatments (name, description, category, base_fee) VALUES
('Dental Cleaning', 'Professional teeth cleaning', 'preventive', 120.00),
('Composite Filling', 'Tooth filling restoration', 'basic', 250.00),
('Root Canal', 'Endodontic treatment', 'major', 800.00),
('Invisalign Consultation', 'Orthodontic assessment', 'ortho', 300.00);

-- Documents (sample benefit PDFs)
INSERT INTO documents (patient_id, insurance_plan_id, kind, filename, uploaded_by, uploaded_at) VALUES
(NULL, 1, 'benefit_pdf', 'bcbs_ppo_benefits_2025.pdf', 'admin', '2025-10-30T10:00:00Z'),
(NULL, 2, 'benefit_pdf', 'aetna_hmo_benefits_2025.pdf', 'admin', '2025-10-30T10:00:00Z');

-- Reminders (sample bi-weekly and Invisalign)
INSERT INTO reminders (patient_id, due_at, kind, payload_json) VALUES
(1, '2025-11-13T09:00:00Z', 'biweekly_checkin', NULL), -- Alice's next check-in
(2, '2025-11-10T14:00:00Z', 'invisalign_change', '{"aligner": "#3", "instructions": "Change every 7 days"}'); -- Ben's aligner change

-- Inventory items
INSERT INTO inventory_items (name, unit, quantity_on_hand, reorder_point) VALUES
('Nitrile Gloves (box of 100)', 'box', 5, 2),
('Syringes 5ml (box of 50)', 'box', 10, 3),
('Dental Floss (pack)', 'pack', 20, 5);

-- Treatment inventory mapping
INSERT INTO treatment_inventory_map (treatment_id, item_id, avg_qty_per_treatment) VALUES
(1, 1, 0.5), -- Vaccination uses 0.5 boxes of gloves (50 pairs)
(1, 2, 0.2), -- Vaccination uses 0.2 boxes of syringes (10 syringes)
(4, 1, 1.0); -- Dental Cleaning uses 1 box of gloves (100 pairs)