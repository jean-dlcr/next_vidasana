import React from 'react'
// import { AiFillLinkedin } from 'react-icons/ai'

import Image from 'next/image'

const CardMember = ({
  cargo,
  nombre,
  description,
  active,
  img=""
  }) => {
  
  return (
    <div className={'cardMember-container relative ' + (active?"show active-anim":"hide")}>
        <div className={'cardMember-imgProfile absolute '}>
          <div className='circle-img relative'>
          <Image src={`/images/equipo/${img}`} style={{ objectFit: "cover" , objectPosition:"top"}}  fill quality="100" alt={nombre} loading='lazy' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          </div>
        </div>
        
        <div className='card-div flex flex-column bg-white'>
        <div className="cardMember-main-info">            
            <div className='cardMember-nombre blue-dark'>{nombre}</div>
            <div className='cardMember-cargo purple'>{cargo}</div>
        </div>
        <div className='cardMember-description flex blue-dark'>{description}</div>
        </div>       
    </div>
  )
}

export default CardMember