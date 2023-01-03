import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Detail from './Detail';

const Main = (props) => {

    let navigate = useNavigate()

    // onClick={()=>{navigate('/detail')}}
    return(
      <>
        <div className='best'>
           <h1>월간베스트</h1>
           <div className="best_product_all">
             { props.best.map((a, i)=>{
               return<Best best={props.best[i]} i={i} key={i} detail={Detail}/>
             })}
           </div>
        </div> 
      </>
      
    );
}

function Best(props){
    let navigate = useNavigate();
    
    return( 
      <div className='best_product' onClick={()=>{navigate('/detail/'+props.i)}}>   
        <p className='best_product_img'><img src={'/images/best' + (props.i+1) + '.png'} width='296' height='296' alt='베스트 상품 이미지' /></p>
        <h4>{props.best.title}</h4>
        <p className="best_product_price">{props.best.price}</p>
        <p className='best_product_bm'><img src={'/images/bookmark' + (props.i+1) + '.png'} width='55' height='55' alt='베스트 상품 순서 마크' /></p>
      </div>
    )
}

export default Main;