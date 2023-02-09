import '../styles/Cart.css';
import React, { useState } from 'react'
import { useSelector } from "react-redux";

function Cart(){
    // let a = useSelector((state)=> state.user )
    // console.log(a)

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
                    <tr>
                        <td>1</td>
                        <td>내용</td>
                        <td>내용</td>
                        <td>내용</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cart;