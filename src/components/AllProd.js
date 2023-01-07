import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/All_prod.css'

const AllProd = (props) => {

  let navigate = useNavigate()

  return(
      <>
        <div className='all_product_wrap'>
           <div className='all_product'>
              <h1>전체상품</h1>
              <div className='button_wrap'>
                <button onClick={()=>{
                  let prod_a = [...props.all];
                  prod_a.sort(function(a, b) {
                    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0 
                  });
                  props.setAll(prod_a);
                }}>이름순</button>
                <button onClick={()=>{
                  let prod_b = [...props.all];
                  prod_b.sort(function(a, b) {
                    return b.price - a.price;
                  });
                  props.setAll(prod_b);
                }}
                >높은가격순</button>
                <button onClick={()=>{
                  let prod_c = [...props.all];
                  prod_c.sort(function(a, b) {
                    return a.price - b.price;
                  });
                  props.setAll(prod_c);
                }}
                >낮은가격순</button>
              </div>
              { props.all.map((a, i)=>{
                   return<All all={props.all[i]} i={i} key={i} navigate={navigate} />
              })}
           </div>
        </div>
      </>
  );
}

function All(props){
  let navigate = useNavigate();
  return(
    <div className='product_wrap' onClick={()=>{navigate('/detail/'+props.all.id)}}>
      <p className='all_product_img_wrap'><img src={props.all.image} width='295' height='381' alt='베스트 상품 이미지' /></p>
      <h4>{props.all.title}</h4>
      <p className="all_product_price">{props.all.price}원</p>
    </div>
  )
}

export default AllProd;