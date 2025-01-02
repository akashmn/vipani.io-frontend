import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type DeliveryAddressProps = {
  name: string;
  address: string;
  onChangeAddress: () => void;
};

export default function DeliveryAddress({ name, address, onChangeAddress }: DeliveryAddressProps) {
  return (
    <View style={styles.container}>
      <View style={styles.addressInfo}>
        <Text style={styles.label}>Deliver To: </Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
      <TouchableOpacity style={styles.changeButton} onPress={onChangeAddress}>
        <Text style={styles.changeButtonText}>Change</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressInfo: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    color: '#666',
  },
  changeButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  changeButtonText: {
    color: 'white',
    fontSize: 14,
  },
});