import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type ProfileHeaderProps = {
  fullName: string;
  userId: string;
  userType: string;
  onEdit: () => void;
};

export default function ProfileHeader({ fullName, userId, userType, onEdit }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.userId}>{userId}</Text>
        </View>
        <TouchableOpacity onPress={onEdit}>
          <Ionicons name="pencil" size={20} color="#666" />
        </TouchableOpacity>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{userType}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4B9CFF',
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userId: {
    color: '#666',
    fontSize: 14,
  },
  badge: {
    position: 'absolute',
    right: 16,
    top: 16,
    backgroundColor: '#4B9CFF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: 'white',
    fontSize: 14,
  },
});