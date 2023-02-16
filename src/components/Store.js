import {configureStore, createSlice} from '@reduxjs/toolkit'
import user from '../store/userSlice.js'

let cart = createSlice({
    name: 'cart',
    initialState:[

    ],
    reducers:{
        addAmount(state,action){
            let num = state.findIndex((a) => a.id === action.payload)
            state[num].count++
        },
        //임시로 팝업만 설정해둠
        //1 추가시 이미지 뜨도록
        //2 추가시 중복 추가 해결
        //3 삭제, 체크(js) 필요
        //4 디자인 수정
        removeAmount(state,action){
            let num = state.findIndex((a) => a.id === action.payload)
            state[num].count--
            if(state[num].count<0){
                alert('삭제하시겠습니까?')
                state[num].count = 0
            }
        },
        addItem(state,action){
            state.push(action.payload)
        }
    }
})

export let { addAmount,removeAmount,addItem } = cart.actions

export default configureStore({
    reducer:{
        user: user.reducer,
        cart: cart.reducer
    }
})