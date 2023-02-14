import {configureStore, createSlice} from '@reduxjs/toolkit'
import user from '../store/userSlice.js'

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
        },
        //임시로 팝업만 설정해둠
        //장바구니 추가(data.js), 삭제, 체크(js) 필요
        removeAmount(state,action){
            let num = state.findIndex((a) => a.id === action.payload)
            state[num].count--
            if(state[num].count<0){
                alert('삭제하시겠습니까?')
                state[num].count = 0
            }
        }
    }
})

export let { addAmount,removeAmount } = cart.actions

export default configureStore({
    reducer:{
        user: user.reducer,
        cart: cart.reducer
    }
})