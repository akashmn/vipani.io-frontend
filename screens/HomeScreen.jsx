import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import ProductPopup from './../components/ProductPopup';

export default function HomeScreen() {

  const navigation = useNavigation();

  // Function to handle navigation
  const handleBannerPress = () => {
    navigation.navigate('BannerListingScreen');
  };

  const handleCategoriesPress = () => {
    navigation.navigate('CategoriesListingScreen');
  };

  const handleSearchPress = () => {
    navigation.navigate('HomeSearchScreen');
  };

  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [modalVisible, setModalVisible] = useState(false);

  const newArrivals = [
    {
      image: require('../static/images/new1.jpeg'),
      name: 'Product 1',
      location: 'Location 1',
      price: '₹350/-',
      details: 'Description of product 1.',
    },
    {
      image: require('../static/images/new2.jpeg'),
      name: 'Product 2',
      location: 'Location 2',
      price: '₹400/-',
      details: 'Description of product 2.',
    },
    {
      image: require('../static/images/new3.jpeg'),
      name: 'Product 3',
      location: 'Location 3',
      price: '₹700/-',
      details: 'Details about product 3',
    },
    {
      image: require('../static/images/new4.jpeg'),
      name: 'Product 4',
      location: 'Location 4',
      price: '₹900/-',
      details: 'Details about product 4',
    },
   
  ];

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true); 
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>hello,</Text>
            <Text style={styles.name}>Akash M Nandan</Text>
          </View>
          <TouchableOpacity style={styles.searchIcon} onPress={handleSearchPress}>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.bannerContainer}>
          <Text style={styles.sectionTitle}>banners/offers</Text>
          <ScrollView style={styles.bannerSection} horizontal showsHorizontalScrollIndicator={true}>
             <TouchableOpacity onPress={handleBannerPress}>
          <Image style={styles.banner} source={require('../static/images/image1.jpeg')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBannerPress}>
          <Image style={styles.banner} source={require('../static/images/image2.jpg')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBannerPress}>
          <Image style={styles.banner} source={require('../static/images/image3.jpeg')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBannerPress}>
          <Image style={styles.banner} source={require('../static/images/image4.jpeg')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBannerPress}>
          <Image style={styles.banner} source={require('../static/images/image5.jpg')} />
        </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <TouchableOpacity onPress={handleCategoriesPress}>
            <Image style={styles.categoryCircle} source={require('../static/images/cat1.jpeg')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCategoriesPress}>
            <Image style={styles.categoryCircle} source={require('../static/images/cat2.jpeg')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCategoriesPress}>
            <Image style={styles.categoryCircle} source={require('../static/images/cat3.jpeg')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCategoriesPress}>
            <Image style={styles.categoryCircle} source={require('../static/images/cat4.jpeg')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCategoriesPress}>
            <Image style={styles.categoryCircle} source={require('../static/images/cat5.jpeg')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCategoriesPress}>
            <Image style={styles.categoryCircle} source={require('../static/images/cat6.jpeg')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCategoriesPress}>
            <Image style={styles.categoryCircle} source={require('../static/images/cat7.jpeg')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCategoriesPress}>
            <Image style={styles.categoryCircle} source={require('../static/images/cat8.jpeg')} />
          </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.newArrivalsContainer}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          <ScrollView contentContainerStyle={styles.gridContainer}>
            {newArrivals.map((product, index) => (
            <TouchableOpacity key={index} onPress={() => handleProductPress(product)}>
              <Image style={styles.gridItem} source={product.image} />
            </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
      </ScrollView>
      {modalVisible && (
        <ProductPopup
          visible={modalVisible}
          product={selectedProduct}
          onClose={() => setModalVisible(false)} // Close the popup
        />
      )}
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
    width: '100%',
    aspectRatio:1.2,
    height: 150,
    backgroundColor: '#2E8B57',
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    elevation: 2,
    resizeMode:'cover',
    overflow: 'hidden'
  },
});