"use client";
import React, { useState } from "react"
import BtnSlider from "../../common/ButtonSlider"
import CardMember from "../CardMember"


const CardStack = ({ dataCardStack }) => {

    const tam = dataCardStack.length

    const scale = ((0.25 / tam))

    const [cardIndex, SetCardIndex] = useState(1)


    const nextCard = () => {
        console.log("Nextr pressed ", cardIndex)
        if (cardIndex !== 1) {
            SetCardIndex(cardIndex - 1)
        }
        else if (cardIndex === 1) {
            SetCardIndex(tam)
        }
    }



    const prevCard = () => {
        if (cardIndex < tam) {
            SetCardIndex(cardIndex + 1)
        }
        else {
            SetCardIndex(1)
        }
    }

    return (
        <>
            <div className="container-cardStack relative flex">
                {Array.from({ length: tam - 1 }).map((item, index) => {
                    return (
                        <div
                            key={"adornoCard" + index}
                            style={{
                                transform: `scale(${1 - (scale * (tam - (index + 1)))})`,
                                top: `${(-scale * 100) * (tam - (index + 1))}%`
                            }}
                            className={"card-div bg-white adorno-card absolute"}
                        >{index}</div>
                    )
                }
                )}

                {dataCardStack.map((item, index) => {

                    return (
                        <CardMember
                            key={"member" + item.nombre + index}
                            img={item.img}
                            cargo={item.cargo}
                            nombre={item.nombre}
                            description={item.description}
                            active={cardIndex === (index + 1) ? true : false}

                        />
                    )
                }
                )}
            </div>
            <div className="card-buttons flex">
                <BtnSlider moveSlide={prevCard} direction={"prev"} />
                <BtnSlider moveSlide={nextCard} direction={"next"} />
            </div>
        </>
    )
}


export default CardStack