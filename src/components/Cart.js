import '../styles/Cart.css';
import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addAmount, removeAmount, removeItem, removeItemAll } from './Store.js'

const Cart = (props) => {
    
    let state = useSelector((state)=> state)
    let dispatch = useDispatch()

    let total = [0];
    for(let a=0; a<state.cart.length; a++){
        //배송비
        var deliveryFee = 3000;
        //전체 상품 금액
        let b = state.cart[a].price * state.cart[a].count;
        total.push(b);
        const add = total => total.reduce((a, b) => a + b, 0);
        var product = add(total);
        var sum = add(total);
        //배송비 무료
        if(sum<50000){
            sum = sum + deliveryFee;
            deliveryFee = 3000;
        }else{
            sum = sum;
            deliveryFee = 0;
        }
        // console.log(state.cart[a].count);
    }

    //!!!!!품목 삭제시도 반영해야함
    //!!!!!체크 후 수량 변경시 반영되지 않음
    // 체크박스 전체선택, 일부선택
    const [isAllChecked, setAllChecked] = useState(false);
    const [checkedState, setCheckedState] = useState(
        new Array(state.cart.length).fill(false)
    ); //false라는 초기값이 있는 배열 / 선택하면 true로 변경됨

    const [checkedTotal, setCheckedTotal] = useState(0);

    const handleAllCheck = () => {
        setAllChecked((prev) => !prev);
        let array = new Array(state.cart.length).fill(!isAllChecked);
        setCheckedState(array);

        //전체선택하면 선택상품 금액에 반영되도록
        const allCheckedTotalPrice = checkedState.reduce(
            (sum, currentState, index) => {
              if (currentState === !true) {
                  return sum + (state.cart[index].price * state.cart[index].count);
              }
              return sum;
            }, 0);
        setCheckedTotal(allCheckedTotalPrice);
      };
      
    const handleMonoCheck = (position) => {
      //array메서드를 사용하여 배열을 반복(map)
      const updatedCheckedState = checkedState.map((item, index) =>
      //전달된 매개변수의 값(position)이 현재 값(index)과 일치하면 해당 값을 뒤집음
      //그러면 선택시 true로 변환되고 미선택시 false로 변환
      //현재값(index)와 매개변수(position)가 일치하지 않으면 값을 뒤집지 않고그대로 반환
        index === position ? !item : item
      );
      //setCheckedState에 넣어줌
      setCheckedState(updatedCheckedState);
      //reduce콜백함수
      //모든 숫자의 합은 reduce를 사용
      //예를 들어 [1,2,3,4,5] 배열을 reduce함수로 전체 합을 구할 때

      //const sum = numbers.reduce(function(accumulator, number) {
      //   return accumulator + number; 
      // }, 0);

      //1. 0+1=1 (여기서 0은 이전 배열 (없으니까 0) + 처음 실행한거 (1) = 1)
      //2. 1+2=3 (위와 동일 이전배열 (1) + 두번째 실행값 (2) = 3)
      //3. 3+3=6 (위와 동일 이전배열 (3) + 두번째 실행값 (3) = 6) 
      //이런식으로 모든 배열이 완료될 때까지 진행됨
      //이때 *2하면 배열이 [2,4,6,8,10]으로 바뀌고
      // }, 10); 하면 최종값 30에 10 더하게 됨 결과는 40

      const checkedLength = updatedCheckedState.reduce((sum, currentState) => {
        if (currentState === true) {
          return sum + 1;
        }
        return sum;
      }, 0);
      setAllChecked(checkedLength === updatedCheckedState.length);

      const totalPrice = updatedCheckedState.reduce(
        (sum, currentState, index) => {
          if (currentState === true) {
            return sum + (state.cart[index].price * state.cart[index].count);
        }
        return sum;
    },
    0
    );
    setCheckedTotal(totalPrice);
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
                        state.cart.map(({a,price},i)=>
                            <tr key={i}>
                                <td>
                                    <input 
                                        type="checkbox"
                                        //상태에 해당하는 checked 값이 있는 속성을 추가
                                        //각 확인란은 선택된 상태의 올바른 값을 갖게 됨
                                        checked={checkedState[i]}
                                        //선택 / 선택해제된 확인란을 메소드에 onChange 전달함.
                                        onChange={(e) => {
                                            handleMonoCheck(i);
                                        }}
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
                <p>(상품금액) + (배송비) = (전체금액)</p>
                <p>{product}원 + {deliveryFee}원 = {sum}원</p>
                <br/>
                <h5>결제 예상 금액 내역</h5>
                {/* <p>주문 품목 개수 : {num}개</p> */}
                <p>선택한 상품 금액 : {checkedTotal}원</p>
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