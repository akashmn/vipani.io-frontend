import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type SellerCardProps = {
  name: string;
  product: string;
};

export default function SellerCard({ name, product }: SellerCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.product}>{product}</Text>
      <View style={styles.productsGrid}>
        {[1, 2, 3].map((item) => (
          <View key={item} style={styles.productItem} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    width: '48%',
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginBottom: 10,
  },
  name: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
  product: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    marginBottom: 10,
  },
  productsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productItem: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#FFF',
  },
});