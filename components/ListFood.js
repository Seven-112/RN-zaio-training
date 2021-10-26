import React from "react";
import { View, Image, StyleSheet } from "react-native";
import ZaioText from "../plugin/ZaioText";

const ListFood = (props) => {
    console.log(props);
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={props.food.img} style={styles.img} />
            </View>
            <View>
               <ZaioText bold h1 >Title</ZaioText>
               <ZaioText grey size={20} normal >subTitle</ZaioText>
                
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        borderWidth: 1,
        marginBottom: 5
    },
    imgContainer: {
        marginRight: 10
    },
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
