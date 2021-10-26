import React from "react";
import { View, Text, FlatList } from "react-native";
import ListFood from "../components/ListFood";

const List = () => {

    const food = [
        {id: 1, name: "Pizza", img: require('../assets/food1.jpg')},
        {id: 2, name: "Rice", img: require('../assets/food2.jpg')},
        {id: 3, name: "Burger", img: require('../assets/food1.jpg')},
        {id: 4, name: "Salad", img: require('../assets/food2.jpg')},
    ];

    return (
        <View>
            <Text>Welcome</Text>

            {
                food.map((item, index)=> <ListFood key={index} food={item} />)
            }


            
        </View>
    )
};

export default List;
