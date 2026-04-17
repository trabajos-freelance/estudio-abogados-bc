import React from 'react'
import '../styles/home.css'
import bg from '../assets/home.jpg' // poné tu imagen acá

function Home() {
  return (
    <section className="home">
      <img src={bg} alt="home" className="home-bg" />

      <div className="home-overlay" />

      <div className="home-content">
        <h1>
          ESTUDIO DE <br />
          <span>ABOGADOS</span>
        </h1>

        <p>
          Asesoramiento Jurídico Integral. <br />
          Especialistas en Derecho Penal.
        </p>
      </div>
    </section>
  )
}

export default Home