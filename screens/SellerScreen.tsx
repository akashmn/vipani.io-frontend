import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

export default function SellerScreen() {
  const sellingCategories = ["Spices", "Oil", "Chips", "Cake"];
  const sellingProducts = [
    { id: 1, name: "Product 1", seller: "Seller 1" },
    { id: 2, name: "Product 2", seller: "Seller 2" },
    { id: 3, name: "Product 3", seller: "Seller 3" },
    { id: 4, name: "Product 4", seller: "Seller 4" },
  ];



  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: "https://via.placeholder.com/100",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>AKASH M NANDAN</Text>
          <Text style={styles.profileLocation}>Thiruvananthapuram, Kerala</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.editIcon}>✎</Text>
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

      {/* Selling Products */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Selling Products</Text>
        <View style={styles.products}>
          {sellingProducts.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <View style={styles.productImagePlaceholder} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.sellerName}>{product.seller}</Text>
            </View>
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
    backgroundColor: "#A05252",
    padding: 15,
  },
  backIcon: {
    fontSize: 20,
    color: "#fff",
    marginRight: 10,
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 5,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  profileLocation: {
    fontSize: 12,
    color: "#fff",
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
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  categoryButton: {
    backgroundColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    color: "#555",
  },
  imagesContainer: {
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 5,
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  productCard: {
    width: "45%",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
  },
  productImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ccc",
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
