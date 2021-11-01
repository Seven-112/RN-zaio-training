import React from "react";

import { FlatList, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Size } from "../contants";
import { ZaioText, ZaioView } from "../plugin";

const ListProdStore = ({title, results}) => {

    const Popular = () => {
        return (
            <ZaioView mt={10}>

                <ScrollView showsVerticalScrollIndicator={false} >
                    {
                        results.map((prod, index) => {
                            return (
                                <TouchableOpacity key={index} >
                                    <ZaioView p={10} style={styles.imgContainer} >
                                        <Image source={{ uri : prod.image}} style={styles.prodImg} />
                                        <ZaioText numberOfLines={1} size={20} bold>{prod.title}</ZaioText>
                                        <ZaioText numberOfLines={2} grey>{prod.description}</ZaioText>
                                        <ZaioView mt={5}>
                                            
                                               
                                        </ZaioView>
                                    </ZaioView>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </ZaioView>
        )
    };

    return (
        <ZaioView>
            <ZaioText center h2 success>{title}</ZaioText>
            <FlatList 
                data={results}
                keyExtractor={(res)=> res.id}
                renderItem={({item})=>{
                    return <ZaioView>
                        {
                            Popular()
                        }
                    </ZaioView>
                }}
            />
        </ZaioView>
    )
};


const styles = StyleSheet.create({
    
    imgContainer :{
        backgroundColor: Colors.white,
        borderRadius: 10,
        width: "90%",
        margin: 15,
    },
    
    prodImg: {
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        height:  Size.height / 5
    },
    
});

export default ListProdStore;
