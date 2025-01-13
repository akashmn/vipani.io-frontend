import React, { useState } from 'react';
import {
  View,
  Modal,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;

export default function NewSellers() {
  const sellers = [
    {
      image: require('../static/images/sellers1.jpeg'),
      name: 'Seller 1',
      location: 'Location 1',
      price: '₹698/-',
      products: [
        require('../static/images/cat1.jpeg'),
        require('../static/images/cat2.jpeg'),
        require('../static/images/cat3.jpeg'),
      ],
    },
    {
      image: require('../static/images/sellers2.jpeg'),
      name: 'Seller 2',
      location: 'Location 2',
      price: '₹799/-',
      products: [
        require('../static/images/cat3.jpeg'),
        require('../static/images/cat4.jpeg'),
      ],
    },
    {
      image: require('../static/images/sellers3.jpeg'),
      name: 'Seller 3',
      location: 'Location 3',
      price: '₹650/-',
      products: [],
    },
    {
      image: require('../static/images/sellers4.jpeg'),
      name: 'Seller 4',
      location: 'Location 4',
      price: '₹900/-',
      products: [
        require('../static/images/cat4.jpeg'),
        require('../static/images/cat5.jpeg'),
      ],
    },
  ];

  const [selectedSeller, setSelectedSeller] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleImagePress = (seller) => {
    setSelectedSeller(seller);
    setModalVisible(true);
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={CARD_WIDTH + 10}
      >
        {sellers.map((seller, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleImagePress(seller)}
          >
            <View style={styles.card}>
              <Image source={seller.image} style={styles.image} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {selectedSeller && (
              <ScrollView>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>
              <View style={styles.topSection}>
                <Image
                  source={selectedSeller.image}
                  style={styles.sellerImage}
                />
                <View style={styles.detailsContainer}>
                  <Text style={styles.sellerName}>{selectedSeller.name}</Text>
                  <Text style={styles.location}>{selectedSeller.location}</Text>
                  <Text style={styles.price}>{selectedSeller.price}</Text>
                </View>
              </View>

              <Text style={styles.sectionTitle}>Seller Details</Text>
              <Text style={styles.sellerDetails}>
                This is a description or additional information about the
                seller.
              </Text>

              <Text style={styles.sectionTitle}>Products</Text>
              <View style={styles.productGrid}>
                {selectedSeller.products.length > 0 ? (
                  selectedSeller.products.map((product, index) => (
                    <Image
                      key={index}
                      source={product}
                      style={styles.productImage}
                    />
                  ))
                ) : (
                  <Text style={styles.noProductsText}>
                    No products available
                  </Text>
                )}
              </View>
            </ScrollView>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: 200,
    marginRight: 10,
    borderRadius: 20,
    overflow: 'hidden',
    marginLeft: 15,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    height: height * 0.5, 
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  topSection: {
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    height:100
  },
  sellerImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft:20
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    backgroundColor: '#77dd77',
  },
  sellerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: 'gray'
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 5,
  },
  details: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productImage: {
    width: '30%',
    height:100,
    aspectRatio: 1,
    margin: 5,
    borderRadius: 10,
    marginBottom:10,
    backgroundColor: '#e0e0e0',
  },
  noProductsText: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#D9D9D9',
    padding: 8,
    borderRadius: 10,
    marginTop:20
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  sellerDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
});
