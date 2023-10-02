import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import "./Product.scss";

import { useDispatch} from "react-redux";
import { addToCart } from "../redux/cartReducer";

const Product = () => {
    const [quantity, setQuantity] = useState(1);
    const [item, setItem] = useState({});
    const id  = useParams().id;
    //console.log(id);
    const dispatch = useDispatch();

    useEffect(() => { 
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => setItem(json));
    }, [id]);

    const handleClick = (e) => {
        e.preventDefault();
       
        dispatch(
          addToCart({
            productId: item.id,
            title: item.title,
            price: item.price,
            image: item.image,
            quantity: quantity
          }));
        
          
    }

    return (
        <div className="product">
          <div className="product-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="product-details">
            <h2>{item.title}</h2>
            <span>${item.price}</span>
            <p>{item.description}</p>
            <div className="quantity">
                <button onClick={() => setQuantity(quantity - 1)}>-</button>
                {quantity}
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
             <button className="add-to-cart" onClick={handleClick}>Add to Cart</button>
          </div>
         
        </div>
    );
    }

export default Product;
