import {configureStore, createSlice} from '@reduxjs/toolkit'
import user from '../store/userSlice.js'

let stock = createSlice({
    name: 'stock',
    initialState: [10, 11, 12],
})

let cart = createSlice({
    name: 'cart',
    initialState:[
        {id : 0, name : 'White and Black', count : 2},
        {id : 1, name : 'Grey Yordan', count : 1},
        {id : 2, name : 'Lonely RM', count : 4},
        {id : 3, name : 'Harry Potter', count : 2}
    ],
    reducers:{
        addAmount(state,action){
            let num = state.findIndex((a) => a.id === action.payload)
            state[num].count++
        }
    }
})

export let { addAmount } = cart.actions

export default configureStore({
    reducer:{
        user: user.reducer,
        stock: stock.reducer,
        cart: cart.reducer
    }
})