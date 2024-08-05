import React from 'react'
import SeccionPrincipal from "./Seccion/SeccionPrincipal"
import SeccionNosotros from "./Seccion/SeccionNosotros"
import SeccionEquipo from "./Seccion/SeccionEquipo"
import SeccionContactanos from "./Seccion/SeccionContactanos"
import SeccionVentajas from './Seccion/SeccionVentajas'

const Landing = () => {
  return (
    <main className="landing-container flex flex-column">
      <SeccionPrincipal />
      <SeccionContactanos />
      <SeccionNosotros />  
      <SeccionVentajas/>
      <SeccionEquipo />
    </main>
  )
}

export default Landing