import React from "react";
import './Cart.scss'
//import { useEffect, useState } from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "../redux/cartReducer";
//import CartCheckout from "./CartCheckout";
import { useNavigate } from "react-router-dom";



const Cart = () => {
    
    const products = useSelector((state) => state.cart.products);
    //const [productsData, setProductsData] = useState([]);
    //const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    /*   
    useEffect(() => {
        products?.map( async (item) => {
            const res = await fetch(`https://fakestoreapi.com/products/${item.productId}`)
            const data = await res.json();
            setProductsData((prev) => [...prev, {
                productId: item.productId,
                title: data.title,
                price: data.price,
                image: data.image,
                quantity: item.quantity
            }]);
        });
    }, [products]);   

    useEffect(() => {
        productsData?.forEach((item) => {
            setTotalPrice((prev) => prev + item.price * item.quantity);
        }
        );
    }, [productsData]);
    */

    const totalPrice = products.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleClick = (e) => {
        e.preventDefault();
       navigate('/checkout');
    };

    
    return (
        <div className="cart">
          <h1>Cart</h1>
          {products?.map((item) => (
              <div className="cart-item" key={item.productId}>
                    <img src={item.image} alt={item.title} />
                    <div className="content">
                        <h5>{item.title}</h5>
                        <p>${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        
                        <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeFromCart(item.productId))}/>
                    </div>
                </div>
                ))}
            <div className="total">
                <span>Total: ${totalPrice}</span>
            </div>   
            <button onClick={handleClick}>Checkout</button>
            <span className = 'reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
            
        </div>
    );
}

export default Cart;
