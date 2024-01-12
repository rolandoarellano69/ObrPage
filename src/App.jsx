
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/home/Home'
import Nosotros from './components/Nosotros/Nosotros'
import Contacto from './components/Contacto'
import Desarrollo from './components/Desarrollo/Desarrollo'
import Footer from './components/Footer/Footer'
import Blog from './components/Blog/Blog'
import BlogPost1 from './components/shared/BlogPost1'
import BlogPost2 from './components/shared/BlogPost2'
import BlogPost3 from './components/shared/BlogPost3'
import AvisoPrivacidad from './components/AvisoPrivacidad'
import NoFound from './components/NoFound'


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
          <Route path='/blog/post-1' element={<BlogPost1 />} />
          <Route path='/blog/post-2' element={<BlogPost2 />} />
          <Route path='/blog/post-3' element={<BlogPost3 />} />
          <Route path='/Aviso-de-privacidad' element={<AvisoPrivacidad />} />
          <Route path='*' element={<NoFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

