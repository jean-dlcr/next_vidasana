"use client";
import React from 'react'
import Button from "../../../components/common/Button";
import InputText from '../../../components/common/Input';
import emailjs from '@emailjs/browser';

//npm install @emailjs/browser --save

const SeccionContactanos = () => {

  const no_vacio = "Campo no puede estar vacío *"

  const [nombre,SetNombre]=React.useState("")
  const [telefono,setTelefono]=React.useState("")
  const [email,SetEmail]=React.useState("")
  const [msg,SetMsg]=React.useState("")

  const[errorNombre,SetErrorNombre] = React.useState(false)
  const[errorTelefono,SetErrorTelefono] = React.useState(false)
  const[errorEmail,SetErrorEmail] = React.useState(false)
  const[errorMsg,SetErrorMsg] = React.useState(false)
  
  const SERVICE_ID = ""
  const TEMPLATE_ID = ""
  const USER_ID = ""
 
  function enviar(){    
    const templateParams = {
      nombre: nombre,
      telefono: telefono,
      email: email,
      msg: msg
    };

    emailjs.send(SERVICE_ID,TEMPLATE_ID , templateParams, USER_ID)
      .then((result) => {
          console.log("Correo enviado: " , result.text);
      }, (error) => {
          console.log(error.text);
      });
      //clear inputs
  }

  function handleChange(event) {
    switch((event.target.name).toLowerCase()){
      case 'nombre':
      SetNombre(event.target.value)
      break
      case 'telefono':
      setTelefono(event.target.value)
      break
      case 'email':
        SetEmail(event.target.value)
      break
      case 'msg':
        SetMsg(event.target.value)
      break
    }  
  }
  
  function  correoValido(){
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){            
          return false;
        }else 
          return true;   
  }

  function telefonoValido(){
    if(!telefono||telefono.length<9) return false;
    else return true;
  }

  const btnEnviarClicked=(e) => {
    e.preventDefault();
    
    !nombre? SetErrorNombre(true) : SetErrorNombre(false)
    !telefonoValido()? SetErrorTelefono(true) : SetErrorTelefono(false)
    !correoValido()?  SetErrorEmail(true) :  SetErrorEmail(false)
    !msg? SetErrorMsg(true) : SetErrorMsg(false)
        
    if(nombre&&telefono&&correoValido()&&msg){
      //enviar()
      alert(`Configure emailjs para enviar:\n
             Nombre:\t${nombre}\n
             Teléf:\t${telefono}\n
             Email:\t${email}\n
             Msg:\t${msg}`);
      // console.log("Nombre: " , nombre)
      // console.log("Telefono: " , telefono)
      // console.log("Email: " , email)
      // console.log("Msg: " , msg)
    }
  }

  return (
    
      <div id="contactUs" className='flex flex-column' >
        <div className="container  flex flex-column bg-purple white">
        <p className='label-title'>
          ¿Estás interesado por VidaSana?<br />
          Déjanos tus datos
        </p>
        <div className='form-inputs flex flex-column'>     
          <div className='first-row grid'>
          <InputText titulo="Nombres y apellidos" isError={errorNombre} error={no_vacio}  onChange={handleChange}  name="nombre" />
          <InputText titulo="Whatsapp" isError={errorTelefono} error={"Teléfono no válido *"} onChange={handleChange} type="number" name="telefono"/>
          <InputText titulo="Correo" isError={errorEmail} error="Correo no válido *" onChange={handleChange}  name="email"/>
          </div>
            
          <div className='last-row flex'>
          <InputText titulo="Estoy interesado en VidaSana porque:" isError={errorMsg} error={no_vacio} onChange={handleChange} name="msg"/>
          </div>
          
          
          <Button label="¡Enviar!" addClass={"btn-send white"} 
          onClick = {btnEnviarClicked} 
          color="pink"  />
          
        </div>
        </div>
      </div>
  )
}

export default SeccionContactanos