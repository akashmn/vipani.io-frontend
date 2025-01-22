import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHeader from '../components/ProfileHeader';
import ProfileMenu from '../components/ProfileMenu';
import RecentlyViewed from '../components/RecentlyViewed';
import PreviousOrdersScreen from './PreviousOrdersScreen';

export default function ProfileScreen({ navigation }) {
  const menuItems = [
    {
      title: 'PreviousOrders',
      onPress: () => navigation.navigate('PreviousOrders') // Navigate to PreviousOrdersScreen
    },
    {
      title: 'Wishlist',
      onPress: () => navigation.navigate('Wishlist') // Navigate to WishlistScreen
    },
    { title: 'Coupons', onPress: () => {} },
    {
      title: 'Helpline',
      onPress: () => navigation.navigate('ContactUs') // Navigate to ContactUsScreen
    },
  ];

  const recentSellers = [
    { name: "seller's name", type: "what kind of seller" },
    { name: "seller's name", type: "main product" },
    { name: "seller's name", type: "main product" },
    { name: "seller's name", type: "main product" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileHeader
          fullName="Akash M Nandan"
          userId="7356531419"
          userType="Consumer"
          onEdit={() => {}}
        />
        <ProfileMenu items={menuItems} navigation={navigation} />
        <RecentlyViewed sellers={recentSellers} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
