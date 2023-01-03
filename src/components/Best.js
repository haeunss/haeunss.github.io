import React, { Component } from 'react';

class Best extends Component {
    render(){
        return(
          <div className='best'>
            <h1>월간베스트</h1>
            <div className='all_1'>
              <img src={process.env.PUBLIC_URL + '/images/lead.jpg'} width='296' height='296'></img>
              <h4>상품명</h4>
              <p>상품설명</p>
            </div>
            <div className='all_2'>
              <img src={process.env.PUBLIC_URL + '/images/clothes_7.png'} width='296' height='296'></img>
              <h4>상품명</h4>
              <p>상품설명</p>
            </div>
            <div className='all_3'>
              <img src={process.env.PUBLIC_URL + '/images/clothes_8.png'} width='296' height='296'></img>
              <h4>상품명</h4>
              <p>상품설명</p>
            </div>
            <div className='all_4'>
              <img src={process.env.PUBLIC_URL + '/images/toy4.jpg'} width='296' height='296'></img>
              <h4>상품명</h4>
              <p>상품설명</p>
            </div>
          </div>
        );
    }
}

export default Best;