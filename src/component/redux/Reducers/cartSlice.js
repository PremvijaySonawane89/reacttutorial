import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../interface/status";

export const fetchCarts =  createAsyncThunk("fetchCarts", async (dispatch) => {        
    const data = await localStorage.getItem('items') == undefined ? [] : JSON.parse(localStorage.getItem('items'))
    return data;
})
const cartList = createSlice({
    name: "cartlist",
    initialState: {
        data: [],
        status: STATUS.LOADING,
        total: 0
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCarts.pending, (state, action) => {
            state.status = STATUS.LOADING
            state.data = []
            state.total = 0
        })
        builder.addCase(fetchCarts.fulfilled, (state,action) => {
            state.status = STATUS.IDLE            
            state.total= action.payload.reduce((pre,cur) => pre + (cur.price *cur.count) , 0)
            state.data = action.payload
        })
        builder.addCase(fetchCarts.rejected, (state,action) => {
            state.status = STATUS.ERROR
            state.data = []
            state.total= 0
        })
    },
});

export const {setCarts,setStatus}=cartList.actions
export default cartList.reducer;