import React from "react"
import Image from "next/image";
import Tittle from "../Tittle";

const ElementoSlider = ({ titulo = "", resaltar = "", texto = "", button = null, img = null }) => {

const no_img = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
const img_src= img?`/images/landing/${img}`:no_img;

  return (
    <div className='container-two-column grid'>
      <div className="container-section-l flex flex-column">
        <Tittle addClass={"label-title"}
        titulo={titulo}
        resaltar={resaltar}
        color={"blue-dark-3"} color2={"palo-rosa"} />
        <p>
          {texto}
        </p>
        <div className='btn-center mt-2'>
          {button}
        </div></div>
      <div className='container-section-r flex flex-column'>
        <div className="circle-img">
          <Image src={img_src} alt="slider_img" style={{ objectFit: "cover", objectPosition: "top" }} fill priority quality="100" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
      </div>
    </div>
  )
}

export default ElementoSlider