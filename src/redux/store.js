import { configureStore } from "@reduxjs/toolkit";

import productModalSlice   from "./product-modal/productModalSlice";

import cartItemsSlide from "./shoping-cart/cartItemsSlide"

export const store = configureStore({
    reducer: {
        productModal: productModalSlice,
        cartItems: cartItemsSlide
    }
})