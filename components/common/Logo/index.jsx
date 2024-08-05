import React from 'react'

const Logo = ({className=""}) => {
  return (
    <div className='logo no-select pointer flex flex-column'>
      <label className="logo-title blue-dark-3">
        VidaSana
      </label>
      <label className="logo-description palo-rosa">
        SALUD Y BIENESTAR
      </label>
    </div>
  )
}

export default Logo