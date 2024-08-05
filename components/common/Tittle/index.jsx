import React from 'react'

const Tittle = ({
  titulo = "",
  resaltar = "",
  color = "",
  color2 = "",
  addClass = ""
}) => {

  const resaltado =`<span class=${color2}>${resaltar}</span>`
  const resultado = titulo.replace(resaltar,resaltado)

  return (
    <div className={`${addClass} ${color}`}
      dangerouslySetInnerHTML={{__html:resultado}}> 
    </div>
  )
}
export default Tittle