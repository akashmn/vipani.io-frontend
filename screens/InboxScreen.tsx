import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const inboxMessages = [
  {
    id: '1',
    sellerName: "Seller's Name",
    message: 'The order will be placed in 30 mins. Thank you for placing the order.',
  },
  // Add more messages as needed
];

const InboxItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
    <View style={styles.profileImage} />
    <View style={styles.messageInfo}>
      <Text style={styles.sellerName}>{item.sellerName}</Text>
      <Text numberOfLines={1} style={styles.message}>{item.message}</Text>
    </View>
  </TouchableOpacity>
);

export default function InboxScreen({ navigation }) {
  const handlePress = (sellerName) => {
    navigation.navigate('Chat', { sellerName });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Inbox</Text>
        <Ionicons name="search" size={24} color="black" />
      </View>
      <FlatList
        data={inboxMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <InboxItem item={item} onPress={() => handlePress(item.sellerName)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  messageInfo: {
    flex: 1,
  },
  sellerName: {
    fontWeight: 'bold',
  },
  message: {
    color: 'gray',
  },
});
