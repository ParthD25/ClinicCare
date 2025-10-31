from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

# Patient schemas
class PatientBase(BaseModel):
    first_name: str
    last_name: str
    date_of_birth: Optional[str] = None
    sex: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None

class PatientCreate(PatientBase):
    pass

class Patient(PatientBase):
    id: int

    class Config:
        from_attributes = True

# Treatment schemas
class TreatmentBase(BaseModel):
    name: str
    description: Optional[str] = None
    category: Optional[str] = None
    base_fee: Optional[float] = None

class Treatment(TreatmentBase):
    id: int

    class Config:
        from_attributes = True

# Insurance schemas
class InsurancePlanBase(BaseModel):
    payer_name: str
    plan_name: Optional[str] = None

class InsurancePlan(InsurancePlanBase):
    id: int

    class Config:
        from_attributes = True

class CoverageRuleBase(BaseModel):
    insurance_plan_id: int
    category: str
    coverage_percent: int
    deductible_amount: Optional[float] = 0
    copay_amount: Optional[float] = 0
    notes: Optional[str] = None

class CoverageRule(CoverageRuleBase):
    id: int

    class Config:
        from_attributes = True

# Cost Estimator schemas
class CostEstimateRequest(BaseModel):
    patient_id: int
    treatment_id: int

class CostEstimate(BaseModel):
    treatment_name: str
    base_fee: float
    covered_amount: float
    patient_cost: float
    deductible_applied: float
    copay_applied: float
    insurance_plan: Optional[str] = None
    warnings: List[str] = []

# Appointment schemas
class AppointmentBase(BaseModel):
    patient_id: int
    clinician_id: int
    appt_date: str
    start_time: Optional[str] = None
    end_time: Optional[str] = None
    reason: Optional[str] = None
    diagnosis: Optional[str] = None
    status: str = "scheduled"
    notes: Optional[str] = None

class AppointmentCreate(AppointmentBase):
    pass

class Appointment(AppointmentBase):
    id: int
    patient_name: Optional[str] = None
    clinician_name: Optional[str] = None

    class Config:
        from_attributes = True

# Medication Warning schemas
class MedicationWarning(BaseModel):
    patient_name: str
    medication_name: str
    warning_type: str
    prescribed_date: str
    dosage: str
    frequency: str

# Reminder schemas
class ReminderBase(BaseModel):
    patient_id: int
    due_at: str
    kind: str
    payload_json: Optional[str] = None

class ReminderCreate(ReminderBase):
    pass

class Reminder(ReminderBase):
    id: int
    sent_at: Optional[str] = None

    class Config:
        from_attributes = True