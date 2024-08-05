"use client";
import React from "react";
import {BsPlusLg} from "react-icons/bs";
import {BsDashLg} from "react-icons/bs";

const ElementoPregunta = ({
    pregunta="",rpta="",
    pregOpen=false
}) =>{

    const [pregOpen_,SetPregOpen] = React.useState(pregOpen)

    const toggleBox = () =>{
        
        SetPregOpen(!pregOpen_)
    }

    const btnMas = <BsPlusLg />
    const btnMenos = <BsDashLg />
    const btnMas_Menos = <div onClick={toggleBox}  className="btnMas grid pointer">{pregOpen_?btnMenos:btnMas}</div>

    return(
        <div>
            <div className='pregunta-container grid'>
                {btnMas_Menos}
                <div className='pregunta-tittle'>{pregunta}</div>
                <div className={`pregunta-rpta ${pregOpen_?"show":"hide"}`}>{rpta}</div>
            </div>
            
        </div>
    )
}

export default ElementoPregunta