import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type MenuItem = {
  title: string;
  onPress: () => void;
};

type ProfileMenuProps = {
  items: MenuItem[];
};

export default function ProfileMenu({ items }: ProfileMenuProps) {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={item.onPress}
        >
          <Text style={styles.menuText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 8,
  },
  menuItem: {
    width: '48%',
    backgroundColor: '#E5E5E5',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
  },
});