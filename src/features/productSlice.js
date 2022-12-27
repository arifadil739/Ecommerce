import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { products } from "../utils/data";


const initialState = {
    products : []
}
const fetchAllProducts = products
const productSlice = createSlice({  
    name : "products",
    initialState,
    reducers: {
        setProducts: (state , action)=>{
            state.products = action.payload
        },
        addNewProduct : (state,action)=>{
            state.products = [...state.products,action.payload]
            console.log(state.products)
        } 
    }
})
export const  {setProducts, addNewProduct} = productSlice.actions 
export default productSlice.reducer