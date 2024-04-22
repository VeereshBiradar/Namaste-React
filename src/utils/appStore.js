import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

//give the store for our application, next we need to add the slice
const appStore = configureStore({
    //big reducer is containing small reducer
    reducer: {
        cart: cartReducer
    }
});

export default appStore;