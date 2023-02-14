import '../styles/Cart.css';
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { changeName, increase } from '../store/userSlice.js'
import { addAmount, removeAmount } from './Store.js'

function Cart(){
    let state = useSelector((state)=> state)
    let dispatch = useDispatch()

    return(
        <div>
            {/* { state.user.name } { state.user.age }의 장바구니
            <button onClick={()=>{
                dispatch(changeName())
                dispatch(increase(10))
            }}>꺄</button> */}

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a,i)=>
                            <tr key={i}>
                                <td>{ state.cart[i].id }</td>
                                <td>{ state.cart[i].name }</td>
                                <td>{ state.cart[i].count }</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(addAmount(state.cart[i].id))
                                    }}>+</button>
                                    <button onClick={()=>{
                                        dispatch(removeAmount(state.cart[i].id))
                                    }}>-</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Cart;