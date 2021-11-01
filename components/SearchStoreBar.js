import React from "react";
import { TextInput, StyleSheet  } from "react-native";
import { ZaioView } from "../plugin";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from "../contants";


const SearchStoreBar = ({ term, onTermChange, onTermEnd }) => {

    return (
        <ZaioView m={20}>
            <TextInput 
                placeholder="Search" 
                style={styles.input} 
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermEnd}
            />

            <Ionicons name="search" color={Colors.grey} size={25} style={styles.search} />
        </ZaioView>
    )
};

const styles = StyleSheet.create({
    
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
    },
    
});


export default SearchStoreBar;
