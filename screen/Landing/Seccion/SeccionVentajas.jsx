import React from 'react'
import Image from 'next/image'
import Tittle from '../../../components/common/Tittle'

const SeccionVentajas = () => {

  return (
    <div id='benefits' className='flex flex-column'>
      <div className="container flex flex-column">
      <Tittle addClass={"label-title"}
                titulo = {"Nuestras Ventajas"}
                resaltar = {"Ventajas"}
                color={"blue-dark"} color2={"palo-rosa"}/>  
      <div className='container-two-column grid'>
        <div className='container-section-l flex flex-column'>
          <div className='label-subtitulo blue-dark'>
            Para el&nbsp;<span className='purple'>colaborador</span>
          </div>
          <div className='label-description'>
            <ul className='flex flex-column'>
              <li>Le permitimos al colaborador monitorear y controlar los indicadores que afectan su bienestar obtenidos de sus chequeos anuales de salud.</li>
              <li>Gadgets de smarthealth instalados en la empresa, de una manera simple, automatizada y rápida.</li>
              <li>La gestión se hace a través de un panel que se actualiza en tiempo real en función a sus enfermedades, actividades, sueño y alimentación.</li>
              <li>El colaborador puede participar de eventos deportivos de salud.</li>
              <li>Tener un punto {`"smart Health spot"`} dentro de la empresa donde el colaborador llegue y se mida.</li>
            </ul>
          </div>
        </div>
        <div className='container-section-r div-img relative flex flex-column'>
          <Image src={`/images/persons.png`} style={{objectFit:"contain", objectPosition:"center"}}  alt="persons" fill loading='lazy'  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
      </div>
      <div className='container-two-column grid'>
        <div className='container-section-l div-img relative flex flex-column'>
          <Image src={`/images/working.png`} style={{objectFit:"contain", objectPosition:"center"}} alt="working" fill loading='lazy' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className='container-section-r flex flex-column div-text'>
          <div className='label-subtitulo'>
            Para la&nbsp;<span className='purple'>empresa</span>
          </div>
          <div className='label-description'>
            <ul>
              <li>Le permitimos a la empresa conectar con sus colaboradores a través de una muestra tangible de que {`"me importas"`} haciendo un seguimiento de la salud y el bienestar que va más allá de lo meramente productivo.</li>
              <li>Se logra recibiendo alertas automatizadas en caso un colaborador esté fuera de su bienestar y salud.</li>
              <li>Existen servicios de consultoras para enfatizar el bienestar y salud de sus trabajadores , como terceros, sin embargo si nosotros juntamos todo en una sola plataforma, podemos tener un mayor beneficio frente a nuestros clientes.</li>
            </ul>
          </div>
        </div>
      </div>
      
      </div>
      
    </div>
  )
}

export default SeccionVentajas