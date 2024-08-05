"use client";
import React from 'react'
import Button from '../Button';
import LinkComponent from '../Link';
import { MdMenu } from 'react-icons/md';
import Sidebar from '../Sidebar';

import Logo from "../Logo";

const NavBar = () => {

  const navDatos = [
    {//1er elemento
      titulo:"¿Qué Hacemos?",
      href:"/"
    },
    {//2do elemento
      titulo:"¿Quiénes Somos?",
      href:"/quienes_somos"
    },
    {//3er elemento
      titulo:"Preguntas Frecuentes",
      href:"/preguntas_frecuentes"
    }
  ]
  const linkComponents = 
    navDatos.map((item,index)=>{              
      return(
        <LinkComponent key ={"nav-data"+index}  label={item.titulo} href={item.href} />
      )
    })
  
    const goToContact = (e) => {e.preventDefault(); window.location.replace('#contactUs');}
   
  const navButton = <Button label="Únete al cambio" color="blue-dark-3" addClass='white' onClick={goToContact} />


  return (
    <header>
      <nav className='navbar-container flex'>
      <div className="navbar-content container flex flex-row">
        <Logo />
        <div className="toggleHide">          
          <div className="navbar-links">
            <ul className='flex flex-row'>
                {linkComponents}
            </ul>
          </div>
        </div>
        <div className="toggleHide">
          {navButton}
        </div>
        <div className="navbar-content-mobile">
          <label htmlFor="toggleSidebar"><MdMenu size={50} className="pointer color-"/></label>
        </div>
      </div>
      {/* isOpen={isOpenSidebar} toggle={toggleSidebar} */}
      <input type="checkbox" id="toggleSidebar" className='hide'/>
      <Sidebar style={{display:"none", zIndex:10}}>
        {linkComponents}
        <br/>
        {navButton}
      </Sidebar>
    </nav>
    </header>
    
  )
}

export default NavBar