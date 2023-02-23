import {configureStore, createSlice} from '@reduxjs/toolkit'
import user from '../store/userSlice.js'

let cart = createSlice({
    name: 'cart',
    initialState:[

    ],
    reducers:{
        addAmount(state,action){
            let num = state.findIndex((a) => a.id === action.payload);
            state[num].count++;
        },
        //팝업만들기 
        //1 추가시 이미지 뜨도록
        //3 체크(js) 필요 (선택삭제, 전체삭제 만들기)
        //4 디자인 수정
        removeAmount(state,action){
            let num = state.findIndex((a) => a.id == action.payload);
            state[num].count--;
            //상품수가 0이 되면 삭제
            if(state[num].count < 1){
                state.splice(num,1)
            }
        },
        addItem(state,action){
            let num = state.findIndex((a) => a.id == action.payload.id);
            //상품 중복 추가시
            if (num >= 0) {
                state[num].count++;
            } else if (num == -1)  {
                state.push(action.payload);
            }
        }, 
    }
})

export let { addAmount,removeAmount,addItem } = cart.actions

export default configureStore({
    reducer:{
        user: user.reducer,
        cart: cart.reducer
    }
})