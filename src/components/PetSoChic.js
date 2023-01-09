import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/All_prod.css'

const PetSoChic = (props) => {

  let navigate = useNavigate()
  var [petsochic, setPetSoChic] = useState(props.all.filter(function(data){ return data.brandnum === 3}))

  return(
      <>
        <div className='all_product_wrap'>
           <div className='all_product'>
              <h1>펫소시크</h1>
              { petsochic.map((a, i)=>{
                   return<All petsochic={petsochic[i]} i={i} key={i} navigate={navigate} />
              })}
           </div>
        </div>
      </>
  );
}

function All(props){
  let navigate = useNavigate();
  return(
    <div className='outdoor_indoor' onClick={()=>{navigate('/detail/'+props.petsochic.id)}}>
      <p className='all_product_img_wrap'><img src={props.petsochic.image} width='295' height='381' alt='펫소시크 상품 이미지' /></p>
      <h4>{props.petsochic.title}</h4>
      <p className="all_product_price">{props.petsochic.price}원</p>
    </div>
  )
}

export default PetSoChic;