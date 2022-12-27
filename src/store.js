import { configureStore } from "@reduxjs/toolkit";
import CartItems from "./components/CartItems";
import productReducer from './features/productSlice' 
import cartReducer from './features/cartSlice'
const store = configureStore({
    reducer:{
        products : productReducer,
        cartProducts : cartReducer
        
    }
})
export default store