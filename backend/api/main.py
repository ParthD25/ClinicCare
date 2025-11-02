from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
import json
from fastapi.middleware.cors import CORSMiddleware

from database import get_db
from models import (
    Patient, PatientCreate,
    Treatment,
    CostEstimate, CostEstimateRequest,
    Appointment, AppointmentCreate,
    MedicationWarning,
    Reminder, ReminderCreate
)

app = FastAPI(
    title="ClinicCare+ API",
    description="Backend API for ClinicCare+ dental clinic management system",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://4b8ec263.cliniccare-web.pages.dev"],  # Add your deployed domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to ClinicCare+ API"}

# Cost Estimator Endpoint
@app.post("/estimate", response_model=CostEstimate)
def calculate_cost_estimate(request: CostEstimateRequest, db: Session = Depends(get_db)):
    """
    Calculate out-of-pocket cost for a treatment based on patient's insurance.
    Includes medication warnings if patient is on blood thinners.
    """
    # Get treatment details
    treatment = db.execute("""
        SELECT id, name, base_fee, category FROM treatments WHERE id = ?
    """, (request.treatment_id,)).fetchone()

    if not treatment:
        raise HTTPException(status_code=404, detail="Treatment not found")

    treatment_name, base_fee, category = treatment[1], treatment[2], treatment[3]

    # Get patient's insurance and coverage
    patient_insurance = db.execute("""
        SELECT pi.insurance_plan_id, ip.payer_name, ip.plan_name
        FROM patient_insurance pi
        JOIN insurance_plans ip ON pi.insurance_plan_id = ip.id
        WHERE pi.patient_id = ?
    """, (request.patient_id,)).fetchone()

    covered_amount = 0
    deductible_applied = 0
    copay_applied = 0
    insurance_plan = None
    warnings = []

    if patient_insurance:
        insurance_plan = f"{patient_insurance[1]} - {patient_insurance[2]}"

        # Get coverage rule for this treatment category
        coverage = db.execute("""
            SELECT coverage_percent, deductible_amount, copay_amount
            FROM coverage_rules
            WHERE insurance_plan_id = ? AND category = ?
        """, (patient_insurance[0], category)).fetchone()

        if coverage:
            coverage_percent, deductible, copay = coverage
            covered_amount = base_fee * (coverage_percent / 100)
            deductible_applied = min(deductible, covered_amount) if deductible > 0 else 0
            copay_applied = copay
        else:
            warnings.append(f"No coverage rule found for category '{category}'")

    # Calculate patient cost
    patient_cost = base_fee - covered_amount + copay_applied

    # Check for medication warnings
    medication_warnings = db.execute("""
        SELECT m.name, m.requires_warning
        FROM prescriptions pr
        JOIN appointments a ON a.id = pr.appointment_id
        JOIN medications m ON m.id = pr.medication_id
        WHERE a.patient_id = ? AND m.requires_warning IS NOT NULL
        ORDER BY pr.prescribed_date DESC
    """, (request.patient_id,)).fetchall()

    for med_name, warning_type in medication_warnings:
        if warning_type == 'blood_thinner':
            warnings.append(f"Patient is on blood thinner ({med_name}) - consult clinician before dental procedures")
        elif warning_type == 'anticoagulant':
            warnings.append(f"Patient is on anticoagulant ({med_name}) - special care required")

    return CostEstimate(
        treatment_name=treatment_name,
        base_fee=base_fee,
        covered_amount=covered_amount,
        patient_cost=max(0, patient_cost),  # Ensure not negative
        deductible_applied=deductible_applied,
        copay_applied=copay_applied,
        insurance_plan=insurance_plan,
        warnings=warnings
    )

# Patients endpoints
@app.get("/patients", response_model=List[Patient])
def get_patients(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    patients = db.execute("SELECT * FROM patients LIMIT ? OFFSET ?", (limit, skip)).fetchall()
    return [Patient(**dict(zip(['id', 'first_name', 'last_name', 'date_of_birth', 'sex', 'phone', 'email', 'address'], row))) for row in patients]

@app.get("/patients/{patient_id}", response_model=Patient)
def get_patient(patient_id: int, db: Session = Depends(get_db)):
    patient = db.execute("SELECT * FROM patients WHERE id = ?", (patient_id,)).fetchone()
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return Patient(**dict(zip(['id', 'first_name', 'last_name', 'date_of_birth', 'sex', 'phone', 'email', 'address'], patient)))

# Appointments endpoints
@app.get("/appointments", response_model=List[Appointment])
def get_appointments(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    appointments = db.execute("""
        SELECT a.*, p.first_name || ' ' || p.last_name as patient_name,
               c.first_name || ' ' || c.last_name as clinician_name
        FROM appointments a
        JOIN patients p ON a.patient_id = p.id
        JOIN clinicians c ON a.clinician_id = c.id
        ORDER BY a.appt_date DESC, a.start_time DESC
        LIMIT ? OFFSET ?
    """, (limit, skip)).fetchall()

    result = []
    for row in appointments:
        data = dict(zip(['id', 'patient_id', 'clinician_id', 'appt_date', 'start_time', 'end_time',
                        'reason', 'diagnosis', 'status', 'notes', 'patient_name', 'clinician_name'], row))
        result.append(Appointment(**data))
    return result

@app.post("/appointments", response_model=Appointment)
def create_appointment(appointment: AppointmentCreate, db: Session = Depends(get_db)):
    # Insert appointment
    cursor = db.execute("""
        INSERT INTO appointments (patient_id, clinician_id, appt_date, start_time, end_time, reason, status, notes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """, (appointment.patient_id, appointment.clinician_id, appointment.appt_date,
          appointment.start_time, appointment.end_time, appointment.reason, appointment.status, appointment.notes))

    db.commit()

    # Get the created appointment with names
    new_appointment = db.execute("""
        SELECT a.*, p.first_name || ' ' || p.last_name as patient_name,
               c.first_name || ' ' || c.last_name as clinician_name
        FROM appointments a
        JOIN patients p ON a.patient_id = p.id
        JOIN clinicians c ON a.clinician_id = c.id
        WHERE a.id = ?
    """, (cursor.lastrowid,)).fetchone()

    data = dict(zip(['id', 'patient_id', 'clinician_id', 'appt_date', 'start_time', 'end_time',
                    'reason', 'diagnosis', 'status', 'notes', 'patient_name', 'clinician_name'], new_appointment))
    return Appointment(**data)

# Treatments endpoints
@app.get("/treatments", response_model=List[Treatment])
def get_treatments(db: Session = Depends(get_db)):
    treatments = db.execute("SELECT * FROM treatments ORDER BY category, name").fetchall()
    return [Treatment(**dict(zip(['id', 'name', 'description', 'category', 'base_fee'], row))) for row in treatments]

# Medication warnings endpoint
@app.get("/patients/{patient_id}/warnings", response_model=List[MedicationWarning])
def get_patient_warnings(patient_id: int, db: Session = Depends(get_db)):
    warnings = db.execute("""
        SELECT p.first_name || ' ' || p.last_name as patient_name,
               m.name as medication_name, m.requires_warning as warning_type,
               pr.prescribed_date, pr.dosage, pr.frequency
        FROM prescriptions pr
        JOIN appointments a ON a.id = pr.appointment_id
        JOIN patients p ON p.id = a.patient_id
        JOIN medications m ON m.id = pr.medication_id
        WHERE a.patient_id = ? AND m.requires_warning IS NOT NULL
        ORDER BY pr.prescribed_date DESC
    """, (patient_id,)).fetchall()

    return [MedicationWarning(**dict(zip(['patient_name', 'medication_name', 'warning_type',
                                         'prescribed_date', 'dosage', 'frequency'], row))) for row in warnings]

# Reminders endpoints
@app.get("/reminders", response_model=List[Reminder])
def get_reminders(db: Session = Depends(get_db)):
    reminders = db.execute("SELECT * FROM reminders ORDER BY due_at").fetchall()
    return [Reminder(**dict(zip(['id', 'patient_id', 'due_at', 'kind', 'payload_json', 'sent_at'], row))) for row in reminders]

@app.post("/reminders", response_model=Reminder)
def create_reminder(reminder: ReminderCreate, db: Session = Depends(get_db)):
    cursor = db.execute("""
        INSERT INTO reminders (patient_id, due_at, kind, payload_json)
        VALUES (?, ?, ?, ?)
    """, (reminder.patient_id, reminder.due_at, reminder.kind, reminder.payload_json))

    db.commit()

    new_reminder = db.execute("SELECT * FROM reminders WHERE id = ?", (cursor.lastrowid,)).fetchone()
    return Reminder(**dict(zip(['id', 'patient_id', 'due_at', 'kind', 'payload_json', 'sent_at'], new_reminder)))