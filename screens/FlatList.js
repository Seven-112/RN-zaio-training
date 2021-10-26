import React from "react";
import { View, Text, FlatList } from "react-native";

const List = () => {

    const teams = [{ id: 1, name: 'Barcelona'}, { id: 2, name: 'Real Madrid'}, { id: 3, name: 'Bayern munich'}];

    return (
        <View>
            <Text>My list View</Text>
            <FlatList 
                data={teams}
                renderItem={
                    ({item})=> <View style={{ height: 80, backgroundColor: '#123456', margin: 5, 
                    borderRadius: 10, padding: 5, flexDirection: 'row'}}>
                        <Text style={{ color: 'white', fontSize: 25 }}>{item.id}) </Text>
                        <Text style={{ color: 'white', fontSize: 25 }}>{item.name}</Text>
                    </View>
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
};

export default List;
