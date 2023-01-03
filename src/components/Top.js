import React, { Component } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import '../styles/Top.css'
import AllProd from './AllProd'
import Cart from './Cart'
import Footer from './Footer'


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
            <li onClick={()=>{navigate('/top/login')}}>로그인</li>
            <li onClick={()=>{navigate('/top/join')}}>회원가입</li>
            <li onClick={()=>{navigate('/top/cart')}}>장바구니</li>
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

        <Routes>
          <Route path="/top">
            <Route path="login" element={<>로그인<Footer /></>} />
            <Route path="join" element={<>회원가입<Footer /></>} />
            <Route path="allprod" element={<><AllProd /><Footer /></>} />
            <Route path="cart" element={<><Cart /><Footer /></>} />
          </Route>
        </Routes>
      </div>
    </header>
  );

}

export default Top;