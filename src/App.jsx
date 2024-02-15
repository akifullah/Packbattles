import React, { useEffect } from 'react'
import Header from './components/Header/Header'

import "bootstrap/dist/css/bootstrap.min.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home/Home"



const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease"
    });
  }, [])
  
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App