import React from 'react';
import CardItem from './CardItem';
import Copy from "../images/3-01.png";
import Beyond from "../images/Beyond-Expectation-Final-1024x1024.jpg";
import Design from "../images/efdesign-1024x512.jpg";
import Seo from "../images/seo.jpg";
import "../Components/Cards.css";

function Cards () {
    return(
        <div className='cards'>
            <h2>Our Services are ready to rock.</h2>
            <div className='card-container'>
                <div className='card-wrapper'>
                    <ul className='card-items'>
                        <CardItem path="/" label="Copywriting" src={Copy} text="Copywriting is one of our services."/>
                        <CardItem path="/" label="Copywriting" src={Beyond} text="Copywriting is one of our services."/>
                    </ul>
                    <ul className='card-items'>
                        <CardItem path="/" label="Copywriting" src={Design} text="Copywriting is one of our services."/>
                        <CardItem path="/" label="Copywriting" src={Seo} text="Copywriting is one of our services."/>
                        <CardItem path="/" label="Copywriting" src={Seo} text="Copywriting is one of our services."/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;