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

            
        </View>
    )
};

export default Home;
