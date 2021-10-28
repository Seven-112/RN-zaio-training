import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { ZaioText, ZaioView } from "../plugin";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from "../contants";
import PropTypes from 'prop-types';

const ListRestaurant = ({index, name, onDelete}) => {
    return (
        <ZaioView elevation={2} row m={10} p={10}>

            <ZaioView mr={10} style={{ width: '25%' }} >
                <Image source={require('../assets/rest.jpg')} style={styles.img} />
            </ZaioView>
            <ZaioView style={{ width: '75%' }}>
               <ZaioText bold h1 > {index}) {name}</ZaioText>
               <ZaioText grey size={20} normal >subTitle</ZaioText>
                <ZaioView row justify="between">
                    <ZaioView row>
                        <Ionicons name="star" color={Colors.primary} size={20} />
                        <Ionicons name="star" color={Colors.primary} size={20} />
                        <Ionicons name="star" color={Colors.primary} size={20} />
                    </ZaioView>

                    <ZaioView row style={{ elevation: 5, backgroundColor: '#ddd', borderRadius: 10 }} p={5}>
                        <ZaioText primary
                        onPress={()=> onDelete(index)}
                        >Delete
                        </ZaioText>

                        <Ionicons name="trash" color={Colors.primary} size={20} />
                    </ZaioView>
              </ZaioView>
               
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

ListRestaurant.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ListRestaurant;
