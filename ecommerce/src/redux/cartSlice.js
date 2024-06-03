import { createSlice} from "@reduxjs/toolkit";
const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemsToCart (state, action)
        {
            
        },
        removeItemsFromCart (state, action)
        {
            
        }
    }
})
export const { addItemsToCart, removeItemsFromCart } = cartSlice.actions;
export default cartSlice.reducer 