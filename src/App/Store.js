import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../feautures/products/ProductSlice'
import cartReducer from '../feautures/cart/CartSlice'

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        product: productReducer,
    },
});