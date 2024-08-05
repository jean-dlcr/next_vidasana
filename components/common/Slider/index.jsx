"use client";
import React from 'react';
import BtnSlider from '../ButtonSlider';

const Slider = ({
    dataSlider=null
  }) => {

    const [slideIndex, setSlideIndex] = React.useState(1)

    const nextSlide = () => {      
        if(slideIndex < dataSlider.length){
            setSlideIndex(slideIndex + 1)           
        } 
        else {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    
    return (
        <div className='slider flex flex-column'>
            <div className='slider-container flex flex-row'>
                <div className='flex'>
                    <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
                </div>
                <div className='flex slide'>
                    {dataSlider.map((obj,index)=>{
                        return(
                            <div
                            key = {"dataSlider-data"+(index+1)}
                            className={`${slideIndex === index+1 ? "slide-active active-anim flex" : "hide"}`}
                            >
                                {obj}
                            </div>
                        )
                    }                       
                    )
                    }
                </div>
                <div className='flex'> 
                    <BtnSlider moveSlide={nextSlide} direction={"next"} />
                </div>
            </div>
            
            <div className="container-dots flex">
                {Array.from({length: dataSlider.length}).map((item,index) => {          
                    return(
                        <div       
                        key={"sliderDot"+index}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index+1 ? "dot active bg-purple" : "dot"}
                        ></div>
                    )
                }                    
                )}
            </div>
            
            
        </div>
           
      )
  }
  export default Slider