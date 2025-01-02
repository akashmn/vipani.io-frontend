import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type CartItemProps = {
  sellerName: string;
  sellerType: string;
  productName: string;
  description: string;
  price: string;
  quantity: number;
  onSeeProfile: () => void;
};

export default function CartItem({
  sellerName,
  sellerType,
  productName,
  description,
  price,
  quantity,
  onSeeProfile,
}: CartItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.sellerInfo}>
        <View style={styles.avatar} />
        <View style={styles.sellerDetails}>
          <Text style={styles.sellerName}>{sellerName}</Text>
          <Text style={styles.sellerType}>{sellerType}</Text>
          <TouchableOpacity onPress={onSeeProfile}>
            <Text style={styles.seeProfile}>see profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.productInfo}>
        <View>
          <Text style={styles.productName}>{productName}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.imagesContainer}>
          {[1, 2].map((item) => (
            <View key={item} style={styles.productImage} />
          ))}
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.quantity}>Qty: {quantity}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
  },
  sellerInfo: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    marginRight: 12,
  },
  sellerDetails: {
    flex: 1,
  },
  sellerName: {
    fontSize: 16,
    fontWeight: '500',
  },
  sellerType: {
    fontSize: 14,
    color: '#666',
  },
  seeProfile: {
    color: '#2196F3',
    fontSize: 14,
    marginTop: 4,
  },
  productInfo: {
    marginLeft: 62,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  imagesContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  productImage: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    marginRight: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
  },
  quantity: {
    fontSize: 14,
    color: '#666',
  },
});