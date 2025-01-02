import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import DeliveryAddress from '../components/DeliveryAddress';
import CartItem from '../components/CartItem';
import PriceDetails from '../components/PriceDetails';

export default function CartScreen() {
  const cartItems = [
    {
      sellerName: "seller's name",
      sellerType: "what kind of seller",
      productName: "product name",
      description: "description",
      price: "Rs. 698/-",
      quantity: 2,
    },
    {
      sellerName: "seller's name",
      sellerType: "what kind of seller",
      productName: "product name",
      description: "description",
      price: "Rs. 698/-",
      quantity: 1,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Cart</Text>
        <Ionicons name="search" size={24} color="black" />
      </View>

      <ScrollView>
        <DeliveryAddress
          name="Akash M Nandan, 689109"
          address="Manantharayil HJ, Nannadu, Thiruvanandoor P.O, Ch..."
          onChangeAddress={() => {}}
        />

        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            {...item}
            onSeeProfile={() => {}}
          />
        ))}

        <PriceDetails
          itemCount={3}
          totalPrice="2345/-"
          discount="40/-"
          deliveryCharges="free"
          finalAmount="2305/-"
        />
      </ScrollView>

      <TouchableOpacity style={styles.placeOrderButton}>
        <Text style={styles.placeOrderText}>Place order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  placeOrderButton: {
    backgroundColor: '#C25B5B',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  placeOrderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});