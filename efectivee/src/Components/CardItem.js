import React from 'react';
import { Link } from "react-router-dom";

function CardItem (props) {
    return (
        <div>
            <li className='card-item'>
                <Link className='card-item-link' to={props.path}>
                    <figure className='card-item-pic-wrap' data-category={props.label}>
                        <img src={props.src} alt='/' className='card-item-pic'></img>
                    </figure>
                    <h5 className='card-item-info'>
                        {props.text}
                    </h5>
                </Link>
            </li>
        </div>
    );
}

export default CardItem;