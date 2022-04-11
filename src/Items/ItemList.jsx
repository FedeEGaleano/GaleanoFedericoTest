import React from "react";
import Item from "./Item";
import styles from './Item.module.css'

const ItemList = ({products}) => {
    return (
        <div className={styles.containerCards}>
            {products.map((products) => (
                <Item key={products.id} products={products} />
            ))}
        </div>
    );
};

export default ItemList;