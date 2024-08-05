import React from 'react'
import {VscChevronRight} from 'react-icons/vsc'
import {VscChevronLeft} from 'react-icons/vsc'


const BtnSlider = ({direction="", moveSlide=null, colorText="purple", colorBorder="rosado-dark-2"}) =>{

    const btnNext = <div onClick={moveSlide} className={`pointer ${colorText} btnArrow flex border-${colorBorder}`}>
        <VscChevronRight/>
    </div>
   
    
    const btnPrev = <div onClick={moveSlide} className={`pointer ${colorText} btnArrow flex border-${colorBorder}`}>
        <VscChevronLeft />
    </div>

   

    const result =  direction === "next" ?  btnNext :  btnPrev


    return (result)
       
}

export default BtnSlider