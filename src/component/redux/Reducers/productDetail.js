import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../interface/status";

export const fetchProductsByID =  createAsyncThunk("fetchProductsByID", async (dispatch) => {
    const response = await fetch('https://fakestoreapi.com/products/' + dispatch);
    //const response = await fetch('https://fakestoreapi.com/products');
    const data = response.json();
    //dispatch(setProducts(data))
    //dispatch(setStatus(STATUS.IDLE))
    //console.log(data)
    return data;
    //dispatch(setProducts(data));
    //dispatch(setStatus(STATUS.IDLE));

})
const productDetail = createSlice({
    name: "pdetail",
    initialState: {
        data: [],
        status: STATUS.LOADING,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductsByID.pending, (state, action) => {
            state.status = STATUS.LOADING
            state.data = []
        })
        builder.addCase(fetchProductsByID.fulfilled, (state,action) => {
            state.status = STATUS.IDLE
            state.data = action.payload
        })
        builder.addCase(fetchProductsByID.rejected, (state,action) => {
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

export const {setProductDetail,setStatus}=productDetail.actions
export default productDetail.reducer;


