import React, { useState } from "react";
import { View,Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SellerScreen from "../screens/SellerScreen";

type DPItem = {
    title: string;
    onPress: () => void;
};

type dpprops = {
    item: DPItem;
    isConsumer: boolean;
};


export default function dp({ item, isConsumer }: dpprops) {
    const[showDP, setshowDP] = useState(isConsumer);
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate(SellerScreen);
  };

    return (
        <View style={styles.container}>
        { showDP && (
            <TouchableOpacity onPress={handlePress} style={styles.dpButton}>
                <Image source={require('../static/images/dp.jpg')} style={styles.dpImage}></Image>
            </TouchableOpacity>
        )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      padding: 20,
    },
    dpButton: {
      alignItems: 'center',
    },
    dpImage: {
      width: 45,
      height: 45,
      borderRadius: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 5,
    },
  });