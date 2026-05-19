import React from 'react'
import '../styles/contacto.css'
import logo from '../assets/logo.png'
function Contacto() {
  return (
    <section className="contacto">

      <div className="contacto-content">


        <div className="contacto-left">
          <div className="contacto-brand">
            <h1>Contactanos</h1>
            <img src={logo} alt="Logo" className="contacto-logo" />
          </div>

          <div className="contacto-info">
            <p className="contacto-info-label">Nuestra Dirección</p>
            <p>Tres Cuarto 207 — CP 100 — RIO</p>
            <p>contacto@estudiob&amp;c.com.ar</p>
            <p>WhatsApp: +54 9 11 2345-6789</p>
            <p className="contacto-horario">Lun–Vie 09:00 – 18:00</p>
          </div>
        </div>

        <div className="contacto-right">
          <p className="contacto-form-title">Formulario de Consulta</p>

          <form className="contacto-form">
            <div className="contacto-form-row">
              <div className="contacto-field">
                <label>Nombre *</label>
                <input type="text" placeholder="Tu nombre" />
              </div>
              <div className="contacto-field">
                <label>Apellido *</label>
                <input type="text" placeholder="Tu apellido" />
              </div>
            </div>

            <div className="contacto-field">
              <label>Email *</label>
              <input type="email" placeholder="tu@email.com" />
            </div>

            <div className="contacto-field">
              <label>Teléfono</label>
              <input type="tel" placeholder="+54 9 11..." />
            </div>

            <div className="contacto-field">
              <label>Mensaje *</label>
              <textarea placeholder="Describí brevemente tu consulta..." />
            </div>

            <button type="submit" className="contacto-submit">
              Enviar consulta
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contacto
