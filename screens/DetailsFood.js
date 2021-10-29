import React from "react";
import { ImageBackground } from "react-native";
import { Colors, Size } from "../contants";
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ZaioText, ZaioView } from "../plugin";

const DetailsFood = ({route} ) => {
    //console.log(route.params);
    return(
        <ZaioView>
            <ZaioView style={{ height: Size.width/2, }}>

                <ImageBackground source={route.params.food.img} resizeMode="cover" 
                style={{ flex: 1, justifyContent: 'flex-end'}}>
                    <LinearGradient 
                        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.9)']}
                        style={{  position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            height: Size.width/2,}}
                        >

                    </LinearGradient>
                </ImageBackground>
                
            </ZaioView>
            <ZaioView p={20} m={50} style={{ backgroundColor: 'white', position: 'absolute', top:  Size.width/4,
            width: '80%', borderRadius: 10, height: 200, elevation: 2
             }}>
                <ZaioText >Hello</ZaioText>
                <ZaioText numberOfLines={1} size={20} bold>{route.params.food.title}</ZaioText>
                    <ZaioText numberOfLines={2} grey>{route.params.food.details}</ZaioText>
                    <ZaioView mt={5}>
                        <ZaioView row>
                            <Ionicons name="star" color={Colors.primary} size={20} />
                            <Ionicons name="star" color={Colors.primary} size={20} />
                            <Ionicons name="star" color={Colors.primary} size={20} />
                            <Ionicons name="star" color={Colors.primary} size={20} />
                        </ZaioView>
                    </ZaioView>
            </ZaioView>

        </ZaioView>
    )
};

export default DetailsFood;
