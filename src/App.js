import React, { useEffect, useState } from "react"
import './App.css'
import './styles/Main.css'
import Banner from './components/Banner'
import Top from './components/Top'
import Footer from './components/Footer'
import Main from './components/Main'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from "./components/Detail"
import { data, data_all } from './data.js'

function App() {

  let [best] = useState(data)
  let [all] = useState(data_all)

  return (
    <div className='App'>
      <Top/>
      <Routes>
        <Route path="/" element={<><Banner /><Main best={best} all={all} /><Footer /></>} />
        <Route path="/detail/:id" element={<><Detail best={best} all={all} /><Footer /></>} />
      </Routes>
    </div>
  );
}

export default App;