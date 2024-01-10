import React from 'react'

import Header from './components/Header'
import Home from './components/home/Home'
import Nosotros from './components/Nosotros/Nosotros'
import Contacto from './components/Contacto'
import Desarrollo from './components/Desarrollo/Desarrollo'
import Footer from './components/Footer/Footer'
import Blog from './components/Blog'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='app '>
        <Header />
        <Routes>
          <Route path='/' extact element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/desarrollo' element={<Desarrollo />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

