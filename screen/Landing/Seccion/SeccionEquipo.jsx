import React from 'react'

import CardStack from '../../../components/common/CardStack'
import Tittle from '../../../components/common/Tittle'


const SeccionEquipo = () => {

  const listaMiembros = [
    {
      cargo: "Comercial / MKT",
      nombre: "Martha Lucila",
      description: "Licenciada en Comunicación por la Universidad de Piura, especialista en Marketing Estratégico y Análisis del Consumidor. Con la capacidad de crear y analizar; aprender constantemente sobre el caótico mundo del Marketing y las necesidades que el consumidor moderno requiere, mediante la escucha y comunicación activa. Soy una eterna aprendiz.",
      img: "martha.jpg"
    },
    {
      cargo: "Gerente de Producto / Co Founder",
      nombre: "Federico Quicaño",
      description: "Con más de 10 años trabajando en la industria del real state automatizando edificios en la empresa CONAUTI. Es especialista en desarrollo de electrónica y de software. Con especialización en iot, web y apps.",
      img: "federico.jpg"
    },
    {
      cargo: "Advisor / Co Founder",
      nombre: "Marcella Arteaga",
      description: "Marcella es administradora de empresas con mención en Negocios Internacionales de la Universidad del Pacífico y cuenta con una maestría en Agribusiness en Texas A&M University con más de 9 años de experiencia en áreas comerciales, áreas de trading de commodities, consumo masivo y recursos humanos.",
      img: "marcella.jpg"
    },
    {
      cargo: "Desarrollador de Aplicación",
      nombre: "Alberto Delgado",
      description: "Apasionado por el Desarrollo de Software, la resolución de problemas y la creación de soluciones eficaces. Con experiencia en el desarrollo de Anunalog. Es especialista de desarrollo de software.",
      img: "alberto.jpg"
    },
    {
      cargo: "Desarrollo de Software",
      nombre: "Jean De La Cruz",
      description: "Desarrollo de software, con experiencia en etapas de Diseño, Desarrollo y mantenimiento de sistemas de software, creativo con capacidad de adaptación a los cambios continuos. Capaz de autogestión eficaz en proyectos independientes. Buenas habilidades de colaboración dentro de un equipo productivo",
      img: "yo.jpg"
    }
  ]

  return (
    <div id="ourTeam" className='flex flex-column relative'>
      <div className="container flex flex-column">
        <Tittle addClass={"label-title"}
          titulo={"Nuestro Equipo"}
          resaltar={"Equipo"}
          color={"blue-dark"} color2={"palo-rosa"} />
        <div className="card-stack grid relative">
          <CardStack dataCardStack={listaMiembros} />
        </div>
      </div>
      <div className="purple-bar absolute"></div>
    </div>
  )
}

export default SeccionEquipo