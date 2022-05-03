import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: []
    },
    reducers: {
        push: (state, action) => {
            const newProduct = action.payload
            state.product.push(newProduct)
        }
    }
})

export const { push } = productSlice.actions
export default productSlice.reducer