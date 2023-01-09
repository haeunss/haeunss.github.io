import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/All_prod.css'

const Maxbone = (props) => {

  let navigate = useNavigate()
  var [maxbone, setMAxBone] = useState(props.all.filter(function(data){ return data.brandnum === 2}))

  return(
      <>
        <div className='all_product_wrap'>
           <div className='all_product'>
              <h1>맥스본</h1>
              { maxbone.map((a, i)=>{
                   return<All maxbone={maxbone[i]} i={i} key={i} navigate={navigate} />
              })}
           </div>
        </div>
      </>
  );
}

function All(props){
  let navigate = useNavigate();
  return(
    <div className='outdoor_indoor' onClick={()=>{navigate('/detail/'+props.maxbone.id)}}>
      <p className='all_product_img_wrap'><img src={props.maxbone.image} width='295' height='381' alt='맥스본 상품 이미지' /></p>
      <h4>{props.maxbone.title}</h4>
      <p className="all_product_price">{props.maxbone.price}원</p>
    </div>
  )
}

export default Maxbone;