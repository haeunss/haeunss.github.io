import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/All_prod.css'

const InDoor = (props) => {

  let navigate = useNavigate()
  var [indoorlist, setIndoorList] = useState(props.all.filter(function(data){ return data.name === 2}))

  return(
      <>
        <div className='all_product_wrap'>
           <div className='all_product'>
              <h1>인도어</h1>
              { indoorlist.map((a, i)=>{
                   return<All indoorlist={indoorlist[i]} i={i} key={i} navigate={navigate} />
              })}
           </div>
        </div>
      </>
  );
}

function All(props){
  let navigate = useNavigate();
  return(
    <div className='outdoor_indoor' onClick={()=>{navigate('/detail/'+props.indoorlist.id)}}>
      <p className='all_product_img_wrap'><img src={props.indoorlist.image} width='295' height='381' alt='인도어 상품 이미지' /></p>
      <h4>{props.indoorlist.title}</h4>
      <p className="all_product_price">{props.indoorlist.price}원</p>
    </div>
  )
}

export default InDoor;