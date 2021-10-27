import React, { useState } from "react";
import { Button } from "react-native";
import { ZaioText, ZaioView } from "../plugin";

const Counter = () => {
    const [count, setCount ] = useState(0)

    return(
        <ZaioView style={{ flex: 1}}>
            <ZaioText success h1 center>
                Counter
            </ZaioText>
            <ZaioText center h2>
                Counter: 
                <ZaioText primary bold> {count}</ZaioText>
            </ZaioText>

            <ZaioView mt={20} >
                <Button title="Add a count" onPress={()=> setCount( count + 1)} />
            </ZaioView>

            <ZaioView mt={20} >
                <Button title="reset" onPress={()=> setCount(0)} />
            </ZaioView>
        </ZaioView>
    )
};

export default Counter;
