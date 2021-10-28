import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ZaioText } from "../plugin";
const Home = ({navigation}) => {
    

    return (
        <View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('List')}>
                <ZaioText h1 center primary>List</ZaioText>              
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('Counter')}>
                <ZaioText h1 center primary>Counter</ZaioText>              
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('ListManagement')}>
                <ZaioText h1 center primary>List Restau Management</ZaioText>              
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('FoodApp')}>
                <ZaioText h1 center primary>Groad Food App by Phap</ZaioText>              
            </TouchableOpacity>

            
        </View>
    )
};

export default Home;
