import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: []
    },
    reducers: {
        push: (state, action) => {
            const id = action.payload.id
            //Ham find no tra ve 1 object
            const item = state.product.find((item) => item.id === id)

            if (item) {
                let { quantity } = item

                quantity += 1

                // state.product.map(value => value.id === id ?
                //     { ...value, quantity: quantity } : value)

                // var arrObj = { ...state.product }

                // let { quantity } = item

                // quantity += 1

                // arrObj[id].quantity = quantity

                // return { arrObj }

                // return { ...action.payload, quantity }

                // let jasper = Object.assign({}, state.product);  // creating copy of state variable jasper
                // jasper.name = 'someothername';                     // update the name property, assign a new value                 
                // return { jasper };
            } else {
                const newProduct = action.payload
                state.product.push({ ...newProduct, "quantity": "1" })
            }
        },
        remove: (state, action) => {
            const id = action.payload.id

            const newList = state.product.filter(item => item.id !== id)
            // Construct a new result array immutably and return it
            state.product = newList
        }
    }
})
export const { push, remove } = productSlice.actions
export default productSlice.reducer