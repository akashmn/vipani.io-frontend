import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type ProductCardProps = {
  name: string;
  seller: string;
  avatar: any; // Image source for avatar
  productImages?: any[]; // Optional prop (array of images for product grid)
};

export default function ProductCard({
  name,
  seller,
  avatar,
  productImages = [], // Default to empty array if not passed
}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.product}>{seller}</Text>
      <View style={styles.productsGrid}>
        {/* Check if productImages array is not empty before rendering */}
        {productImages.length > 0 ? (
          productImages.slice(0, 3).map((image, index) => (
            <Image key={index} source={image} style={styles.productItem} />
          ))
        ) : (
          <Text style={styles.noImagesText}>No products available</Text> // Optional message if no images
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: 15,
    width: '48%',
    marginBottom: 15,
    borderWidth: 1,
    elevation: 2,
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
    marginLeft: 16,
  },
  productItem: {
    width: '30%',
    height:50,
    aspectRatio: 1,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  noImagesText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    marginTop: 10,
  },
});
