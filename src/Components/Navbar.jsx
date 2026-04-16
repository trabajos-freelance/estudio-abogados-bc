import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className="nav-left">
          <img className="nav-logo" src={logo} alt="Logo" />
        </div>


        <div className="nav-center">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/nuestra-vision">Nuestra Visión</Link></li>
            <li><Link to="/area-practica">Área de Práctica</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>


        <div className="nav-right">
          <button className="nav-button">WHATSAPP</button>
        </div>
    </nav>
  )
}

export default Navbar