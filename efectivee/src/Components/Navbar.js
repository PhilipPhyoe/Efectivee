import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from "../images/Logo_Std logo only-01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Button from './Button';
import "./Navbar.css";

function Navbar () {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleMenu = () => {
        setClick(!click);
    };
    
    const closeMobileMenu = () => {
        setClick(false);
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    useEffect( () => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <div>
            <nav className='Navbar'>
                <div className='Navbar-container'>
                    
                    <Link to="/" className="Navbar-logo" onClick={closeMobileMenu}>
                        
                        <img src={Logo} alt="Efectivee" className="logo"/>
                    </Link>
                    
                    <div className='menu-icons' onClick={handleMenu}>
                        {click ? <FontAwesomeIcon icon={faCircleXmark} /> : <FontAwesomeIcon icon={faBars} />}
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"} >
                        <li className="nav-item">
                           
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                           
                        </li>
                        <li className="nav-item">
                           
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                    About Us
                            </Link>
                            
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div>
                        {button && <Button buttonStyle="btn--outline">Contact Now</Button>}
                    </div>
                    
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

