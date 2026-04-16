import { useState } from 'react'

// Pages
import Home from './Pages/Home'
import NuestraVision from './Pages/NuestraVision'
import Contacto from './Pages/Contacto'
import AreaPractica from './Pages/AreaPractica'

// Components
import Navbar from './Components/Navbar'

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nuestra-vision' element={<NuestraVision />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/area-practica' element={<AreaPractica />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
