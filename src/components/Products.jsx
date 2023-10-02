import React from "react";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import './Home.scss';
import Card from './Card';




const Products = () => {
    const [items, setItems] = useState([]);
    const category = useParams().id;

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((json) => setItems(json));
    }, [category]);

    return (
       
        <div className="item-list">
        <div className="left">
          
        </div>
        <div className="right">
  
           {items.map((item) => <Card item={item} key={item.id} />)}
        </div>
  
       
      </div>
       
    );
    }

export default Products;
