import React from "react";
import styles from './Item.module.css';
import { Carousel } from 'react-bootstrap'


const Item = ({ products }) => {
    return (
        <div className={styles.card}>  
            <Carousel>
                <Carousel.Item className="carousel" ><img src={products.img} alt={products.name}/></Carousel.Item>
                <Carousel.Item ><img src={products.imga} alt={products.name}/></Carousel.Item>
            </Carousel>
            <br />
            <div className={styles.cardInfo}>
            <h3> {products.name} </h3>
            <h4> $ {products.price} </h4>
            <button>Ver detalle</button>
            </div>

        </div>
    );
}


export default Item;