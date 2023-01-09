import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/All_prod.css'

const OutDoor = (props) => {

  let navigate = useNavigate()
  var [outdoorlist, setOutdoorList] = useState(props.all.filter(function(data){ return data.name === 1}))

  return(
      <>
        <div className='all_product_wrap'>
           <div className='all_product'>
              <h1>아웃도어</h1>
              { outdoorlist.map((a, i)=>{
                   return<All outdoorlist={outdoorlist[i]} i={i} key={i} navigate={navigate} />
              })}
           </div>
        </div>
      </>
  );
}

function All(props){
  let navigate = useNavigate();
  return(
    <div className='outdoor_indoor' onClick={()=>{navigate('/detail/'+props.outdoorlist.id)}}>
      <p className='all_product_img_wrap'><img src={props.outdoorlist.image} width='295' height='381' alt='아웃도어 상품 이미지' /></p>
      <h4>{props.outdoorlist.title}</h4>
      <p className="all_product_price">{props.outdoorlist.price}원</p>
    </div>
  )
}

export default OutDoor;