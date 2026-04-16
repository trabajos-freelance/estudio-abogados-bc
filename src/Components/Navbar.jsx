import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

import logo from '../assets/logo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navbarRef = useRef(null)

  const playMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <nav className='navbar' ref={navbarRef}>
        <div className="nav-left">
          <img className="nav-logo" src={logo} alt="Logo" />
          <button
            className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}
            onClick={playMenu}
            type="button"
            aria-label="Abrir o cerrar menu"
            aria-expanded={isMenuOpen}
          >
            <span className="nav-menu-line"></span>
            <span className="nav-menu-line"></span>
            <span className="nav-menu-line"></span>
          </button>
        </div>


        <div className={`nav-center ${isMenuOpen ? 'nav-center-active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/nuestra-vision" onClick={closeMenu}>Nuestra Visión</Link></li>
            <li><Link to="/area-practica" onClick={closeMenu}>Área de Práctica</Link></li>
            <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
          </ul>
        </div>


        <div className="nav-right">
          <button className="nav-button">WHATSAPP</button>
        </div>
    </nav>
  )
}

export default Navbar