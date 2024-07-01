import { createSlice } from "@reduxjs/toolkit";

export const fetchProducts = () => {
    return async function fetchProductThunk(dispatch){
        try{
            const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
            const data = await response.json();
            dispatch(setCart(data));
        } catch(error){
        }
    }
}