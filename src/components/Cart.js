import '../styles/Cart.css';
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./Store.js"

function Cart(){
    let cart = useSelector((state)=> state.cart)
    let user = useSelector((state)=> state.user)
    let dispatch = useDispatch()
    // console.log(cart)

    return(
        <div>

            { user }의 장바구니

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
                        cart.map((a,i)=>
                            <tr key={i}>
                                <td>{ cart[i].id }</td>
                                <td>{ cart[i].name }</td>
                                <td>{ cart[i].count }</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(changeName())
                                    }}>+</button>
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