import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type PriceDetailsProps = {
  itemCount: number;
  totalPrice: string;
  discount: string;
  deliveryCharges: string;
  finalAmount: string;
};

export default function PriceDetails({
  itemCount,
  totalPrice,
  discount,
  deliveryCharges,
  finalAmount,
}: PriceDetailsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Price Details</Text>
      <View style={styles.row}>
        <Text>No of items</Text>
        <Text>{itemCount}</Text>
      </View>
      <View style={styles.row}>
        <Text>Total Price</Text>
        <Text>{totalPrice}</Text>
      </View>
      <View style={styles.row}>
        <Text>Discount</Text>
        <Text>{discount}</Text>
      </View>
      <View style={styles.row}>
        <Text>Delivery Charges</Text>
        <Text>{deliveryCharges}</Text>
      </View>
      <View style={[styles.row, styles.totalRow]}>
        <Text style={styles.totalText}>Total Amount</Text>
        <Text style={styles.totalText}>{finalAmount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    paddingTop: 12,
    marginTop: 4,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});