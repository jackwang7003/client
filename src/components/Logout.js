
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/authReducer";
import { resetCart } from "../redux/cartReducer";

import {useLocation, useNavigate} from 'react-router-dom';
import styled from "styled-components";

const Logout = () => {
    
   const dispatch = useDispatch();
   const location = useLocation();
   const navigate = useNavigate();


   const handleLogout = (e) => {
         e.preventDefault();
       dispatch(logOut());
       dispatch(resetCart());
        navigate('/');
    }

    const handleCancel = (e) => {
        e.preventDefault();
        const from = location.state || '/';
        navigate(from);
    }

    const Button = styled.button`
    background: #f2f2f2;
    border-radius: 3px;
    border: 2px solid #f2f2f2;
    color: black;
    margin: 0 1em;
    padding: 0.25em 1em;
    `;

    const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    `;

    const Wrapper = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center;
   
    `;



    return (
        <Container>
            <h1>Logout</h1>
            <Wrapper>
                
                <Button onClick={handleLogout}>Yes</Button>
                <Button onClick={handleCancel}>No</Button>
            </Wrapper>
        </Container>
            



    );
};

export default Logout;

