import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const banners = [
  { src: require('../static/images/image1.jpeg'), height: 200 },
  { src: require('../static/images/image2.jpg'), height: 150 },
  { src: require('../static/images/image3.jpeg'), height: 200 },
  { src: require('../static/images/image4.jpeg'), height: 230 },
  { src: require('../static/images/image5.jpg'), height: 280 },
];

export default function BannerListingScreen() {
  return (
    <ScrollView style={styles.container}>
      {banners.map((banner, index) => (
        <Image 
          key={index}
          source={banner.src}
          style={[styles.banner, { height: banner.height }]}
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    resizeMode: 'contain', 
    alignSelf: 'center',   
  }
});
