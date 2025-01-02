import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import NewSellers from '../components/NewSellers';
import Pagination from '../components/Pagination';
import SellerCard from '../components/SellerCard';

export default function CommunityScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const sellers = [
    { name: 'sellers name', product: 'main product' },
    { name: 'sellers name', product: 'main product' },
    { name: 'sellers name', product: 'main product' },
    { name: 'sellers name', product: 'main product' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Community Pages</Text>
          <Ionicons name="search" size={24} color="black" />
        </View>

        <Text style={styles.sectionTitle}>New Sellers In Town</Text>
        <NewSellers />
        <Pagination total={6} current={currentPage} />

        <Text style={styles.sectionTitle}>Followed By You</Text>
        <View style={styles.sellersGrid}>
          {sellers.map((seller, index) => (
            <SellerCard
              key={index}
              name={seller.name}
              product={seller.product}
            />
          ))}
        </View>
      </ScrollView>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  sellersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
});