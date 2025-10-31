import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

// API client
const API_BASE_URL = 'http://127.0.0.1:8001'; // Update this for production

export default function CostEstimatorScreen() {
  const [patients, setPatients] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [estimate, setEstimate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  // Load patients and treatments on component mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoadingData(true);
      const [patientsRes, treatmentsRes] = await Promise.all([
        fetch(`${API_BASE_URL}/patients?limit=100`),
        fetch(`${API_BASE_URL}/treatments`),
      ]);

      if (patientsRes.ok) {
        const patientsData = await patientsRes.json();
        setPatients(patientsData);
      }

      if (treatmentsRes.ok) {
        const treatmentsData = await treatmentsRes.json();
        setTreatments(treatmentsData);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load data. Make sure the backend server is running.');
      console.error('Load data error:', error);
    } finally {
      setLoadingData(false);
    }
  };

  const calculateEstimate = async () => {
    if (!selectedPatient || !selectedTreatment) {
      Alert.alert('Error', 'Please select both a patient and treatment.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/estimate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          patient_id: parseInt(selectedPatient),
          treatment_id: parseInt(selectedTreatment),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setEstimate(data);
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.detail || 'Failed to calculate estimate');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to server. Make sure the backend is running.');
      console.error('Estimate error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4A90E2" />
          <Text style={styles.loadingText}>Loading data...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Cost Estimator</Text>
        <Text style={styles.subtitle}>
          Calculate treatment costs with insurance coverage
        </Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Select Patient:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedPatient}
              onValueChange={(value) => setSelectedPatient(value)}
              style={styles.picker}
            >
              <Picker.Item label="Choose a patient..." value="" />
              {patients.map((patient) => (
                <Picker.Item
                  key={patient.id}
                  label={`${patient.first_name} ${patient.last_name}`}
                  value={patient.id.toString()}
                />
              ))}
            </Picker>
          </View>

          <Text style={styles.label}>Select Treatment:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedTreatment}
              onValueChange={(value) => setSelectedTreatment(value)}
              style={styles.picker}
            >
              <Picker.Item label="Choose a treatment..." value="" />
              {treatments.map((treatment) => (
                <Picker.Item
                  key={treatment.id}
                  label={`${treatment.name} - $${treatment.base_fee || 'N/A'}`}
                  value={treatment.id.toString()}
                />
              ))}
            </Picker>
          </View>

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={calculateEstimate}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Calculating...' : 'Calculate Estimate'}
            </Text>
          </TouchableOpacity>
        </View>

        {estimate && (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsTitle}>Cost Estimate</Text>

            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Treatment:</Text>
              <Text style={styles.resultValue}>{estimate.treatment_name}</Text>
            </View>

            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Base Fee:</Text>
              <Text style={styles.resultValue}>${estimate.base_fee}</Text>
            </View>

            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Insurance Coverage:</Text>
              <Text style={styles.resultValue}>${estimate.covered_amount}</Text>
            </View>

            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Your Cost:</Text>
              <Text style={[styles.resultValue, styles.finalCost]}>
                ${estimate.patient_cost}
              </Text>
            </View>

            {estimate.insurance_plan && (
              <View style={styles.resultRow}>
                <Text style={styles.resultLabel}>Insurance Plan:</Text>
                <Text style={styles.resultValue}>{estimate.insurance_plan}</Text>
              </View>
            )}

            {estimate.warnings && estimate.warnings.length > 0 && (
              <View style={styles.warningsContainer}>
                <Text style={styles.warningsTitle}>⚠️ Important Warnings:</Text>
                {estimate.warnings.map((warning, index) => (
                  <Text key={index} style={styles.warningText}>
                    • {warning}
                  </Text>
                ))}
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  picker: {
    height: 50,
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultLabel: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  resultValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'right',
    flex: 1,
  },
  finalCost: {
    color: '#4A90E2',
    fontSize: 18,
  },
  warningsContainer: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#FFF3CD',
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#FFC107',
  },
  warningsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 10,
  },
  warningText: {
    fontSize: 14,
    color: '#856404',
    marginBottom: 5,
    lineHeight: 20,
  },
});