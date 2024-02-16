import React, { useEffect } from 'react'
import Header from './components/Header/Header'

import "bootstrap/dist/css/bootstrap.min.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home/Home"
import Packs from './pages/Packs/Packs';
import Pack from './pages/Pack/Pack';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';
import Upgrade from './pages/Upgrade/Upgrade';



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
        <Route path="/packs" element={<Packs/>}/>
        <Route path="/pack" element={<Pack/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/upgrade" element={<Upgrade/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App