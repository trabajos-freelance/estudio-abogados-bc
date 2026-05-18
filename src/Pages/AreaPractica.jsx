import React from 'react'
import '../styles/areaPractica.css'

function AreaPractica() {
  const areas = [
    {
      titulo: 'PENAL',
      texto: 'Asesoramiento jurídico Integral. Defensas penales. Patrocinio de querellas. Jurisdicción Federal y Ordinaria.',
    },
    {
      titulo: 'CIVIL',
      texto: 'Derecho de responsabilidad civil por daños. Accidentes de tránsito. Mala praxis. Derechos personales. Sucesiones. Defensa al consumidor. Derechos Reales.',
    },
    {
      titulo: 'FAMILIA',
      texto: 'Resolución de conflictos en las relaciones familiares. Divorcio. Cuidado Personal de los hijos. Alimentos. Violencia Familiar y de Género.',
    },
    {
      titulo: 'CONTRATOS',
      texto: 'Redacción de Contratos Civiles y Comerciales. Ejecución de contratos. Asesoramiento a empresas y particulares.',
    },
    {
      titulo: 'LABORAL',
      texto: 'Asesoramiento de empresas y particulares. Registro Laboral. Despidos. Empleo en negro. Accidentes de trabajo.',
    },
  ]

  return (
    <section className="area-practica">
      <div className="area-container">
        <div className="area-title">
          <h2>
            ÁREAS DE PRÁCTICA
          </h2>
        </div>

        <div className="area-grid">
          {areas.map((area, index) => (
            <article className="area-card" key={index}>
              <div className="area-card-title">
                <span className="area-dot" />
                <h3>{area.titulo}</h3>
              </div>

              <p>{area.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AreaPractica