import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../interface/status";

export const fetchProducts =  createAsyncThunk("fetchProducts", async (dispatch) => {        
    const response = await fetch('https://fakestoreapi.com/products');
    const data = response.json();
    //dispatch(setProducts(data))
    //dispatch(setStatus(STATUS.IDLE))
    return data;
    //dispatch(setProducts(data));
    //dispatch(setStatus(STATUS.IDLE));

})
const productList = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUS.LOADING,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = STATUS.LOADING
            state.data = []
        })
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            state.status = STATUS.IDLE
            state.data = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state,action) => {
            state.status = STATUS.ERROR
            state.data = []
        })
        /*setProducts(state, action){
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload;
        },*/
    },
});

export const {setProducts,setStatus}=productList.actions
export default productList.reducer;


