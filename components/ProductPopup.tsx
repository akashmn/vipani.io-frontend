import React from 'react';
import { View, Modal, ScrollView, StyleSheet, Dimensions, Image, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ProductPopup({ visible, product, onClose }) {
  if (!product) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>

          <ScrollView>
            <View style={styles.topSection}>
              <Image source={product.image} style={styles.productImage} />
              <View style={styles.detailsContainer}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.location}>{product.location}</Text>
                <Text style={styles.price}>{product.price}</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Product Details</Text>
            <Text style={styles.productDetails}>{product.details}</Text>

            <Text style={styles.sectionTitle}>Product Images</Text>
            <View style={styles.productGrid}>
              <Image source={product.image} style={styles.productImage} />
              {/* Additional images can be mapped here */}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
  },
  modalContainer: {
    height: height * 0.6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    pointerEvents: 'auto',
    zIndex: 100,
    marginTop:10
  },
  topSection: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 100,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    marginTop:20,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 28,
    right: 14,
    backgroundColor: '#E5E5E5',
    padding: 8,
    borderRadius: 50,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 40,
  },
  closeButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

