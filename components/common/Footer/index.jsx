import React from 'react'
import LinkComponent from '../Link';
import Logo from "../Logo";
import { AiOutlineWhatsApp, AiFillTwitterCircle, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const links = [
  {
    group: 'Plataforma',
    links: [
      {
        href: '',
        label: 'Qué hacemos',
      },
      {
        href: '/',
        label: 'Probar Aplicación',
      },
      {
        href: '#contactUs',
        label: 'Únete al cambio',
      }
    ]
  },
  {
    group: 'Compañía',
    links: [
      {
        href: '/',
        label: 'Quiénes somos',
      },
      {
        href: '#aboutUs',
        label: 'Sobre nosotros',
      }
    ]
  },
  {
    group: 'Recursos',
    links: [
      {
        href: '/',
        label: 'Centro de ayuda',
      },
      {
        href: '/#aboutUs',
        label: 'Términos y condiciones',
      }
    ]
  },
  {
    group: 'Contacto',
    links: [
      {
        href: '#contactUs',
        label: 'Contáctanos',
      },
      {
        href: 'https://wa.me/message/EXI5ERNC6ERMF1',
        label: 'Hablemos por Whatsapp',
      },
      {
        href: '/preguntas_frecuentes',
        label: 'Soporte',
      }
    ]
  }
]

const GroupLink = ({ group, links }) => (
  <div className="links-group flex flex-column">
    <div className="title">
      {group}
    </div>
    <ul className='items flex flex-column'>
      {links.map((link, index) => (
        <LinkComponent key={`item-links-${index}`} {...link}/>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  return (
    <div className='footer bg-purple flex flex-column'>
      <div className='container flex'>
        <div className="left flex flex-column">
        <Logo />
        <div className="footer-redes flex">
          <a href="https://www.facebook.com">
            <AiFillFacebook />
          </a>
          <a href="https://web.whatsapp.com">
            <AiOutlineWhatsApp />
          </a>
          <a href="https://www.linkedin.com">
            <AiFillLinkedin />
          </a>

        </div>
        </div>
        
        <div className="footer-links grid">
          {
            links.map((link, index) => (
              <GroupLink key={`group-links-${index}`} {...link} />
            ))
          }
        </div>
      </div>

      <div className='footer-bottom flex flex-column bg-purple-light'>
        <label>© {new Date().getFullYear()} VidaSana. Todos los derechos reservados.</label>
      </div>
    </div>
  )
}

export default Footer