import React from 'react'
import Header from './components/Header/Header'

import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"

const App = () => {
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