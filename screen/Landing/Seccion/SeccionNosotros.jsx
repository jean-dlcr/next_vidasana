
import React from 'react'
import Tab from '../../../components/common/Tab'
import Tittle from '../../../components/common/Tittle'
import ElementoTab from '../../../components/common/ElementoTab'

const SeccionNosotros = () => {
  
  const tabElements = [
   {
    titulo:"Misión",
    content:<ElementoTab              
              parrafo="Lograr que los peruanos que alimentan el mundo encuentren una motivación por vivir una vida más saludable cada día, todos los días.<br />
              Lo hacemos uniendo el poder del hardware y software ofreciendo una herramienta digital que:"
              list={[
                {linea:"Monitoree sus principales indicadores de salud y alimentación."},
                {linea:"Cree espacios de motivación a través de actividades de wellness."}
              ]}
              imgPos={1}
              img="mision.png"    
            />
   },
   {
    titulo:"Visión",
    content:<ElementoTab
              parrafo="Ser la conexión que ayude a los colaboradores del Perú a mejorar su bienestar físico, mental y emocional en el 2023."   
            />
   },
   {
    titulo:"Valores",
    content:<ElementoTab
              parrafo="Valores de VidaSana."
              list={[                
                {linea:"Empatía."},
                {linea:"Colaboración."},
                {linea:"Iniciativa."},
                {linea:"Responsabilidad."},
                {linea:"Compromiso."}
              ]}
              imgPos={1}
            />
   }
  
    
  ]

  return (
    <div id="aboutUs" className='flex flex-column'>
      <div className='container flex flex-column'>
      <Tittle addClass={"label-title"} 
                titulo = {"Sobre Nosotros"}
                resaltar = {"Nosotros"}
                color={"blue-dark"} color2={"palo-rosa"}/>  
    
    <Tab tabElements={tabElements}/>
      </div>
      
    </div>
  )
}

export default SeccionNosotros