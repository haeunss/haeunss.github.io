import React from 'react';
import Slider from "react-slick";
import '../styles/slick-theme.css';
import '../styles/slick.css';

const Banner = () => {
    const settings = {  
        // 슬라이드 옵션들
        arrows: false,  // 화살표 표시
        dots: true,  // 밑에 현재 페이지와 나머지 페이지 점으로 표시
        infinite: true,  // 무한 반복
        speed: 1000,  // 넘기는 속도
        slidesToShow: 1,  // 슬라이드에 보여지는 아이템 개수
        slidesToScroll: 1,  // 슬라이드 넘기는 아이템 개수
        autoplay: true,  // 자동 재생
        autoplaySpeed: 3000,  // 자동 재생 속도
    };
    return (
    	<div>
            <Slider {...settings} className='banner_wrap'>
            	<div><img src={process.env.PUBLIC_URL + '/images/banner1.jpg'} alt="배너이미지" width="1920" height="400" />배너이미지</div>
                <div><img src={process.env.PUBLIC_URL + '/images/banner2.png'} alt="배너이미지" width="1920" height="400" />배너이미지</div>
                <div><img src={process.env.PUBLIC_URL + '/images/banner3.png'} alt="배너이미지" width="1920" height="400" />배너이미지</div>
                <div><img src={process.env.PUBLIC_URL + '/images/banner4.png'} alt="배너이미지" width="1920" height="400" />배너이미지</div>
            </Slider>
        </div>
    );
}

export default Banner;