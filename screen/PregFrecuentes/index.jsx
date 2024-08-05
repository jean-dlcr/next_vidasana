import ElementoPregunta from "../../components/common/ElementoPregunta"
import Tittle from "../../components/common/Tittle"

const PregFrecuentes_ = ({
    listPreguntas
}) =>{

    listPreguntas =[
        {
          pregunta:"¿En que consiste VidaSana?",
          rpta:"Nuestra app consiste en el monitoreo de tu salud, por medio de indicadores y tu propia información lo cual, esperaremos, que por medio de hábitos saludables y demás herramientas que te ofrecemos, puedas mejorar tu salud y estilo de vida."
        },
        {
            pregunta:"¿La app es gratuita?",
            rpta:"Sí, la descarga no tiene costo alguno. "
        },
        {
            pregunta:"¿Puede ser descargada con iOs y android? ",
            rpta:"Sí, la aplicación es compatible para ambos sistemas operativos."
        },
        {
            pregunta:"¿Puedo usarla sin registrarme?",
            rpta: "Al ser una app de monitoreo de información requiere de un usuario y contraseña; por ello, para empezar a usar la app deberán registrarse."
        },
        {
            pregunta:"¿Está disponible en todos los países?",
            rpta: "Sí, la App es mundial."
        },
    ]

    return(
        
            <div className="container flex flex-column">
                
                <Tittle addClass={"label-title"} 
                titulo = {"Preguntas Frecuentes"}
                resaltar = {"Frecuentes"}
                color={"color-purple"} color2={"palo-rosa"}/>  

                <div className="preguntas-container grid">
                   {listPreguntas.map((item,index)=>{
                       return(
                           <div>
                               <ElementoPregunta
                                    key={"preg" + item + index}
                                    pregunta={item.pregunta}
                                    rpta = {item.rpta}
                               />
                           </div>
                       )
                   })}
                </div>
        
            </div>
        
    )
}
export default PregFrecuentes_