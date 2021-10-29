import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { ZaioText, ZaioView } from "../plugin";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from "../contants";
import PropTypes from 'prop-types';

const ListFoodGroad = ({food}) => {
    const Stars = (nbr) => (
        <ZaioView row>
            {
                [...Array(nbr).keys()].map((_value, index) => 
                    <Ionicons key={index} name="star" color={Colors.primary} size={12} />
                )
            }
            
        </ZaioView>
    );

    return (
        <ZaioView elevation={2} row mt={18}>

            <ZaioView mr={10} style={{ width: '20%' }} >
                <Image source={food.img} style={styles.img} />
            </ZaioView>
            <ZaioView style={{ width: '80%' }}>
                <ZaioText numberOfLines={1} bold size={20} grey >{food.title}</ZaioText>
                <ZaioText numberOfLines={1} grey size={15} normal >{food.details}</ZaioText>
                <ZaioView row justify="between" center mt={5}>
                    <ZaioView row>
                       {
                        Stars(food.stars)
                       }
                    </ZaioView>
                    <ZaioView row>
                        <ZaioView center row style={styles.info}>
                            <ZaioText primary > {food.location} </ZaioText>
                            <Ionicons name="location-outline" color={Colors.primary} size={15} />
                        </ZaioView>
                        <ZaioView center row style={styles.info}>
                            <ZaioText primary > {food.deliveryTime} </ZaioText>
                            <Ionicons name="time-outline" color={Colors.primary} size={15} />
                        </ZaioView>
                    </ZaioView>
              </ZaioView>
               
            </ZaioView>
        </ZaioView>
    )
};

const styles = StyleSheet.create({
  
    img: {
        height: 80,
        width: 80,
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
    info:{
        backgroundColor: Colors.grey8,
        padding: 3,
        borderRadius: 10,
        marginRight: 5
    }
});

ListFoodGroad.propTypes = {
    food: PropTypes.object.isRequired,
};

export default ListFoodGroad;
