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

  const fila1 = areas.slice(0, 3)
  const fila2 = areas.slice(3, 5)

  return (
    <div className="area-practica">

      <div className="area-header">
        <div className="area-eyebrow">
          <span className="area-eyebrow-line" />
          <span className="area-eyebrow-text">Servicios legales</span>
        </div>
        <h1 className="area-title">ÁREAS DE PRÁCTICA</h1>
      </div>

      <div className="area-row">
        {fila1.map((area, i) => (
          <div className="area-col" key={i}>
            <p className="area-col-num">0{i + 1}</p>
            <div className="area-col-title">
              <h3>{area.titulo}</h3>
            </div>
            <p className="area-col-text">{area.texto}</p>
          </div>
        ))}
      </div>

      <div className="area-row area-row-2">
        {fila2.map((area, i) => (
          <div className="area-col" key={i}>
            <p className="area-col-num">0{i + 4}</p>
            <div className="area-col-title">
              <h3>{area.titulo}</h3>
            </div>
            <p className="area-col-text">{area.texto}</p>
          </div>
        ))}
        <div className="area-col-empty" />
      </div>

    </div>
  )
}

export default AreaPractica
