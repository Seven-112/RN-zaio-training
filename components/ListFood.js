import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { ZaioText, ZaioView } from "../plugin";

const ListFood = (props) => {
    // console.log(props);
    return (
        <ZaioView elevation={2} row m={10} p={10}>
            <ZaioView mr={10}>
                <Image source={props.food.img} style={styles.img} />
            </ZaioView>
            <ZaioView middle>
               <ZaioText bold h1 >Title</ZaioText>
               <ZaioText grey size={20} normal >subTitle</ZaioText>
            </ZaioView>
        </ZaioView>
    )
};

const styles = StyleSheet.create({
  
    img: {
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    subTitle: {
        fontSize: 20,
        color: 'grey'
    },
});

export default ListFood;
