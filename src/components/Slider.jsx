import React from 'react';
import { Carousel, Nav, Navbar } from 'react-bootstrap';
import winter from '../images/winter.png';
import spring from '../images/spring.png';
import summer from '../images/summer.png';
import autumn from '../images/autumn.png';

export default function Slider() {

    return (
    <Carousel className = "bg">
        <Carousel.Item>
            <img
                className = "responsive"
                src={winter}
                alt="winter"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className = "responsive"
                src={spring}
                alt="spring"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className = "responsive"
                src={summer}
                alt="summer"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className = "responsive"
                src={autumn}
                alt="autumn"
            />
        </Carousel.Item>
    </Carousel>
)}