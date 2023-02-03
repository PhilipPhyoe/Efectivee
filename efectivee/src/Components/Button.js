import React from 'react';
import "./Button.css";
import { Link } from "react-router-dom";


const Styles = ["btn--primary", "btn--outline", "btn--secondary"];
const Sizes = ["btn--medium", "btn--large"];

function Button ({children, buttonStyle, buttonSize, buttonClick, type}) {

    const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0];
    const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];
    return (
        <div>
            
                <Link to="/">
                    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={buttonClick} type={type}>
                        {children}
                    </button>
                </Link>
            
        </div>
    );
}
export default Button;