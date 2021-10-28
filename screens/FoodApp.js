import React from "react";
import { ScrollView, Image, StyleSheet, TextInput } from "react-native";
import { Colors } from "../contants";
import { ZaioText, ZaioView } from "../plugin";
import Ionicons from 'react-native-vector-icons/Ionicons';


const FoodApp = () => {
    return(
        <ScrollView style={styles.container}>
            <ZaioView row justify="between">
                <ZaioView >
                    <ZaioText normal bold>Delivery to</ZaioText>
                    <ZaioView row center>
                        <Ionicons name="location-outline" color={Colors.grey} size={20} />
                        <ZaioText normal grey>Zaio RN to</ZaioText>
                    </ZaioView>
                </ZaioView>
                <Image source={require('../assets/profile.jpg')} style={styles.img} />
            </ZaioView>

            <ZaioView mt={20}>
                <TextInput placeholder="Search for Dish or Restaurant" style={styles.input} />
                <Ionicons name="search" color={Colors.grey} size={25} style={styles.search} />
            </ZaioView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 25,
        paddingHorizontal: 15,
        backgroundColor: Colors.grey8
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: Colors.white
    },
    input: {
        backgroundColor: Colors.white,
        height: 55,
        borderRadius: 20,
        fontSize: 20,
        paddingHorizontal: 45,
    },
    search :{
        position: "absolute",
        top: 15,
        left: 15
    }
});

export default FoodApp;
