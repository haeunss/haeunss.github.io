import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Top.css';


const Top = () => {
  
  let navigate = useNavigate();

  return(
    <header className='top'>
      <div>
        <div className='top_wrap'>
          <h1 onClick={()=>{navigate('/')}}>
              <img src={process.env.PUBLIC_URL + '/images/main.jpg'} alt='cotie shop 메인로고' width='152' height='80'/>
              cotieshop 메인로고
          </h1>
          <ul className='quick'>
            <li>로그인</li>
            <li>회원가입</li>
            <li>장바구니</li>
            <li>마이페이지</li>
          </ul>
        </div>

        <nav className='main_navi'>
          <ul>
            <li onClick={()=>{navigate('/top/allprod')}}>전체상품</li>
            <li>베스트</li>
            <li>아웃도어</li>
            <li>인도어</li>
            <li>고양이</li>
            <li>불독전용</li>
            <li>브랜드별</li>
            <li>공지사항</li>
            <li>리뷰이벤트</li>
            <li>쇼핑스토리</li>
          </ul>
        </nav>
      </div>
    </header>
  );

}

export default Top;