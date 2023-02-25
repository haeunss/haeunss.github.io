import '../styles/Cart.css';
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addAmount, removeAmount, removeItem, removeItemAll } from './Store.js'

const Cart = (props) => {
    
    let state = useSelector((state)=> state)
    let dispatch = useDispatch()

    let total = [0];
    for(let a=0; a<state.cart.length; a++){
        //주문 품목 개수
        var num = state.cart.length;
        //전체 상품 금액
        let b = state.cart[a].price * state.cart[a].count;
        total.push(b);
        const add = total => total.reduce((a, b) => a + b, 0);
        var sum = add(total);
    }

    return(
        <div className='cart_wrap'>
            <h1>장바구니</h1>
            <table className='cart_table'>
                <thead>
                    <tr>
                        <th colSpan="6">판매자 설정에 따라, 개별 배송되는 상품이 있습니다.</th>
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
                                <td>
                                    <button
                                     onClick={()=>{
                                        dispatch(removeItem(state.cart[i].id))
                                    }}>X</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
                {/* <tfoot>
                    <tr className='cart_price_ko'>
                        <td colSpan="6">선택 상품 금액 + 총 배송비 = 주문금액</td>
                    </tr>
                    <tr className='cart_price_num'>
                        <td colSpan="6">전체 상품 금액 = {sum}원</td>
                    </tr>
                </tfoot> */}
            </table>
            <div>
                <h5>배송비</h5>
                <p>기본 배송료 : 무료 (총 상품금액 50,000원 이상 무료)</p>
                <br/>
                <h5>전체 상품 금액</h5>
                <p>{sum}원</p>
                <br/>
                <h5>결제 예상 금액 내역</h5>
                <p>주문 품목 개수 : {num}개</p>
                <p>선택 금액 합 : 원</p>
                <p>할인 금액 합 : -0원</p>
                <p>배송비 무료</p>
            </div>
            <div className='cart_btn'>
                <button>선택상품 삭제하기</button>
                <button onClick={()=>{
                        dispatch(removeItemAll())
                }}>전체상품 삭제하기</button>
                <button>선택상품 구매하기</button>
                <button>전체상품 구매하기</button>
            </div>
        </div>
    )
}

export default Cart;