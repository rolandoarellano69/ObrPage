import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import IconSMedia from './shared/IconSMedia';
import LogoPeek from '../assets/images/logogtipo OBR versiones de color-03-02.png';

import { RiCloseLine, RiMenuFill } from 'react-icons/ri'

function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  }

  const handleLinkClick = () => {
    setIsMenu(false);

  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolling(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 left-0 z-30 ${scrolling ? 'bg-primary' : 'bg-black bg-opacity-30 drop-shadow-lg'}`}>
      <div className='flex items-center justify-between h-[6rem] md:h-[6rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-40'>
        <div className='hidden lg:flex items-center -translate-x-[10rem] -translate-y-1 justify-start'>
          <Link to='/'>
            <img className='h-14' src={LogoPeek} alt="Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden items-center justify-start">
          <Link to='/'>
            <img className='h-14' src={LogoPeek} alt="Logo" />
          </Link>
        </div>
        <div className='hidden md:flex items-center -translate-x-[4rem] justify-center flex-1 space-x-10 text-gray-100'>
          <Link className="transition hover:text-gray-300/75" to="/">
            Inicio
          </Link>
          <Link className="transition hover:text-gray-300/75" to="/nosotros">
            Nosotros
          </Link>
          <Link className="transition hover:text-gray-300/75" to="/desarrollo">
            Desarrollo
          </Link>
          <Link className="transition hover:text-gray-300/75" to="/blog">
            Blog
          </Link>
          <Link className="transition hover:text-gray-300/75" to="/contacto">
            Contacto
          </Link>
        </div>

        <div className='hidden lg:flex items-center justify-end'>
          <IconSMedia />
        </div>

        <button
          className='inline-flex items-center justify-end p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden'
          onClick={toggleMenu}
        >
          {isMenu ? <RiCloseLine className="text-xl" /> : <RiMenuFill className="text-xl" />}
        </button>
      </div>
      {isMenu && (
        <div className={`md:hidden flex flex-col items-center justify-center space-y-8 ${scrolling ? 'bg-primary' : 'bg-black bg-opacity-10 drop-shadow-lg'} text-white py-10`}>
          <Link className="transition hover:text-gray-700/75" to="/" onClick={handleLinkClick}>
            Inicio
          </Link>
          <Link className="transition hover:text-gray-700/75" to="/nosotros" onClick={handleLinkClick}>
            Nosotros
          </Link>
          <Link className="transition hover:text-gray-700/75" to="/desarrollo" onClick={handleLinkClick}>
            Desarrollo
          </Link>
          <Link className="transition hover:text-gray-700/75" to="/blog" onClick={handleLinkClick}>
            Blog
          </Link>
          <Link className="transition hover:text-gray-700/75" to="/contacto" onClick={handleLinkClick}>
            Contacto
          </Link>

        </div>
      )}

    </header>
  );
}


export default Header;
