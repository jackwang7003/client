import React from "react";
import { Link } from "react-router-dom";
import './Card.scss'

const Card = ({item}) => {
    //console.log(item);
    return (
        
        <Link className="link" to={`/product/${item.id}`}>
            <div className="card">
               
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>${item.price}</p>
            </div>
        </Link>
    );
    }

    export default Card;
