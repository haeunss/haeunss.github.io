import React, { useState } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { data_all } from '../data.js'
import '../styles/All_prod.css'
import styled from 'styled-components'

styled.button`
  background : yellow;
  color : black;
  padding : 10px;
`

const AllProd = () => {
  let [all] = useState(data_all)
  let navigate = useNavigate()

  return(
      <>
        <div className='all_product_wrap'>
           <div className='all_product'>
              <h1>전체상품</h1>
              <div className='button_wrap'>
                <button>이름순</button>
                <button>가격순</button>
              </div>
              { all.map((a, i)=>{
                   return<All all={all[i]} i={i} key={i} navigate={navigate} />
              })}
           </div>
        </div>
      </>
  );
}

function All(props){
  let navigate = useNavigate();
  return(
    <div className='product_wrap' onClick={()=>{navigate('/detail/'+props.i)}}>
      <p className='all_product_img_wrap'><img src={'/images/all_product' + (props.i) + '.jpg'} width='295' height='381' alt='베스트 상품 이미지' /></p>
      <h4>{props.all.title}</h4>
      <p className="all_product_price">{props.all.price}</p>
    </div>
  )
}

export default AllProd;