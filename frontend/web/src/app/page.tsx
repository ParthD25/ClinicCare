'use client';

import { useState, useEffect } from 'react';

interface Patient {
  id: number;
  name: string;
  email: string;
  phone: string;
  date_of_birth: string;
}

interface Appointment {
  id: number;
  patient_id: number;
  treatment_id: number;
  appointment_date: string;
  status: string;
  notes: string;
}

export default function PatientPortal() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch('http://localhost:8000/patients');
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPatientAppointments = async (patientId: number) => {
    try {
      const response = await fetch(`http://localhost:8000/appointments?patient_id=${patientId}`);
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient);
    fetchPatientAppointments(patient.id);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="text-xl text-blue-600">Loading patient portal...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">ClinicCare+ Patient Portal</h1>
          <p className="text-gray-600 mt-2">Your dental health companion</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Patient Selection */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Patient</h2>
            <div className="space-y-2">
              {patients.map((patient) => (
                <button
                  key={patient.id}
                  onClick={() => handlePatientSelect(patient)}
                  className={`w-full text-left p-3 rounded-md border transition-colors ${
                    selectedPatient?.id === patient.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium text-gray-900">{patient.name}</div>
                  <div className="text-sm text-gray-600">{patient.email}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Patient Details & Appointments */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {selectedPatient ? (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Patient Details</h2>
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900">{selectedPatient.name}</h3>
                  <p className="text-gray-600">{selectedPatient.email}</p>
                  <p className="text-gray-600">{selectedPatient.phone}</p>
                  <p className="text-gray-600">DOB: {new Date(selectedPatient.date_of_birth).toLocaleDateString()}</p>
                </div>

                <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Appointments</h3>
                <div className="space-y-3">
                  {appointments.length > 0 ? (
                    appointments.map((appointment) => (
                      <div key={appointment.id} className="border border-gray-200 rounded-md p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900">
                              {new Date(appointment.appointment_date).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-gray-600">Status: {appointment.status}</p>
                            {appointment.notes && (
                              <p className="text-sm text-gray-600 mt-1">{appointment.notes}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No upcoming appointments</p>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center text-gray-500">
                <p>Select a patient to view their details and appointments</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
