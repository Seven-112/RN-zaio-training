import { useEffect, useState } from "react";
import api from "../api/api";

export default () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");

    const searchProd = async (cat) => {
        try{
            const reponse = await api.get(`category/${cat}?limit=5`);
            setProducts(reponse.data)
    
        }catch(err){
            console.log(`An error occurs ${err}`);
            setError(`An error occurs ${err}`)
        }
    };

    useEffect(()=>{
        searchProd('electronics');
    }, []);

    return [searchProd, products, error];
};
