import {configureStore, createSlice} from '@reduxjs/toolkit'
import user from '../store/userSlice.js'
import { useNavigate } from 'react-router-dom';


let cart = createSlice({
    name: 'cart',
    initialState:[
        
    ],
    reducers:{
        addAmount(state,action){
            let num = state.findIndex((a) => a.id === action.payload);
            state[num].count++;
        },
        //3 체크(js) 필요 (선택삭제 만들기, 선택상품 가격만들기)
        removeAmount(state,action){
            let num = state.findIndex((a) => a.id == action.payload);
                state[num].count--;
            //상품수가 0이 되면 삭제
            if(state[num].count < 1){
                if (window.confirm("정말 삭제합니까?")) {
                    alert("삭제되었습니다.");
                    state.splice(num,1);
                } else {
                    alert("취소합니다.");
                    state[num].count++;
                }
            };
        },
        addItem(state,action){
            let num = state.findIndex((a) => a.id == action.payload.id);
            //상품 중복 추가시
            if (num >= 0) {
                state[num].count++;
            } else if (num == -1)  {
                state.push(action.payload);
                //물건 추가하고 장바구니로 이동 구현하기
                // if (window.confirm("장바구니에 상품을 담았습니다. \n이동하시겠습니까?")) {
                //     return(
                //         navigate('/top/cart')
                //     )
                // }else{
                //     return null;
                // }
            }
        },
        removeItem(state,action){
            //상품 개별 삭제
            var list = state.filter((a) => a.id !== action.payload);
            return list;
        },
        removeItemAll(state,action){
            //전체 상품 삭제
            state.splice(0, state.length);
        },
    },
})

export let { addAmount, removeAmount, addItem, removeItem, removeItemAll } = cart.actions

export default configureStore({
    reducer:{
        user: user.reducer,
        cart: cart.reducer
    }
})