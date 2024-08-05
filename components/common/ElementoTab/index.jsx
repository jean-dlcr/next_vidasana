import React from 'react'
import Image from 'next/image'

const ElementoTab = ({titulo="",parrafo="",list=null,imgPos=0,img=null}) => {

  //imgPos = 0 -> <contenido/><img/>
  //imgPos = 1 -> <img/><contenido/>

const no_img = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

const img_src = img?`/images/${img}`:no_img;

  const printLista = 
    list? 
    <ul className='flex flex-column'>
      {list.map((item,index)=>{
        
        return(<li key={titulo+"list"+item.uid+index}>{item.linea}</li>)
      })
      }
    </ul>
    :null
   

  const contenido = 
    <div className={`${imgPos==0?"container-section-l":"container-section-r"} flex flex-column tab-text`}>
          <p dangerouslySetInnerHTML={{__html:parrafo}}>
          </p>
          {printLista}
              
        </div>
  

  const imagen = 
    <div className={`tab-img relative flex flex-column ${imgPos==0?"container-section-r":"container-section-l"}`}>
        <Image src={img_src} alt={`${img?img:"no_image"}`} style={{ objectFit: "contain", objectPosition: "center" }} fill loading='lazy' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>  
        </div>
  

  const two_columns = () =>{
    if(imgPos==0){
      return(
        <>{contenido}{imagen}</>
      )
    }else{
      return(<>{imagen}{contenido}</>)
    }
  }

    return (
        <div className='container-two-column grid'>
          {two_columns()}   
      </div>
    )


}

export default ElementoTab