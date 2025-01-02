import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>hello,</Text>
            <Text style={styles.name}>akash m nandan</Text>
          </View>
          <View style={styles.searchIcon}>
            <Ionicons name="search" size={24} color="black" />
          </View>
        </View>

        <View style={styles.bannerContainer}>
          <Text style={styles.sectionTitle}>banners/offers</Text>
          <View style={styles.banner} />
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.categoryCircle, { backgroundColor: '#4CAF50' }]} />
            <View style={[styles.categoryCircle, { backgroundColor: '#E91E63' }]} />
            <View style={[styles.categoryCircle, { backgroundColor: '#795548' }]} />
            <View style={[styles.categoryCircle, { backgroundColor: '#2196F3' }]} />
            <View style={[styles.categoryCircle, { backgroundColor: '#3F51B5' }]} />
          </ScrollView>
        </View>

        <View style={styles.newArrivalsContainer}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          <View style={styles.gridContainer}>
            <View style={styles.gridItem} />
            <View style={styles.gridItem} />
            <View style={styles.gridItem} />
            <View style={styles.gridItem} />
          </View>
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
  greeting: {
    fontSize: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchIcon: {
    padding: 8,
  },
  bannerContainer: {
    padding: 16,
  },
  banner: {
    height: 150,
    backgroundColor: '#40E0D0',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  categoriesContainer: {
    padding: 16,
  },
  categoryCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  newArrivalsContainer: {
    padding: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    height: 150,
    backgroundColor: '#2E8B57',
    borderRadius: 10,
    marginBottom: 16,
  },
});