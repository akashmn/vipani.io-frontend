import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const orders = [
  {
    id: '1',
    sellerName: 'Seller Name',
    sellerType: 'Type of Seller',
    productName: 'Product Name',
    description: 'Product description',
    price: 'Rs. 698/-',
    quantity: 2,
  },
  // Add more orders as needed
];

const OrderItem = ({ order }) => (
  <View style={styles.orderContainer}>
    <View style={styles.sellerInfo}>
      <View style={styles.profileImage} />
      <View>
        <Text style={styles.sellerName}>{order.sellerName}</Text>
        <Text style={styles.sellerType}>{order.sellerType}</Text>
        <TouchableOpacity>
          <Text style={styles.profileLink}>See Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.productInfo}>
      <Text style={styles.productName}>{order.productName}</Text>
      <Text style={styles.description}>{order.description}</Text>
      <Text style={styles.price}>{order.price}</Text>
      <Text style={styles.quantity}>Qty: {order.quantity}</Text>
    </View>
  </View>
);

export default function PreviousOrdersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previous Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem order={item} />}
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
  orderContainer: {
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
