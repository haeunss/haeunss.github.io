import '../styles/Cart.css';
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addAmount, removeAmount, removeItem, removeItemAll } from './Store.js'
import { useState } from 'react';

const Cart = (props) => {
    
    let state = useSelector((state)=> state)
    let dispatch = useDispatch()

    let total = [0];
    for(let a=0; a<state.cart.length; a++){
        //주문 품목 개수
        var num = state.cart.length;
        //배송비
        var deliveryFee = 3000;
        //전체 상품 금액
        let b = state.cart[a].price * state.cart[a].count;
        total.push(b);
        const add = total => total.reduce((a, b) => a + b, 0);
        var sum = add(total);
        //배송비 무료
        if(sum<50000){
            sum = sum + deliveryFee;
            deliveryFee = 3000;
        }else{
            sum = sum;
            deliveryFee = 0;
        }
    }


    // 체크박스 전체선택, 일부선택
    const [isAllChecked, setAllChecked] = useState(false);
    const [checkedState, setCheckedState] = useState(new Array(state.cart.length).fill(false));

    const handleAllCheck = () => {
        setAllChecked((prev) => !prev);
        let array = new Array(state.cart.length).fill(!isAllChecked);
        setCheckedState(array);
      };
      
      const handleMonoCheck = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        const checkedLength = updatedCheckedState.reduce((sum, currentState) => {
          if (currentState === true) {
            return sum + 1;
          }
          return sum;
        }, 0);
        setAllChecked(checkedLength === updatedCheckedState.length);
      };


    return(
        <div className='cart_wrap'>
            <h1>장바구니</h1>
            <table className='cart_table'>
                <thead>
                    <tr>
                        <th colSpan="5">- 판매자 설정에 따라, 개별 배송되는 상품이 있습니다.</th>
                        <th><input 
                                type="checkbox"
                                checked={isAllChecked}
                                onChange={() => handleAllCheck()}
                            /> 전체선택
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a,i)=>
                            <tr key={i}>
                                <td>
                                    <input 
                                        type="checkbox"
                                        checked={checkedState[i]}
                                        onChange={() => handleMonoCheck(i)}
                                        value={state.cart[i]}
                                        name="inputValue"
                                    />
                                </td>
                                <td><img src={state.cart[i].image} alt='상품이미지' width='155' height='200' /></td>
                                <td>{ state.cart[i].brand }<br/>{ state.cart[i].name }</td>
                                <td>{ state.cart[i].price }원</td>
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
            </table>
            <div className='cart_info'>
                <h5>배송비</h5>
                <p>기본 배송료 : 무료 (총 상품금액 50,000원 이상 무료)</p>
                <br/>
                <h5>전체 상품 금액</h5>
                <p>{sum}원</p>
                <br/>
                <h5>결제 예상 금액 내역</h5>
                {/* <p>주문 품목 개수 : {num}개</p> */}
                <p>선택 금액 합 : 원</p>
                <p>배송비 : {deliveryFee}원</p>
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