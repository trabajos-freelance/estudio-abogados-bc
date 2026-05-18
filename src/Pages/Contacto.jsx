import React from 'react'
import '../styles/contacto.css'
import contactoBg from '../assets/contacto.png'

function Contacto() {
  return (
    <section className="contacto">
      <img src={contactoBg} alt="Contacto" className="contacto-bg" />
      <div className="contacto-layer" />

      <div className="contacto-content">
        <div className="contacto-top">
          <div className="contacto-brand">
            <h1>Contactanos</h1>

            <h2>
              Estela del Pilar Blanco <br />
              Mónica S. Colombo
            </h2>

            <div className="contacto-asociados">
              <span />
              <p>&amp; Asociados</p>
              <span />
            </div>
          </div>

          <div className="contacto-direccion">
            <h3>Nuestra Dirección</h3>

            <p>
              Tres Cuarto 207 - CP 100 - RIO <br />
              Email: 123@gmail.com <br />
              Tel/Whatsapp: +54 9 11 2345 6789
            </p>
          </div>
        </div>

        <div className="contacto-form-area">
          <p>Por consultar generales, por favor completa el siguiente formulario.</p>

          <form className="contacto-form">
            <div className="contacto-inputs">
              <input type="text" placeholder="Nombre *" />
              <input type="email" placeholder="Email *" />
              <input type="text" placeholder="Asunto" />
            </div>

            <textarea placeholder="Mensaje" />

            <button type="submit" className="contacto-submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacto