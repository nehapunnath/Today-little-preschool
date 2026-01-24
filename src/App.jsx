import { useState } from 'react'

import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Pages/About'
import Academics from './Pages/Academics'
import Facilities from './Pages/Facilities'
import Events from './Pages/Events'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import AdminGallery from './Pages/AdminGallery'

function App() {

  const location = useLocation();

  const hideHeaderFooterRoutes = ['/login','/admin/gallery' ];

  const shouldHide = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
    {!shouldHide && <Header />}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/academics' element={<Academics/>}/>
      <Route path='/facilities' element={<Facilities/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin/gallery' element={<AdminGallery/>}/>


    </Routes>
    {!shouldHide && <Footer />}
      
    </>
  )
}

export default App
