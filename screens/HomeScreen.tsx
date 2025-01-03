import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
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
          <ScrollView style={styles.bannerSection} horizontal showsHorizontalScrollIndicator={true}>
            <Image style={styles.banner} source={require('../static/images/image1.jpeg')} />
            <Image style={styles.banner} source={require('../static/images/image2.jpg')} />
            <Image style={styles.banner} source={require('../static/images/image3.jpeg')} />
            <Image style={styles.banner} source={require('../static/images/image4.jpeg')} />
            <Image style={styles.banner} source={require('../static/images/image5.jpg')} />
          </ScrollView>
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <Image style={styles.categoryCircle} source={require('../static/images/cat1.jpeg')} />
            <Image style={styles.categoryCircle} source={require('../static/images/cat2.jpeg')} />
            <Image style={styles.categoryCircle} source={require('../static/images/cat3.jpeg')} />
            <Image style={styles.categoryCircle} source={require('../static/images/cat4.jpeg')} />
            <Image style={styles.categoryCircle} source={require('../static/images/cat5.jpeg')} />
            <Image style={styles.categoryCircle} source={require('../static/images/cat6.jpeg')} />
            <Image style={styles.categoryCircle} source={require('../static/images/cat7.jpeg')} />
            <Image style={styles.categoryCircle} source={require('../static/images/cat8.jpeg')} />
          </ScrollView>
        </View>

        <View style={styles.newArrivalsContainer}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          <ScrollView contentContainerStyle={styles.gridContainer}>
            <Image style={styles.gridItem} source={require('../static/images/new1.jpeg')} />
            <Image style={styles.gridItem} source={require('../static/images/new2.jpeg')} />
            <Image style={styles.gridItem} source={require('../static/images/new3.jpeg')} />
            <Image style={styles.gridItem} source={require('../static/images/new4.jpeg')} />
          </ScrollView>
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  searchIcon: {
    padding: 8,
  },
  bannerContainer: {
    padding: 16,
  },
  bannerSection: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 12,
  },
  banner: {
    height: 170,
    width: 300,
    backgroundColor: '#40E0D0',
    borderRadius: 10,
    marginRight: 8,
    resizeMode: 'cover',
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
    marginRight: 8,
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
    borderWidth: 1,
    elevation: 2,
  },
});