import React from 'react'
import '../styles/nuestraVision.css'
import visionImg from '../assets/nuestra-vision.jpg'

function NuestraVision() {
  return (
    <section className="vision">

      <div className="vision-top">
        <h2>NUESTRA VISIÓN</h2>

        <p>
          En ESTELA DEL PILAR BLANCO – MÓNICA S. COLOMBO y Asociados brindamos asesoramiento jurídico integral a empresas y particulares, con un profundo compromiso ético y profesional.
        </p>

        <p>
          Analizamos cada caso con rigor técnico, estudiando el marco legal vigente y los precedentes jurisprudenciales, para ofrecer soluciones estratégicas, creativas y eficaces.
        </p>

        <p>
          Acompañamos a las empresas en el desarrollo de sus objetivos, minimizando riesgos y adecuando sus actividades a las normativas comerciales, laborales, tributarias y contractuales.
        </p>

        <p>
          Asimismo, asistimos a particulares en la protección de sus derechos en el ámbito familiar, laboral y social.
        </p>
      </div>

      <div className="vision-bottom">
        <img src={visionImg} alt="Nuestra visión" />
      </div>

    </section>
  )
}

export default NuestraVision