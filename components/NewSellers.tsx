import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.6;

export default function NewSellers() {
  const images = [
    require('../static/images/sellers1.jpeg'),
    require('../static/images/sellers2.jpeg'),
    require('../static/images/sellers3.jpeg'),
    require('../static/images/sellers4.jpeg'),
  ];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      snapToInterval={CARD_WIDTH + 10}
    >
      {images.map((image, index) => (
        <View key={index} style={styles.card}>
          <Image key={index} source={image} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: 200,
    marginRight: 10,
    borderRadius: 20,
    overflow: 'hidden', // Ensure rounded corners work for images
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensure the image covers the card area
  },
});
