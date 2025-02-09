import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const wishlistItems = [
  {
    id: '1',
    sellerName: 'Seller Name',
    sellerType: 'Type of Seller',
    productName: 'Product Name',
    description: 'Product description',
    price: 'Rs. 698/-',
    quantity: 2,
  },
  // Add more items as needed
];

const WishlistItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.sellerInfo}>
      <View style={styles.profileImage} />
      <View>
        <Text style={styles.sellerName}>{item.sellerName}</Text>
        <Text style={styles.sellerType}>{item.sellerType}</Text>
        <TouchableOpacity>
          <Text style={styles.profileLink}>See Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.productInfo}>
      <Text style={styles.productName}>{item.productName}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.quantity}>Qty: {item.quantity}</Text>
    </View>
  </View>
);

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WISHLIST</Text>
      <FlatList
        data={wishlistItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <WishlistItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  sellerInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  sellerName: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sellerType: {
    textAlign: 'center',
  },
  profileLink: {
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  productInfo: {
    flex: 2,
    paddingLeft: 10,
  },
  productName: {
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 10,
  },
  price: {
    fontWeight: 'bold',
  },
  quantity: {
    textAlign: 'right',
  },
});
