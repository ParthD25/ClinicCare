import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Import screens
import HomeScreen from './screens/HomeScreen';
import PatientListScreen from './screens/PatientListScreen';
import CostEstimatorScreen from './screens/CostEstimatorScreen';
import AppointmentListScreen from './screens/AppointmentListScreen';
import TreatmentListScreen from './screens/TreatmentListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4A90E2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'ClinicCare+' }}
        />
        <Stack.Screen
          name="Patients"
          component={PatientListScreen}
          options={{ title: 'Patients' }}
        />
        <Stack.Screen
          name="CostEstimator"
          component={CostEstimatorScreen}
          options={{ title: 'Cost Estimator' }}
        />
        <Stack.Screen
          name="Appointments"
          component={AppointmentListScreen}
          options={{ title: 'Appointments' }}
        />
        <Stack.Screen
          name="Treatments"
          component={TreatmentListScreen}
          options={{ title: 'Treatments' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
