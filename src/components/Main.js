import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Main.css'
import maindetail from './MainDetail'

const Main = (props) => {

    return(
      <>
        <div className='best'>
           <h1>월간베스트</h1>
           <div className='best_product_all'>
             { props.best.map((a, i)=>{
               return<Best best={props.best[i]} i={i} key={i} maindetail={maindetail}/>
             })}
            <p className='best_product_bm'>
              베스트 랭크 이미지
              <img className='bookmark1' src={process.env.PUBLIC_URL + '/images/bookmark1.png'} width='55' height='55' alt='베스트 상품 순서 마크1' />
              <img className='bookmark2' src={process.env.PUBLIC_URL + '/images/bookmark2.png'} width='55' height='55' alt='베스트 상품 순서 마크2' />
              <img className='bookmark3' src={process.env.PUBLIC_URL + '/images/bookmark3.png'} width='55' height='55' alt='베스트 상품 순서 마크3' />
              <img className='bookmark4' src={process.env.PUBLIC_URL + '/images/bookmark4.png'} width='55' height='55' alt='베스트 상품 순서 마크4' />
              <img className='bookmark5' src={process.env.PUBLIC_URL + '/images/bookmark5.png'} width='55' height='55' alt='베스트 상품 순서 마크5' />
              <img className='bookmark6' src={process.env.PUBLIC_URL + '/images/bookmark6.png'} width='55' height='55' alt='베스트 상품 순서 마크6' />
              <img className='bookmark7' src={process.env.PUBLIC_URL + '/images/bookmark7.png'} width='55' height='55' alt='베스트 상품 순서 마크7' />
              <img className='bookmark8 ' src={process.env.PUBLIC_URL + '/images/bookmark8.png'} width='55' height='55' alt='베스트 상품 순서 마크8' />
            </p>
           </div>
        </div> 
      </>
    );
}

function Best(props){
    let navigate = useNavigate();
    
    return( 
      <div className='best_product' onClick={()=>{navigate('/maindetail/'+props.i)}}>   
        <p className='best_product_img'>
          <img src={props.best.image} width='296' height='296' alt='베스트 상품 이미지' />베스트 상품 이미지</p>
        <h4>{props.best.title}</h4>
        <p className="best_product_price">{props.best.price}원</p>
      </div>
    )
}

export default Main;