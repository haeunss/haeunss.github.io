import React from 'react'
import { useParams } from 'react-router-dom';
import '../styles/Detail.css'

const Detail = (props) => {

    let {id} = useParams();
    console.log(id);
    
    return(
        <div className='detail_wrap'>
            <div className='detail_contents_wrap'>
                <div className='detail_img_wrap'>
                    <img src={process.env.PUBLIC_URL + '/images/all_product'+ id +'.jpg'} alt='상품이미지' width='295' height='381'></img>
                </div>
                <div className='detail_txt'>
                    <h1>{props.all[id].brand}</h1>
                    <p className='share'><img src={process.env.PUBLIC_URL + '/images/share.png'} width='35' height='35' /></p>
                    <h2>{props.all[id].title}</h2>
                    <p className='detail_tag'>{props.all[id].tag}</p>
                    <p className='detail_price'><span>총 물품 금액</span>{props.all[id].price}</p>
                    <button className='detail_cart'>장바구니</button>
                    <button className='detail_buy'>주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;