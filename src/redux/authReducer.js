import { createSlice } from "@reduxjs/toolkit";
import {createAsyncThunk} from '@reduxjs/toolkit';

export const authRequest = createAsyncThunk('user/authRequest', async (username, password) => {
    try {
        const res = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
});

const initialState = {
    user: {},
    token: null,
    isAuthenticated: false,
   
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        
        setUser: (state, action) => {
            
                state.user = action.payload.user;
        },

        setToken: (state, action) => {
                 
                state.token = action.payload.token;
  
        },

        setAuth: (state, action) => {
            state.isAuthenticated = action.payload;
        },

        logOut: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        }
    },
    extraReducers: {
        [authRequest.fulfilled]: (state, action) => {
            if (action.payload) {
                state.isAuthenticated = true;
                state.token = action.payload.token;
            }
        }
    }
});

export const { setUser, setToken, setAuth, logOut } = authSlice.actions;

export default authSlice.reducer;

export const currentUser = (state) => state.auth.user;
export const currentToken = (state) => state.auth.token;
export const isAuthenticated = (state) => state.auth.isAuthenticated;