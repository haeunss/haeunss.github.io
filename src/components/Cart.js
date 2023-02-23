import '../styles/Cart.css';
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addAmount, removeAmount } from './Store.js'

const Cart = (props) => {
    
    let state = useSelector((state)=> state)
    let dispatch = useDispatch()

    return(
        <div className='cart_wrap'>
            <h1>장바구니</h1>
            <table className='cart_table'>
                <thead>
                    <tr>
                        <th colspan="6">판매자 설정에 따라, 개별 배송되는 상품이 있습니다.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a,i)=>
                            <tr key={i}>
                                <td>
                                    <input type="checkbox" name="chk" value="chk" />
                                </td>
                                <td><img src={state.cart[i].image} alt='상품이미지' width='155' height='200' /></td>
                                <td>{ state.cart[i].brand }<br/>{ state.cart[i].name }</td>
                                <td>{ state.cart[i].price }원</td>
                                {/* <td>{ state.cart[i].count }</td> */}
                                <td>
                                    <div>
                                        <button onClick={()=>{
                                            dispatch(removeAmount(state.cart[i].id))
                                        }}>-</button>
                                        <p>{ state.cart[i].count }</p>
                                        <button onClick={()=>{
                                            dispatch(addAmount(state.cart[i].id))
                                        }}>+</button>
                                    </div>
                                </td>
                                <td>X</td>
                            </tr>
                        )
                    }
                </tbody>
                <tfoot>
                    <tr className='cart_price_ko'>
                        <td colspan="6">선택 상품 금액 + 총 배송비 = 주문금액</td>
                    </tr>
                    <tr className='cart_price_num'>
                        <td colspan="6">선택 상품 금액 원 + 0 원 = 전채금액 원</td>
                    </tr>
                </tfoot>
            </table>
            <div className='cart_btn'>
                <button>선택상품 삭제하기</button>
                <button>선택상품 구매하기</button>
                <button>전체상품 구매하기</button>
            </div>
        </div>
    )
}

export default Cart;