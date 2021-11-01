import React, { useEffect, useState } from "react";
import { ZaioText, ZaioView } from "../plugin";
import SearchStoreBar from "../components/SearchStoreBar";
import { ActivityIndicator } from "react-native";
import useResults from "../hooks/useResults";

const Store = () => {

    const [term, setTerm] = useState("");
    const [state, setState] = useState(true);
    const [searchProd, products, error] = useResults();
    
    return (
        <ZaioView>
            <ZaioText center h1>Store</ZaioText>
            {
                state? <ActivityIndicator size="large" color="#0000ff" />: 
                null
            }
            {
                error? <ZaioText h2 primary>{error}</ZaioText>: null
            }
            <SearchStoreBar 
                term={term}
                onTermChange={setTerm}
                onTermEnd={()=> searchProd(term)}
            />
            <ZaioText h2>{products.length}</ZaioText>
        </ZaioView>
    )
};

export default Store;
