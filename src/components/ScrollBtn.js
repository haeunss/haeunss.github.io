import React from 'react';
import styled from 'styled-components';

let ScrollWrap = styled.div`
    position: fixed;
    right: 12%;
    bottom: 5%;
    z-index: 1;
`
let ScrollTop = styled.p`
    outline: none;
    cursor: pointer;
    border: none;
    font-size : 0;
`


const ScrollBtn = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
        <ScrollWrap>
            <ScrollTop onClick={scrollToTop}>
                <img src={process.env.PUBLIC_URL + '/images/arrow.png'} alt='위로 향하는 화살표 이미지' width='50' height='50'/>
                위로 향하는 화살표 이미지
            </ScrollTop>
        </ScrollWrap>
    )

}

export default ScrollBtn;