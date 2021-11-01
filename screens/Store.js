import React, { useEffect, useState } from "react";
import { ZaioText, ZaioView } from "../plugin";
import api from "../api/api";

const Store = () => {
    const [products, setProducts] = useState([]);

    const searchProd = async () => {
        try{
            const reponse = await api.get('?limit=19');
            //console.log(reponse.data);
            setProducts(reponse.data)
        }catch(err){
            console.log(`An error occurs ${err}`);
        }
    };

    useEffect(()=> {
        // Call API here
        searchProd();
    }, []);

    return (
        <ZaioView>
            <ZaioText h1>Store</ZaioText>
            <ZaioText h2>{products.length}</ZaioText>
        </ZaioView>
    )
};

export default Store;
