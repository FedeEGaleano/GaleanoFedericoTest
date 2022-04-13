import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

export default function BannerCar(){

    return(
        <>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/carouselbanner.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/carouselremeras.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/carouselbuzos.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/carouselsale.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </>
    )
}

