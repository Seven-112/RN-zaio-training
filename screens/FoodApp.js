import React from "react";
import { ScrollView, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Colors, Size } from "../contants";
import { ZaioText, ZaioView } from "../plugin";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foods from "../contants/Foods";
import Cats from "../contants/Cats";


const FoodApp = ({ navigation }) => {

    const Popular = () => {
        return (
            <ZaioView mt={15}>
                <ZaioView row justify="between" mb={10}>
                    <ZaioText size={20} bold>Popular near you</ZaioText>
                    <ZaioText primary>view more</ZaioText>
                </ZaioView>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    {
                        Foods.map((food, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={()=> 
                                    navigation.navigate('DetailsFood', { food })}
                                >
                                    <ZaioView p={10} style={styles.imgContainer} >
                                        <Image source={food.img} style={styles.foodImg} />
                                        <ZaioText numberOfLines={1} size={20} bold>{food.title}</ZaioText>
                                        <ZaioText numberOfLines={2} grey>{food.details}</ZaioText>
                                        <ZaioView mt={5}>
                                            <ZaioView row>
                                                <Ionicons name="star" color={Colors.primary} size={20} />
                                                <Ionicons name="star" color={Colors.primary} size={20} />
                                                <Ionicons name="star" color={Colors.primary} size={20} />
                                                <Ionicons name="star" color={Colors.primary} size={20} />
                                            </ZaioView>
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

    const Categories = () => (
        <ZaioView mt={15}>
            <ZaioView row justify="between" mb={10}>
                <ZaioText size={20} bold>Expore Categories</ZaioText>
                <ZaioText primary>show all</ZaioText>
            </ZaioView>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {
                    Cats.map((cat, index) => 
                    <TouchableOpacity key={index} style={[styles.cat, { backgroundColor: cat.color }]}>
                        <ZaioView center middle>
                            <Ionicons size={50} name={cat.icon} color={Colors.white} />
                            <ZaioText h2 bold white>{cat.title}</ZaioText>
                            <ZaioText white>{cat.places} places</ZaioText>
                        </ZaioView>
                    </TouchableOpacity>)
                }
            </ScrollView>
        </ZaioView>
    );

    const Recommended = () => (
        <ZaioView mt={15}>
            <ZaioView row justify="between" mb={10}>
                <ZaioText size={20} bold>Recommended</ZaioText>
                <ZaioText primary>show all</ZaioText>
            </ZaioView>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {
                    Foods.map((food, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={()=> 
                                    navigation.navigate('DetailsFood', { food })}
                                >
                                    <ZaioView p={10} style={styles.recommendedContainer} >
                                        <Image source={food.img} style={styles.recomImg} />
                                        <ZaioText numberOfLines={1} size={20} bold>{food.title}</ZaioText>
                                        <ZaioText numberOfLines={2} grey>{food.details}</ZaioText>
                                        <ZaioView mt={5}>
                                            <ZaioView row>
                                                <Ionicons name="star" color={Colors.primary} size={20} />
                                                <Ionicons name="star" color={Colors.primary} size={20} />
                                                <Ionicons name="star" color={Colors.primary} size={20} />
                                                <Ionicons name="star" color={Colors.primary} size={20} />
                                            </ZaioView>
                                        </ZaioView>
                                    </ZaioView>
                                </TouchableOpacity>
                            )
                        })
                }
            </ScrollView>
        </ZaioView>
    );

    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <ZaioView row justify="between">
                <ZaioView >
                    <ZaioText normal bold>Delivery to</ZaioText>
                    <ZaioView row center>
                        <Ionicons name="location-outline" color={Colors.grey} size={20} />
                        <ZaioText grey>Zaio RN to</ZaioText>
                    </ZaioView>
                </ZaioView>
                <Image source={require('../assets/profile.jpg')} style={styles.img} />
            </ZaioView>

            <ZaioView mt={20}>
                <TextInput placeholder="Search for Dish or Restaurant" style={styles.input} />
                <Ionicons name="search" color={Colors.grey} size={25} style={styles.search} />
            </ZaioView>

            { Popular() }
            { Categories() }
            { Recommended() }

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        paddingHorizontal: 15,
        backgroundColor: Colors.grey8,
        paddingBottom: 70,
        marginBottom: 20
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
    },
    imgContainer :{
        backgroundColor: Colors.white,
        borderRadius: 10,
        width: Size.width - 100 ,
        marginRight: 15,
    },
    recommendedContainer :{
        backgroundColor: Colors.white,
        borderRadius: 10,
        width: (Size.width/2) - 50 ,
        marginRight: 15,
    },
    foodImg: {
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        height: Size.height / 4
    },
    recomImg: {
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        height: Size.height / 8
    },
    cat: {
       borderRadius: 20,
       marginRight: 15,
       width: Size.width / 4,
       height:  Size.width / 3,
    }
});

export default FoodApp;
