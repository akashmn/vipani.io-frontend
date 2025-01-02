import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHeader from '../components/ProfileHeader';
import ProfileMenu from '../components/ProfileMenu';
import RecentlyViewed from '../components/RecentlyViewed';

export default function ProfileScreen() {
  const menuItems = [
    { title: 'Orders', onPress: () => {} },
    { title: 'Wishlist', onPress: () => {} },
    { title: 'Coupons', onPress: () => {} },
    { title: 'Helpline', onPress: () => {} },
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
          fullName="Full Name"
          userId="7356531419"
          userType="Consumer"
          onEdit={() => {}}
        />
        <ProfileMenu items={menuItems} />
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