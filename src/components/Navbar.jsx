import React from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import Cart from './Cart';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import {useSelector} from 'react-redux';
import { useState } from "react";

import { useEffect } from 'react';
import { isAuthenticated, currentUser} from '../redux/authReducer';

const Navbar = () => {
    const [open , setOpen] = useState(false);
    const [total, setTotal] = useState(0);
   
   
    
    const products = useSelector((state) => state.cart.products);
    const isAuth = useSelector(isAuthenticated);
    const user = useSelector(currentUser);
    const [categories, setCategories] = useState([]);
   

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            });
    }, []);
   
    useEffect(() => {

       const count = products.reduce((acc, item) => acc + item.quantity, 0);
         setTotal(count);
    } , [products]);
    
  
    
    return (
        <div className="navbar">
            <div className='wrapper'>
                <div className='left'>
                    <Link className='link' to='/'>FAKESHOP</Link>
                    
                </div>
                <div className='center'>
                   {categories.map((category, i) => (
                   <Link to={`/products/${category}`} key={i} > {category} </Link>
                  ))}
                </div>
                <div className='right'>
                    {user? <span className="userName">{user.name.firstname}</span> : null}
                    <Link className='link' to='/Admin'>Admin</Link>
                    {isAuth?  <Link className='link' to='/Logout'>Logout</Link>: <Link className='link' to='/Login'>Login</Link> }
                    
                    
                    
                    <div className='cartIcon' onClick={()=>setOpen(!open)}>
                         <ShoppingCartOutlinedIcon/>
                         <span className='cartCount'>{total}</span>
                         
                    </div>
                </div>
            </div>

        {open && <Cart/>}
        
        </div>
    );
    }

export default Navbar;