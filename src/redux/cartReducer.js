
import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';


const initialState = {
    products: [],
   
};

export const fetchItemsInCartByUserId = createAsyncThunk('cart/fetchItemsInCartByUserId', async (userId) => {
    const allItems = [];
    const res = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
    const carts = await res.json();

    for (let i = 0; i < carts.length; i++) {
        const items = carts[i].products;
        for (let i = 0; i < items.length; i++) {
            const res2 = await fetch(`https://fakestoreapi.com/products/${items[i].productId}`);
            const product = await res2.json();
            const itemInCart = {
                productId: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: items[i].quantity
            };

            allItems.push(itemInCart);
        }
    }
    //console.log(allItems);
    /*

    items.foreach( async (item) => {
        const res2 = await fetch(`https://fakestoreapi.com/products/${item.productId}`);
        const product = await res2.json();
        const itemInCart = {
            productId: product.id,
            title: product.title, 
            price: product.price,
            image: product.image,
            quantity: item.quantity
        };
        allItems.append(itemInCart);
    });

    /*
    const carts = await res.json();
    console.log(carts);
    carts.foreach((cart) => {
        const items = cart.products;
        items.foreach( async (item) => {
            const res2 = await fetch(`https://fakestoreapi.com/products/${item.productId}`);
            const product = await res2.json();
            const itemInCart = {
                productId: product.id,
                title: product.title, 
                price: product.price,
                image: product.image,
                quantity: item.quantity
            };
            allItems.append(itemInCart);

        });

        
    });
    */
        return allItems;
       
    });

    



export const fetchCartByUserId = createAsyncThunk('cart/fetchCartByUserId', async (userId) => {
    const res = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
    const data = await res.json();
    const productsId = data[0].products;
        
    return productsId;
    
});

export const fetchProductById = createAsyncThunk('cart/fetchProductById', async (productId) => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await res.json();
    return data;
});

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.productId === action.payload.productId);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
              // console.log(action.payload.productId);
             
                state.products.push(action.payload);  
            
            }
             //console.log(state.products);
        },

        



        removeFromCart: (state, action) => {
            state.products = state.products.filter((item) => item.productId !== action.payload);
        },
        resetCart: (state) => {
            state.products = [];
        }
    },

    extraReducers: (build) =>{
        build.addCase(fetchItemsInCartByUserId.fulfilled, (state, action) => {
            for (let i = 0; i < action.payload.length; i++) {
                const item = state.products.find((item) => item.productId === action.payload[i].productId);
                if (item) {
                    item.quantity += action.payload[i].quantity;
                } else {
                    state.products.push(action.payload[i]);
                }
            }
           
        });
        
    }

    
});

export const {addToCart, removeFromCart, resetCart} = cartSlice.actions;

export default cartSlice.reducer;