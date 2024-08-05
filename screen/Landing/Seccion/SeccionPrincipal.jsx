"use client";
import React from 'react'

import Slider from "../../../components/common/Slider";
import ElementoSlider  from "../../../components/common/ElementoSlider" 
import Button from "../../../components/common/Button"

const SeccionPrincipal = () => {
  const data = [
  
      <ElementoSlider 
      titulo={"¿Y si nos empezamos a cuidar?"}
      resaltar={"cuidar"}
      texto={"En VidaSana nos preocupamos por el cuidado de tu salud, tu bienestar y tu felicidad en el mundo laboral."}
      button={<Button label="Probar aplicación" color="blue-dark-3 white" />}
      img = {"principal-1.jpeg"}
    />
    ,
      <ElementoSlider 
      titulo={"¿Y si nos empezamos a cuidar?"}
      resaltar={"cuidar"}
      texto={"En VidaSana nos preocupamos por el cuidado de tu salud, tu bienestar y tu felicidad en el mundo laboral."}
      button={<Button label="Probar aplicación" color="blue-dark-3 white" />}
      img = {"principal-2.jpeg"}
    />,
    <ElementoSlider 
      titulo={"¿Y si nos empezamos a cuidar?"}
      resaltar={"cuidar"}
      texto={"En VidaSana nos preocupamos por el cuidado de tu salud, tu bienestar y tu felicidad en el mundo laboral."}
      button={<Button label="Probar aplicación" color="blue-dark-3 white" />}
      img = {"principal-3.jpeg"}
  />,
    
  ]

  return (
    <div className='container'>
      <Slider dataSlider={data}/>      
    </div>
  )
}

export default SeccionPrincipal