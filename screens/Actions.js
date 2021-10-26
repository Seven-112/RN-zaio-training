import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from  'react-native';

const Actions = ({ navigation }) => {
    return (
        <View style={{ marginTop: 30 }}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('List')}>

                <Text style={styles.link}>Link</Text>
            </TouchableOpacity>

            <Button title="Click me" />
        </View>
    )
};

const styles = StyleSheet.create({
    link: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
      }
});

export default Actions;
