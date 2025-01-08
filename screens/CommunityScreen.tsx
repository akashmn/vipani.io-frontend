import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import NewSellers from '../components/NewSellers';
import Pagination from '../components/Pagination';
import SellerCard from '../components/SellerCard';
import DP from '../components/ProfilePic';

const DPItem = {
  title: 'Profile',
  onPress: () => console.log('DP Pressed'),
  imageSource: require('../static/images/dp.jpg'),
};

export default function CommunityScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const sellers = [
    { name: 'sellers name', product: 'main product' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Community Pages</Text>
          <View style={styles.rightSection}>
            <Ionicons name="search" size={24} color="black" />
            <DP item={DPItem} isConsumer={true} />
          </View>
        </View>

        <Text style={styles.sectionTitle}>New Sellers In Town</Text>
        <NewSellers />
        <Pagination total={6} current={currentPage} />

        <Text style={styles.sectionTitle}>Followed By You</Text>
        <View style={styles.sellersGrid}>
          {sellers.map((seller, index) => (
            <SellerCard
            name="Prasanth PP"
            product="Spices"
            avatar={require('../static/images/sellerAvatar1.jpeg')}
            productImages={[
              require('../static/images/sellerimages11.jpeg'),
              require('../static/images/sellerimages12.jpeg'),
              require('../static/images/sellerimages13.jpeg'),
            ]}
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
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rightSection: {
    flexDirection: 'row',   
    justifyContent: 'flex-end', 
    alignItems: 'center',  
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