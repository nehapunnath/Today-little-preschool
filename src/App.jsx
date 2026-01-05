import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Pages/About'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>

    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
