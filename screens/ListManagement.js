import React, { useState} from "react";
import { Button, TextInput } from "react-native";
import ListRestaurant from "../components/ListRestaurant";
import { ZaioText, ZaioView } from "../plugin";

const ListManagement = () => {
    const [rest, setRest] = useState(["REST 1"]);
    const [inputRest, setInputRest] = useState("");

    const addRestaurant = () => {
        if(inputRest.trim().length != 0){
            rest.push(inputRest.trim());
            setInputRest('');
            setRest([...rest]);
        }
    };

    const deleteRest = (id) => {
        console.log("Id to delete", id);
        setRest([...rest.filter((item, index) => index != id - 1 )]);
    };

    return (
        <ZaioView p={10} style={{ flex: 1 }}>
            {
                rest.length == 0? <ZaioText center h2 primary>Your list is emplty</ZaioText>:
                <ZaioText h1 center>List Management</ZaioText>
            }
            {
                rest.map((item, index) => <ListRestaurant 
                                            key={index} 
                                            name={item} index={index+1} 
                                            onDelete={(id)=>{
                                                deleteRest(id)
                                            }} />
                        )
            }
            <Button title="Add a restaurent" 
                onPress={()=> addRestaurant()}
            />

            <TextInput 
                value={inputRest}
                onChangeText={ (value)=> setInputRest(value) }
                style={{ borderColor: 'grey', borderWidth: 2,
                marginTop: 20, borderRadius: 10,
                height: 40, padding: 5,  }} 
                placeholder="Add a restaurant here" 

            />

        </ZaioView>
    )
};

export default ListManagement;
