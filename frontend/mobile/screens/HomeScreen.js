import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const menuItems = [
    {
      title: 'Cost Estimator',
      description: 'Calculate treatment costs with insurance',
      screen: 'CostEstimator',
      color: '#4A90E2',
    },
    {
      title: 'Patients',
      description: 'View and manage patient records',
      screen: 'Patients',
      color: '#50C878',
    },
    {
      title: 'Appointments',
      description: 'Schedule and view appointments',
      screen: 'Appointments',
      color: '#FF6B6B',
    },
    {
      title: 'Treatments',
      description: 'Browse available dental treatments',
      screen: 'Treatments',
      color: '#9B59B6',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>ClinicCare+</Text>
          <Text style={styles.subtitle}>Dental Clinic Management</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.menuItem, { backgroundColor: item.color }]}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Features</Text>
          <Text style={styles.infoText}>
            • Smart cost estimation with insurance coverage{'\n'}
            • Medication warnings for blood thinners{'\n'}
            • Appointment scheduling and management{'\n'}
            • Patient record management
          </Text>
        </View>
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
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  menuContainer: {
    marginBottom: 30,
  },
  menuItem: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  menuDescription: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
  },
  infoContainer: {
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
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});