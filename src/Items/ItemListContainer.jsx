import React, { useEffect, useState } from "react";
import { traerProductos } from "../utils/products";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        traerProductos()
        .then((res) => setProducts(res))
        .catch((error) => console.log(error));
    }, []);

    return(
        <>
        <ItemList products={products} />
        </>
    );
};

export default ItemListContainer