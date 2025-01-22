import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ProductCard from '../components/ProductCard';

export default function SellerScreen() {
  const sellingCategories = ["Spices", "Oil", "Chips", "Cake"];
  const sellingProducts = [
    { id: 1, 
      name: "Product 1", 
      seller: "Seller 1", 
      avatar: require('../static/images/cat1.jpeg'), 
      productImages: [
        require('../static/images/cat2.jpeg'),
        require('../static/images/cat3.jpeg'), 
        require('../static/images/cat4.jpeg')
      ]
     },
    { id: 2, 
      name: "Product 2", 
      seller: "Seller 2", 
      avatar: require('../static/images/cat1.jpeg'), 
      productImages: [
        require('../static/images/cat2.jpeg'),
        require('../static/images/cat3.jpeg'), 
        require('../static/images/cat4.jpeg')
      ]},
    { id: 3, 
      name: "Product 3", 
      seller: "Seller 3",
      avatar: require('../static/images/cat1.jpeg'), 
      productImages: [
        require('../static/images/cat2.jpeg'),
        require('../static/images/cat3.jpeg'), 
        require('../static/images/cat4.jpeg')
      ]},
    { id: 4, 
      name: "Product 4", 
      seller: "Seller 4",
      avatar: require('../static/images/cat1.jpeg'), 
      productImages: [
        require('../static/images/cat2.jpeg'),
        require('../static/images/cat3.jpeg'), 
        require('../static/images/cat4.jpeg')
      ]},
  ];



  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={[styles.iconButton, styles.topAligned]}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <Image source={require('../static/images/dp.jpg')} style={styles.profileImage}
          />
          <Text style={styles.profileName}>AKASH M NANDAN</Text>
          <Text style={styles.profileLocation}>Thiruvananthapuram, Kerala</Text>
        </View>
        <TouchableOpacity style={[styles.iconButton, styles.topAligned]}>
          <Icon name="edit" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Profile Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Description</Text>
        <Text style={styles.sectionContent}>
          This also removes the text label but behaves slightly differently
          compared to setting it to null. Both methods will result in no label
          text being displayed in the tab bar.
        </Text>
      </View>

      {/* Selling Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Selling Categories</Text>
        <View style={styles.categories}>
          {sellingCategories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Selling Images */}
      <FlatList
        data={[
          { uri: "../static/images/download 1.png", id: "1" },
          { uri: "../static/images/download 2.png", id: "2" },
          { uri: "../static/images/download 3.png", id: "3" },
          { uri: "../static/images/download 4.png", id: "4" },
          { uri: "../static/images/for more.png", id: "5" }
        ]}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.image} />
        )}
        contentContainerStyle={styles.imagesContainer}
      />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Selling Products</Text>
        <View style={styles.productsContainer}>
          {sellingProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              seller={product.seller}
              avatar={product.avatar}
              productImages={product.productImages}
            />
          ))}
        </View>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    backgroundColor: "#BB5A5A", 
    paddingVertical: 10,
    paddingHorizontal: 15,
    height:150,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    borderBottomWidth:2,
    borderColor:"black"
  },
  iconButton: {
    padding: 5, 
  },
  topAligned: {
    alignSelf: "flex-start", 
    marginTop:0
  },
  profileContainer: {
    alignItems: "center", 
    flex:1
  },
  backIcon: {
    fontSize: 20,
    color: "#fff",
    marginRight: 10,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 5,
    marginTop:12
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign:"center"
  },
  profileLocation: {
    fontSize: 12,
    color: "#fff",
    textAlign:"center",
    textDecorationLine:'underline'
  },
  editIcon: {
    fontSize: 20,
    color: "#fff",
    marginLeft: 10,
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 14,
    color: "#555",
    justifyContent:'center'
  },
  categories: {
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent:'center',
    marginTop:8,
    alignItems:'stretch',
    width:'100%',

  },
  categoryButton: {
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    paddingHorizontal: 15,
    flex: 1, // Ensures each button takes equal space
    alignItems: 'center', // Centers the text in each button
    justifyContent: 'center', 
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1, // Adds a border
    borderColor: '#000',
  },
  categoryText: {
    fontSize: 14,
    color: "#000",
  },
  imagesContainer: {
    alignItems: "center", // Center aligns the content
    justifyContent: "center", // Distributes items evenly
    padding: 5, // No padding around the container

  },
  image: {
    width: 100, // Set a fixed width for images
      height: 100, // Set a fixed height for images
      margin: 5, // Add a small margin between images
      resizeMode: "contain", // Ensure the image fits within its container
    },
  
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "45%",
    height:50,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
  },
  productImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#D9D9D9",
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  sellerName: {
    fontSize: 12,
    color: "#777",
  },
});
