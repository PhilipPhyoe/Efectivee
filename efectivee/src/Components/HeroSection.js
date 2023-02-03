import Button from './Button';
import React from 'react';
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function HeroSection () {
    return (
        <div className="Hero-container">
            <h1>Efectivee</h1>
            <h2>Efficient and Effective digital creations for your business</h2>
            <p>An agency that covers almost all of your digital needs 
                including Graphic Designs, Copywriting, Video Productions 
                and of course, web developing.</p>
            <div className='Hero-buttons'>
                <Button buttonSize="btn--large">
                    Start a Project
                </Button>
                <Button buttonStyle="btn--secondary" buttonSize="btn--large">
                    Contact Now <FontAwesomeIcon icon={faEnvelope} />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;