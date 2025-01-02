import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.6;

export default function NewSellers() {
  const colors = ['#4CAF50', '#E91E63', '#2196F3', '#795548'];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      snapToInterval={CARD_WIDTH + 10}
    >
      {colors.map((color, index) => (
        <View
          key={index}
          style={[styles.card, { backgroundColor: color }]}
        />
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
  },
});