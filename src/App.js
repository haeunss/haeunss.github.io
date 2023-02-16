import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllProd from './components/AllProd'
import Banner from './components/Banner'
import Detail from "./components/Detail"
import Footer from './components/Footer'
import Main from './components/Main'
import ScrollBtn from './components/ScrollBtn'
import ScrollToTop from './components/ScrollToTop'
import Top from './components/Top'
import InDoor from './components/InDoor'
import OutDoor from './components/OutDoor'
import MilkPepper from './components/MilkPepper'
import MaxBone from './components/MaxBone'
import PetSoChic from './components/PetSoChic'
import Cart from './components/Cart'
import { data_all } from './data.js'
import './styles/Modal.css'

function App() {

  let [all,setAll] = useState(data_all)
  const [modal, setModal] = useState(true);

  return (
    <div className='App'>
      <ScrollBtn />
      <ScrollToTop />
       {modal == true ? <Modal modal={modal} setModal={setModal}/> : null}
      <Top/>
      <Routes>
        <Route path="/" element={<><Banner /><Main all={all} setAll={setAll} /></>} />
        <Route path="/detail/:id" element={<Detail all={all} setAll={setAll} />} />
        <Route path="/top/cart" element={<Cart />} />
        <Route path="/top/allprod" element={<AllProd all={all} setAll={setAll} />} /> 
        <Route path="/top/outdoor" element={<OutDoor all={all} setAll={setAll} />} /> 
        <Route path="/top/indoor" element={<InDoor all={all} setAll={setAll} />} /> 
        <Route path="/top/milkpepper" element={<MilkPepper all={all} setAll={setAll} />} /> 
        <Route path="/top/maxbone" element={<MaxBone all={all} setAll={setAll} />} /> 
        <Route path="/top/petsochic" element={<PetSoChic all={all} setAll={setAll} />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

function Modal(props){
  return(
      <div className='notice'>
          알려드립니다.
          본 사이트는 상업적 목적이 아닌
          개인 포트폴리오 용도로 만들어졌습니다.
          홈페이지의 일부내용과 이미지는
          저작권이 따로 있음을 밝혀드립니다.
          <button onClick={() => {props.setModal(!props.modal)}} >[ 닫기 ]</button>
      </div>
  )
}

export default App;