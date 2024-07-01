import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reducers/productList";
import categoryReducer from "./Reducers/categorySlice";
import modalReducer from "./Reducers/modalSlice";
import cartReducer from "./Reducers/cartSlice";
import productDetail from "./Reducers/productDetail";

export const store = configureStore({
    reducer: {
        product: productReducer,
        pdetail: productDetail,
        category: categoryReducer,
        modal: modalReducer,
        cartlist: cartReducer
    }
});

