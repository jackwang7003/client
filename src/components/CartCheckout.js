import React from "react";
import { resetCart } from "../redux/cartReducer";
import { useDispatch} from "react-redux";

const CartCheckout = () => {
    const dispatch = useDispatch();
    dispatch(resetCart());

    return (
        <div >
        <h1>You order is pending</h1>
        <h2>Thank you for shopping with us!</h2>
        

    
        </div>
    );
    };

export default CartCheckout;