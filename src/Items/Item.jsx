import React from "react";
import styles from './Item.module.css';


const Item = ({ products }) => {
    return (
        <div className={styles.card}>
            <img src={products.img} alt={products.name} />
            <div className={styles.cardInfo}>
            <h3> {products.name} </h3>
            <h4> $ {products.price} </h4>
            <button>Ver detalle</button>
            </div>

        </div>
    );
}

export default Item;