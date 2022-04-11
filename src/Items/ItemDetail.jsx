import React from "react";
import styles from './ItemDetail.module.css'
import { Container, Carousel } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail =({producto}) => {
    return(
        <> 
        <Container className={styles.containerDetail}>
            <div className="wrapper">
                <div className="gr1">
                <Carousel>
                    <Carousel.Item> <img src={producto.img} alt={producto.name}/> </Carousel.Item>
                    <Carousel.Item> <img src={producto.imga} alt={producto.name}/> </Carousel.Item>
                    <Carousel.Item> <img src={producto.imgb} alt={producto.name}/> </Carousel.Item>
                    <Carousel.Item> <img src={producto.imgc} alt={producto.name}/> </Carousel.Item>
                </Carousel>
                </div>
                <div className="gr2">
                    <br/>
                    <br/>
                <h1> {producto.name} </h1>
                <h4> {producto.descr} </h4>
                <h2> {producto.price} </h2>
                <ItemCount className="gr3"/>
                </div>
                
            </div>
        </Container>
        </>
    );
};

export default ItemDetail;