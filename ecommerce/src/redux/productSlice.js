import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    products: [],
    error: null,
    status:'idle'
}
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () =>
{
    const response = await axios.get("https://dummyjson.com/products");
    return response.data
})
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
    {
        builder
            .addCase(fetchProducts.pending, (state) =>
            {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) =>
            {
                state.status = 'success',
                    state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) =>
            {
                state.status = 'failed',
                    state.error = action.error.message
            });
    },
});
export default productSlice.reducer



