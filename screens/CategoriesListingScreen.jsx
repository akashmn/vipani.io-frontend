import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const categories = [
  { name: 'Oils', image: require('../static/images/cat1.jpeg') },
  { name: 'Vegetables', image: require('../static/images/cat2.jpeg') },
  { name: 'Fruits', image: require('../static/images/cat3.jpeg') },
  { name: 'Meat', image: require('../static/images/cat4.jpeg') },
  { name: 'Fish', image: require('../static/images/cat5.jpeg') },
  { name: 'Chips', image: require('../static/images/cat6.jpeg') },
  { name: 'Dry Nuts', image: require('../static/images/cat7.jpeg') },
  { name: 'Grinded Powder', image: require('../static/images/cat8.jpeg') },
];

export default function CategoriesListingScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedCategory = route.params?.category;

  const handleCategorySelect = (category) => {
    console.log(`Selected Category: ${category.name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select a Category</Text>
      <ScrollView>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryTab} onPress={() => handleCategorySelect(category)}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryTab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
