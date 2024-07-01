import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../interface/status";

export const fetchCategories =  createAsyncThunk("fetchCategories", async (dispatch) => {        
    const response = await fetch('https://fakestoreapi.com/products/categories');
    //const response = await fetch('https://fakestoreapi.com/products');
    const data = response.json();
    
    //dispatch(setProducts(data))
    //dispatch(setStatus(STATUS.IDLE))
    return data;
    //dispatch(setProducts(data));
    //dispatch(setStatus(STATUS.IDLE));

})
const categoryList = createSlice({
    name: "category",
    initialState: {
        data: [],
        status: STATUS.LOADING,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.status = STATUS.LOADING
            state.data = []
        })
        builder.addCase(fetchCategories.fulfilled, (state,action) => {
            state.status = STATUS.IDLE
            state.data = action.payload
        })
        builder.addCase(fetchCategories.rejected, (state,action) => {
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

export const {setCategories,setStatus}=categoryList.actions
export default categoryList.reducer;


