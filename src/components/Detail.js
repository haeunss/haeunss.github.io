import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Detail.css';

const Detail = (props) => {
    
    let [alert, setAlert] = useState(true);
    
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setAlert(false)
        }, 3500)
        return()=>{
            clearTimeout(timer)
        }
    })


    let {id} = useParams();
    let find = props.all.find(function(x){
        return x.id == id
    }); // 상세페이지 오류 해결

    return(
        <div className='detail_wrap'>
            {alert===true ? ( (find.id == 1 || find.id == 6 || find.id == 8) ? (<p className='prod_notice'>현재 페이지의 상품이 5개 이하 남았습니다.<br/><span>잠시 후 안내 메세지 창이 닫힙니다.</span></p>) : null ) : null}
            <div className='detail_contents_wrap'>
                <div className='detail_img_wrap'>
                    <img src={find.image} alt='상품이미지' width='295' height='381'></img>
                </div>
                <div className='detail_txt'>
                    <h1>{find.brand}</h1>
                    <p className='share'><img src={process.env.PUBLIC_URL + '/images/share.png'} width='35' height='35' alt='공유하기사진'/></p>
                    <h2>{find.title}</h2>
                    <p className='detail_tag'>{find.tag}</p>
                    <p className='detail_price'><span>총 물품 금액</span>{find.price}원</p>
                    <button className='detail_cart' onClick={()=>{
                        
                    }}
                    >장바구니</button>
                    <button className='detail_buy'>주문하기</button>
                </div>
                <div className='detail_txt_wrap'>
                    <h1>상세정보</h1>
                    <ul>
                        <li>- 상품하자, 오배송의 경우 택배비는 무료로 반품/ 교환이 가능합니다.</li>
                        <li>- 반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내 고개센터 또는 Q&A 게시판을 통해 접수하여 주십시오.</li>
                        <li>- 상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품의 경우 택배비는 고객부담이며, 무료배송 상품인 경우에도 왕복 택배<br/>&nbsp;&nbsp;&nbsp;비가 발생합니다.</li>
                    </ul>
                    <p><img src={find.detail_txt} alt='상품 상세설명 이미지' /></p>
                </div>
            </div>
        </div>
    );
}

export default Detail;