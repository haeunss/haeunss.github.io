import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return(
        <div className='footer_wrap'>
            <p className='footer_img_wrap'><img src='https://github.com/haeunss/haeunss.github.io/blob/main/public/images/footer.PNG?raw=true' width='1899' height='139' alt='하단이미지'/>하단이미지</p>
            <p className='dog'><img src={process.env.PUBLIC_URL + '/images/dog.png'} width='360' height='100' alt='강아지이미지' />강아지이미지</p>
            <div>
                <div>
                    <address>
                        <p>주식회사 델핀 서울특별시 용산구 우사단로2길 1, 3층</p>
                        <p>대표 : 신승호 </p>
                        <p>사업자 등록번호 : 113-86-83830</p>
                        <p>04413 서울특별시 용산구 우사단로2길 1 (보광동)</p>
                        <p>TEL : 02-2678-3096~7</p>
                        <p>FAX : 02-2678-3099</p>
                        <p>e-mail : delfin@delfin.co.kr</p>
                        <p>입점문의 : <span>입점문의하기</span></p>
                        <p className='copyright'>Copyright 2022. Cotieshop All rights reserved.</p>
                    </address>
                    <ul className='sns_wrap'>
                        <li><img src={'/images/sns_face.png'} width='60' height='60' alt='페이스북'/>페이스북</li>
                        <li><img src={'/images/sns_insta.png'} width='60' height='60' alt='인스타그램'/>인스타그램</li>
                        <li><img src={'/images/sns_kakao.png'} width='60' height='60' alt='카카오톡'/>카카오톡</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Footer;