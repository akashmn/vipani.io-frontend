import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type SellerCardProps = {
  name: string;
  product: string;
  avatar: any; // Image source for avatar
  productImages: any[]; // Array of image sources for the product grid
};

export default function SellerCard({ name, product, avatar, productImages }: SellerCardProps) {
  return (
    <View style={styles.card}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.product}>{product}</Text>
      <View style={styles.productsGrid}>
        {productImages.slice(0, 3).map((image, index) => (
          <Image key={index} source={image} style={styles.productItem} />
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
    alignSelf: 'center',
    marginBottom: 10,
    resizeMode: 'cover',
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
    borderRadius: 5,
    resizeMode: 'cover',
  },
});
