import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/All_prod.css'

const MilkPepper = (props) => {

  let navigate = useNavigate()
  var [milkpepper, setMilkPepper] = useState(props.all.filter(function(data){ return data.brandnum === 1}))

  return(
      <>
        <div className='all_product_wrap'>
           <div className='all_product'>
              <h1>밀크앤페퍼</h1>
              { milkpepper.map((a, i)=>{
                   return<All milkpepper={milkpepper[i]} i={i} key={i} navigate={navigate} />
              })}
           </div>
        </div>
      </>
  );
}

function All(props){
  let navigate = useNavigate();
  return(
    <div className='outdoor_indoor' onClick={()=>{navigate('/detail/'+props.milkpepper.id)}}>
      <p className='all_product_img_wrap'><img src={props.milkpepper.image} width='295' height='381' alt='밀크앤페퍼 상품 이미지' /></p>
      <h4>{props.milkpepper.title}</h4>
      <p className="all_product_price">{props.milkpepper.price}원</p>
    </div>
  )
}

export default MilkPepper;