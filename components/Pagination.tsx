import React from 'react';
import { View, StyleSheet } from 'react-native';

type PaginationProps = {
  total: number;
  current: number;
};

export default function Pagination({ total, current }: PaginationProps) {
  return (
    <View style={styles.container}>
      {[...Array(total)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === current && styles.activeDot
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});