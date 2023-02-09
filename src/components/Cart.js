import '../styles/Cart.css';
import React, { useState } from 'react'
import { useSelector } from "react-redux";

function Cart(){
    let cart = useSelector((state)=> state.cart)
    console.log(cart)

    return(
        <div>
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
                                <td>블라블라</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Cart;