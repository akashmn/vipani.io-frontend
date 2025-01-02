import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SellerCard from './SellerCard';

type Seller = {
  name: string;
  type: string;
};

type RecentlyViewedProps = {
  sellers: Seller[];
};

export default function RecentlyViewed({ sellers }: RecentlyViewedProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recently Viewed</Text>
      <View style={styles.grid}>
        {sellers.map((seller, index) => (
          <SellerCard
            key={index}
            name={seller.name}
            product={seller.type}
          />
        ))}
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});