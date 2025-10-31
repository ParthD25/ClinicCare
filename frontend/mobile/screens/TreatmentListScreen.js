import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

const API_BASE_URL = 'http://127.0.0.1:8001';

export default function TreatmentListScreen() {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTreatments();
  }, []);

  const loadTreatments = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/treatments`);
      if (response.ok) {
        const data = await response.json();
        setTreatments(data);
      }
    } catch (error) {
      console.error('Load treatments error:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderTreatment = ({ item }) => (
    <View style={styles.treatmentCard}>
      <View style={styles.treatmentHeader}>
        <Text style={styles.treatmentName}>{item.name}</Text>
        <Text style={styles.treatmentFee}>
          ${item.base_fee || 'N/A'}
        </Text>
      </View>
      <Text style={styles.treatmentCategory}>
        Category: {item.category || 'General'}
      </Text>
      <Text style={styles.treatmentDescription}>
        {item.description || 'No description available'}
      </Text>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4A90E2" />
          <Text style={styles.loadingText}>Loading treatments...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dental Treatments</Text>
      <FlatList
        data={treatments}
        renderItem={renderTreatment}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
    padding: 20,
  },
  listContainer: {
    padding: 20,
  },
  treatmentCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  treatmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  treatmentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  treatmentFee: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  treatmentCategory: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  treatmentDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});