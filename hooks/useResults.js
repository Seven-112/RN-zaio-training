import { useEffect, useState } from "react";
import api from "../api/api";

export default () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    

    const searchProd = async (cat) => {
        console.log(`${cat}?limit=5`);
        try{
            const reponse = await api.get(`category/${cat}?limit=5`);
            //console.log(reponse.data);
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
