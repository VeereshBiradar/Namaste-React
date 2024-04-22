import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //we need to configure heres
    name: 'cart',
    initialState: {
        items: []
    },
    //reducer function corresponding to that action
    reducers: {
        //action is having reducer function
        //mutating or directly modying the state here
        addItem: (state, action)=> {
            //we will get the payload when we call the addItem
            state.items.push(action.payload);
        },
        removeItem: (state)=> {
            //we are just removing one item
            state.items.pop();
        },
        clearCart: (state)=> {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

//we are exporting one reducer
export default cartSlice.reducer;

//each slice is having a different reducer
//selector is nothing but a hook in the react, hooks are the normal javascript function