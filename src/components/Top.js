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
            <li onClick={()=>{navigate('/top/cart')}}>장바구니</li>
            <li>마이페이지</li>
          </ul>
        </div>

        <nav className='main_navi'>
          <ul>
            <li onClick={()=>{navigate('/top/allprod')}}>전체상품</li>
            <li onClick={()=>{navigate('/top/outdoor')}}>아웃도어</li>
            <li onClick={()=>{navigate('/top/indoor')}}>인도어</li>
            <li onClick={()=>{navigate('/top/milkpepper')}}>밀크앤페퍼</li>
            <li onClick={()=>{navigate('/top/maxbone')}}>맥스본</li>
            <li onClick={()=>{navigate('/top/petsochic')}}>펫소시크</li>
            <li>묻고 답하기</li>
            <li>공지사항</li>
            <li>쇼핑스토리</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Top;